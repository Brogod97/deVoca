package devoca.voca.model.service;

import static devoca.common.JDBCTemplate.*;

import java.sql.Connection;
import java.util.List;

import devoca.member.model.vo.Member;
import devoca.voca.model.dao.VocaDAO;
import devoca.voca.model.vo.Category;
import devoca.voca.model.vo.Word;

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
}
