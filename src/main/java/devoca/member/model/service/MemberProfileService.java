package devoca.member.model.service;

import static devoca.common.JDBCTemplate.*;

import java.sql.Connection;
import java.util.List;

import devoca.member.model.dao.MemberProfileDAO;
import devoca.member.model.vo.Member;

public class MemberProfileService {

	private MemberProfileDAO dao = new MemberProfileDAO();
	
	public Member selectOne(int memberNo) throws Exception{
		
		Connection conn = getConnection();
		
		Member loginMember = dao.selectOne(conn, memberNo);
		
		close(conn);
		
		return loginMember;
	}

}
