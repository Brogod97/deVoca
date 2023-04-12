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
				Word word = new Word();
				
				word.setWordNo(rs.getInt("WORD_NO"));
				word.setWordTitle(rs.getString("WORD_TITLE"));
				word.setWordDf(rs.getString("WORD_DF"));
				word.setChecked(rs.getString("CHECKED"));
				word.setFavorite(rs.getString("FAVORITE"));
				word.setQuizOx(rs.getString("QUIZ_OX"));
				
				wordList.add(word);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}		
		
		return wordList;
	}

	/** 카테고리 추가 DAO
	 * @param conn
	 * @param memberNo
	 * @param categoryTitle 
	 * @return
	 */
	public int insertCategory(Connection conn, int memberNo, String categoryTitle) throws Exception {
		
		int result = 0;
		
		try {
			String sql = prop.getProperty("insertCategory");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setInt(1, memberNo);
			pstmt.setString(2, categoryTitle);
			
			result = pstmt.executeUpdate();
			
		}finally {
			close(pstmt);
		}
		return result;
	}


	/** 단어 상세조회 DAO 
	 * @param conn
	 * @param wordNo
	 * @return
	 */
	public Word selectWordOne(Connection conn, int wordNo) {
		
		Word word = new Word();
		
		try {
			String sql = prop.getProperty("selectWordOne");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setInt(1, wordNo);
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				
				String wordTitle = rs.getString(1);
				String wordDf = rs.getString(2);
				String wordMemo = rs.getString(3);
				String codeBlock = rs.getString(4);
				
				word = new Word( wordNo, wordTitle, wordDf, wordMemo, codeBlock);
				
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return word;
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


	/** 단어추가 DAO
	 * @param conn
	 * @param word
	 * @return
	 */
	public int insertWord(Connection conn, Word word) throws Exception{
		int result = 0;
		
		try {
			String sql = prop.getProperty("insertWord");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setInt(1, word.getCategoryNo());
			pstmt.setString(2, word.getWordTitle());
			pstmt.setString(3, word.getWordDf());
			pstmt.setString(4, word.getWordMemo());
			pstmt.setString(5, word.getCodeBlock());
			
			System.out.println( word.getCategoryNo());
			System.out.println(word.getWordTitle());
			System.out.println( word.getWordDf());
			System.out.println(word.getWordMemo());
			System.out.println(word.getCodeBlock());
			
			result = pstmt.executeUpdate();
			
		}finally {
			close(pstmt);
		}
		return result;
	}


	/** 단어 업데이트 DAO
	 * @param conn
	 * @param word
	 * @return
	 */
	public int updateWord(Connection conn, Word word) throws Exception {
		
		int result = 0;
		
		try {
			String sql = prop.getProperty("updateWord");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, word.getWordTitle());
			pstmt.setString(2, word.getWordDf());
			pstmt.setString(3, word.getWordMemo());
			pstmt.setString(4, word.getCodeBlock());
			pstmt.setInt(5, word.getWordNo());
			
			result = pstmt.executeUpdate();
			
		}finally {
			close(pstmt);
		}
		
		return result;
	}


	/** 단어 삭제 DAO
	 * @param conn
	 * @param wordNo
	 * @return
	 * @throws Exception
	 */
	public int deleteWord(Connection conn, int wordNo) throws Exception{
		
		int result = 0;
		
		try {
			String sql = prop.getProperty("deleteWord");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setInt(1, wordNo);
			
			result = pstmt.executeUpdate();
		}finally {
			close(pstmt);
		}
		
		return result;
	}


	/** 카테고리삭제 DAO
	 * @param conn
	 * @param categoryNo
	 * @return
	 */
	public int deletCategory(Connection conn, int categoryNo) throws Exception{
		int result = 0;
		
		try {
			String sql = prop.getProperty("deleteCategory");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setInt(1, categoryNo);
			
			result = pstmt.executeUpdate();
			
		}finally {
			close(pstmt);
		}
		
		
		return result;
	}


	/** 즐겨찾기한 단어 조회 
	 * @param conn
	 * @param memberNo
	 * @param categoryNo
	 * @return
	 * @throws Exception
	 */
	public List<Word> selectWordFavorite(Connection conn, int memberNo, int categoryNo) throws Exception{
		List<Word> wordList = new ArrayList<>(); 
		
		try {
			String sql = prop.getProperty("selectWordFavorite");
			
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
//				String language = rs.getString("LANGUAGE");
				
				Word word = new Word(wordNo, categoryNo, wordTitle, wordDf, wordMemo, codeBlock,
					 createDate, checked, favorite, quizOx);
				
				wordList.add(word);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}		
		
		return wordList;
	}


	/** 체크된 단어 리스트 조회 DAO
	 * @param conn
	 * @param memberNo
	 * @param categoryNo
	 * @return
	 */
	public List<Word> selectWordChecked(Connection conn, int memberNo, int categoryNo) throws Exception{
		
		List<Word> wordList = new ArrayList<>(); 
		try {
			String sql = prop.getProperty("selectWordChecked");
			
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
//				String language = rs.getString("LANGUAGE");
				
				Word word = new Word(wordNo, categoryNo, wordTitle, wordDf, wordMemo, codeBlock,
					 createDate, checked, favorite, quizOx);
				
				wordList.add(word);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}		
		
		return wordList;
	}


	public List<Word> selectWordUnchecked(Connection conn, int memberNo, int categoryNo) throws Exception{
		
		List<Word> wordList = new ArrayList<>(); 
		try {
			String sql = prop.getProperty("selectWordUnchecked");
			
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
//				String language = rs.getString("LANGUAGE");
				
				Word word = new Word(wordNo, categoryNo, wordTitle, wordDf, wordMemo, codeBlock,
					 createDate, checked, favorite, quizOx);
				
				wordList.add(word);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}		
		
		return wordList;
	}


	/** 단어 즐겨찾기 DAO
	 * @param conn
	 * @param wordNo
	 * @param favorite 
	 * @return
	 */
	public int updateFavorite(Connection conn, int wordNo, String favorite) throws Exception{
		
		int result = 0;
		
		try {
			
			String sql = prop.getProperty("updateFavorite");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, favorite);
			pstmt.setInt(2, wordNo);
			
			result = pstmt.executeUpdate();
			
		}finally {
			close(pstmt);
		}
		return result;
	}


	/** 단어 체크 DAO
	 * @param conn
	 * @param wordNo
	 * @param checked 
	 * @return
	 */
	public int updateChecked(Connection conn, int wordNo, String checked) throws Exception{
		
		int result = 0;
		
		try {
			
			String sql = prop.getProperty("updateChecked");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, checked);
			pstmt.setInt(2, wordNo);
			
			result = pstmt.executeUpdate();
			
		}finally {
			close(pstmt);
		}
		return result;
	}
	
	/** Quiz 결과 업데이트 DAO
	 * @param conn
	 * @param wordNo
	 * @return result
	 * @throws Exception
	 */
	public int updateQuizOx(Connection conn, int wordNo, String quizOx) throws Exception {
		int result = 0;
		
		try {
			
			String sql = prop.getProperty("updateQuizOx");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, quizOx);
			pstmt.setInt(2, wordNo);
			
			result = pstmt.executeUpdate();
			
		}finally {
			close(pstmt);
		}
		return result;
	}


	/** 단어검색 DAO
	 * @param conn
	 * @param memberNo
	 * @param searchWord
	 * @return
	 */
	public List<Word> searchWord(Connection conn, int memberNo, String searchWord) throws Exception{
		
		List<Word> wordList = new ArrayList<>();
		
		try {
			
			String sql = prop.getProperty("searchWord");
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, memberNo);
			pstmt.setString(2, "%" + searchWord + "%");
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
			
				
				int wordNo = rs.getInt(1);
				String wordTitle = rs.getString(2);
				
				Word word = new Word(wordNo, wordTitle);
				
				wordList.add(word);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}
		
		return wordList;
	}


	/** memberNo와 categoryNo가 일치하는 회원의 단어 갯수 조회 DAO
	 * @param conn
	 * @param categoryNo
	 * @return totalCount
	 * @throws Exception
	 */
	public int selectTotalCount(Connection conn, int categoryNo) throws Exception {
		int totalCount = 0;
		
		try {
			String sql = prop.getProperty("selectTotalCount");
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, categoryNo);
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				totalCount = rs.getInt(1);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}
		
		return totalCount;
	}

	/** categoryNo가 일치하는 회원의 정답인 단어 갯수 조회 DAO
	 * @param conn
	 * @param categoryNo
	 * @return correctCount
	 * @throws Exception
	 */
	public int selectCorrectCount(Connection conn, int categoryNo) throws Exception {
		int correctCount = 0;
		
		try {
			String sql = prop.getProperty("selectCorrectCount");
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, categoryNo);
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				correctCount = rs.getInt(1);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}
		
		return correctCount;
	}

	/** QUIZ_OX가 X인 단어 전체 조회 DAO
	 * @param memberNo
	 * @param categoryNo
	 * @return wrongWordList
	 * @throws Exception
	 */
	public List<Word> selectWrongWordAll(Connection conn, int categoryNo) throws Exception {
		List<Word> wrongWordList =  new ArrayList<>(); 
		
		try {
			String sql = prop.getProperty("selectWrongWordAll");
			
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setInt(1, categoryNo);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				Word word = new Word();
				
				word.setWordNo(rs.getInt("WORD_NO"));
				word.setWordTitle(rs.getString("WORD_TITLE"));
				word.setWordDf(rs.getString("WORD_DF"));
				word.setChecked(rs.getString("CHECKED"));
				word.setFavorite(rs.getString("FAVORITE"));
				word.setQuizOx(rs.getString("QUIZ_OX"));
				
				wrongWordList.add(word);
			}
			
		} finally {
			close(rs);
			close(pstmt);
		}		
		
		return wrongWordList;
	}
	
}
