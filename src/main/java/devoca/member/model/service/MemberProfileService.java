package devoca.member.model.service;

import static devoca.common.JDBCTemplate.*;

import java.sql.Connection;
import java.util.List;

import devoca.member.model.dao.MemberProfileDAO;
import devoca.member.model.vo.Member;

public class MemberProfileService {

	private MemberProfileDAO dao = new MemberProfileDAO();
	
	/** 회원 정보 조회
	 * @param memberNo
	 * @return
	 * @throws Exception
	 */
	public Member selectOne(int memberNo) throws Exception{
		
		Connection conn = getConnection();
		
		Member loginMember = dao.selectOne(conn, memberNo);
		
		close(conn);
		
		return loginMember;
	}

	/** 회원 정보 수정 
	 * @param member
	 * @return
	 * @throws Exception
	 */
	public int updateMember(Member member) throws Exception{
		
		Connection conn = getConnection();
		
		int result = dao.updateMember(conn, member);
		
		if(result > 0)	commit(conn);
		else			rollback(conn);
		
		close(conn);
		
		return result;
	}

}
