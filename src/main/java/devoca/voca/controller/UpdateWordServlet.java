package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Word;

// 단어 정보 수정 
@WebServlet("/voca/updateWord")
public class UpdateWordServlet extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int wordNo = Integer.parseInt(req.getParameter("wordNo"));
		
		String wordTitle = req.getParameter("wordTitle");
		String wordDf = req.getParameter("wordDf");
		String wordMemo = req.getParameter("wordMemo");
		String codeBlock = req.getParameter("codeBlock");
		
		Word word = new Word();
		
		word.setWordNo(wordNo);
		word.setWordTitle(wordTitle);
		word.setWordDf(wordDf);
		word.setWordMemo(wordMemo);
		word.setCodeBlock(codeBlock);
		
		try {
			VocaService service = new VocaService();
			
			int result = service.updateWord(word);
			
			new Gson().toJson(result, resp.getWriter());
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
