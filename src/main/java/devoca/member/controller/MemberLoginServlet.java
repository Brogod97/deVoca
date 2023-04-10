package devoca.member.controller;

import java.io.IOException;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.connector.Response;

import devoca.member.model.service.MemberService;
import devoca.member.model.vo.Member;

@WebServlet("/member/login")
public class MemberLoginServlet extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String path = "/WEB-INF/views/member/log-in.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		// 전달된 파라미터 변수에 저장
		String inputId = req.getParameter("inputId");
		String inputPw = req.getParameter("inputPw");
		
		
		
		// getParameter() 오버라이딩 확인
		System.out.println("inputId : " + inputId);
		System.out.println("inputPw : " + inputPw);
		
		// 파라미터를 VO에 세팅
		Member member = new Member();
		member.setMemberId(inputId);
		member.setMemberPw(inputPw);
	
		
		try {
			
			// 서비스 객체 생성
			MemberService service = new MemberService();
			
			// 아이디, 비밀번호가 일치하는 회원을 조회하는 서비스 호출 후 결과 반환 받기
			Member loginMember = service.login(member);
			
			
			String path = null;
			// id/pw가 일치하는 회원 정보를 session scope에 세팅할거임
			
			// Session 객체 얻어오기
			HttpSession session = req.getSession();
			
			if(loginMember != null ) { // 성공
				
				// 회원 정보 Session 세팅
				session.setAttribute("loginMember", loginMember);
				
				// 특정 시간동안 요청이 없으면 세션 만료
				session.setMaxInactiveInterval(3600);   // 1시간
				
				// 아이디 저장 쿠키 생성
				Cookie c = new Cookie("saveId", inputId );
				
				path = req.getContextPath() + "/voca/voca-main";
				
				// 아이디 저장이 체크 된 경우
				if(req.getParameter("saveId") != null ) {
					
					// 쿠키 파일을 30일 동안 유지
					c.setMaxAge(60 * 60 * 24 * 30);
					
				} else {
					c.setMaxAge(0);
				}
				
				// 해당 쿠키 파일이 적용될 주소를 저장
				c.setPath(req.getContextPath());
				
				resp.addCookie(c);
				
			} else { // 실패
				
				
				session.setAttribute("message", "아이디 또는 비밀번호가 일치하지 않습니다.");
				
				path = "login";
				
				
			}
			
			
			
			// redirect
			resp.sendRedirect(path);
			
			
			
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	

}
