package devoca.member.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import devoca.member.model.service.MemberService;

@WebServlet("/member/idDupCheck")
public class IdDupCheckServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String uid = req.getParameter("uid");

		try {

			MemberService service = new MemberService();

			int result = service.idDupCheck(uid);

			resp.getWriter().print(result);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
