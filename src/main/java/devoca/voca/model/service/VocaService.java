package devoca.voca.model.service;

import static devoca.common.JDBCTemplate.*;

import java.sql.Connection;
import java.util.List;

import devoca.member.model.vo.Member;
import devoca.voca.model.dao.VocaDAO;
import devoca.voca.model.vo.Category;
import devoca.voca.model.vo.Word;

/**
 * @author gudtl
 *
 */
public class VocaService {
	private VocaDAO dao = new VocaDAO();
	

	/** MEMBER_NO가 일치하는 카테고리 리스트 조회 Service
	 * @return categoryList
	 * @throws Exception 
	 */
	public List<Category> selectCategoryAll(int memberNo) throws Exception {
						  
		Connection conn = getConnection();
		
		List<Category> categoryList = dao.selectCategoryAll(conn, memberNo);
		
		close(conn);
		
		return categoryList;
	}


	/** 전체 회원 목록(MEMBER_NO, MEMBER_NM, USER_IMG) 조회 Service
	 * @return memberList
	 * @throws Exception
	 */
	public List<Member> selectMemberAll() throws Exception {
		
		Connection conn = getConnection();
		
		List<Member> memberList = dao.selectMemberAll(conn); 
		
		close(conn);
		
		return memberList;
	}


	/** MEMBER_NO와 CATEGORY_NO가 일치하는 단어 전체 조회 Service
	 * @param memberNo
	 * @param categoryNo
	 * @return wordList
	 * @throws Exception
	 */
	public List<Word> selectWordAll(int memberNo, int categoryNo) throws Exception {
		Connection conn = getConnection();
		
		List<Word> wordList = dao.selectWordAll(conn, memberNo, categoryNo);
		
		close(conn);
		
		return wordList;
	}

	/** 카테고리 추가 service
	 * @param memberNo
	 * @param categoryTitle 
	 * @return
	 */
	public int insertCategory(int memberNo, String categoryTitle) throws Exception{
		
		Connection conn = getConnection();
		
		int result = dao.insertCategory(conn, memberNo, categoryTitle);
		
		if(result > 0) commit(conn);
		else           rollback(conn);
				
		return result;
	}


	/** 단어 상세조회 service
	 * @param wordNo
	 * @return
	 */
	public Word selectWordOne(int wordNo) {
		
		Connection conn = getConnection();
		
		Word voca = dao.selectWordOne(conn, wordNo);
		
		close(conn);
		
		return voca;
	}
	
	/** 입력받은 회원명과 일치하는 회원들 조회 Service
	 * @param inputUserName
	 * @return userList
	 * @throws Exception
	 */
	public List<Member> searchUser(String inputUserName) throws Exception {
		
		Connection conn = getConnection();
		
		List<Member> userList = dao.searchUser(conn, inputUserName);
		
		close(conn);
		
		return userList;
	}


	/** 단어 추가 service
	 * @param word
	 * @return
	 */
	public int insertword(Word word) throws Exception{
		
		Connection conn = getConnection();
		
		int result = dao.insertWord(conn, word);
		
		if(result > 0) commit(conn);
		else           rollback(conn);
		
		close(conn);
		
		return result;
	}


	/** 단어 업데이트 service
	 * @param word
	 * @return
	 */
	public int updateWord(Word word) throws Exception{
		
		Connection conn = getConnection();
		
		int result = dao.updateWord(conn, word);
		
		if(result > 0) commit(conn);
		else		   rollback(conn);
		
		close(conn);
		
		return result;
	}


	/** 단어삭제 Service
	 * @param wordNo
	 * @return
	 */
	public int deleteWord(int wordNo) throws Exception{
		
		Connection conn = getConnection();
		
		int result = dao.deleteWord(conn, wordNo);
		
		if(result > 0) commit(conn);
		else		   rollback(conn);
		
		close(conn);
		
		return result;
	}


