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

        <title>단어장 서비스 계열 기본 template - header, nav, sidebar</title>
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

                    <!-- <form action="${contextPath}/voca/quizGame" method="get"> -->
                    <button type="submit" class="container-main-btn">
                        시작하기
                    </button>
                    <div class="container-main-content">
                        <c:forEach var="quiz" items="${quizList}">
                            <button
                                type="button"
                                class="select-btn"
                                onclick="return quizStart('${quiz.memberNo}', '${quiz.categoryNo}')"
                            >
                                ${quiz.categoryTitle}

                                <!-- <input
                                    type="hidden"
                                    value="${quiz.memberNo}"
                                    name="memberNo"
                                />
                                <input
                                    type="hidden"
                                    value="${quiz.categoryNo}"
                                    name="categoryNo"
                                /> -->
                            </button>
                        </c:forEach>
                    </div>
                    <!-- </form> -->
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

        <script>
            const contextPath = "${contextPath}";
        </script>
        <script src="${contextPath}/resources/js/google-search.js"></script>
        <script src="${contextPath}/resources/js/quiz-main.js"></script>
    </body>
</html>
