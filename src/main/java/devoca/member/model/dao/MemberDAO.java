package devoca.member.model.dao;

import static devoca.common.JDBCTemplate.*;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;

import devoca.member.model.vo.Member;

public class MemberDAO {

	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	private Properties prop;
	
	// 기본 생성자
	public MemberDAO() {
		
		try {
			
			prop = new Properties();
			
		
		String filePath = MemberDAO.class.getResource("/devoca/sql/member-sql.xml").getPath();
		
		prop.loadFromXML(new FileInputStream(filePath));
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	} 
	
	
	/**	로그인 DAO
	 * @param conn
	 * @param member
	 * @return loginMember
	 * @throws Exception
	 * */
	public Member login (Connection conn, Member member) throws Exception {
		
		Member loginMember = null; // 결과 저장용 변수
		
		try {
			// sql 얻어오기
			String sql = prop.getProperty("login");
			
			// PreparedStatment  생성 및 sql 적재
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1,member.getMemberId());
			pstmt.setString(2,member.getMemberPw());
			
			// sql 수행
			rs = pstmt.executeQuery();
			
			if ( rs.next()) {
				
				loginMember = new Member();
				
				loginMember.setMemberNo(rs.getInt(1));
				loginMember.setMemberId(rs.getString(2));
				loginMember.setMemberPw(rs.getString(3));
				loginMember.setMemberNick(rs.getString(4));
				loginMember.setSnsFlag(rs.getString(5));
				loginMember.setEnrollDate(rs.getString(6));
				loginMember.setSecessionFlag(rs.getString(7));
				loginMember.setProfileImage(rs.getString(8));
				
			}
			
		} finally {
			close(rs);
			close(stmt);
		}
		
		return loginMember;	// null 또는 Member 객체 주소
	}
	
	/** 회원가입 DAO
	 * @param conn
	 * @param member
	 * @return result
	 * @throws Exception
	 * */	
	public int signUp(Connection conn, Member member) throws Exception {
		
		int result = 0;
		
		try {
			String sql = prop.getProperty("signUp");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, member.getMemberId());
			pstmt.setString(2,member.getMemberPw());
			pstmt.setString(3, member.getMemberNick());
			
			result = pstmt.executeUpdate();
		} finally {
			close(pstmt);
		}
		
		return result;
		
	}
	
	/** 아이디(이메일) 중복 검사 DAO
	 * @param conn
	 * @param memberId
	 * @return result
	 * @throws Exception
	 * */
	
	public int idDupCheck(Connection conn, String memberId) throws Exception {
		
		int result = 0;
		
		try {
			
			String sql = prop.getProperty("idDupCheck");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, memberId);
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				
				result = rs.getInt(1);			}
					
			
		} finally {
			
			close(rs);
			close(pstmt);
		}
		
		return result;
	}
	
	public int nicknameDupCheck(Connection conn, String memberNick) throws Exception {
		
		int result = 0;
		
		try {
			
			String sql = prop.getProperty("memberNick");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, memberNick);
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				result = rs.getInt(1);
			}
		 
		
		} finally {
			
			close(rs);
			close(pstmt);
		}
		
		return result;
	}
	
}