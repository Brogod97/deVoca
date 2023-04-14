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
    <link rel="stylesheet" href="${contextPath}/resources/css/common/template-1.css" />
    <link rel="stylesheet" href="${contextPath}/resources/css/FAQ.css" />
    <title>FAQ</title>
  </head>
  <body>
    <body>
          <!-- 헤더 -->
<jsp:include page="/WEB-INF/views/common/header.jsp"/>


      <!-- 바디 -->
      <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
      <section class="main-content-area">
        <body>
  
          <!-- 모바일에서 기기의 해상도 능력에 상관없이 절대적인 크기로 나오도록 -->
          <!-- 예를들어, pc에서의 300px이 모바일 에서도 똑같은 크기로 나오도록 -->
          <meta name="viewport" content="width=device-width, initial-scale=1">
          
          <!-- 제이쿼리 -->
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          
          <!-- 폰트어썸 -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
          <!-- 폰트어썸 FREE 아이콘 리스트 : https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free -->
          
       
    
            <div id="faq-collection" class="faq-back">
           
            <div class="container mx-auto">
              <div id="faq-center">
               
                <div id="faq-title">
                  <tr>
              <p>자주 묻는 질문(FAQ)</p>
              </tr>
            </div>
          </div>
<div id="cneter">
              <div class="faq-box">
                <!--
                ul>li*10>div.faq-box__question>span{질문 $}^div.faq-box__answer>lorem*10
              -->
                <ul>
                  <li>
                    <div class="faq-box__question"><span> 왜 devoca인가요?</span></div>
                    <div class="faq-box__answer">
                      <div>
                        개발자의 developer의 dev와 단어를 뜻하는 voca의 합성어로 개발자 단어장이라는 뜻을 담았습니다.
                        </div>
                  
                      
                    </div>
                  </li>
                  <li>
                    <div class="faq-box__question"><span>어떻게 퀴즈를 시작하나요?</span></div>
                    <div class="faq-box__answer">
                      <div>
                       로그인 후 좌측 패널의  <img
                src="${contextPath}/resources/assets/icon/quiz.svg"
                alt style="height: 20px;"
              />연필모양을 클릭하면 나오는 선택 페이지에서 원하는 카테고리를 선택하여 퀴즈를 시작할 수 있습니다.
                      </div>
                  
                    </div>
                  </li>
                  <li>
                    <div class="faq-box__question"><span>어떻게 단어를 추가하나요?</span></div>
                    <div class="faq-box__answer">
                      <div>
                        로그인 후 좌측 패널의  <img
                src="${contextPath}/resources/assets/icon/word.svg"
                alt style="height: 20px;"
              />노트 모양 아이콘을 클릭하시면 단어를 추가하실 수 있습니다.
                      </div>
                  </li>
                  
                    <li>
                    <div class="faq-box__question"><span>그 외 궁금한게 있으면 어떻게 하나요?</span></div>
                    <div class="faq-box__answer">
                     <div>
                     화면 최하단 영역에 있는 Contact를 눌러 저희에게 불편사항을 보내주시면 <br>
                     최대한 빠른 시일내에 답변 드리겠습니다 !
                     </div>

                    </div>
                  </li>
                  
                  <li>
                    <div class="faq-box__question"><span>비밀번호가 기억이 나지 않아요?</span></div>
                    <div class="faq-box__answer">
                     <div>
                     로그인 화면에서 비밀번호를 잊으셨나요?를 선택하고 이메일을 입력하시면 이메일로 비밀번호가 전송됩니다.
                     </div>

                    </div>
                  </li>
                     
                  
                   <li>
                    <div class="faq-box__question"><span>회원 탈퇴 방법은 어떻게 하나요?</span></div>
                    <div class="faq-box__answer">
                     <div>
                    회원 정보 화면에 진입 후 오른쪽 하단의 회원 탈퇴 버튼을 누르면 탈퇴 할 수 있습니다.
                     </div>

                    </div>
                  </li>
             
               
                </ul>
              </div>
            </div>
            </div>
          </div>
          </section>

      </section>

           <!-- 푸터 -->
           <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

      <script src="${contextPath}/resources/js/google-search.js"></script>
      <script src="${contextPath}/resources/js/faq.js"></script>
    </body>
  </body>
</html>
