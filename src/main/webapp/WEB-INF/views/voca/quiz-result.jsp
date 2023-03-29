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
    <link rel="stylesheet" href="${contextPath}/resources/css/quiz-result.css" />

    <!-- font-awesome -->
    <script
    src="https://kit.fontawesome.com/5d7e6e936d.js"
    crossorigin="anonymous"
  ></script>

    <script src="https:////cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


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
      <section class="quiz-result">
        <!-- 원형 프로그래스바 -->
          <div class="wrap">
            <div class="progress" data-percent="60">
                <span class="progress-result"></span>
              </div>
            </div>
          </div>
          <!-- 결과값 -->
          <div class="result-set">
            <div class="rotate-a">
              <i class="ic-reset"></i>
              <a href="${contextPath}/WEB-INF/views/voca/quiz-game">다시 풀기</a> 
            </div>
            <div class="result-value">
              <div>
                문제개수 :
                <span></span>
              </div>
              <div>
                정답 수 :
                <span></span>
              </div>
              <div>
                정답 수 :
                <span></span>
              </div>
            </div>
            <div class="result-line"></div>
            <div class="wrong-list">
              <h3>오답 목록</h3>
            </div>

          </div>

      </section>

    
  </section>

    </section>
    
    <script src="${contextPath}/resources/js/google-search.js"></script>
    <script src="${contextPath}/resources/js/quiz-result.js"></script>
  </body>
</html>

        

