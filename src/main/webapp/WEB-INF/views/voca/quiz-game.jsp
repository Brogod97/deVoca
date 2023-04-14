<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

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
            href="${contextPath}/resources/css/quiz-game.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />

        <script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"
         ></script>

        <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

        <title>deVoca | 퀴즈를 즐겁게 풀어보세요</title>
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

        <!-- 메인 콘텐츠 영역 -->
        <section class="main-content-area">
        
            <!-- 메인화면 -->
            <div
                class="swiper mySwiper swiper-initialized swiper-horizontal swiper-backface-hidden"
            >
                <div
                    class="swiper-wrapper"
                    id="swiper-wrapper-a6d1108e48cf91028"
                    aria-live="polite"
                >
                
                    <c:forEach var="word" items="${wordList}" varStatus="vs">
                        <div
                            class="swiper-slide swiper-slide-active"
                            role="group"
                            aria-label="vs.count / ${wordList.size()}"
                        >
                        
                        <!-- JSTL 랜덤 숫자 생성 -->
						<jsp:useBean id="random" class="java.util.Random" scope="page" />
		                 
		                <!-- 정답1과 오답3을 넣고 섞을 ArrayList 생성 -->
		                <%@page import="java.util.*"%>
		                <%@page import="devoca.voca.model.vo.Word"%>
		                
		                <!-- 현재 word의 wordDf 저장 -->
						<c:set var="wordDf" value="${word.wordDf}" />
						<!-- definitionArr 저장 -->
						<c:set var="definitionArr" value="${definitionArr}" />   
						
						<%
						    ArrayList<String> answerArr = new ArrayList<>();
						    String wordDf = (String) pageContext.getAttribute("wordDf");
						    String[] definitionArr = (String[]) pageContext.getAttribute("definitionArr");
						
						    // Set을 이용해 중복 제거
						    Set<String> set = new HashSet<>();
						
						    // wordDf가 중복되지 않도록 추가
						    set.add(wordDf);
						
						    // definitionArr 값이 중복되지 않도록 추가
						    while (set.size() < 4) {
						        int randomIndex = random.nextInt(definitionArr.length);
						        set.add(definitionArr[randomIndex]);
						    }
						
						    // set을 answerArr로 변환
						    answerArr.addAll(set);
						
						    pageContext.setAttribute("answerArr", answerArr);
						
						    Collections.shuffle(answerArr);
						%>
						
                            <div class="quiz-content-area">
                                <div class="quiz-header">
                                    <h1>${word.wordTitle}</h1>
                                    <div class="quiz-line"></div>
                                </div>
                                <div class="quiz-content">
                                    <div onclick="checkAnswer(this, '${word.wordDf}', '${answerArr[0]}', '${word.wordNo}', '${wordList.size()}')">
                                        <p>${answerArr[0]}</p>
                                    </div>
                                    <div onclick="checkAnswer(this, '${word.wordDf}', '${answerArr[1]}', '${word.wordNo}', '${wordList.size()}')" >
                                        <p>${answerArr[1]}</p>
                                    </div>
                                    <div onclick="checkAnswer(this, '${word.wordDf}', '${answerArr[2]}', '${word.wordNo}', '${wordList.size()}')" >
                                        <p>${answerArr[2]}</p>
                                    </div>
                                    <div onclick="checkAnswer(this, '${word.wordDf}', '${answerArr[3]}', '${word.wordNo}', '${wordList.size()}')">
                                        <p>${answerArr[3]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </c:forEach>
                    
                </div>
                <div
                    class="swiper-button-next"
                    tabindex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper-wrapper-a6d1108e48cf91028"
                    aria-disabled="false"
                ></div>
                <div
                    class="swiper-button-prev swiper-button-disabled"
                    tabindex="-1"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-a6d1108e48cf91028"
                    aria-disabled="true"
                ></div>
                <div
                    class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"
                >
                    <span
                        class="swiper-pagination-progressbar-fill"
                        style="
                            transform: translate3d(0px, 0px, 0px)
                                scaleX(0.111111) scaleY(1);
                            transition-duration: 300ms;
                        "
                    ></span>
                </div>
                <span
                    class="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                ></span>
            </div>

            <!-- 결과 보기 모달 -->
            <aside class="result-modal-area invisible">
                <div class="background-blur">
                    <div class="result-modal">
                        <h3>퀴즈 종료</h3>
                        <span>결과 페이지로 이동합니다</span>
        
                        <form action="quizResult" method="get">
                            <button class="btn-primary-fill">
                                확인
                            </button>
                            <input type="hidden" name="memberNo" value="${memberNo}">
                            <input type="hidden" name="categoryNo" value="${categoryNo}">
                        </form>
                    </div>
                </div>
            </aside>
        </section>

        

        <script src="${contextPath}/resources/js/google-search.js"></script>
        <script src="${contextPath}/resources/js/quiz-game.js"></script>
    </body>
</html>
