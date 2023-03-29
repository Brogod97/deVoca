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
      <div class="test-delete-this-div">
        이 div는 삭제하시고, main-content-area 여기부터 각자 작업 시작하시면
        됩니다.
        <br />
        <pre>
          main-content-area 영역 적용 값 (css) 
          
          - width: calc(100% - ((var(--sidebar-width) + var(--nav-width))));

          - height: 100%;

          - margin-top: var(--header-height);

          - margin-left: calc((var(--sidebar-width) + var(--nav-width)));
        </pre>
      </div>
    </section>
    <!-- 헤더 그림자용 -->
    
    <script src="${contextPath}/resources/js/google-search.js"></script>
    <script src="/common/template-2.js"></script>
  </body>
</html>
