package devoca.voca.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.voca.model.service.VocaService;
import devoca.voca.model.vo.Word;

@WebServlet("/vaca/mainSelectWordOne")
public class MainSelectWordOneServlet extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int wordNo = Integer.parseInt(req.getParameter("wordNo"));
		
		try {
			
			VocaService service = new VocaService();
			
			Word word = service.selectWordOne(wordNo);
			
			String path = "/WEB-INF/views/voca/vaca-main";
			
			req.setAttribute("word", word);
			
			req.getRequestDispatcher(path).forward(req,resp);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
