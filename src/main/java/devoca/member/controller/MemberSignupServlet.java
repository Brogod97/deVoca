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

@WebServlet("/member/signUp")
public class MemberSignupServlet extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String path = "/WEB-INF/views/member/signup.jsp";
		
		req.getRequestDispatcher(path).forward(req, resp);
	}

	
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		
		String memberNick = req.getParameter("memberNM");
		String memberId = req.getParameter("memberId");
		String memberPw = req.getParameter("memberPw");
		
	
		
		Member mem = new Member();
		
		mem.setMemberNick(memberNick);
		mem.setMemberId(memberId);
		mem.setMemberPw(memberPw);
		
			try {
			
			MemberService service = new MemberService();
			
			
			int result = service.signUp(mem);
			
			
			
			HttpSession session = req.getSession();
			
			if(result > 0) { // 성공
				session.setAttribute("message", memberNick + "님, 환영합니다.");
				
			}else { // 실패
				session.setAttribute("message", "닉네임, 아이디, 비밀번호를 다시 확인 해 주세요.");
				
			}
			
			resp.sendRedirect( req.getContextPath() );
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
