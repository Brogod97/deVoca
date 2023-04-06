package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import devoca.voca.model.service.VocaService;

// 단어 삭제 서블릿 
@WebServlet("/voca/deleteWord")
public class DeleteWordServlet extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int wordNo = Integer.parseInt(req.getParameter("wordNo"));
		
		try {
			VocaService service = new VocaService();
			
			int result = service.deleteWord(wordNo);
			
			new Gson().toJson(result, resp.getWriter());
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}
