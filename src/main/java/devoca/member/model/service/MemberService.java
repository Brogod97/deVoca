package devoca.member.model.service;

import static devoca.common.JDBCTemplate.*;

import java.sql.Connection;

import devoca.member.model.dao.MemberDAO;
import devoca.member.model.vo.Member;



public class MemberService {
	
	private MemberDAO dao = new MemberDAO();
	
	/** 로그인 서비스
	 * @param member
	 * @return loginMember
	 * @throws Exception
	 * */
	public Member login(Member member) throws Exception {
		
		// Connection 얻어오기
		Connection conn = getConnection();
		
		// DAO 수행
		Member loginMember = dao.login(conn,member);
		
		
		
		// Connection 반환
		close(conn);
		
		// 결과 반환
		return loginMember;
		
		
	}
	
	
	
	
	/** 회원가입 서비스
	 * @param member
	 * @return result
	 * @throws Exception
	 * */
	public int signUp(Member member) throws Exception {
		
		Connection conn = getConnection();
		
		int result = dao.signUp(conn, member);
		
		if(result > 0)	commit(conn);  
		else			rollback(conn);
		
		close(conn);
		
		return result;
	}
	
/* 카카오 회원가입 */	

	public int kakaoMember(Member member) throws Exception{
		Connection conn = getConnection();
		
		int result = dao.kakaoMember(conn, member);
		
		if(result > 0)	commit(conn);  
		else			rollback(conn);
		
		close(conn);
		
		return result;
	}


	
	
	/** 아이디(이메일) 중복 검사 서비스
	 * @param uid
	 * @return result
	 * @throws Exception
	 * */
	public int idDupCheck(String uid) throws Exception {
		
		Connection conn = getConnection();
		
		int result = dao.idDupCheck(conn, uid);
		
		close(conn);
		
		
		return result;
		
		
	}
	
	/** 닉네임 중복 검사 Service
	 * @param memberNick
	 * @return result
	 * @throws Exception
	 */
	
	public int nicknameDupCheck(String memberNick) throws Exception {
		
		Connection conn = getConnection();
		
		int result = dao.nicknameDupCheck(conn, memberNick);
		
		close(conn);
		
		return result;
	}
	
	/** 임시 비밀번호 발급 Service
	 * */
	public int temporaryPw(String inputEmail, String temporaryPw) throws Exception {
		
		Connection conn = getConnection();
		
		int result = dao.temporaryPw(conn, inputEmail, temporaryPw);
		
		if(result > 0)	commit(conn);
		else			rollback(conn);
		
		close(conn);
		return result;
		
		
	}









	



/*

	public int kakaoSignUp(Member m2) throws Exception{
		Connection conn = getConnection();
		
		int result = dao.kakaoSignUp(conn, m2);
		
		if(result > 0)	commit(conn);  
		else			rollback(conn);
		
		close(conn);
		
		return result;
	}




	public Member kakaoLogin(Member m3) throws Exception {
		// Connection 얻어오기
		Connection conn = getConnection();
		
		// DAO 수행
		Member loginMember = dao.kakaoLogin(conn, m3);
		
		
		
		// Connection 반환
		close(conn);
		
		// 결과 반환
		return loginMember;
	}




	public Member kakaoOne(String id) {
		// TODO Auto-generated method stub
		return null;
	}

*/


	


	


}
