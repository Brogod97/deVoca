package devoca.voca.model.dao;

import static devoca.common.JDBCTemplate.*;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import devoca.member.model.vo.Member;
import devoca.voca.model.vo.Category;

public class VocaDAO {
	
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	private Properties prop;
	
	public VocaDAO() {
		try {
			
			prop = new Properties();
			
			String filePath = VocaDAO.class.getResource("/devoca/sql/voca-sql.xml").getPath();
			
			prop.loadFromXML(new FileInputStream(filePath));
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

	/** 회원 1명에 저장된 카테고리 전체 조회 DAO
	 * @param conn
	 * @return categoryList
	 * @throws Exception 
	 */
	public List<Category> selectCategoryAll(Connection conn, int loginMemberNo) throws Exception {
		List<Category> categoryList = new ArrayList<>();
		
		try {
			String sql = prop.getProperty("selectCategoryAll");
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, loginMemberNo);
			
			
		} finally {
			close(rs);
			close(pstmt);
		}
		
		return categoryList;
	}


	/** 전체 회원 목록(MEMBER_NO, MEMBER_NM, USER_IMG) 조회 DAO
	 * @param conn
	 * @return memberlist
	 * @throws Exception
	 */
	public List<Member> selectMemberAll(Connection conn) throws Exception {
		List<Member> memberList = new ArrayList<>(); 
		
		try {
			String sql = prop.getProperty("selectMemberAll");
			
			stmt = conn.createStatement();
			
			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				Member member = new Member();
				
				member.setMemberNo(rs.getInt("MEMBER_NO"));
				member.setMemberNick(rs.getString("MEMBER_NM"));
				member.setProfileImage(rs.getString("USER_IMG"));
				
				memberList.add(member);
			}
			
		} finally {
			close(rs);
			close(stmt);
		}
		
		return memberList;
	}
	
}
