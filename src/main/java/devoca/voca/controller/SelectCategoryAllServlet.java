package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Category;

@WebServlet("/voca/selectCategoryAll")
public class SelectCategoryAllServlet extends HttpServlet{
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		VocaService service = new VocaService();
		
		int loginMemberNo;
		List<Category> categoryList = null;
		
		
		try {
			
//			categoryList = service.selectCategoryAll();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
