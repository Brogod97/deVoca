const checkObj = {
"memberId"			:	false,
"memberPw"			:	false,
"memberPwConfirm"	:	false,
"memberNick"		:	false
};

const nickicon = document.querySelector(".uName i");
const idicon = document.querySelector(".uId i");
const pwicon = document.querySelector(".uPw i");
const pw2icon = document.querySelector(".uPw2 i");


const memberId = document.getElementById("uid");
const idMessage = document.querySelector("#idMessage");

memberId.addEventListener("keypress", () => {
	idicon.classList.add("ic-login-circle-active");
	idicon.classList.remove("ic-login-circle-default");
});


memberId.addEventListener("input", function(){
	
	// 입력이 되지 않은 경우
	if(memberId.value.length == 0) {
		idMessage.innerText = "메일을 받을 수 있는 이메일을 입력해주세요.";
		idMessage.classList.remove("confirm", "error");
		
		checkObj.memberId = false;
		return;
	}
	
	// 입력 된 경우
	const regExp = /^[\w\-\_]{4,}@[\w\-\_]+(\.\w+){1,3}$/;
	
	if( regExp.test (memberId.value)) { // 유효한 경우
		
		$.ajax({
			
			url : "idDupCheck",
			
			data : {"uid" : memberId.value},
			// 여기서 안되면 MVC 파라미터 uid로 변경해보기
			
			type : "GET",
			
			 success : function(result){
			
				
				if(result == 1){ // 중복 O
					idMessage.innerText = "이미 사용중인 이메일 입니다.";
					idMessage.classList.add("error");
					idMessage.classList.remove("confirm");
					memberId.style.borderColor = "var(--red)";
					idicon.classList.add("ic-login-circle-wrong");
					
					 checkObj.memberId = false;
					
				} else { // 중복 X
					idMessage.innerText = "사용 가능한 이메일 입니다.";
					idMessage.classList.add("confirm");
					idMessage.classList.remove("error");
					idicon.classList.remove("ic-login-circle-wrong");
					idicon.classList.add("ic-login-circle-active");
					memberId.style.borderColor = "var(--primary)";
					
					checkObj.memberId = true;
					
				}
			},
			
			error : function() {
				
				console.log("에러 발생");
			}
			
		});
	
	} else {
		idMessage.innerText = "이메일 형식이 유효하지 않습니다.";
		idMessage.classList.add("error");
		idMessage.classList.remove("confirm");
		memberId.style.borderColor = "var(--red)";
		idicon.classList.add("ic-login-circle-wrong");
		checkObj.memberId = false;
	}
});

const memberNick = document.getElementById("nn")
const nameMessage = document.getElementById("nameMessage");

memberNick.addEventListener("keypress", () => {
	nickicon.classList.add("ic-login-circle-active");
	nickicon.classList.remove("ic-login-circle-default");
});

memberNick.addEventListener("input", function() {
	
 // 입력되지 않은 경우
    if(memberNick.value.length == 0){
        nameMessage.innerText = "deVoca 내에서 사용할 닉네임을 입력해주세요.";
        nameMessage.classList.remove("confirm", "error");

        checkObj.memberNick = false; // 유효 X 기록
        return;
    }
	
	const regExp = /[가-힣|a-z|A-Z]{2,10}$/;
  
  
  if( regExp.test(memberNick.value)) {
	
	
	// 닉네임 중복검사
	$.ajax({
		url : "nicknameDupCheck",
		data : { "nn" : memberNick.value },
		type : "GET",
		
		success : function(res) {
			
			if(res == 0) {
				nameMessage.innerText = "사용 가능한 닉네임 입니다.";
				nameMessage.classList.add("confirm");
				nameMessage.classList.remove("error");
				nickicon.classList.remove("ic-login-circle-wrong");
				nickicon.classList.add("ic-login-circle-active");
				memberNick.style.borderColor = "var(--primary)";
				checkObj.memberNick = true;
					
				
			
			} else {
				nameMessage.innerText = "이미 사용중인 닉네임 입니다.";
				nameMessage.classList.add("error");
				nameMessage.classList.remove("confirm");
				memberNick.style.borderColor = "var(--red)";
				nickicon.classList.add("ic-login-circle-wrong");
				checkObj.memberNick = false;
				
			} 
			
			
		},
		
		error : function() {
			console.log("에러 발생");
		}
		
	});
	
	
} else {
	
	nameMessage.innerText = "닉네임 형식이 유효하지 않습니다";
	nameMessage.classList.add("error");
	nameMessage.classList.remove("confirm");
	memberNick.style.borderColor = "var(--red)";
	nickicon.classList.add("ic-login-circle-wrong");
	
	
	
	checkObj.memberNick = false;
}
});





