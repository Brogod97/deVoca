<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %>


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
    
    	<%-- 로그인이 되어있지 않은 경우 --%>
       	<c:when test="${ empty sessionScope.loginMember }"> 
       	
      <div id="login-box">
        <form action="${contextPath}/member/login" method="post" name="loginform" onsubmit="return loginValidate()">
          <h1 id="title">로그인</h1>

          <p>아이디</p>
          <input
            id="loginId"
            name="inputId"
            type="email"
            value="${cookie.saveId.value}"
            placeholder="deVoca@email.com"
            
          />

          <p>비밀번호</p>
          <input
            id="loginPw"
            name="inputPw"
            type="password"
            placeholder="******"
          />

          <div id="remember-searchPw">
            <label>
              <input type="checkbox" id="remember-login" name="saveId" ${chk} />
              자동로그인
            </label>
		
		 <%-- 쿠키에 saveId가 있는 경우--%>
           <c:if test="${ !empty cookie.saveId.value}">

             <%-- chk 변수 생성(page scope)--%>
             <c:set var="chk" value="checked"/>

           </c:if>
            <a href="${contextPath}/member/resetPw">비밀번호를 잊으셨나요?</a>
          </div>
          <div id="btn-login">
            
          	<button type="submit" class="btn-primary-fill btn-long login-btn">
              로그인
            </button>
          </div>

          <div class="or">OR</div>

          <div id="sns">
            <button onclick="kakaoLogin();" id="kakao">
              <i class="ic-kakao"></i>카카오 계정으로 로그인
            </button>

            <button  id="google" onsubmit="initialize()">
              <img
                src="${contextPath}/resources/assets/images/google-logo.png"
              />구글 계정으로 로그인
            </button>
          </div>

          <div id="non-member">
            아직 회원이 아니신가요?
            <a id="join"> 회원가입</a>
          </div>
        </form>
    
       
      </div>
       </c:when>
    </section>

    <!-- 푸터 -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

	<script src="https://accounts.google.com/gsi/client" async defer></script>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="${contextPath}/resources/js/memberLogin.js"></script>
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    <script src="${contextPath}/resources/js/sns-login.js"></script>
    <script src="${contextPath}/resources/js/google-search.js"></script>
    <script type="module" src="${contextPath}/resources/js/login.js"></script>
  </body>
</html>
