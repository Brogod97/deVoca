package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.member.model.vo.Member;
import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Category;

@WebServlet("/voca/quiz-main")
public class VocaQuizMainServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int memberNo = 0;

		String ExploreMemberNo = req.getParameter("memberNo"); // Explore 페이지에서 전달받은 회원 정보
		Member member = (Member)req.getSession().getAttribute("loginMember"); // 로그인된 멤버 정보
				
		if(ExploreMemberNo != null) { // Explore 페이지에서 특정 회원의 MEMBER_NO를 갖고 접근할 경우
			memberNo = Integer.parseInt(ExploreMemberNo);
		}else { // 로그인된 회원이 navbar를 이용해 접근할 경우
			memberNo = member.getMemberNo();
		}
		
		VocaService service = new VocaService();
		List<Category> categoryList = null; 
		
		try {
			categoryList = service.selectCategoryAll(memberNo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		String path = "/WEB-INF/views/voca/quiz-main.jsp";
		req.setAttribute("categoryList", categoryList);
		req.getRequestDispatcher(path).forward(req, resp);
	}
}
