package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/voca/quizGame")
public class VocaQuizGameServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String memberNo = req.getParameter("memberNo");
		String categoryNo = req.getParameter("categoryNo");
		
//		String[] memberNo = req.getParameterValues("memberNo");
//		String[] categoryNo = req.getParameterValues("categoryNo");
		
		String path = "/WEB-INF/views/voca/quiz-game.jsp";
		
		req.getRequestDispatcher(path).forward(req, resp);
		
	}
}
