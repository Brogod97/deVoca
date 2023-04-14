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
                            deVoca 이용약관, 개인정보 수집 및 이용, 프로모션
                            정보 수신(선택)에 모두 동의합니다.
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
제1조(목적)
본 약관은 deVoca(이하 '갑'이라 한다)가 운영하는 인터넷 관련 서비스(이하 '서비스')라 한다)를 이용함에 있어 관리자와 이용자(이하 '회원'이라 한다)의 권리, 의무 책임사항을 규정함을 목적으로 한다.

제 2조('갑'의 의무)
1. '갑'은 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을 다하여야합니다.

2. '갑'은 항상 회원의 개인신상정보의 보안에 대하여 관리에 만전을 기함으로서 회원의 정보보안에 최선을 다하여야 합니다.

제 3조('회원'의 의무)
1. 회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 '갑'이 통지하는 사항을 준수하여야하며, 기타 '갑'의 업무에 방해되는 행위를 하여서는 안됩니다.

2. 회원은 '갑'의 사전 승낙없이 서비스를 이용하여 어떠한 영리 행위도 할 수 없습니다.

3. 회원은 서비스를 이용하여 얻은 정보를 '갑'의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.
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
제1 조 (이용계약 체결)
1. 이용계약은 회원이 되고자 하는 자(이하 가입신청자)가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 갑이 이러한 신청에 대하여 승낙함으로써 체결됩니다.

2. 갑은 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 갑은 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.

	1) 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 단 갑의 회원 재가입 승낙을 얻은 경우에는 예외로 함.

	2) 실명이 아니거나 타인의 명의를 이용한 경우
	
	3) 허위의 정보를 기재하거나, 갑이 제시하는 내용을 기재하지 않은 경우
	
	4) 14세 미만 아동이 법정대리인(부모 등)의 동의를 얻지 아니한 경우
	
	5) 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우

3. 제1항에 따른 신청에 있어 갑은 회원의 종류에 따라 전문기관을 통한 실명확인 및 본인인증을 요청할 수

4. 갑은 서비스관련설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습

5. 제2항과 제4항에 따라 회원가입신청의 승낙을 하지 아니하거나 유보한 경우, 갑은 원칙적으로 이를 가입

6. 이용계약의 성립 시기는 갑이 가입완료를 신청절차 상에서 표시한 시점으로 합니다.

7. 갑은 회원에 대해 갑정책에 따라 등급별로 구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.

                      </textarea
                                >
                            </div>
                        </div>

                        <!-- 취소, 확인 버튼-->
                        <div id="input-group">
                            <a href="${contextPath}"
                                ><input
                                    id="btn-reset"
                                    type="button"
                                    value="취소"
                            /></a>

                            <input
                                class="btn-primary-fill"
                                type="button"
                                onclick="signUp()"
                                value="동의"
                            />
                        </div>
                    </form>
                </div>
            </section>

            <!-- 푸터 -->
            <jsp:include page="/WEB-INF/views/common/footer.jsp" />

            <script>
                const contextPath = "${contextPath}";
            </script>
            <script src="${contextPath}/resources/js/terms.js"></script>
            <script src="${contextPath}/resources/js/google-search.js"></script>
        </body>
    </body>
</html>
