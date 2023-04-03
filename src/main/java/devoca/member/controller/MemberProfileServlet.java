package devoca.member.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.member.model.service.MemberProfileService;
import devoca.member.model.vo.Member;

@WebServlet("/member/member-profile")
public class MemberProfileServlet extends HttpServlet{
	 @Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		 
		 // 세션 로그인한 회원 정보  불러오기 
		Member loginMenber = (Member)req.getSession().getAttribute("loginMember");
		int memberNo = loginMenber.getMemberNo();
		String path = "/WEB-INF/views/member/member-profile.jsp";
		
		// 로그인 멤버 정보 불러오기 
		try {
			MemberProfileService memberService = new MemberProfileService();
			
			Member loginMember = memberService.selectOne(memberNo);
			
			
			
			req.setAttribute("loginMember" , loginMember);
			req.getRequestDispatcher(path).forward(req, resp);
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
	 
	 
}
