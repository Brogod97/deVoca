  function changeBtnName()  {
	    var btnElement = document.getElementById('btn');
	  
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
	    
	    btnElement.innerHTML = "완료";


	    document.subform.submit(); //유효성 검사의 포인트   
	  }
