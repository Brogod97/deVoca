package devoca.common.wrapper;

import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

public class EncryptWrapper extends HttpServletRequestWrapper {

	// HttpServletRequestWrapper 
	// - 클라이언트 요청 객체 HttpServletRequest를 오버라이딩 하는 방법을 제공하는 클래스
	
	// 생성자가 작성되어 있으면
	// 컴파일러가 기본 생성자를 자동으로 추가 안함
	
	// -> Wrapper 클래스 생성 시 반드시 HttpServletRequest 객체를 매개변수로 전달해야 한다.
	public EncryptWrapper(HttpServletRequest request) {
		super(request);
	}

	
	// getParameter() 오버라이딩
	@Override
	public String getParameter(String name) {
		// 매개변수 name : input 태그의 name 속성 값
		// super.getParameter(name) : 기존 getParameter() 메서드
		
		String value = null;
		
		switch(name) {
		case "inputPw" :  
		case "memberPw" :
		case "currentPw" :
		case "newPw" :
		
			value = getSha512( super.getParameter(name) );
			break;
			
		// 암호화 되는 경우가 아니라면 기존 getParamter() 메서드의 형태를 유지
		default : value = super.getParameter(name);
		}
		
		return value;
	}
	
	
	
	// 암호화 메서드(SHA-512 해시 함수)
	
	// 해시 함수 : 어떤 문자열이든 일정한 길이의 무작위 문자열로 변환하는 함수(중복 X)
	
	private String getSha512(String pw) {
		// 매개변수 pw : 암호화 되기 전 비밀번호
		
		String encryptPw = null; // 암호화된 비밀번호 저장 변수
		
		// 1. 해시 함수를 수행할 객체를 참조할 변수 선언
		MessageDigest md = null;
		
		try {
			// 2. SHA-512 방식의 해시 함수를 수행할 수 있는 객체를 얻어옴
			md = MessageDigest.getInstance("SHA-512");
			
			// 3. md를 이용해 암호화를 진행할 수 있도록 pw를 byte[] 형태로 변환
			byte[] bytes = pw.getBytes(Charset.forName("UTF-8"));
			
			// 4. 암호화 수행 -> 암호화 결과가 md 내부에 저장됨
			md.update(bytes);
			
			// 5. 암호화된 비밀번호를 enctyptPw에 대입
			// -> byte[]을 String으로 변환할 필요가 있음
			//  Base64: byte코드를 문자열로 변환하는 객체
			encryptPw =  Base64.getEncoder().encodeToString(md.digest());   
			
			System.out.println("암호화 전 : " + pw);
			System.out.println("암호화 후 : " + encryptPw);
			
			
		}catch(NoSuchAlgorithmException e) {
			// SHA-512 해시 함수가 존재하지 않을 때 예외 발생
			e.printStackTrace();
		}
		
		return encryptPw;
	}
	
	
	
	
	
	
	
	
}


