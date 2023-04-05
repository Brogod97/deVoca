package devoca.member.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
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
		
		String memberNick = req.getParameter("memberNick");
		String memberId = req.getParameter("inputId");
		String memberPw = req.getParameter("inputPw");
		
		
		Member member = new Member();
		
		
		
		member.setMemberId(memberId);
		member.setMemberPw(memberPw);
		member.setMemberNick(memberNick);
		
		
		
		try {
			
			MemberService service = new MemberService();
			
			int result = service.signUp(member);
			
			HttpSession session = req.getSession();
			
			if(result > 0) { // 성공
				session.setAttribute("message", "회원가입 성공");
				
			}else { // 실패
				session.setAttribute("message", "회원 가입 실패");
				
			}
			
			resp.sendRedirect("../static/log-in.jsp");
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
	}
}
