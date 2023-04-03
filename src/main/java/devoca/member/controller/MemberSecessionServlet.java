package devoca.member.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import devoca.member.model.service.MemberProfileService;
import devoca.member.model.vo.Member;

@WebServlet("/member/secession")
public class MemberSecessionServlet extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		
		Member loginMember = (Member)(session.getAttribute("loginMember"));
		
		int memberNo = loginMember.getMemberNo();
		
		String nowPwInput = req.getParameter("nowPwInput");
		
		try {
			MemberProfileService service = new MemberProfileService();
			
			int result = service.secession(memberNo, nowPwInput);
			
			String path = null; // 리다이렉트 경로
			
			if(result > 0) {
				session.invalidate(); // 세션 무효화 
				
				// 새로운 세션 얻어와서 메세지 세팅 
				
				session = req.getSession();
				session.setAttribute("message", "탈퇴 되었습니다.");
				
				path = req.getContextPath();
				
				Cookie c = new Cookie("saveId", "");
				
				c.setMaxAge(0);
				c.setPath(req.getContextPath());
				resp.addCookie(c);
			}else {
				session.setAttribute("message", "비밀번호가 일치하지 않습니다.");
				
				path = "member-profile";
			}
			
			resp.sendRedirect(path);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
