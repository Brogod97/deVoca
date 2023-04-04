package devoca.member.model.dao;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;

import static devoca.common.JDBCTemplate.*;
import devoca.member.model.vo.Member;

public class TestLoginDAO {
	private Statement stmt;
	private ResultSet rs;
	private PreparedStatement pstmt;
	
	private Properties prop;
	
	public TestLoginDAO() {
		try {
			prop = new Properties();
			
			String filePath = TestLoginDAO.class.getResource("/devoca/sql/TestLogin.xml").getPath();
			prop.loadFromXML(new FileInputStream(filePath));
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	public Member login(Connection conn, Member member) throws Exception{
		
		Member loginMember = null; // 결과 저장용 변수 
		
		try {
			String sql = prop.getProperty("testLogin");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1,member.getMemberId());
			pstmt.setString(2, member.getMemberPw());
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
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
		}finally {
			close(rs);
			close(pstmt);
		}
		
		return loginMember;
	}

}
