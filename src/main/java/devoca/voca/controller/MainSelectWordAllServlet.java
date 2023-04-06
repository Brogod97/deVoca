package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

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

// 	보카메인용 단어조회 서블릿 
@WebServlet("/voca/mainSelectWordAll")
public class MainSelectWordAllServlet extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Member loginMember = (Member)req.getSession().getAttribute("loginMember");
		
		int memberNo = loginMember.getMemberNo();
		int categoryNo = Integer.parseInt(req.getParameter("categoryNo"));
		
		List<Word> wordList = null;
		
		VocaService service = new VocaService();
		
		try {
			wordList = service.selectWordAll(memberNo,categoryNo);
			
			new Gson().toJson(wordList, resp.getWriter());
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}

}
