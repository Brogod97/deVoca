<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

<!-- nav바 -->
<nav class="nav-bar">
  <section>
    <a href="${contextPath}/WEB-INF/views/member/member-profile.jsp">
      <img id="profile-icon" src="${contextPath}/resources/assets/icon/profile.svg"/>
    </a>
    <a href="${contextPath}/WEB-INF/views/voca/voca-main.jsp">
      <img src="${contextPath}/resources/assets/icon/voca.svg" />
    </a>
    <a href="${contextPath}/WEB-INF/views/voca/quiz-main.jsp">
      <img src="${contextPath}/resources/assets/icon/quiz.svg" />
    </a>
    <a href="${contextPath}/WEB-INF/views/voca/shared.jsp">
      <img src="${contextPath}/resources/assets/icon/shared.svg" />
    </a>
  </section>
  <section>
    <a href="${contextPath}/lndex.jsp">
      <img src="${contextPath}/resources/assets/icon/logout.svg" />
    </a>
  </section>
</nav>

        