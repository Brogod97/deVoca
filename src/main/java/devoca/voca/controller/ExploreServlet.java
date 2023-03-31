package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import devoca.member.model.vo.Member;
import devoca.voca.model.service.VocaService;

@WebServlet("/voca/explore")
public class ExploreServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		VocaService service = new VocaService();
		
		// 전체 회원 목록(MEMBER_NO, MEMBER_NM, USER_IMG) 저장할 변수
		List<Member> memberList = null;
		
		try {
			memberList = service.selectMemberAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println(memberList);
				
		req.setAttribute("memberList", memberList);
		
		String path = "/WEB-INF/views/voca/explore.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}
}
