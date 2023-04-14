package devoca.voca.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Word;

@WebServlet("/voca/quizGame")
public class VocaQuizGameServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int memberNo = Integer.parseInt(req.getParameter("memberNo"));
		int categoryNo = Integer.parseInt(req.getParameter("categoryNo"));
		
		VocaService service = new VocaService();
		List<Word> wordList = null; // 단어 제목, 정답 선택지 생성용 객체
		
		try {
			wordList = service.selectWordAll(memberNo, categoryNo);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		// 오답 선택지 생성용 배열
		String[] definitionArr = new String[wordList.size()];

		for(int i = 0; i < wordList.size(); i++) {
			definitionArr[i] = wordList.get(i).getWordDf();
		}
		
		req.setAttribute("wordList", wordList);
		req.setAttribute("definitionArr", definitionArr);
		req.setAttribute("memberNo", memberNo);
		req.setAttribute("categoryNo", categoryNo);
		
		String path = "/WEB-INF/views/voca/quiz-game.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}
}
