function loginValidate() {
  const inputId = document.getElementsByName("loginId")[0];

  const inputPw = document.getElementsByName("loginPw")[0];

  if (inputId.value.trim().length == 0) {
    alert("이메일을 입력해주세요.");
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

  return true; // form 태그 기본 이벤트 정상 수행
}
