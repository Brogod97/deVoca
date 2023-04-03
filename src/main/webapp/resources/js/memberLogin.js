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
