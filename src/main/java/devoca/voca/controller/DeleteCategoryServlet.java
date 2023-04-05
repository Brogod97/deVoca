package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.voca.model.service.VocaService;

@WebServlet("/voca/deleteCategory")
public class DeleteCategoryServlet extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int categoryNo = Integer.parseInt(req.getParameter("categoryNo"));
		
		try {
			VocaService service = new VocaService();
			
			int result = service.deleteCategory(categoryNo);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}
