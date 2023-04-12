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
      href="${contextPath}/resources/css/common/template-2.css"
    />
    <link
      rel="stylesheet"
      href="${contextPath}/resources/css/common/word-list.css"
    />

    <script
      src="https://code.jquery.com/jquery-3.6.0.js"
      integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
      crossorigin="anonymous"
    ></script>

    <!-- tagify - 단어 생성 (태그) -->
    <script src="https://unpkg.com/@yaireo/tagify"></script>
    <!-- 폴리필 (구버젼 브라우저 지원) -->
    <script src="https://unpkg.com/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
    <link
      href="https://unpkg.com/@yaireo/tagify/dist/tagify.css"
      rel="stylesheet"
      type="text/css"
    />

    <!-- 코드블럭 하이라이트 js -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
    />
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
    <script>
      hljs.initHighlightingOnLoad();
    </script>

    <title>단어 추가, 수정, 삭제, 조회</title>
  </head>
  <body>
    <main>
      <!-- 헤더 -->
      <jsp:include page="/WEB-INF/views/common/header.jsp" />

      <!-- 바디 -->
      <!-- nav + sidebar 컨테이너 -->
      <section class="container">
        <!-- nav바 -->
        <jsp:include page="/WEB-INF/views/common/navbar.jsp" />

        <!-- sidebar -->
        <jsp:include page="/WEB-INF/views/common/sidebar.jsp" />
      </section>
    </main>

    <!-- FIXME: 여기부터 단어 리스트 시작 -->
    <!-- 메인 콘텐츠 영역 -->
    <section class="main-content-area">
      <div class="word-list">
        <div class="content-main">
          <!-- 단어장 조회 헤더 -->

          <!-- TODO: 선택된 카테고리명에 맞게 js에서 수정될 수 있도록 Title ID 값 부여하기 -->
          <div>
            <h2 id="categoryName"></h2>
          </div>
          <div class="content-main-imgs">
            <!-- 즐겨찾기 및 순서정렬 메뉴-->
            <button class="content-main-btn1">
              <img
                src="${contextPath}/resources/assets/icon/order.svg"
                class="menu-openBtn"
              />
              <div class="voca-menu-modal menu-hidden">
                <div class="voca-menu-bg"></div>
                <div class="voca-menu-modalBox">
                  <div class="all-menu">전체보기</div>
                  <div class="favorite-menu">즐겨찾기</div>
                  <div class="check-menu">체크된 단어</div>
                  <div class="unCheck-menu">미체크된 단어</div>
                </div>
              </div>
              <!-- 즐겨찾기 및 순서정렬 메뉴끝 -->
            </button>
            <!-- 새 단어 추가 버튼 -->
            <button class="content-main-btn2 addOpenBtn">
              <img src="${contextPath}/resources/assets/icon/plus.svg" />
            </button>
          </div>
        </div>

        <div class="content-main-line"></div>

        <!-- 단어 조회 모달 시작 -->
        <div class="modal hidden">
          <div class="bg"></div>
          <div class="voca-modalBox">
            <div class="voca-category1">
              <div class="voca-category-btns">
                <button class="voca-modify">수정</button>
                <button class="voca-delete">삭제</button>
              </div>
            </div>

            <div class="voca-category2">
              <input id="voca-read-title" readonly />
            </div>

            <div class="voca-category3">
              <span></span>
            </div>
            <div class="voca-category4">
              <img src="${contextPath}/resources/assets/icon/note.svg" alt="" />
              정의
            </div>
            <div class="voca-content1">
              <input id="voca-read-definition" readonly />
            </div>
            <div class="voca-category5">
              <img
                src="${contextPath}/resources/assets/icon/pencil.svg"
                alt=""
              />
              메모
            </div>
            <div class="voca-content2">
              <textarea id="voca-read-memo" readonly></textarea>
            </div>
            <div class="voca-category6">
              <img src="${contextPath}/resources/assets/icon/code.svg" alt="" />
              코드블럭
            </div>
            <div class="voca-code-block-area" id="voca-read-code">
              <pre><code id="read-code" class="language-java"></code></pre>
            </div>

            <!-- 단어 삭제 여부 모달창 -->
            <div class="voca-delete-modal">
              <div class="voca-delete-modal-box">
                <div class="voca-delete-area">
                  <img
                    src="${contextPath}/resources/assets/icon/warning.svg"
                    alt=""
                  />
                  <div class="voca-delete-title">단어 삭제</div>
                </div>
                <div class="voca-delete-content">정말 삭제 하시겠습니까?</div>
                <div class="voca-delete-btns">
                  <button class="btn-primary-line" id="voca-delete-cancell">
                    아니오
                  </button>
                  <button class="btn-primary-fill" id="voca-delete-done">
                    네, 삭제할게요
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button class="modify-btn">수정완료</button>
            </div>
          </div>
        </div>
        <!-- 단어 조회 모달 끝 -->

        <div class="content-main-text">
          <div class="content-main-text-flex"></div>
        </div>

        <!-- 단어 추가 모달 시작 -->
        <div class="addModal hidden">
          <div class="addBg"></div>
          <div class="voca-modalBox">
            <!-- <form action="insertWord" method="post" id="voca-form"> -->

            <div class="voca-category2">
              <input
                type="text"
                placeholder="메소드명을 입력해주세요"
                name="voca-title"
                required
              />
            </div>

            <div class="voca-category4">
              <img src="${contextPath}/resources/assets/icon/note.svg" alt="" />
              정의
            </div>
            <div class="voca-content1">
              <input type="text" name="voca-definition" required />
            </div>
            <div class="voca-category5">
              <img
                src="${contextPath}/resources/assets/icon/pencil.svg"
                alt=""
              />
              메모
            </div>
            <div class="voca-content2">
              <textarea name="voca-memo" id="voca-memo"></textarea>
            </div>
            <div class="voca-category6">
              <img src="${contextPath}/resources/assets/icon/code.svg" alt="" />
              코드블럭
            </div>
            <div class="voca-code-block-area">
              <textarea name="voca-code-block" id="voca-code-block"></textarea>
              <select onchange="changeLanguage()" id="voca-code-select">
                <option value="java">JAVA</option>
                <option value="javascript">JavaScript</option>
                <option value="sql">SQL</option>
                <option value="c">C</option>
                <option value="Python">Python</option>
              </select>
            </div>
            <div class="voca-modal-btn">
              <button onclick="addClose()" class="btn-primary-line">
                나가기
              </button>
              <button type="button" class="btn-save" id="voca-save">
                저장
              </button>
            </div>
            <!-- </form> -->
          </div>
        </div>
        <!-- 단어 추가 모달 끝 -->
      </div>
    </section>

    <script>
      const contextPath = "${contextPath}";
    </script>
    <script src="${contextPath}/resources/js/common/word-list.js"></script>
    <script src="${contextPath}/resources/js/google-search.js"></script>
  </body>
</html>
