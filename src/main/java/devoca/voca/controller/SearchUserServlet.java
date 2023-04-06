package devoca.voca.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import devoca.member.model.vo.Member;
import devoca.voca.model.service.VocaService;

@WebServlet("/voca/searchUser")
public class SearchUserServlet extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String inputUserName = req.getParameter("inputUserName");
				
		try {
			VocaService service = new VocaService();
			
			List<Member> userList = service.searchUser(inputUserName);
			
			System.out.println(userList);
			
			new Gson().toJson(userList, resp.getWriter());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
