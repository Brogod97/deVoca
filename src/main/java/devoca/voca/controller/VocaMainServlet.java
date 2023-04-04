package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.member.model.vo.Member;
import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Category;

@WebServlet("/voca/voca-main")
public class VocaMainServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Member loginMember = (Member)req.getSession().getAttribute("loginMember");
		int memberNo = loginMember.getMemberNo();
	
		try {
			VocaService service = new VocaService();
			
			List<Category> category = service.selectCategoryAll(memberNo);
			
			
			String path = "/WEB-INF/views/voca/voca-main.jsp";
			req.getRequestDispatcher(path).forward(req, resp);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		
		
	}
	
	
}
