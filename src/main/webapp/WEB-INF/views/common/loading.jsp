<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="${contextPath}/resources/css/main.css" />
    <link rel="stylesheet" href="${contextPath}/resources/css/common/template-1.css" />
    <link rel="stylesheet" href="${contextPath}/resources/css/loading.css">

    <title>로딩 화면</title>
  </head>
  <body>
    <body>
             <!-- 헤더 -->
<jsp:include page="/WEB-INF/views/common/header.jsp"/>

      <!-- 바디 -->
      <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
      <section class="main-content-area">
        <div class="wrap">
          <div class="loading">
            <div class="bounceball"></div>
            <div class="text">NOW LOADING</div>
          </div>
        </div>            
      </div>    
      </section>

     <!-- 푸터 -->
     <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

      <script src="${contextPath}/resources/js/google-search.js"></script>
    </body>
  </body>
</html>
