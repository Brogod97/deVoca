package devoca.member.model.service;

import static devoca.common.JDBCTemplate.*;

import java.sql.Connection;

import devoca.member.model.dao.MemberDAO;
import devoca.member.model.vo.Member;

public class MemberService {
	
	private MemberDAO dao = new MemberDAO();
	
	
	/** 로그인 서비스
	 * @param mem
	 * @return loginMember
	 * @throws Exception
	 */
	public Member login(Member mem) throws Exception{
		
		Connection conn = getConnection();
		
		Member loginMember = dao.login(conn, mem);
		
		close(conn);
		
		return loginMember;
	}
	
	
	
	/** 회원가입 Service
	 * @param mem
	 * @return result
	 * @throws Exception
	 */
	public int signUp(Member mem) throws Exception {

		Connection conn = getConnection(); // DBCP 에서 얻어옴
		
		int result = dao.signUp(conn, mem);
		
		
		if(result > 0)	commit(conn);  
		else			rollback(conn);
		
		close(conn);
		
		return result;
	}


	
	
	/** 회원 탈퇴 Service
	 * @param memberNo
	 * @param memberPw
	 * @return result
	 * @throws Exception
	 */
	public int secession(int memberNo, String memberPw) throws Exception{
		Connection conn = getConnection(); 
		
		int result = dao.secession(conn, memberNo, memberPw);
		
		if(result > 0)	commit(conn);
		else			rollback(conn);
		
		close(conn);
		
		return result;
	}
	
	
	
	/** 닉네임 중복 검사 Service
	 * @param memberNickname
	 * @return result
	 * @throws Exception
	 */
	public int nicknameDupCheck(String memberNM) throws Exception{
		
		// DBCP에서 Connection 얻어오기
		Connection conn = getConnection();
		
		// DAO 메서드 수행 후 결과 반환 받기
		int result = dao.nicknameDupCheck(conn, memberNM);
		
		// Connection 반환
		close(conn);
		
		// 결과 반환
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

}
