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
        <link rel="stylesheet" href="${contextPath}/resources/css/shared.css" />

        <title>deVoca | 다른 유저들의 공유된 단어 목록을 확인해보세요</title>
    </head>
    <body>
        <!-- 공용 디자인 영역 - header, navbar, sidebar -->
        <main>
            <!-- 헤더 -->
            <jsp:include
                page="${contextPath}/WEB-INF/views/common/header.jsp"
            />

            <!-- 바디 -->
            <!-- nav + sidebar 컨테이너 -->
            <section class="container">
                <!-- navbar -->
                <jsp:include
                    page="${contextPath}/WEB-INF/views/common/navbar.jsp"
                />

                <!-- sidebar -->
                <jsp:include
                    page="${contextPath}/WEB-INF/views/common/sidebar.jsp"
                />
            </section>
        </main>

        <!-- 메인 콘텐츠 영역 -->
        <section class="main-content-area">
            <!-- 공유된 유저의 카테고리 및 단어 조회 -->
            <div class="shared-container">
                <div class="shared-header-area">
                    <h2>
                        <span id="shared-user-name">Zino</span>
                        <span>
                            님의 공유된 단어 리스트
                            <div class="flying-bee">
                                <img
                                    src="${contextPath}/resources/assets/images/flying-bee.png"
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
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">JavaScript</span>
                        </li>
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">Python</span>
                        </li>
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">Python</span>
                        </li>
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">Python</span>
                        </li>
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">Python</span>
                        </li>
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">Python</span>
                        </li>
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">Python</span>
                        </li>
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">Python</span>
                        </li>
                        <li class="shared-category">
                            <i class="ic-hive-cc"></i>
                            <span class="category-title">Python</span>
                        </li>
                    </ul>
                </div>

                <div class="line"></div>

                <div class="shared-voca-list-area">
                    <div class="word-list">
                        <div class="content-main">
                            <!-- 단어장 조회 헤더 -->

                            <!-- TODO: 선택된 카테고리명에 맞게 js에서 수정될 수 있도록 Title ID 값 부여하기 -->
                            <div>
                                <h2>JAVA</h2>
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
                                            <div>즐겨찾기</div>
                                            <div>체크된 단어</div>
                                            <div>미체크된 단어</div>
                                        </div>
                                    </div>
                                    <!-- 즐겨찾기 및 순서정렬 메뉴끝 -->
                                </button>
                                <!-- 새 단어 추가 버튼 -->
                                <button class="content-main-btn2 addOpenBtn">
                                    <img
                                        src="${contextPath}/resources/assets/icon/plus.svg"
                                    />
                                </button>
                            </div>
                        </div>

                        <div class="content-main-line"></div>

                        <!-- 단어 조회 모달 시작 -->
                        <div class="modal hidden">
                            <div class="bg"></div>
                            <div class="voca-modalBox">
                                <div class="voca-category1">
                                    <div class="voca-category-tag">SQL</div>
                                    <div class="voca-category-btns">
                                        <button class="voca-modify">
                                            수정
                                        </button>
                                        <button class="voca-delete">
                                            삭제
                                        </button>
                                    </div>
                                </div>
                                <div class="voca-category2">
                                    <input id="voca-read-title" readonly />
                                </div>
                                <div class="voca-category3">
                                    <span></span>
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
                                    <textarea
                                        name="voca-code-block"
                                        id="voca-code-block"
                                    ></textarea>
                                </div>
                                <div>
                                    <button class="modify-btn">수정완료</button>
                                </div>
                            </div>
                        </div>
                        <!-- 단어 조회 모달 끝 -->

                        <div class="content-main-text">
                            <div class="content-main-text-flex">
                                <div>
                                    <button>
                                        <img
                                            src="${contextPath}/resources/assets/icon/check.svg"
                                        /></button
                                    ><button class="openBtn">
                                        Test Method Name
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <img
                                            src="${contextPath}/resources/assets/icon/star.svg"
                                        /></button
                                    ><button>
                                        <img
                                            src="${contextPath}/resources/assets/icon/chevron.svg"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div class="content-main-add-line"></div>
                            <div class="content-main-text-flex">
                                <div>
                                    <button>
                                        <img
                                            src="${contextPath}/resources/assets/icon/check.svg"
                                        /></button
                                    ><button class="openBtn">
                                        Test Method Name2
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <img
                                            src="${contextPath}/resources/assets/icon/star.svg"
                                        /></button
                                    ><button>
                                        <img
                                            src="${contextPath}/resources/assets/icon/chevron.svg"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div class="content-main-add-line"></div>
                        </div>

                        <!-- 단어 추가 모달 시작 -->
                        <div class="addModal hidden">
                            <div class="addBg"></div>
                            <div class="voca-modalBox">
                                <form action="#" method="post" id="voca-form">
                                    <div class="voca-category1">
                                        <div class="voca-category-tag">SQL</div>
                                    </div>
                                    <div class="voca-category2">
                                        <input
                                            type="text"
                                            placeholder="메소드명을 입력해주세요"
                                            name="voca-title"
                                            required
                                        />
                                    </div>
                                    <div class="voca-category3">
                                        <input
                                            type="text"
                                            placeholder="#태그를 입력하세요"
                                            name="basic"
                                            required
                                        />
                                    </div>

                                    <div class="voca-category4">
                                        <img
                                            src="${contextPath}/resources/assets/icon/note.svg"
                                            alt=""
                                        />
                                        정의
                                    </div>
                                    <div class="voca-content1">
                                        <input
                                            type="text"
                                            name="voca-definition"
                                            required
                                        />
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
                                            name="voca-memo"
                                            id="voca-memo"
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
                                        <textarea
                                            name="voca-code-block"
                                            id="voca-code-block"
                                        ></textarea>
                                    </div>
                                    <div class="voca-modal-btn">
                                        <button
                                            onclick="addClose()"
                                            class="btn-primary-line"
                                        >
                                            나가기
                                        </button>
                                        <button
                                            type="button"
                                            class="btn-save"
                                            id="voca-save"
                                        >
                                            저장
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- 단어 추가 모달 끝 -->
                    </div>
                </div>
            </div>
        </section>

        <!-- JS -->
        <script src="${contextPath}/resources/js/google-search.js"></script>
        <script src="${contextPath}/resources/js/common/word-list.js"></script>
        <script src="${contextPath}/resources/js/shared.js"></script>
    </body>
</html>
