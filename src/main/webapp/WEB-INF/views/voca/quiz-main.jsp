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
            href="${contextPath}/resources/css/common/template-quiz.css"
        />
        <link
            rel="stylesheet"
            href="${contextPath}/resources/css/loading.css"
        />
        <link
            rel="stylesheet"
            href="${contextPath}/resources/css/quiz-main.css"
        />

        <!-- 제이쿼리 cdn -->
        <script
            src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
            crossorigin="anonymous"
        ></script>

        <!-- font-awesome -->
        <script
            src="https://kit.fontawesome.com/5d7e6e936d.js"
            crossorigin="anonymous"
        ></script>

        <title>quiz-main.jsp</title>
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
            </section>
        </main>

        <!-- 로딩 -->
        <aside class="wrap">
            <div class="loading">
                <div class="bounceball"></div>
                <div class="text">NOW LOADING</div>
            </div>
        </aside>

        <!-- 메인 콘텐츠 영역 -->
        <section class="main-content-area">
            <section class="container-main">
                <div class="container-main-left">
                    <img
                        src="${contextPath}/resources/assets/images/quiz-polygon-left.png"
                        alt=""
                        class="container-main-img1"
                    />
                </div>
                <div class="container-main-center">
                    <div>
                        <h1>Quiz</h1>
                    </div>
                    <div>
                        <h2>카테고리를 선택해 주세요</h2>
                    </div>

                    <form action="quizGame" method="get">
                        <button
                            type="submit"
                            class="container-main-btn"
                            disabled
                        >
                            시작하기
                        </button>
                        <div class="container-main-content">
                            <c:forEach var="quiz" items="${categoryList}">
                                <button type="button" class="select-btn">
                                    ${quiz.categoryTitle}

                                    <input
                                        type="radio"
                                        name="memberNo"
                                        value="${quiz.memberNo}"
                                        style="display: none"
                                    />
                                    <input
                                        type="radio"
                                        name="categoryNo"
                                        value="${quiz.categoryNo}"
                                        style="display: none"
                                    />
                                </button>
                            </c:forEach>
                        </div>
                    </form>
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

        <script>
            const contextPath = "${contextPath}";
        </script>
        <script src="${contextPath}/resources/js/google-search.js"></script>
        <script src="${contextPath}/resources/js/quiz-main.js"></script>
    </body>
</html>
