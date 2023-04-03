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
    <link rel="stylesheet" href="${contextPath}/resources/css/inquiry.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <title>문의하기</title>
  </head>
  <body>
    <body>
      <!-- 헤더 -->
<jsp:include page="/WEB-INF/views/common/header.jsp"/>

      <!-- 바디 -->
      <!-- main-content-area는 레이아웃용이므로 해당 태그 하위에서부터 작성할 것 -->
      <section class="main-content-area">
        <div id="blank"></div>
        <form class="subform" method="POST" deta-email="nastrikelike@gmail.com" onsubmit="return checkAll()"
        action="https://script.google.com/macros/s/AKfycbx6CiuyImAdQCP78uLCsCXBzYlHlKmuDAByE7Il7NJxKvJdYFg8U_I0t2xE2AJeHZGS/exec" target="frAttachFiles">
        <div class="menu">
          <div class="texttitle"><span id = "quetitle">문의하기</span></div>
      <span id = quetext>deVoca를 이용해주셔서 감사합니다.<br>
  사용하시면서 발생한 불편사항을 저희에게 알려주세요 🐝 </span>
<div id="tablediv">
<table id="table">

<tr>

  
  <td>
     <div class="titlename"> 이름</div>
     <div class="name">
      <input type="text" class="name" id="name" name="name">
    </div>
    </td>

</tr>

<tr>

  <td>
      <div class="titlename"> 이메일</div>
      <div class="email">
      <input type="email" id="email" name="email">
      </div>
  </td>
</tr>

<tr>

  <td>
      <div class="titlename"> 문의 유형</div>
  
      <div class="selectBox">
        <div class="select-wrap">
      <select id="selc" name="select">
       
          <option value="건의">건의</option>
          <option value="버그">버그</option>
          <option value="신고">신고</option>
          <option value="기타">기타</option>
          <option selected></option>
        
      </select>
      <div class="select__arrow"></div>
    </div>
  
  </td>
</tr>

</table> 

</div>

<div id = "message">
  <td>
<div id="messagetitle">메세지</div> 

<textarea name="textarea" id="textarea" cols="50" rows="15"></textarea>

</div>
</td>
<br>
<button 
  id='btn' 
  onclick='changeBtnName()'> 
  문의하기
</button>

</div>
</form>
<iframe name="frAttachFiles" style="display: none"></iframe>
      </section>

      <!-- 푸터 -->
      <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

      <script src="${contextPath}/resources/js/google-search.js"></script>
      <script src="${contextPath}/resources/js/inquiry.js"></script>
      
    </body>
  </body>
</html>
