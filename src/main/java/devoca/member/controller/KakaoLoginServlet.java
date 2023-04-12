package devoca.member.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import devoca.member.model.service.MemberService;
import devoca.member.model.vo.Member;

@WebServlet("/member/kakaoLogin")
public class KakaoLoginServlet extends HttpServlet{
	
	@Override
	   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	      
	      String path = "/WEB-INF/views/member/log-in.jsp";
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
        member.setMemberPw("z4PhNX7vuL3xVChQ1m2AB9Yg5AULVxXcg/SpIdNs6c5H0NE8XYXysP+DGNKHfuwvY7kxvUdBeoGlODJ6+SfaPg==");
        
        System.out.println(memberEmail);
        System.out.println(memberNick);
        

        try {
        
        	MemberService service = new MemberService();
			
        	
        	Member loginMember = service.login(member);
        	
        	System.out.println("로그인멤버 member :" + member);
        	System.out.println("로그인멤버 :" + loginMember);
        	
			
			
			
			String path = null;
			
			HttpSession session = req.getSession();
			
			if(loginMember != null ) { // 성공
				
				// 회원 정보 Session 세팅
				session.setAttribute("loginMember", loginMember);
				
				// 특정 시간동안 요청이 없으면 세션 만료
				session.setMaxInactiveInterval(3600);   // 1시간
			
				path = req.getContextPath() + "/voca/voca-main";
				
				} else {
					session.setAttribute("message", "실패");

	            }
			
			resp.sendRedirect(path);
			
				
	            
			
			
            
        }catch (Exception e) {
        	e.printStackTrace();
        }
	}
	
}
