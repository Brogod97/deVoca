package devoca.voca.model.service;

import static devoca.common.JDBCTemplate.*;

import java.sql.Connection;
import java.util.List;

import devoca.member.model.vo.Member;
import devoca.voca.model.dao.VocaDAO;
import devoca.voca.model.vo.Category;

public class VocaService {
	private VocaDAO dao = new VocaDAO();
	

	/** 회원 1명에 저장된 카테고리 전체 조회 Service
	 * @return categoryList
	 * @throws Exception 
	 */
	public List<Category> selectCategoryAll(int loginMemberNo) throws Exception {
						  
		Connection conn = getConnection();
		
		List<Category> categoryList = dao.selectCategoryAll(conn, loginMemberNo);
		
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
}
