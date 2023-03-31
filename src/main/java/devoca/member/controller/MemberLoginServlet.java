package devoca.member.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import devoca.member.model.service.MemberService;
import devoca.member.model.vo.Member;


@WebServlet("/member/logIn")
public class MemberLoginServlet extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		
		String inputId = req.getParameter("inputId");
		String inputPw = req.getParameter("inputPw");
		
		Member mem = new Member();
		mem.setMemberId(inputId);
		mem.setMemberPw(inputPw);
		
		
		try {
			
				MemberService service = new MemberService();
				
				Member loginMember = service.login(mem);
				
				HttpSession session = req.getSession();
				
				
				
				if(loginMember != null) {   // 로그인 성공
					
					session.setAttribute("loginMember", loginMember);
					
					
					//TODO 특정시간동안 동작 안하면 세션 만료되는거 일단 10000초로 설정했는데 상의해보고 변경하는게 좋을듯 합니다
					session.setMaxInactiveInterval(10000);   
					
					
					// 아이디 저장
					Cookie c = new Cookie("saveId", inputId);
					
					
					if( req.getParameter("saveId") != null) {
						
						
						//TODO 쿠키 유지기간 일단 30일로 설정 이것도 상의하고 변경
						c.setMaxAge(60 * 60 * 24 * 30);
						
						
					} else {
						c.setMaxAge(0);
					}
					
					
					c.setPath(req.getContextPath());
					
					resp.addCookie(c);
					
					
					
				} else { // 로그인 실패
				
					session.setAttribute("message", "아이디 또는 비밀번호가 일치하지 않습니다.");
					
				
				}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		resp.sendRedirect( req.getContextPath() );
		
		RequestDispatcher dispatcher = req.getRequestDispatcher("/WEB-INF/views/loginResult.jsp") ;
		
		dispatcher.forward(req, resp);
		
		
	}

}
