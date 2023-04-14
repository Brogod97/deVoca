package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Word;

@WebServlet("/voca/quizResult")
public class VocaQuizResultServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int categoryNo = Integer.parseInt(req.getParameter("categoryNo"));
		
		VocaService service = new VocaService();
		
		int totalCount = 0;
		int correctCount = 0;
		List<Word> wrongWordList = null;
		
		try {
			totalCount = service.selectTotalCount(categoryNo);
			correctCount = service.selectCorrectCount(categoryNo);
			wrongWordList = service.selectWrongWordAll(categoryNo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		req.setAttribute("totalCount", totalCount);
		req.setAttribute("correctCount", correctCount);
		req.setAttribute("wrongWordList", wrongWordList);
		
		long rate = Math.round(((double) correctCount / totalCount) * 100);
		
		req.setAttribute("rate", rate);
		
		String path = "/WEB-INF/views/voca/quiz-result.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}
}
