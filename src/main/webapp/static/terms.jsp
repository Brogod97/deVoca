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
제 1장 총칙
제1조(목적)
본 약관은 deVoca(이하 '갑'이라 한다)가 운영하는 인터넷 관련 서비스(이하 '서비스')라 한다)를 이용함에 있어 관리자와 이용자(이하 '회원'이라 한다)의 권리, 의무 책임사항을 규정함을 목적으로 한다.

제 2조('갑'의 의무)
1. '갑'은 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을 다하여야합니다.

2. '갑'은 항상 회원의 개인신상정보의 보안에 대하여 관리에 만전을 기함으로서 회원의 정보보안에 최선을 다하여야 합니다.

제 3조('회원'의 의무)
1. 회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 '갑'이 통지하는 사항을 준수하여야하며, 기타 '갑'의 업무에 방해되는 행위를 하여서는 안됩니다.

2. 회원은 '갑'의 사전 승낙없이 서비스를 이용하여 어떠한 영리 행위도 할 수 없습니다.

3. 회원은 서비스를 이용하여 얻은 정보를 '갑'의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.

제 4조(약관의 효력 및 변경 등)
1. 본 약관의 내용은 통합서비스의 화면에 게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한 여러분 모두에게 그 효력이 발생합니다.

2. 갑은 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다. 본 약관이 변경되는 경우 갑은 변경사항을 시행일자 15일 전부터 여러분에게 서비스 공지사항에서 공지 또는 통지하는 것을 원칙으로 하며, 피치 못하게 여러분에게 불리한 내용으로 변경할 경우에는 그 시행일자 30일 전부터 deVoca계정에 등록된 이메일 주소로 이메일 발송 등으로 개별적으로 알려 드리겠습니다.

3. 갑이 전 항에 따라 공지 또는 통지를 하면서 공지 또는 통지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 여러분의 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다.

4. 회원은 변경된 약관에 대하여 거부의사를 표시함으로써 이용계약의 해지를 선택할 수 있습니다.

5. 본 약관은 여러분이 본 약관에 동의한 날로부터 본 약관 제13조에 따른 이용계약의 해지 시까지 적용하는 것을 원칙으로 합니다. 단, 본 약관의 일부 조항은 이용계약의 해지 후에도 유효하게 적용될 수 있습니다

제 5조 (약관 외 준칙)
본 약관에 규정되지 않은 사항에 대해서는 관련 법령 또는 통합서비스를 구성하는 개별 서비스의 운영정책 및 규칙, 개별 서비스 내 세부 하위서비스의 이용약관, deVoca 운영정책 및 규칙 등(이하 총칭하여 ‘세부지침’)의 규정에 따릅니다. 또한 본 약관과 세부지침의 내용이 충돌할 경우 세부지침에 따릅니다.
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
                갑은 정보통신망법 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 갑의 개인정보처리방침이 적용됩니다. 다만, 갑의 공식 사이트 이외의 링크된 사이트에서는 갑의 개인정보처리방침이 적용되지 않습니다.


                      </textarea
                >
              </div>
            </div>

            <!-- 취소, 확인 버튼-->
            <div id="input-group">
             
                 <a href="${contextPath}"><input id="btn-reset" type="button" value="취소"
              /></a>
             
                <input class="btn-primary-fill" type="button" onclick="signUp()" value="동의"
              />
            </div>
          </form>
        </div>
      </section>

      <!-- 푸터 -->
      <jsp:include page="/WEB-INF/views/common/footer.jsp" />

      <script src="${contextPath}/resources/js/terms.js"></script>
      <script src="${contextPath}/resources/js/google-search.js"></script>
    </body>
  </body>
</html>
