package devoca.member.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import devoca.member.model.service.MemberService;
import devoca.member.model.vo.Member;

@WebServlet("/member/kakaoSignUp")
public class KakaoSignUpservlet extends HttpServlet{
	
	@Override
	   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	      
	      String path = "/WEB-INF/views/member/signup.jsp";
	      req.getRequestDispatcher(path).forward(req, resp);
	   }

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		 System.out.println("servlet");

        
		String memberEmail = req.getParameter("memberEmail");
        String memberNick = req.getParameter("memberNick");
        
        
        
        //이름이 "홍길동" 식으로 넘어오기 때문에 "으로 짤라줌
        memberEmail = memberEmail.replaceAll("\"","");
        memberNick = memberNick.replaceAll("\"","");
       
        

        
        Member member = new Member();
        
        member.setMemberId(memberEmail);
        member.setMemberNick(memberNick);
        member.setMemberPw("WTnoR2ccoUDdDzXv4SZDyVDkFmA2RZE6MM0ybA7PwNYpD4uuXjUEmu+8ys69diU5j5VBQ3aCYi5M88+aRg0iAw==");
        
        System.out.println(memberEmail);
        System.out.println(memberNick);
       

        try {
        
        	MemberService service = new MemberService();
			
        	
        	int result = service.kakaoMember(member);
        	
        
			
			
			String path = null;
			
			HttpSession session = req.getSession();
			
			if(result > 0) { // 성공
				session.setAttribute("message", "deVoca에 오신걸 환영합니다");
				path = req.getContextPath() +  "/member/login";
				
			}else { // 실패
				session.setAttribute("message", "회원가입을 다시 시도 해 주세요");
				path = "signUp";
				
			}
			
			resp.sendRedirect(path);
			
				
	            
			
			
            
        }catch (Exception e) {
        	e.printStackTrace();
        }
	}
	
}