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
                    <div class="faq-box__question"><span>Q.  왜 devoca인가요?</span></div>
                    <div class="faq-box__answer">
                      <div>
                        - 하이퍼텍스트 마크업 언어(HyperText Markup Language)입니다.
                        </div>
                        <div>
                         하이퍼텍스트 마크업 언어(HyperText Markup Language)입니다.
                                         하이퍼텍스트 마크업 언어(HyperText Markup Language)입니다.
                                                         하이퍼텍스트 마크업 언어(HyperText Markup Language)입니다.
                        </div>
                      
                    </div>
                  </li>
                  <li>
                    <div class="faq-box__question"><span>Q. 어떻게 퀴즈를 시작하나요?</span></div>
                    <div class="faq-box__answer">
                      <div>
                        - 캐스케이딩 스타일 시트(Cascading Style Sheets)입니다.
                      </div>
                  
                    </div>
                  </li>
                  <li>
                    <div class="faq-box__question"><span>Q.   어떻게 단어를 추가하나요?</span></div>
                    <div class="faq-box__answer">
                      <div>
                        - 캐스케이딩 스타일 시트(Cascading Style Sheets)입니다.
                      </div>
                  </li>
                  <li>
                    <div class="faq-box__question"><span>Q. 어떻게 단어를 공유하나요?</span></div>
                    <div class="faq-box__answer">
                      <div>
                        - 하이퍼텍스트 마크업 언어(HyperText Markup Language)입니다.
                      </div>
                     
                    </div>
                  </li>
                  <li>
                    <div class="faq-box__question"><span>Q. 추가질문입니다.</span></div>
                    <div class="faq-box__answer">
                     <div>
                      - 캐스케이딩 스타일 시트(Cascading Style Sheets)입니다.
                     </div>
               
                      <div>
                        - 하이퍼텍스트 마크업 언어(HyperText Markup Language)입니다.
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