	/** 카테고리삭제 Service
	 * @param categoryNo
	 * @return
	 */
	public int deleteCategory(int categoryNo) throws Exception{
		
		Connection conn = getConnection();
		
		int result = dao.deletCategory(conn, categoryNo);
		
		if(result > 0) commit(conn);
		else		   rollback(conn);
		
		close(conn);
		
		return result;
	}

	
	/** 즐겨찾기한 단어리스트 조회 Service
	 * @param memberNo
	 * @param categoryNo
	 * @return
	 */
	public List<Word> selectWordFavorite(int memberNo, int categoryNo) throws Exception{
		Connection conn = getConnection();
		
		List<Word> wordList = dao.selectWordFavorite(conn, memberNo, categoryNo);
		
		close(conn);
		
		return wordList;
	}


	/** 체크된 단어리스트 조회 Service
	 * @param memberNo
	 * @param categoryNo
	 * @return
	 * @throws Exception
	 */
	public List<Word> selectWordChecked(int memberNo, int categoryNo) throws Exception{
		Connection conn = getConnection();
		
		List<Word> wordList = dao.selectWordChecked(conn, memberNo, categoryNo);
		
		close(conn);
		
		return wordList;
	}


	/** 체크안된 단어리스트 조회 Service
	 * @param memberNo
	 * @param categoryNo
	 * @return
	 */
	public List<Word> selectWordUnchecked(int memberNo, int categoryNo) throws Exception{
		Connection conn = getConnection();
		
		List<Word> wordList = dao.selectWordUnchecked(conn, memberNo, categoryNo);
		
		close(conn);
		
		return wordList;
	}


	/** 단어 즐겨찾기 Service
	 * @param wordNo
	 * @param favorite 
	 * @return
	 */
	public int updateFavorite(int wordNo, String favorite) throws Exception{
		Connection conn = getConnection();
		
		int result = dao.updateFavorite(conn, wordNo, favorite);
		
		if(result > 0) commit(conn);
		else		   rollback(conn);
		
		close(conn);
		
		return result;
	}


	/** 단어 체크 Service
	 * @param wordNo
	 * @param checked 
	 * @return
	 */
	public int updateChecked(int wordNo, String checked) throws Exception{
		Connection conn = getConnection();
		
		int result = dao.updateChecked(conn,wordNo, checked);
		
		if(result > 0) commit(conn);
		else		   rollback(conn);
		
		close(conn);
		
		return result;
	}
	
	/** Quiz 결과 업데이트 Service
	 * @param wordNo
	 * @return result
	 * @throws Exception
	 */
	public int updateQuizOx(int wordNo, String quizOx) throws Exception {
		Connection conn = getConnection();
		
		int result = dao.updateQuizOx(conn, wordNo, quizOx);
		
		if(result > 0) commit(conn);
		else		   rollback(conn);
		
		close(conn);
		
		return result;
	}


	/** 단어 검색 Service
	 * @param memberNo
	 * @param searchWord
	 * @return
	 */
	public List<Word> searchWord(int memberNo, String searchWord) throws Exception{
		
		Connection conn = getConnection();
		
		List<Word> wordList = dao.searchWord(conn, memberNo, searchWord);
		
		
		return null;
	}


	/** categoryNo가 일치하는 회원의 단어 전체 갯수 조회 Service
	 * @param categoryNo
	 * @return totalCount
	 * @throws Exception
	 */
	public int selectTotalCount(int categoryNo) throws Exception {
		Connection conn = getConnection();
		
		int totalCount = dao.selectTotalCount(conn, categoryNo);
		
		close(conn);
		
		return totalCount;
	}

	/** categoryNo가 일치하는 회원의 정답인 단어 갯수 조회 Service
	 * @param categoryNo
	 * @return totalCount
	 * @throws Exception
	 */
	public int selectCorrectCount(int categoryNo) throws Exception {
		Connection conn = getConnection();
		
		int correctCount = dao.selectCorrectCount(conn, categoryNo);
		
		close(conn);
		
		return correctCount;
	}

	/** QUIZ_OX가 X인 단어 전체 조회 Service
	 * @param memberNo
	 * @param categoryNo
	 * @return wrongWordList
	 * @throws Exception
	 */
	public List<Word> selectWrongWordAll(int categoryNo) throws Exception {
		Connection conn = getConnection();
		
		List<Word> wrongWordList = dao.selectWrongWordAll(conn, categoryNo);
		
		close(conn);
		
		return wrongWordList;
	}
}
