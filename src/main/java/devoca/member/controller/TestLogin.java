package devoca.member.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import devoca.member.model.service.TestLoginService;
import devoca.member.model.vo.Member;

@WebServlet("/member/testLogin")
public class TestLogin extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String path = "/WEB-INF/views/member/member-profile.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String inputId = "thiszino@gmail.com";
		String inputPw = "zino12@#";
		
		Member member = new Member();
		member.setMemberId(inputId);
		member.setMemberPw(inputPw);
		
		try {
			TestLoginService service = new TestLoginService();
			
			Member loginMember = service.login(member);
			
			HttpSession session = req.getSession();
			
			if(loginMember != null) { 
				session.setAttribute("loginMember", loginMember);
				
				session.setMaxInactiveInterval(3600);
				
				Cookie c = new Cookie("saveId", inputId);
				
				if(req.getParameter("saveId")!= null) {
					c.setMaxAge(60 * 60 * 24 * 30);
					
				}else {
					c.setMaxAge(0);
				}
				
				c.setPath(req.getContextPath());// 최상위 주소 
				
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		
	}
	
}
