<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="${contextPath}/resources/css/main.css" />
    <link rel="stylesheet" href="${contextPath}/resources/css/common/template-2.css" />
    <link rel="stylesheet" href="${contextPath}/resources/css/member-profile.css" />

    <!-- font-awesome -->
    <script
      src="https://kit.fontawesome.com/5d7e6e936d.js"
      crossorigin="anonymous"
    ></script>

    <title>회원 정보 페이지</title>
  </head>
  <body>
    <main>
      <!-- 헤더 -->
      <jsp:include page="/WEB-INF/views/common/header.jsp" />

      <!-- 바디 -->
      <!-- nav + sidebar 컨테이너 -->
      <section class="container">
        <jsp:include page="/WEB-INF/views/common/navbar.jsp" />

        <!-- 서치&카테고리 -->
        <jsp:include page="/WEB-INF/views/common/sidebar.jsp" />
      </section>
    </main>

    <!-- ****************************************************************************** -->
    <!-- 메인 콘텐츠 영역 -->
    <section class="main-content-area">
      <!-- content-container -->
      <div class="content-container">
        <!-- 페이지 타이틀 영역 -->
        <div class="page-title-area">
          <p>회원 정보</p>
        </div>
        <div class="user-info-outbox">
            <!-- 회원 정보 영역 -->
            <div class="user-info-area">
              <!-- 프로필사진 영역 -->
              <div class="user-img-area">
                <div id="img-thumbnail">
                <!-- profileImage 비어있을 시 기본 이미지  -->
                <c:if test="${empty loginMember.profileImage }">
                  <img
                    src="${contextPath}/resources/assets/images/default-user-img.png"
                    alt="프로필 사진"
                    id="profile-img"
                  />
                 </c:if>
                 <!-- profileImage 가지고 있을 시 이미지 출력 -->
                 <c:if test="${!empty loginMember.profileImage }">
                  <img
                    src="${contextPath}/${loginMember.profileImage}"
                    alt="프로필 사진"
                    id="profile-img"
                  />
                 </c:if>
                </div>
                <div id="img-edit"><i class="ic-camera-cc"></i></div>
              </div>
          <form action="${contextPath}/member/memberInfo" method="POST">
              <!-- 정보 입력 영역 -->
              <div class="user-info-input-area">
                <!-- 영역잡기용 div -->
                <div id="user-info-input-innerbox">
                  <!-- 아이디 인풋 영역 -->
                  <div class="id-input-area">
                    <label>
                      아이디<br />
                      <input type="text" id="id-input" name="inputId" value="${loginMember.memberId}" disabled />
                    </label>
                  </div>
                  <!-- 비밀번호 인풋 영역 -->

                  <div class="pw-input-box">
                    <div class="icon-position-box">
                      <i class="ic-lock"></i>
                      <label>
                        비밀번호 <br />
                        <input
                          type="password"
                          id="pw-input"
                          name ="inputPw"
                          
                          disabled
                          required
                          placeholder="영어 대소문자,숫자,특수 문자 포함8~20자 "
                          
                        />
                      </label>
                    </div>
                    <div class="pw-reg">
                      <p id="pw-reg-text"></p>
                    </div>
                  </div>
                  <div class="pwcheck-input-box">
                    <div class="icon-position-box">
                      <i class="ic-lock"></i>
                      <label>
                        비밀번호 확인 <br />
                        <input
                          type="password"
                          id="pwcheck-input"
                          name ="inputPw"
                          
                          disabled
                          required
                        />
                      </label>
                    </div>
                    <div class="pwcheck-reg">
                      <p id="pwcheck-reg-text"></p>
                    </div>
                  </div>

                  <!-- 닉네임 인풋 영역 -->
                  <div class="nm-input-area">
                    <label>
                      닉네임 <br />
                      <input
                        type="text"
                        id="nm-input"
                        name ="inputNm"
                        value="${loginMember.memberNick}"
                        disabled
                        required
                        placeholder="한글,영문 2~10자 "
                      />
                    </label>
                    <div class="nm-reg">
                      <p id="nm-reg-text"></p>
                    </div>
                  </div>
                  <!-- 회원탈퇴  영역 -->
                  <div class="secession-area">
                    <span id="secession-btn">회원탈퇴</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 완료 & 편집취소 버튼 영역 -->
            <div class="button-area">
              <button
                type="button"
                class="btn-primary-fill"
                id="info-change-btn"
              >
                편집
              </button>
              <button
                type="button"
                class="btn-primary-line"
                id="update-cancle-btn"
              >
                취소
              </button>
              <button type="submit" class="btn-primary-fill" id="submit-btn">
                완료
              </button>
            </div>
          </form>
        </div>
      </div>

      <!--회원탈퇴 모달창 -->
      <div class="secession-modal">
        <div class="secession-modal-window"></div>
        <div class="secession-modal-box">
          <!-- 박스 내부 영역잡기 div -->
          <div class="secession-modal-inner-box">
            <div id="secession-modal-title-box">
              <span>
                <i class="ic-warning"></i>
                <h3 id="secession-modal-title-text">회원탈퇴</h3>
              </span>
            </div>
            <div id="check-sentence-box">
              <h4 id="check-sentence-text">정말로 탈퇴 하시겠습니까?</h4>
            </div>
            <form action="#" method="POST">
              <div id="now-pw-box">
                <div class="icon-position-box-modal">
                  <i class="ic-lock"></i>
                  <input
                    type="password"
                    id="now-pw-input"
                    placeholder="현재 비밀번호를 입력하세요"
                    required
                  />
                </div>
              </div>
              <div id="cancle-accept-btn-box">
                <button class="btn-primary-line" id="cancle-btn">아니오</button>
                <button
                  class="btn-primary-line btn-primary-fill"
                  id="accept-btn"
                >
                  네, 삭제할게요
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- 회원 탈퇴 모달 끝 -->

      <!-- 프로필 사진 편집 모달  -->
      <div class="update-img-modal">
        <div class="update-img-modal-window"></div>
        <div class="update-img-modal-box">
          <div class="update-img-modal-inner-box">
            <div class="update-img-modal-title-text-box">
              <h2 id="update-img-modal-title-text">프로필 사진 변경</h2>
            </div>

            <div class="update-img-thumbnail-outerbox">
              <div id="update-img-thumbnail-innerbox">
	              <c:if test="${empty loginMember.profileImage }">
	                <img src="${contextPath}/resources/assets/images/default-user-img.png" alt="변경 프로필 사진" />
	              </c:if>
	              <c:if test="${!empty loginMember.profileImage }">
	                <img src="${contextPath}/${loginMember.profileImage}" alt="변경 프로필 사진" />
	              </c:if>
	              
              </div>
            </div>
            <form action="#" method="GET">
              <div class="update-img-file-input-box">
                <label for="update-img-file-input" class="btn-primary-fill"
                  >프로필 변경하기</label
                >
                <input
                  type="file"
                  id="update-img-file-input"
                  accept="image/jpeg,.png"
                  required
                />
              </div>
              <div class="update-img-cancle-accept-btn-box">
                <button
                  type="button"
                  id="update-img-cancle-btn"
                  class="btn-primary-line"
                >
                  취소
                </button>
                <button
                  type="button"
                  id="update-img-accept-btn"
                  class="btn-primary-fill"
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- 프로필 사진 편집 모달 끝 -->
    </section>
 
    <script src="${contextPath}/resources/js/google-search.js"></script>
    <script src="${contextPath}/resources/js/common/template-2.js"></script>
    <script src="${contextPath}/resources/js/member-profile.js"></script>
  </body>
</html>
