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
    <link rel="stylesheet" href="${contextPath}/resources/css/common/template-1.css" />
    <link rel="stylesheet" href="${contextPath}/resources/css//term-detail.css" />

    <title>deVoca | deVoca의 이용약관을 확인해주세요</title>
  </head>
  <body>
    
    <body>
         <!-- 헤더 -->
<jsp:include page="/WEB-INF/views/common/header.jsp"/>

      <!-- 바디 -->
      <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
      <section class="main-content-area">
        <div>
        <p class="term">이용약관</p>

        <div id = "navcollection">
        <div id="navleft">
          <div class="navCenter">
            <ul>
              <div id="blank0"></div>
              <li>
                <a href="#page1">
                <button
                  class="button"
                  id="btn1"
                  onclick="change_btn(event)"
                  style="cursor: pointer"
                >
                  총칙
                </button>
              </a>
              </li>
              <div id="blank"></div>
              <li>
                <a href="#page2">
                <button
                  class="button"
                  id="btn2"
                  onclick="change_btn(event)"
                  style="cursor: pointer"
                >
                  회원가입
                </button>
              </a>
              </li>
              <div id="blank"></div>
              <li>
                <a href="#page3">
                <button
                  class="button"
                  id="btn3"
                  onclick="change_btn(event)"
                  style="cursor: pointer"
                >
                  게시글 공유
                </button>
              </a>
              </li>
            </ul>
          </div>
        </div>
          
        

        <div class="box1">
          <div id="page1">
          <h3>제 1장 총칙</h3>

          <h4>제1조(목적)</h4>
          <p>
            본 약관은 deVoca(이하 '갑'이라 한다)가 운영하는 인터넷 관련
            서비스(이하 '서비스')라 한다)를 이용함에 있어 관리자와 이용자(이하
            '회원'이라 한다)의 권리, 의무 책임사항을 규정함을 목적으로 한다.
          </p>

          <h4>제 2조('갑'의 의무)</h4>
          <p>
            1. '갑'은 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을
            다하여야합니다.
          </p>
          <p>
            2. '갑'은 항상 회원의 개인신상정보의 보안에 대하여 관리에 만전을
            기함으로서 회원의 정보보안에 최선을 다하여야 합니다.
          </p>

          <h4>제 3조('회원'의 의무)</h4>
          <p>
            1. 회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 '갑'이
            통지하는 사항을 준수하여야하며, 기타 '갑'의 업무에 방해되는 행위를
            하여서는 안됩니다.
          </p>
          <p>
            2. 회원은 '갑'의 사전 승낙없이 서비스를 이용하여 어떠한 영리 행위도
            할 수 없습니다.
          </p>
          <p>
            3. 회원은 서비스를 이용하여 얻은 정보를 '갑'의 사전 승낙 없이 복사,
            복제, 변경, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를
            타인에게 제공할 수 없습니다.
          </p>
        </div>
          <div id="page2">
          <h3>제2장 회원 가입</h3>

          <h4>제1조(목적)</h4>
          <p>
            본 약관은 deVoca(이하 '갑'이라 한다)가 운영하는 인터넷 관련
            서비스(이하 '서비스')라 한다)를 이용함에 있어 관리자와 이용자(이하
            '회원'이라 한다)의 권리, 의무 책임사항을 규정함을 목적으로 한다.
          </p>

          <h4>제 2조('갑'의 의무)</h4>
          <p>
            1. '갑'은 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을
            다하여야합니다.
          </p>
          <p>
            2. '갑'은 항상 회원의 개인신상정보의 보안에 대하여 관리에 만전을
            기함으로서 회원의 정보보안에 최선을 다하여야 합니다.
          </p>

          <h4>제 3조('회원'의 의무)</h4>
          <p>
            1. 회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 '갑'이
            통지하는 사항을 준수하여야하며, 기타 '갑'의 업무에 방해되는 행위를
            하여서는 안됩니다.
          </p>
          <p>
            2. 회원은 '갑'의 사전 승낙없이 서비스를 이용하여 어떠한 영리 행위도
            할 수 없습니다.
          </p>
          <p>
            3. 회원은 서비스를 이용하여 얻은 정보를 '갑'의 사전 승낙 없이 복사,
            복제, 변경, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를
            타인에게 제공할 수 없습니다.
          </p>
        </div>
          <div id="page3">
          <h3>제3장 게시글 공유</h3>

          <h4>제1조(목적)</h4>
          <p>
            본 약관은 deVoca(이하 '갑'이라 한다)가 운영하는 인터넷 관련
            서비스(이하 '서비스')라 한다)를 이용함에 있어 관리자와 이용자(이하
            '회원'이라 한다)의 권리, 의무 책임사항을 규정함을 목적으로 한다.
          </p>

          <h4>제 2조('갑'의 의무)</h4>
          <p>
            1. '갑'은 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을
            다하여야합니다.
          </p>
          <p>
            2. '갑'은 항상 회원의 개인신상정보의 보안에 대하여 관리에 만전을
            기함으로서 회원의 정보보안에 최선을 다하여야 합니다.
          </p>
          
          <h4>제 3조('회원'의 의무)</h4>
          <p>
            1. 회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 '갑'이
            통지하는 사항을 준수하여야하며, 기타 '갑'의 업무에 방해되는 행위를
            하여서는 안됩니다.
          </p>
          <p>
            2. 회원은 '갑'의 사전 승낙없이 서비스를 이용하여 어떠한 영리 행위도
            할 수 없습니다.
          </p>
          <p>
            3. 회원은 서비스를 이용하여 얻은 정보를 '갑'의 사전 승낙 없이 복사,
            복제, 변경, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를
            타인에게 제공할 수 없습니다.
          </p>
        </div>
        <div id="blank1"></div>
        </div>
       
      </div>
     
      </section>
      
           <!-- 푸터 -->
           <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

      <script src="${contextPath}/resources/js/google-search.js"></script>
    </body>
  </body>
</html>
