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
        <form class="subform" id = "subform" method="POST" deta-email="nastrikelike@gmail.com" 
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
       
          <option value="계정 문의">계정 문의</option>
          <option value="이용 문의">이용 문의</option>
          <option value="기타 문의">기타 문의</option>
        
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
    
      
    </body>
  </body>
  
<script>
document.querySelector('form').addEventListener('submit', function(event) {


	  // 이름, 이메일, 건의사항, 메시지 내용을 입력했는지 확인
	  var uname = document.getElementById("name");
	  var email_id = document.getElementById("email");
	  var select = document.getElementById("selc");
	  var textarea = document.getElementById("textarea");

	  if (uname.value == "") {
	    alert("이름을 입력하세요.");
	    uname.focus();
	    return false;
	  };

	  if (email_id.value == "") {
	    alert("이메일 주소를 입력하세요.");
	    email_id.focus();
	    return false;
	  }

	  if (select.value == "") {
	    alert("건의사항을 입력하세요.");
	    select.focus();
	    return false;
	  }

	  if (textarea.value == "") {
	    alert("메시지를 입력하세요.");
	    textarea.focus();
	    return false;
	  }

	  // 제출 버튼을 "완료"로 변경
	  var btnElement = document.getElementById('btn');
	  btnElement.innerHTML = "완료";

	  // 데이터 전송
	  var xhr = new XMLHttpRequest();
	  xhr.open('POST', 'nastrikelike@gmail.com');
	  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	  xhr.onload = function() {
	    // 입력한 데이터 초기화 및 전송 완료 메시지 출력
	    document.getElementById("name").value = "";
	    document.getElementById("email").value = "";
	    document.getElementById("selc").value = "";
	    document.getElementById("textarea").value = "";
	    alert("전송이 완료되었습니다!");
	    // 문의하기 버튼을 다시 "문의하기"로 변경
	    btnElement.innerHTML = "문의하기";
	  };
	  xhr.send(new FormData(document.querySelector('form')));
	});
</script>
</html>
