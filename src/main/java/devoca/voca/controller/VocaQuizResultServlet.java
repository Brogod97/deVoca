package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.voca.model.service.VocaService;

@WebServlet("/voca/quizResult")
public class VocaQuizResultServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int memberNo = Integer.parseInt(req.getParameter("memberNo"));
		int categoryNo = Integer.parseInt(req.getParameter("categoryNo"));
		
		System.out.println(memberNo);
		System.out.println(categoryNo);
		
		VocaService service = new VocaService();
		
		int totalCount = 0;
		int correctCount = 0;
		
		try {
			totalCount = service.selectTotalCount(categoryNo);
			correctCount = service.selectCorrectCount(categoryNo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		req.setAttribute("totalCount", totalCount);
		req.setAttribute("correctCount", correctCount);
		
		long rate = Math.round(((double) correctCount / totalCount) * 100);
		
		req.setAttribute("rate", rate);
		
		String path = "/WEB-INF/views/voca/quiz-result.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}
}
