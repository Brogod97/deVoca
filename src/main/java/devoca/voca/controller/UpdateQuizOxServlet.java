package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import devoca.voca.model.service.VocaService;

@WebServlet("/voca/updateQuizOx")
public class UpdateQuizOxServlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int wordNo = Integer.parseInt(req.getParameter("wordNo"));
		String quizOx = req.getParameter("quizOx");
		
		VocaService service = new VocaService();
		try {
			int result = service.updateQuizOx(wordNo, quizOx);
			
			new Gson().toJson(result, resp.getWriter());
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
