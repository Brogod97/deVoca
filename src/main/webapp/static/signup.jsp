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
    <link rel="stylesheet" href="${contextPath}/resources/css/signup.css" />

    <title>deVoca - 회원 가입</title>
  </head>
  <body>
    <body>
      <main>
        <jsp:include page="/WEB-INF/views/common/header.jsp" />
      </main>
      <!-- 바디 -->
      <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
      <section class="main-content-area">
        <div id="sign-up-box">
          <form action="/member/signUp" method="post">
            <h1 id="sign-up-title">회원 가입</h1>

            <!-- 인풋창 묶음 -->
            <div id="input-group">
              <div id="uName">
                <i class="ic-login-circle-default"></i>
                <input
                  id="nn"
                  type="text"
                  placeholder="닉네임을 입력해주세요"
                />
              </div>

              <div id="uId">
                <i class="ic-login-circle-default"></i>
                <input
                  id="uid"
                  type="text"
                  name="inputId"
                  placeholder="아이디를 입력해주세요"
                />
              </div>

              <div id="uPw">
                <i class="ic-login-circle-default"></i>
                <input
                  id="upw"
                  type="password"
                  name="inputPw"
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>

              <div id="uPw2">
                <i class="ic-login-circle-default"></i>
                <input
                  id="upw2"
                  type="password"
                  name="inputPw"
                  placeholder="비밀번호를 확인해주세요"
                />
              </div>
            </div>

            <div id="btn-submit">
              <button type="submit" class="btn-primary-fill">확인</button>
            </div>

            <div id="already-id">
              <p id="already-text">
                이미 계정이 있으신가요?<a href="${contextPath}/member/logIn"
                  >로그인</a
                >
              </p>
            </div>

            <div class="or">OR</div>

            <div id="sns">
              <button onclick="kakaoLogin();" id="kakao">
                <i class="ic-kakao"></i>카카오 계정으로 가입
              </button>

              <button id="google">
                <img
                  src="${contextPath}/resources/assets/images/google-logo.png"
                />
                &emsp;구글 계정으로 가입
              </button>
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
