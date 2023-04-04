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
import devoca.voca.model.vo.Category;

// 카테고리 추가 서블릿 
@WebServlet("/voca/insertCategory")
public class InsertCategoryServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		VocaService service = new VocaService();
		
		String categoryTitle = req.getParameter("categoryTitle");
		
		HttpSession session =  req.getSession();
		
		Member loginMember = (Member)req.getSession().getAttribute("loginMember");
		
		int memberNo = loginMember.getMemberNo();
	
		
		try {
			
			int result = service.insertCategory(memberNo , categoryTitle);
			
			new Gson().toJson(result, resp.getWriter());
			
			resp.sendRedirect("voca-main");
			
			
			// result 값 가져가서 if( result > 0) 조건 걸어주고 성공 함수 작성하면 될 듯 
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}
