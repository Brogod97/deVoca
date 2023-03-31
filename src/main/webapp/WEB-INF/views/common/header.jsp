<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

 <header>
   <!-- 로고 -->
   <div>
     <a href="${contextPath}/index.jsp">
       <img src="${contextPath}/resources/assets/images/devoca-logo.png" />
     </a>
   </div>
   <!-- 공백 -->
   <div></div>
   <!-- 헤더 우측 영역 -->
   <div>
     <!-- 구글-검색창 -->
     <div class="google-search">
       <fieldset>
         <img src="${contextPath}/resources/assets/images/google-logo.png" class="google-img" />
         <input
           type="search"
           id="google-search-input"
           name="google-search-input"
           autocomplete="off"
           placeholder="Google Search"
         />
       </fieldset>
       <button
         type="button"
         class="google-search-btn"
         id="google-search-btn"
       >
         <img src="${contextPath}/resources/assets/icon/search.svg" class="google-search-img" />
       </button>
     </div>
     <!-- FAQ / 로그인 / 회원가입 -->
     <div class="faq-login-signup">
       <a href="${contextPath}/static/faq.jsp">FAQ</a>
       <a href="${contextPath}/static/log-in.jsp">로그인</a>
       <a href="${contextPath}/static/terms.jsp">
         <button class="btn-primary-fill">회원가입</button>
       </a>
     </div>
   </div>
 </header>
 
 <aside class="header-shadow"></aside>
