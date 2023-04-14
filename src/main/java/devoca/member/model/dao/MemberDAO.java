package devoca.member.model.dao;


import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import static devoca.common.JDBCTemplate.*;
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
	public Member login(Connection conn, Member member) throws Exception {
		
		Member loginMember = null;
		
		try {
			
			String sql = prop.getProperty("login");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1,  member.getMemberId());
			pstmt.setString(2, member.getMemberPw());
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				loginMember = new Member();
				
				loginMember.setMemberNo(rs.getInt("MEMBER_NO"));
				loginMember.setMemberId(rs.getString("MEMBER_ID"));
				loginMember.setMemberNick(rs.getString("MEMBER_NM"));
				loginMember.setProfileImage(rs.getString("USER_IMG"));
				loginMember.setEnrollDate(rs.getString("ENROLL_DATE"));
				
				
			}
		} finally {
			close(rs);
			close(pstmt);
			
		}
		
		return loginMember;
		
		
	}
	
	/*public int kakaoLogin(Connection conn, Member member) throws Exception {
		
		int result = 0;
		
		try {
			String sql = prop.getProperty("kakaoLogin");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, member.getMemberId());
			pstmt.setString(2,member.getMemberPw());
			pstmt.setString(3, member.getMemberNick());
			
			result = pstmt.executeUpdate();
			
		} finally {
			close(pstmt);
		}
		
		return result;
		
		
	}*/
		
		
	
	
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
	
	/* 카카오 회원가입*/
	public int kakaoMember(Connection conn, Member member) throws Exception{
		int result = 0;
		
		try {
			String sql = prop.getProperty("kakaoLogin");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, member.getMemberId());
			pstmt.setString(2, member.getMemberPw());
			pstmt.setString(3, member.getMemberNick());
			pstmt.setString(4, member.getProfileImage());
			
			result = pstmt.executeUpdate();
			
		} finally {
			close(pstmt);
		}
		
		return result;
	}
	
	/** 아이디(이메일) 중복 검사 DAO
	 * @param conn
	 * @param uid
	 * @return result
	 * @throws Exception
	 * */
	
	public int idDupCheck(Connection conn, String uid) throws Exception {
		
		int result = 0;
		
		try {
			
			String sql = prop.getProperty("idDupCheck");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, uid);
			
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
	
	
	
	// 닉네임 유효성 검사 DAO 
	public int nicknameDupCheck(Connection conn, String memberNick) throws Exception {
		
		int result = 0;
		
		try {
			
			String sql = prop.getProperty("nicknameDupCheck");
			
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

// 임시 비밀번호 발급 DAO
	public int temporaryPw(Connection conn, String inputEmail, String temporaryPw) throws Exception {
		int result = 0;
		
		try {
			String sql = prop.getProperty("temporaryPw");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1,temporaryPw);
			pstmt.setString(2,inputEmail);
			
			result = pstmt.executeUpdate();
			
		}finally {
			close(pstmt);
		}
		
		return result;
		
	}





}