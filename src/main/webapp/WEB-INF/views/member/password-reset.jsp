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
    <link
      rel="stylesheet"
      href="${contextPath}/resources/css/password-reset.css"
    />

    <title>deVoca - 비밀번호 찾기</title>
  </head>
  <body>
    <body>
      <main>
        <jsp:include page="/WEB-INF/views/common/header.jsp" />
      </main>
      <!-- 바디 -->
      <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
      <section class="main-content-area">
        <div id="reset-box">
          <h1 id="reset-title">비밀번호 재설정</h1>

          <div class="reset-text">
            <p>비밀번호를 잊으셨나요?</p>
            <p>임시 비밀번호를 받을 이메일을 입력해주세요.</p>
            <p>로그인 후 사용하실 비밀번호로 변경 해 주세요</p>
          </div>
          <form onsubmit="return signUpValidate()">
            <p>이메일 입력 *</p>
            <input
              id="uid"
              type="email"
              name="uid"
              placeholder="이메일을 입력해주세요"
              required
            />
            <p id="idMessage" class="required">&nbsp;</p>
            <button id="sendBtn" type="submit" class="btn-primary-fill send-Pw">
              비밀번호 전송
            </button>
          </form>
        </div>
      </section>
      <!-- 푸터 -->
      <jsp:include page="/WEB-INF/views/common/footer.jsp" />

      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
      ></script>
      <script src="${contextPath}/resources/js/password-reset.js"></script>
      <script src="${contextPath}/resources/js/google-search.js"></script>
    </body>
  </body>
</html>