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
import devoca.voca.model.vo.Word;

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
	public List<Category> selectCategoryAll(Connection conn, int memberNo) throws Exception {
		List<Category> categoryList = new ArrayList<>();
		
		try {
			String sql = prop.getProperty("selectCategoryAll");
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, memberNo);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				int categoryNo = rs.getInt("CATEGORY_NO");
				String categoryTitle = rs.getString("CATEGORY_TITLE");
				
				Category category = new Category(categoryNo, memberNo , categoryTitle);
				
				categoryList.add(category);
			}
			
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


	/** MEMBER_NO와 CATEGORY_NO가 일치하는 단어 전체 조회 DAO
	 * @param conn
	 * @param memberNo
	 * @param categoryNo
	 * @return wordList
	 * @throws Exception
	 */
	public List<Word> selectWordAll(Connection conn, int memberNo, int categoryNo) throws Exception {
		List<Word> wordList = new ArrayList<>(); 
		
		try {
			String sql = prop.getProperty("selectWordAll");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setInt(1, memberNo);
			pstmt.setInt(2, categoryNo);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				int wordNo = rs.getInt("WORD_NO");
				String wordTitle = rs.getString("WORD_TITLE");
				String wordDf = rs.getString("WORD_DF");
				String wordMemo = rs.getString("WORD_MEMO");
				String codeBlock = rs.getString("CODE_BLOCK");
				String createDate = rs.getString("CREATE_DATE");
				String checked = rs.getString("CHECKED");
				String favorite = rs.getString("FAVORITE");
				String quizOx = rs.getString("QUIZ_OX");
				String language = rs.getString("LANGUAGE");
				
				Word word = new Word(wordNo, categoryNo, wordTitle, wordDf, wordMemo, codeBlock,
					 createDate, checked, favorite, quizOx, language);
				
				wordList.add(word);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}		
		
		return wordList;
	}


	/** 입력받은 회원명과 일치하는 회원들 조회 DAO
	 * @param conn
	 * @param inputUserName
	 * @return
	 * @throws Exception
	 */
	public List<Member> searchUser(Connection conn, String inputUserName) throws Exception {
		List<Member> userList = new ArrayList<>();
		
		try {
			
			String sql = prop.getProperty("searchUser");
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, "%" + inputUserName + "%");
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				Member member = new Member();
			
				member.setMemberNo(rs.getInt("MEMBER_NO"));
				member.setMemberNick(rs.getString("MEMBER_NM"));
				member.setProfileImage(rs.getString("USER_IMG"));
				
				userList.add(member);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}
		
		return userList;
	}
	
}
