package devoca.member.model.service;

import java.sql.Connection;

import static devoca.common.JDBCTemplate.*;

import devoca.member.model.dao.TestLoginDAO;
import devoca.member.model.vo.Member;

public class TestLoginService {

	private TestLoginDAO dao = new TestLoginDAO();
	
	
	public Member login(Member member) throws Exception{
		
		
		Connection conn = getConnection();
		
		Member loginMember = dao.login(conn,member);
		
		close(conn);
		
		return loginMember;
	}

}
