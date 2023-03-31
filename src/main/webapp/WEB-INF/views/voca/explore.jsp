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
        <link
            rel="stylesheet"
            href="${contextPath}/resources/css/explore.css"
        />

        <title>deVoca | 다른 유저들의 공유된 단어 목록을 확인해보세요</title>
    </head>
    <body>
        <!-- 공용 디자인 영역 - header, navbar, sidebar -->
        <main>
            <!-- 헤더 -->
            <jsp:include page="/WEB-INF/views/common/header.jsp" />

            <!-- 바디 -->
            <!-- nav + sidebar 컨테이너 -->
            <section class="container">
                <!-- navbar -->
                <jsp:include page="/WEB-INF/views/common/navbar.jsp" />

                <!-- 회원 검색 & 회원 리스트 -->
                <section class="side-bar">
                    <!-- 회원 검색 -->
                    <section class="sidebar-search-area">
                        <div class="sidebar-search">
                            <form action="#" name="voca-search-form">
                                <input
                                    type="search"
                                    id="voca-search-input"
                                    name="voca-search-input"
                                    placeholder="유저명 입력"
                                    autocomplete="off"
                                />
                                <button>
                                    <img
                                        src="${contextPath}/resources/assets/icon/search.svg"
                                        class="voca-search-img"
                                    />
                                </button>
                            </form>
                        </div>
                    </section>
                    <div class="line"></div>

                    <div class="btn-primary-fill btn-long">퀴즈 시작</div>

                    <div class="line"></div>

                    <!-- 회원 리스트 -->
                    <section class="category-container">
                        <div class="category-header">
                            <h3>회원 목록</h3>
                        </div>

                        <div class="member-list-area">
                            <!-- 회원 클릭 시 해당 회원의 카테고리 조회 -->
                            <ul class="member-list">
                                <c:forEach var="member" items="${memberList}">
                                    <li class="member">
                                        <div class="member-thumbnail">
                                            <img
                                                src="${contextPath}/${ member.profileImage }"
                                            />
                                        </div>
                                        <span class="member-nickname">
                                            ${member.memberNick}
                                        </span>
                                    </li>
                                </c:forEach>
                            </ul>
                        </div>
                    </section>
                </section>
            </section>
        </main>

        <!-- 메인 콘텐츠 영역 -->
        <section class="main-content-area">
            <!-- 특정 유저의 카테고리 표시 영역 -->
            <div class="shared-container">
                <div id="shared-header-category-area">
                    <div class="shared-header-area">
                        <h2>
                            <span id="shared-user-name">Zino</span>
                            <span>
                                님의 공유된 단어 리스트
                                <div class="flying-bee">
                                    <img
                                        src="${contextPath}/resources/assets/images/flying-bee-1.svg"
                                    /></div
                            ></span>
                        </h2>
                    </div>

                    <div class="line"></div>

                    <div class="shared-category-area">
                        <ul class="shared-category-list">
                            <li class="shared-category">
                                <i class="ic-hive-cc"></i>
                                <span class="category-title">Java</span>
                            </li>
                        </ul>
                    </div>

                    <div class="line"></div>
                </div>

                <!-- 카테고리 클릭 시 해당 카테고리의 단어 조회 -->
                <div class="shared-voca-list-area">
                    <jsp:include page="/WEB-INF/views/common/word-list.jsp" />

                    <div class="content-main-text">
                        <div class="content-main-text-flex">
                            <div>
                                <button>
                                    <img src="/assets/check-empty.svg" />
                                </button>
                                <button class="openBtn">TestMethod1</button>
                            </div>
                            <div>
                                <button>
                                    <img src="/assets/star-empty.svg" /></button
                                ><button>
                                    <img src="/assets/chevron.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="content-main-add-line"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- JS -->
        <script src="${contextPath}/resources/js/google-search.js"></script>
        <script src="${contextPath}/resources/js/common/word-list.js"></script>
        <script src="${contextPath}/resources/js/explore.js"></script>
    </body>
</html>
