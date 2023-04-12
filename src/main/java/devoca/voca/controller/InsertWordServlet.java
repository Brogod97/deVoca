package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import devoca.member.model.vo.Member;
import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Word;

// 단어 추가 서블릿
@WebServlet("/voca/insertWord")
public class InsertWordServlet extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		VocaService service = new VocaService();
		
		int categoryNo = Integer.parseInt(req.getParameter("categoryNo"));
		String wordTitle = req.getParameter("wordTitle");
		String wordDf = req.getParameter("wordDf");
		String wordMemo = req.getParameter("wordMemo");
		String codeBlock = req.getParameter("codeBlock");
		
//		System.out.println("첫번째 :: " + codeBlock);
		
		Word word = new Word();
		
		word.setCategoryNo(categoryNo);
		word.setWordTitle(wordTitle);
		word.setWordDf(wordDf);
		word.setWordMemo(wordMemo);
		word.setCodeBlock(codeBlock);
		
//		word.setCodeBlock(word.getCodeBlock().replaceAll("<br>", "\n"));
		
//		System.out.println("두번째 :: " + word.getCodeBlock());
		
//		System.out.println(categoryNo);
//		System.out.println(wordTitle);
//		System.out.println(wordDf);
//		System.out.println(wordMemo);
//		System.out.println(codeBlock);
		
//		System.out.println("세번째 :: " + codeBlock);
		try {
			
			int result = service.insertword(word);
			new Gson().toJson(result, resp.getWriter());
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
