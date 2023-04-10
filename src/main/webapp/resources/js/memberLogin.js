// 로그인 유효성 검사
function loginValidate() {
  const inputId = document.getElementsByName("inputId")[0];

  const inputPw = document.getElementsByName("inputPw")[0];

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


// 자동 로그인 체크박스가 체크 되었을 때 이벤트 처리
document.getElementById("saveId").addEventListener("change", function(){
	
	 // 체크 여부 확인
    console.log(this.checked)
    
    if( this.checked ){ // 체크박스가 체크된 경우

        const str = "개인 정보 보호를 위해 개인 PC에서의 사용을 권장합니다. 개인 PC가 아닌 경우 취소를 눌러주세요.";

        //confirm(str) // 확인(true) / 취소(false) 대화상자

        if( !confirm(str)  ){ // 취소를 눌렀을 때
            this.checked = false; // 체크 해제
        }
    }

});