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
		
			String filePath = MemberDAO.class.getResource("/deVoca/src/main/java/devoca/sql/member-sql.xml").getPath();
		
			prop.loadFromXML(new FileInputStream(filePath));
		
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

	
	
	/** 로그인 DAO
	 * @param conn
	 * @param mem
	 * @return loginMember
	 * @throws Exception
	 * */
	
	public Member login(Connection conn, Member mem) throws Exception {
		
		Member loginMember = null;
		
		try {	String sql = prop.getProperty("login");
				
		pstmt = conn.prepareStatement(sql);
		
		pstmt.setString(1, mem.getMemberId());
		pstmt.setString(2, mem.getMemberPw());
		
		rs = pstmt.executeQuery();
		
		
		if(rs.next()) {
			
			loginMember = new Member();
			
			loginMember.setMemberNo( rs.getInt("MEMBER_NO"));
			loginMember.setMemberId(rs.getString("MEMBER_ID"));
			loginMember.setMemberNick(rs.getString("MEMBER_NM"));
			loginMember.setSnsFlag(rs.getString("SNS_FL"));
			loginMember.setEnrollDate(rs.getString("ENROLL_DATE"));
			loginMember.setProfileImage(rs.getString("USER_IMG"));
			
					
					
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}
		
		return loginMember;
	}
	
	
	
	/** 회원가입 DAO
	 * @param conn
	 * @param mem
	 * @return result
	 * @throws Exception
	 */
	public int signUp(Connection conn, Member mem) throws Exception {
		
		int result = 0;
		
		try {
			String sql = prop.getProperty("signUp");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, mem.getMemberNick());
			pstmt.setString(2,mem.getMemberId());
			pstmt.setString(3, mem.getMemberPw());
			
			result = pstmt.executeUpdate();
			
			
	} finally {
		close(pstmt);
	}
		return result;
	}

	
	
	
	
	
	/** 회원 탈퇴 DAO
	 * @param conn
	 * @param memberNo
	 * @param memberPw
	 * @return result
	 * @throws Exception
	 */
	public int secession(Connection conn, int memberNo, String memberPw) throws Exception {
		
		int result = 0;
		
	 try {
		
		String sql = prop.getProperty("secession");
		
		pstmt = conn.prepareStatement(sql);
		
		pstmt.setInt(1, memberNo);
		pstmt.setString(2, memberPw);
		
		result = pstmt.executeUpdate();
	} finally {
		
		close(pstmt);
	}
	 
	 return result;
	 
	}
	
	
	
	/** 닉네임 중복 검사
	 * @param conn
	 * @param memberNickname
	 * @return result
	 * @throws Exception
	 */
	public int nicknameDupCheck(Connection conn, String memberNM) throws Exception {
		int result = 0;
		
		try {
			String sql = prop.getProperty("nicknameDupCheck");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, memberNM);
			
			rs = pstmt.executeQuery();
			
			if(rs.next() ) {
				 
				result = rs.getInt(1);
			}
	
		}finally {
			close(rs);
			close(pstmt);
		}
		return result;
}
	
}