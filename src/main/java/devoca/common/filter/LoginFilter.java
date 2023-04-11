package devoca.common.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
// 게시글 등록, 수정, 삭제
// 마이페이지 관련
// 댓글 등록, 수정, 삭제 등등

@WebFilter(filterName = "loginFilter", 
		   urlPatterns = {"/board/write", "/board/delete",
		   		   "/reply/insert", "/reply/update", "/reply/delete",
		   		    "/member/member-profile","/voca/voca-main","/voca/quiz-main"})

public class LoginFilter extends HttpFilter implements Filter {
       
	public void init(FilterConfig fConfig) throws ServletException {
		System.out.println("로그인 필터 생성");
	}

	public void destroy() {
		System.out.println("로그인 필터가 변경되어 파괴 -> 이후 재생성");
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
	
		// 클라이언트 요청 시 로그인 여부를 확인(Session에 loginMember가 있는지 확인)
		// -> 로그인 되어있지 않으면 메인 페이지로 리다이렉트
		
		// 1. ServletRequest, ServletResponse 다운 캐스팅
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse resp = (HttpServletResponse)response;
		
		// 2. Session 얻어오기
		HttpSession session = req.getSession();
		
		// 3. 로그인 되어있는지 확인
		if(  session.getAttribute("loginMember") != null ) { // 로그인이 되어있는 경우
			
			// 다음 필터 호출, 없으면 servlet으로 이동
			chain.doFilter(request, response);
			
		} else { // 로그인이 되어있지 않은 경우
			
			session.setAttribute("message", "로그인 후 이용해주세요.");
			
			resp.sendRedirect( req.getContextPath() ); // 메인 페이지로 이동
		}
		
		
	}


}
