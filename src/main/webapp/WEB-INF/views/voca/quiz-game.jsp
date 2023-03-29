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
    <link rel="stylesheet" href="${contextPath}/resources/css/quiz-game.css" />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

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
      <!-- 메인화면 -->
      <div class="swiper mySwiper swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div class="swiper-wrapper" id="swiper-wrapper-a6d1108e48cf91028" aria-live="polite">
          <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 9">
            
            <div class="quiz-content-area">
              <div class="quiz-header">
                <h1>INSTR(컬럼명 | 문자열, '찾을 문자열' [, 찾기 시작할 위치] [, 순번])</h1>
                <div class="quiz-line"></div>
              </div>
              <div class="quiz-content">
                <div>
                  <p>지정한 위치부터 지정한 순번째로 검색되는 문자의 위치를 반환</p>
                </div>
                <div>
                  <p>컬럼이나 문자열에서 지정한 위치부터 지정된 길이만
                    문자열을 잘라서 반환</p>
                </div>
                <div>
                  <p>주어진 컬럼이나 문자열의 앞, 뒤, 양쪽에 있는 지정된 문자를 제거</p>
                </div>
                <div>
                  <p>소수점 첫째 자리에서 올림 처리</p>
                </div>
              </div>
            </div>
            
          </div>
          <div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 9">

            <div class="quiz-content-area">
              <div class="quiz-header">
                <h1>2 번입니다</h1>
                <div class="quiz-line"></div>
              </div>
              <div class="quiz-content">
                <div>
                  <p>지정한 위치부터 지정한 순번째로 검색되는 문자의 위치를 반환</p>
                </div>
                <div>
                  <p>컬럼이나 문자열에서 지정한 위치부터 지정된 길이만
                    문자열을 잘라서 반환</p>
                </div>
                <div>
                  <p>주어진 컬럼이나 문자열의 앞, 뒤, 양쪽에 있는 지정된 문자를 제거</p>
                </div>
                <div>
                  <p>소수점 첫째 자리에서 올림 처리</p>
                </div>
              </div>
            </div>

          </div>
          <div class="swiper-slide" role="group" aria-label="3 / 9">Slide 3</div>
          <div class="swiper-slide" role="group" aria-label="4 / 9">Slide 4</div>
          <div class="swiper-slide" role="group" aria-label="5 / 9">Slide 5</div>
          <div class="swiper-slide" role="group" aria-label="6 / 9">Slide 6</div>
          <div class="swiper-slide" role="group" aria-label="7 / 9">Slide 7</div>
          <div class="swiper-slide" role="group" aria-label="8 / 9">Slide 8</div>
          <div class="swiper-slide" role="group" aria-label="9 / 9">

            <div class="quiz-content-area">
              <div class="quiz-header">
                <h1>마지막 입니다</h1>
                <div class="quiz-line"></div>
              </div>
              <div class="quiz-content">
                <div>
                  <p>지정한 위치부터 지정한 순번째로 검색되는 문자의 위치를 반환</p>
                </div>
                <div>
                  <p>컬럼이나 문자열에서 지정한 위치부터 지정된 길이만
                    문자열을 잘라서 반환</p>
                </div>
                <div>
                  <p>주어진 컬럼이나 문자열의 앞, 뒤, 양쪽에 있는 지정된 문자를 제거</p>
                </div>
                <div>
                  <p>소수점 첫째 자리에서 올림 처리</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-a6d1108e48cf91028" aria-disabled="false"></div>
        <div class="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-a6d1108e48cf91028" aria-disabled="true"></div>
        <div class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"><span class="swiper-pagination-progressbar-fill" style="transform: translate3d(0px, 0px, 0px) scaleX(0.111111) scaleY(1); transition-duration: 300ms;"></span></div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
   
    <script src="${contextPath}/resources/js/google-search.js"></script>
    <script src="${contextPath}/resources/js/quiz-game.js"></script>
  </body>
</html>
