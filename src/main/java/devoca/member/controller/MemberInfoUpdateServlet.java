package devoca.member.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import devoca.member.model.service.MemberProfileService;
import devoca.member.model.vo.Member;

@WebServlet("/member/memberInfo")
public class MemberInfoUpdateServlet extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 세션에서 로그인한 회원 정보 가져오기
		HttpSession session = req.getSession();
		
		Member loginMember = (Member)( session.getAttribute("loginMember") );
		
		int memberNo = loginMember.getMemberNo();
		
		// 파라미터 얻어오기 
		String inputId = req.getParameter("inputId");
		String inputPw = req.getParameter("inputPw");
		String inputNm = req.getParameter("inputNm");
		
		Member member = new Member();
		
		member.setMemberNo(memberNo);
		member.setMemberPw(inputPw);
		member.setMemberNick(inputNm);
		
		
		try {
			MemberProfileService service = new MemberProfileService();
			
			int result = service.updateMember(member);
			
			if(result > 0) {
				session.setAttribute("message", "회원 정보가 수정되었습니다.");
				
				// Session 정보 동기화 작업 
				loginMember.setMemberPw(inputPw);
				loginMember.setMemberNick(inputNm);
			}else {
				session.setAttribute("message", "회원 정보 수정 실패하였습니다.");
			}
			
			// 회원 정보 페이지 재요청 
			
			resp.sendRedirect(req.getContextPath() + "/member/member-profile");
		}catch(Exception e) {
			e.printStackTrace();
		}
		
				
	}
}
