package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/voca/quiz-result")
public class VocaQuizResultServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String path = "/WEB-INF/views/voca/quiz-result.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}
}