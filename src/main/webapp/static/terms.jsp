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
      href="${contextPath}/resources/css/common/template-1.css"
    />
    <link rel="stylesheet" href="${contextPath}/resources/css/terms.css" />

    <title>deVoca - 회원 약관 동의</title>
  </head>
  <body>
    <body>
      <main>
        <jsp:include page="/WEB-INF/views/common/header.jsp" />
      </main>

      <!-- 바디 -->
      <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
      <section class="main-content-area">
        <div id="terms-box">
          <form id="terms-form">
            <h1 id="terms-title">약관 동의</h1>

            <label>
              <input
                type="checkbox"
                name="select-all"
                id="all"
                value="selectall"
                onclick="selectAll(this)"
              />
              <label for="all"></label>
              deVoca 이용약관, 개인정보 수집 및 이용, 프로모션 정보 수신(선택)에
              모두 동의합니다.
            </label>

            <div>
              <hr id="line" />
            </div>
            <div>
              <label class="terms-derc">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="c1"
                  onclick="checkSelectAll()"
                /><label for="c1"></label>
                deVoca 이용약관 동의(필수)
              </label>

              <br />
              <div>
                <textarea readonly>
deVoca에서 제공하는 이벤트/혜택 등 다양한 정보를 이메일로 받아보실 수 있습니다. 일부 서비스 (별도 회원 체계로 운영하거나 deVoca 가입 이후 추가 가입하여 이용하는 서비스 등)의 겅우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며, 이때에도 수신 동의에 대해 별도로 안내하고 동의를 받습니다.
                      </textarea
                >
              </div>
            </div>
            <br />
            <div>
              <label class="terms-derc">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="c2"
                  onclick="checkSelectAll()"
                />
                <label for="c2"></label>

                개인정보 수집 및 이용에 대한 안내(필수)
              </label>

              <br />
              <div>
                <textarea readonly>
deVoca에서 제공하는 이벤트/혜택 등 다양한 정보를 이메일로 받아보실 수 있습니다. 일부 서비스 (별도 회원 체계로 운영하거나 deVoca 가입 이후 추가 가입하여 이용하는 서비스 등)의 겅우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며, 이때에도 수신 동의에 대해 별도로 안내하고 동의를 받습니다.
                      </textarea
                >
              </div>
            </div>

            <!-- 취소, 확인 버튼-->
            <div id="input-group">
             
                 <a href="${contextPath}/member/logIn"><input id="btn-reset" type="button" value="취소"
              /></a>
             
                <a href="${contextPath}/member/signUp"><input class="btn-primary-fill" type="button" value="동의"
              /></a>
            </div>
          </form>
        </div>
      </section>

      <!-- 푸터 -->
      <jsp:include page="/WEB-INF/views/common/footer.jsp" />

      <script src="${contextPath}/resources/common/js/terms.js"></script>
      <script src="${contextPath}/resources/js/google-search.js"></script>
    </body>
  </body>
</html>
