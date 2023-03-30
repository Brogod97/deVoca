<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="${contextPath}/resources/css/main.css" />
    <link
      rel="stylesheet"
      href="${contextPath}/resources/css/common/template-1.css"
    />
    <link rel="stylesheet" href="${contextPath}/resources/css/log-in.css" />

    <title>deVoca - 로그인</title>
  </head>
  <body>
    <body>
      <main>
        <jsp:include page="/WEB-INF/views/common/header.jsp" />
      </main>
      <!-- 바디 -->
      <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
      <section class="main-content-area">
        <div id="login-box">
          <form>
            <h1 id="title">로그인</h1>

            <p>아이디</p>
            <input type="email" placeholder="deVoca@email.com" />

            <p>비밀번호</p>
            <input type="password" placeholder="******" />

            <div id="remember-searchPw">
              <label>
                <input type="checkbox" id="remember-login" />
                자동로그인
              </label>
              <a href="${contextPath}/WEB-INF/views/member/password-reset.jsp"
                >비밀번호를 잊으셨나요?</a
              >
            </div>
            <div id="btn-login">
              <button type="submit" class="btn-primary-fill btn-long login-btn">
                로그인
              </button>
            </div>

            <div class="or">OR</div>

            <div id="sns">
              <a href="${contextPath}/WEB-INF/views/voca/voca-main.jsp">
                <button onclick="kakaoLogin();" id="kakao">
                  <i class="ic-kakao"></i>카카오 계정으로 로그인
                </button></a
              >

              <button id="google">
                <img src="${contextPath}/resources/assets/images/google-logo.png" />구글 계정으로 로그인
              </button>
            </div>

            <div id="non-member">
              아직 회원이 아니신가요?
              <a href="${contextPath}/WEB-INF/views/member/signup.jsp" id="join"> 회원가입</a>
            </div>
          </form>
        </div>
      </section>

      <!-- 푸터 -->
      <jsp:include page="/WEB-INF/views/common/footer.jsp" />

      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      <script src="${contextPath}/resources/js/sns-login.js"></script>
      <script src="${contextPath}/resources/js/google-search.js"></script>
    </body>
  </body>
</html>
