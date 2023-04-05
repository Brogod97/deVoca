package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.member.model.vo.Member;
import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Word;

@WebServlet("/voca/searchWord")
public class SearchWordServlet extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Member loginMember = (Member)req.getSession().getAttribute("loginMember");
		
		int memberNo = loginMember.getMemberNo();
		
		String searchWord = req.getParameter("searchWord");
		
		List<Word> wordList = null;
		
		VocaService service =new VocaService();
		
		try {
			wordList = service.searchWord(memberNo, searchWord);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
