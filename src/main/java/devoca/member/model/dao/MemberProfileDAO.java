package devoca.member.model.dao;
import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;
import java.util.Properties;

import static devoca.common.JDBCTemplate.*;
import devoca.member.model.vo.Member;

public class MemberProfileDAO {

	private Statement stmt;
	private ResultSet rs;
	private PreparedStatement pstmt;
	
	private Properties prop;
	
	// 기본 생성자 
	public MemberProfileDAO() {
		try {
			prop = new Properties();
			
			String filePath = MemberProfileDAO.class.getResource("/devoca/sql/MemberProfile.xml").getPath();
			prop.loadFromXML(new FileInputStream(filePath));
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	public Member selectOne(Connection conn, int memberNo) throws Exception{
		
		Member loginMember = null; // 결과 저장용 변수
		
		try {
			String sql = prop.getProperty("selectOne");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setInt(1, memberNo);
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				loginMember = new Member();
				
				loginMember.setMemberId(rs.getString(1));
				loginMember.setMemberPw(rs.getString(2));
				loginMember.setMemberNick(rs.getString(3));
				loginMember.setProfileImage(rs.getString(4));
				
			}
			
			System.out.println(loginMember);
			
		}finally {
			close(rs);
			close(pstmt);
		}
		
		
		return loginMember;
	}

}
