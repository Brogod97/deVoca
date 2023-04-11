<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-widthoney-btn-default.svgh, initial-scale=1.0"
    />
    <link rel="stylesheet" href="${contextPath}/resources/css/landing.css" />

    <link rel="stylesheet" href="${contextPath}/resources/css/main.css" />

    <link
      rel="stylesheet"
      href="${contextPath}/resources/css/jquery.fullPage.css"
    />
    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
      crossorigin="anonymous"
    ></script>
    <script src="${contextPath}/resources/js/jquery.fullPage.js"></script>

    <title>deVoca</title>
  </head>
  <body>
    <main id="fullpage">
      <section class="section section-1">
        <!-- 헤더 -->
        <jsp:include page="WEB-INF/views/common/header.jsp" />

        <div class="sec1-container">
          <div>
            <div class="sec1-container-img1">
              <img
                src="${contextPath}/resources/assets/images/landing-polygon-top-left.png"
                alt=""
              />
            </div>
            <div class="sec1-container-img2">
              <img
                src="${contextPath}/resources/assets/images/landing-polygon-bottom-left-white.png"
                alt=""
              />
              <img
                src="${contextPath}/resources/assets/images/landing-polygon-bottom-left-yellow.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1>Hello World</h1>
            <div class="sec1-container-main-center">
              <img
                src="${contextPath}/resources/assets/images/flying-bee-1.svg"
                alt=""
              />
              <div class="sec1-container-text">
                <h3>BOOST</h3>
                <h3>YOUR DEV STUDY!!</h3>
              </div>
            </div>
            <a href="${contextPath}/voca/voca-main">
              <button class="sec1-container-btn"></button>
            </a>
          </div>
          <div>
            <div class="sec1-container-img3">
              <img
                src="${contextPath}/resources/assets/images/landing-polygon-top-right-white.png"
                alt=""
              />
              <img
                src="${contextPath}/resources/assets/images/landing-polygon-top-right-yellow.png"
                alt=""
              />
            </div>
            <div class="sec1-container-img4">
              <img
                src="${contextPath}/resources/assets/images/landing-polygon-bottom-right.png"
                alt=""
              />
            </div>
          </div>

          <img
            src="${contextPath}/resources/assets/images/mouse.png"
            alt=""
            id="mouseImg"
          />
          <img
            src="${contextPath}/resources/assets/images/mouse2.png"
            id="mouseImg2"
          />
        </div>
      </section>
      <section class="section section-2">
        <div>
          <h2>Ready For You</h2>

          <div class="slide">
            <img
              src="${contextPath}/resources/assets/images/randingImg/randing1.jpg"
              width="800px"
              height="500px"
            />
          </div>
          <div class="slide">
            <img
              src="${contextPath}/resources/assets/images/randingImg/randing2.jpg"
              width="800px"
              height="500px"
            />
          </div>
          <div class="slide">
            <img
              src="${contextPath}/resources/assets/images/randingImg/randing3.jpg"
              width="800px"
              height="500px"
            />
          </div>
        </div>
      </section>
      <section class="section section-3">
        <div class="landing-drop">
          <img
            src="${contextPath}/resources/assets/images/background-honey-drop.svg"
            id="sec3-background"
          />
        </div>
        <div class="section-3-center">
          <div></div>
          <div>
            <div class="sec3-center">
              <h4>deVoca를 사용해야 하는이유</h4>
              <img
                src="${contextPath}/resources/assets/images/honeycomb.svg"
                class="sec3-center-img1"
              />
            </div>
            <div class="sec3-center-images">
              <div>
                <img
                  src="${contextPath}/resources/assets/images/globe.svg"
                  width="180px"
                  height="180px"
                />
                <p>
                  다른 유저의 단어장을 <br />
                  확인해 보세요!!
                </p>
              </div>
              <div>
                <img
                  src="${contextPath}/resources/assets/images/note-pencil.svg"
                  width="180px"
                  height="180px"
                />
                <p>
                  Quiz를 통해 단어를 <br />
                  완벽하게 공부하세요!
                </p>
              </div>
              <div>
                <img
                  src="${contextPath}/resources/assets/images/coding.svg"
                  width="180px"
                  height="180px"
                />
                <p>
                  개발자를 위한 <br />
                  맞춤 단어장!
                </p>
              </div>
            </div>
            <div>
              <a href="${contextPath}/static/terms.jsp">
                <button class="sec3-center-btn">회원가입</button>
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <!-- 푸터 -->
        <jsp:include page="WEB-INF/views/common/footer.jsp" />
      </section>
    </main>
    <c:if test="${ !empty sessionScope.message }">
      <script>
        alert("${message}");
        // EL 작성 시 scope를 지정하지 않으면
        // page -> request -> session -> application 순서로 검색하여
        // 일치하는 속성이 있으면 출력
      </script>

      <%-- message 1회 출력 후 session에서 제거 --%>
      <c:remove var="message" scope="session" />
    </c:if>
    <script src="${contextPath}/resources/js/landing.js"></script>
    <script src="${contextPath}/resources/js/google-search.js"></script>
  </body>
</html>
