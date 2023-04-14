package devoca.member.controller;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;
import javax.mail.internet.MimeMultipart;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;


import devoca.member.model.service.MemberService;

@WebServlet("/member/resetPw")
public class PasswordResetServlet extends HttpServlet{
	
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
	};
	
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

	String path = "/WEB-INF/views/member/password-reset.jsp";
	
	req.getRequestDispatcher(path).forward(req, resp);
	
String inputEmail = req.getParameter("uid"); // 입력 받은 이메일
	
	String subject = "[deVoca] 임시 비밀번호 발송"; // 제목
	
	String fromEmail = "bbsm314@gmail.com"; // 보내는 사람으로 표시될 이메일 (이메일 따라서 안될수도 있음)
	String fromUsername = "관리자"; // 보내는 사람 이름
	String toEmail = inputEmail; // 받는사람, 콤마(,)로 여러개 나열 가능
	
	final String smtpEmail = "bbsm314@gmail.com"; // 이메일
	final String password = "dldgvzudiipwtjbw"; // 발급 받은 비밀번호
	
	// 메일 옵션 설정
			Properties props = new Properties();
			
			// 중요
			props.put("mail.transport.protocol", "smtp");
			props.put("mail.smtp.host", "smtp.gmail.com");
			props.put("mail.smtp.port", "587"); //465, 587
			props.put("mail.smtp.auth", "true");

			// 추가 옵션
			props.put("mail.smtp.quitwait", "false");
			props.put("mail.smtp.socketFactory.port", "587");
			props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
			props.put("mail.smtp.socketFactory.fallback", "true");
			props.put("mail.smtp.starttls.enable", "true");
			
			try {
				// 메일 세션 생성
				Session session = Session.getDefaultInstance(props);

				// 메일 송/수신 옵션 설정(1명 보내기)
				Message message = new MimeMessage(session);
			
				message.setFrom(new InternetAddress(fromEmail, fromUsername)); 	// 송신자(보내는 사람) 지정
				
				message.addRecipient(RecipientType.TO, new InternetAddress(toEmail)); // 수신자(받는사람) 지정
				
				message.setSubject(subject); // 이메일 제목 지정
				
				
				
				// 메일 콘텐츠 설정
				Multipart mParts = new MimeMultipart();
				MimeBodyPart mTextPart = new MimeBodyPart();

				
				// 인증번호 6자리 생성코드(영어 대/소문 + 숫자)
				String temporaryPw = "";
				for(int i=0 ; i< 6 ; i++) {
					
					int sel1 = (int)(Math.random() * 3); // 0:숫자 / 1,2:영어
					
					if(sel1 == 0) {
						
						int num = (int)(Math.random() * 10); // 0~9
						temporaryPw += num;
						
					}else {
						
						char ch = (char)(Math.random() * 26 + 65); // A~Z
						
						int sel2 = (int)(Math.random() * 2); // 0:소문자 / 1:대문자
						
						if(sel2 == 0) {
							ch = (char)(ch + ('a' - 'A')); // 대문자로 변경
						}
						
						temporaryPw += ch;
					}
					
				}
				
				
				// 메일에 출력할 텍스트
				StringBuffer sb = new StringBuffer(); // 가변성 문자열 저장 객체
				sb.append("<h3>[deVoca] 임시 비밀번호 발송.</h3>\n");
				sb.append("<h3>임시 비밀 번호 : <span style='color:red'>"+ temporaryPw +"</span></h3>\n");
				sb.append("<h4>로그인 후 비밀번호를 변경 해 주세요<h4>");
				
				//sb.append("<img src='https://cdn.wikifarmer.com/wp-content/uploads/2022/02/%ED%94%8C%EB%9F%BC%EB%B0%94%EA%B3%A0.jpg'>");
				

				String mailContent = sb.toString(); // 문자열로 반환
				
				// 메일 콘텐츠 - 내용 , 메일인코딩, "html" 추가 시 HTML 태그가 해석됨
				mTextPart.setText(mailContent, "UTF-8", "html");
				mParts.addBodyPart(mTextPart);

				
				// 메일 콘텐츠 지정
				message.setContent(mParts);

				
				
				// MIME 타입 설정 (이메일 내용이 깨질 때 사용)
				/*MailcapCommandMap MailcapCmdMap = (MailcapCommandMap) CommandMap.getDefaultCommandMap();
				MailcapCmdMap.addMailcap("text/html;; x-java-content-handler=com.sun.mail.handlers.text_html");
				MailcapCmdMap.addMailcap("text/xml;; x-java-content-handler=com.sun.mail.handlers.text_xml");
				MailcapCmdMap.addMailcap("text/plain;; x-java-content-handler=com.sun.mail.handlers.text_plain");
				MailcapCmdMap.addMailcap("multipart/*;; x-java-content-handler=com.sun.mail.handlers.multipart_mixed");
				MailcapCmdMap.addMailcap("message/rfc822;; x-java-content-handler=com.sun.mail.handlers.message_rfc822");
				CommandMap.setDefaultCommandMap(MailcapCmdMap);*/

				
				// 메일 발송
				Transport t = session.getTransport("smtp");
				t.connect(smtpEmail, password);
				t.sendMessage(message, message.getAllRecipients());
				t.close();
				
				
			
				
														//sysdate
				 //인증번호를 받은 이메일, 인증번호, 인증번호 발급 시간  -> DB 삽입
				int result = new MemberService().temporaryPw(inputEmail,getSha512(temporaryPw));

				
				resp.getWriter().print(result);
				
				

			} catch (Exception e) {
				e.printStackTrace();
				
				// ajax error 속성 활용을 위한 500에러를 응답으로 전달.
				resp.setStatus(500);
				resp.getWriter().print(e.getMessage());
			}
			
}
}