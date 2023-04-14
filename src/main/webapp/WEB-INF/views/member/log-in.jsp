<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>


<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name ="google-signin-client_id" content="199670657184-jg1kr1cpr3f27694ct42g7hdb355ofqd.apps.googleusercontent.com">
	
    <link rel="stylesheet" href="${contextPath}/resources/css/main.css" />
    <link
      rel="stylesheet"
      href="${contextPath}/resources/css/common/template-1.css"
    />
    <link rel="stylesheet" href="${contextPath}/resources/css/log-in.css" />

    <title>deVoca - 로그인</title>
  </head>
  <body>
    <main>
      <jsp:include page="/WEB-INF/views/common/header.jsp" />
    </main>
    <!-- 바디 -->
    <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
    <section class="main-content-area">
    
        	<c:choose>
        	
        	<%-- 로그인이 되어있지 않은 경우 --%>
        		<c:when test="${ empty sessionScope.loginMember }">
        		
        		<div id="login-box">
        		
        		<form action="${contextPath}/member/login" method="post" name="loginform" onsubmit="return loginValidate()">
        		
        		<h1 id="title">로그인</h1>
        		
        		<section>
        			<p>아이디</p>
          <input
            id="uid"
            name="inputId"
            type="email"
            placeholder="deVoca@email.com"
            value="${cookie.saveId.value}"
            
          />

          <p>비밀번호</p>
          <input
            id="upw"
            name="inputPw"
            type="password"
            placeholder="******"
          />
        		</section>
        		
        		<%-- 쿠키에 saveId 가 있는 경우 --%>
        		<c:if test="${ !empty cookie.saveId.value}">
        			<%-- chk 변수 생성(page scope)--%>
                                <c:set var="chk" value="checked"/>
        		</c:if>
        		
        		<div id="remember-searchPw">
            <label>
              <input type="checkbox" id="saveId" name="saveId" ${chk} />  <label for="saveId"></label>아이디 저장
            
            </label>
		
		
            <a href="${contextPath}/member/resetPw">비밀번호를 잊으셨나요?</a>
          </div>
          
          <div id="btn-login">
            
            <section>
          	<button type="submit" class="btn-primary-fill btn-long login-btn" >
              로그인
            </button>
            </section>
          </div>
        		</form>
        		
        		<div class="or">OR</div>

          <div id="sns">
         	
           <button onclick="kakaoLogin()" id="kakao">
              <i class="ic-kakao"></i>카카오 계정으로 로그인
            </button>
           
          </div>


          <div id="non-member">
            아직 회원이 아니신가요?
            <a href="${contextPath}/static/terms.jsp" id="join"> 회원가입</a>
          </div>
        		</div>
        		
        		</c:when>
        
        	</c:choose>
    
     
    </section>
    <c:if test="${ !empty sessionScope.message }">
      <script>
        alert("${message}");
        // EL 작성 시 scope를 지정하지 않으면
        // page -> request -> session -> application 순서로 검색하여
        // 일치하는 속성이 있으면 출력
      </script>

      <%-- message 1회 출력 후 session에서 제거 --%>
      <c:remove var="message" scope="session" />
    </c:if>

    <!-- 푸터 -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

	
     <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      <script src="${contextPath}/resources/js/sns-login.js"></script>
    <script src="${contextPath}/resources/js/memberLogin.js"></script>
    <script src="${contextPath}/resources/js/google-search.js"></script>
   
  </body>
</html>