package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Word;

@WebServlet("/voca/selectWordAll")
public class SelectWordAllServlet extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int memberNo = Integer.parseInt(req.getParameter("memberNo"));
		int categoryNo = Integer.parseInt(req.getParameter("categoryNo"));
		List<Word> wordList = null;
		
		VocaService service = new VocaService();
		
		try {
			wordList = service.selectWordAll(memberNo, categoryNo);
			
			new Gson().toJson(wordList, resp.getWriter());
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
