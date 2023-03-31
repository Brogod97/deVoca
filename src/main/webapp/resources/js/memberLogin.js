// 로그인 유효성 검사
function loginValidate() {
  const inputId = document.getElementById("loginId")[0];

  const inputPw = document.getElementById("loginPw")[0];

  if (inputId.value.trim().length == 0) {
    alert("아이디를 입력해주세요");
    inputId.value = "";
    inputId.focus();
    return false;
  }

  if (inputPw.value.trim() == "") {
    alert("비밀번호를 입력해주세요.");
    inputPw.value = "";
    inputPw.focus();
    return false;
  }

  return true;
}

$.ajax({
	
	url : "member/logIn",
	data : {"memberId" : input.value},
	type : "POST",
	
	dataType : "JSON",
	
	success : function(member){
		
		console.log(member);
		
		div.innerHTML = "";
		
		if(member != null){
			
			const ul = document.createElement("ul");
			
			const li1 = document.createElement("li");
                li1.innerText = "아이디 : " + member.memberId;
                
             const li2 = document.createElement("li");
                li2.innerText = "닉네임 : " + member.memberNick;  
                
             const li3 = document.createElement("li");
                li5.innerText = "가입일 : " + member.enrollDate;
                
                ul.append(li1, li2, li3);  
                
                 div.append(ul);
		} else {
			
			 const h4 = document.createElement("h4");
			 
			  h4.innerText = "일치하는 회원이 없습니다";
			  
			  h4.style.color = "red";
			  
			   div.append(h4);
			
			}
		
		
	},
	
	
	
})