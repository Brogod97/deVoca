<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

<!-- nav바 -->
<nav class="nav-bar">
  <section>
    <a href="${contextPath}/member/member-profile">
      <img
        id="profile-icon"
        src="${contextPath}/resources/assets/icon/profile.svg"
      />
    </a>
    <a href="${contextPath}/voca/voca-main">
      <img src="${contextPath}/resources/assets/icon/word.svg" />
    </a>
    <a href="${contextPath}/voca/quiz-main">
      <img src="${contextPath}/resources/assets/icon/quiz.svg" />
    </a>
    <a href="${contextPath}/voca/explore">
      <img src="${contextPath}/resources/assets/icon/shared.svg" />
    </a>
   	
  </section>
  <section>
    <a href="${contextPath}/about/inquiry">
      <img src="${contextPath}/resources/assets/icon/send.svg" alt="" />
    </a>
    <a href="${contextPath}/member/logout">
      <img src="${contextPath}/resources/assets/icon/logout.svg" />
    </a>
  </section>
</nav>