// 비밀번호 유효성 검사
const memberPw = document.getElementById("upw");
const memberPwConfirm = document.getElementById("upw2");
const pwMessage = document.getElementById("pwMessage");
const pw2Message = document.getElementById("pw2Message");


memberPw.addEventListener("keypress", () => {
	pwicon.classList.add("ic-login-circle-active");
	pwicon.classList.remove("ic-login-circle-default");
});



memberPw.addEventListener("input", function() {
	
	if(memberPw.value.length == 0) {
		pwMessage.innerText = "영어 대소문자, 숫자, 특수문자 포함 8~20자로 작성해주세요";
		pwMessage.classList.remove("confirm", "error");
		
		checkObj.memberPw = false; // 유효 X 기록
        return;
	}
	
	const regExp =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
	
	if( regExp.test(memberPw.value)) { // 비밀번호 유효
		
		checkObj.memberPw = true;
		
		if(memberPwConfirm.value.length == 0) {
			pwMessage.innerText = "유효한 비밀번호 형식입니다.";
			pwMessage.classList.add("confirm");
			pwMessage.classList.remove("error");
			pwicon.classList.remove("ic-login-circle-wrong");
			pwicon.classList.add("ic-login-circle-active");
			memberPw.style.borderColor = "var(--primary)";
			
		
			
		
		} else {
			checkPw(); // 비밀번호 일치 검사 함수 호출 ()
		}
	} else {
		pwMessage.innerText = "영어 대소문자, 숫자, 특수문자 포함 8~20자로 작성해주세요";
		pwMessage.classList.add("error");
		pwMessage.classList.remove("confirm");
		memberPw.style.borderColor = "var(--red)";
		pwicon.classList.add("ic-login-circle-wrong");
		
		checkObj.memberPw = false;
	}
});

// 비밀번호 확인 유효성 검사
memberPwConfirm.addEventListener("keypress", () => {
	pw2icon.classList.add("ic-login-circle-active");
	pw2icon.classList.remove("ic-login-circle-default");
});

memberPwConfirm.addEventListener("input", checkPw);


function checkPw() {
	// 비밀번호 / 비밀번호 확인이 같을 경우
	if(memberPw.value == memberPwConfirm.value) {
		pw2Message.innerText = "비밀번호가 일치합니다.";
		pw2Message.classList.add("confirm");
		pw2Message.classList.remove("error");
		pw2icon.classList.remove("ic-login-circle-wrong");
		pw2icon.classList.add("ic-login-circle-active");
		memberPwConfirm.style.borderColor = "var(--primary)";
	
		
		checkObj.memberPwConfirm = true;
		
	} else {
		pw2Message.innerText = "비밀번호가 일치하지 않습니다.";
		pw2Message.classList.add("error");
		pw2Message.classList.remove("confirm");
		memberPwConfirm.style.borderColor = "var(--red)";
		pw2icon.classList.add("ic-login-circle-wrong");
		
		checkObj.memberPwConfirm = false;
	}

}


// 회원가입 버튼 클릭 시 유효성 검사가 완료 되었는지 확인하는 함수 
function signUpValidate(){
	
	let str;
	
	for(let key in checkObj) {
		
		// 현재 접근 중인 key의 value가 false인 경우
		if( !checkObj[key] ){ 
			
			switch(key){
				case "memberId":		str="이메일이"; break;
				case "memberPw":		str="비밀번호가"; break;
				case "memberPwConfirm":	str="비밀번호 확인이"; break;
				case "memberNick":		str="닉네임이"; break;
			};
			
			str += "유효하지 않습니다.";
			
			alert(str);
			
		document.getElementById(key).focus();
            
            return false; // form태그 기본 이벤트 제거
        }
    }

    return true; // form태그 기본 이벤트 수행

}