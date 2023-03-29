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
    <link rel="stylesheet" href="${contextPath}/resources.css/common/template-quiz.css" />
    <link rel="stylesheet" href="${contextPath}/resources/css/quiz-main.css" />
    <link rel="stylesheet" href="${contextPath}/resources/css/loding.css" />


    <!-- font-awesome -->
    <script
      src="https://kit.fontawesome.com/5d7e6e936d.js"
      crossorigin="anonymous"
    ></script>

    <title>단어장 서비스 계열 기본 template - header, nav, sidebar</title>
  </head>
  <body>
    <main>
      <!-- 헤더 -->
      <jsp:include page="${contextPath}/WEB-INF/views/common/header.jsp" />
      
      <!-- 바디 -->
      <!-- nav + sidebar 컨테이너 -->
      <section class="container">
        <!-- nav바 -->
        <jsp:include page="${contextPath}/WEB-INF/views/common/navbar.jsp" />
        
      </section>
    </main>

    <!-- 메인 콘텐츠 영역 -->
    <section class="main-content-area">
      <!-- 로딩 -->
      <div class="wrap">
        <div class="loading">
          <div class="bounceball"></div>
          <div class="text">NOW LOADING</div>
        </div>
      </div>
      <section class="container-main">
        <div class="container-main-left">
          <img
            src="${contextPath}/resources/assets/images/quiz-polygon-left.png"
            alt=""
            class="container-main-img1"
          />
        </div>
        <div>
          <div>
            <h1>Quiz</h1>
          </div>
          <div>
            <h2>카테고리를 선택해 주세요</h2>
          </div>
          <div>
            <a href="quiz-game.html">
              <button class="container-main-btn">시작하기</button>
            </a>
          </div>
          <div class="container-main-content">
            <button>JAVA</button>
            <button>JavaScript</button>
            <button>Python</button>
            <button>DB</button>
          </div>
        </div>
        <div class="container-main-right">
          <img
            src="${contextPath}/resources/assets/images/quiz-polygon-right.png"
            alt=""
            class="container-main-img2"
          />
        </div>
      </section>
    </section>
    
    <script src="${contextPath}/resources/js/google-search.js"></script>
    <script src="/common/template-2.js"></script>
    <script src="${contextPath}/resources/js/quiz-main.js"></script>
  </body>
</html>
