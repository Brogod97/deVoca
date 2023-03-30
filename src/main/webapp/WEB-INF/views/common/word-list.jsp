<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

<!-- main-content-area 하위에 바로 위치 -->

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
                <div class="voca-category-tag">SQL</div>
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
                <textarea id="voca-read-memo" readonly></textarea>
            </div>
            <div class="voca-category6">
                <img
                    src="${contextPath}/resources/assets/icon/code.svg"
                    alt=""
                />
                코드블럭
            </div>
            <div class="voca-code-block-area">
                <pre><code class="language-java"></code></pre>
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
                    <select name="" id="voca-code-select">
                        <option class="language-java" value="">JAVA</option>
                        <option class="language-javaScript" value="">
                            JavaScript
                        </option>
                        <option class="language-sql" value="">SQL</option>
                        <option class="language-c" value="">C</option>
                        <option class="language-python" value="">Python</option>
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
            </form>
        </div>
    </div>
    <!-- 단어 추가 모달 끝 -->
</div>
