package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import devoca.member.model.vo.Member;
import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Category;

@WebServlet("/voca/insertCategory")
public class InsertCategoryServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		VocaService service = new VocaService();
		
		String categoryTitle = req.getParameter("categoryTitle");
		
		HttpSession session =  req.getSession();
		
		Member loginMember = (Member)req.getSession().getAttribute("loginMember");
		
		int memberNo = loginMember.getMemberNo();
	
		
		try {
			
			int result = service.insertCategory(memberNo , categoryTitle);
			
			new Gson().toJson(result, resp.getWriter());
			
			resp.sendRedirect("voca-main");
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}
