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
            href="${contextPath}/resources/css/common/word-list.css"
        />
        <link
            rel="stylesheet"
            href="${contextPath}/resources/css/quiz-result.css"
        />
        <!-- font-awesome -->
        <script
            src="https://kit.fontawesome.com/5d7e6e936d.js"
            crossorigin="anonymous"
        ></script>

        <script src="https:////cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

        <!-- 코드블럭 하이라이트 js -->
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
        <script>
            hljs.initHighlightingOnLoad();
        </script>

        <title>quiz-result</title>
    </head>
    <body>
        <main>
            <!-- 헤더 -->
            <jsp:include page="/WEB-INF/views/common/header.jsp" />

            <!-- 바디 -->
            <section class="container">
                <!-- nav바 -->
                <jsp:include page="/WEB-INF/views/common/navbar.jsp" />
            </section>
        </main>

        <!-- 메인 콘텐츠 영역 -->
        <section class="main-content-area">
            <div id="quiz-result-container">
                <!-- 상단 영역 -->
                <div class="quiz-result">
                    <!-- 원형 프로그래스바 -->
                    <div class="wrap">
                        <div class="progress" data-percent="${rate}">
                            <span class="progress-result"></span>
                        </div>
                    </div>
                    <div class="result-value">
                        <div>
                            문제개수 :
                            <span id="total">${totalCount}</span>
                        </div>
                        <div>
                            정답 수 :
                            <span id="correct">${correctCount}</span>
                        </div>
                        <div>
                            오답 수 :
                            <span id="wrong">${totalCount - correctCount}</span>
                        </div>
                    </div>
                </div>
                <div class="result-line"></div>

                <!-- 결과값 -->
                <div class="result-set">
                    <!-- wordList -->
                    <div class="wrong-list-area">
                        <h3 class="worng-list-title">오답 목록</h3>

                        <div class="wrong-list">
                            <c:forEach var="word" items="${wrongWordList}">
                                <div
                                    class="content-main-text"
                                    onclick="return selectOneWordAjax('${word.wordNo}')"
                                >
                                    <div class="content-main-text-flex">
                                        <div>
                                            <button style="display: block">
                                                ${word.wordTitle}
                                            </button>
                                        </div>
                                        <div>
                                            <button style="display: block">
                                                <img
                                                    src="/deVoca/resources/assets/icon/chevron.svg"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="content-main-add-line"></div>
                                </div>
                            </c:forEach>
                        </div>
                    </div>

                    <!-- 특정 단어 조회 시 출력될 모달 -->
                    <div id="modal">
                        <div class="bg"></div>
                        <div class="voca-modalBox">
                            <div class="voca-category2">
                                <input id="voca-read-title" readonly />
                            </div>
                            <div class="voca-category4">
                                <img
                                    src="${contextPath}/resources/assets/icon/note.svg"
                                    alt=""
                                />
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
                                <textarea
                                    id="voca-read-memo"
                                    readonly
                                ></textarea>
                            </div>
                            <div class="voca-category6">
                                <img
                                    src="${contextPath}/resources/assets/icon/code.svg"
                                    alt=""
                                />
                                코드블럭
                            </div>
                            <div class="voca-code-block-area">
                                <pre><code id="read-code" class="language-java"></code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script src="${contextPath}/resources/js/google-search.js"></script>
        <script src="${contextPath}/resources/js/quiz-result.js"></script>
    </body>
</html>
