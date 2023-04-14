// 유효성 검사 여부를 기록할 객체 생성
const checkObj = {
  uid: false,
  upw: false,
  upw2: false,
  nn: false,
};

//====================================================================

const uid = document.getElementById("uid"); // 아이디 인풋
const upw = document.getElementById("upw"); // 비밀번호 인풋
const upw2 = document.getElementById("upw2"); // 비밀저호 확인 인풋
const nn = document.getElementById("nn"); // 닉네임 인풋

const idMessage = document.getElementById("idMessage"); // 아이디 메세지
const pwMessage = document.getElementById("pwMessage"); // 비번 메세지
const pw2Message = document.getElementById("pw2Message"); // 비번 확인 메세지
const nameMessage = document.getElementById("nameMessage"); // 닉네임 메세지

const idicon = document.querySelector(".uId i"); // 아아디 아이콘
const pwicon = document.querySelector(".uPw i"); // 비번 아이콘
const pw2icon = document.querySelector(".uPw2 i"); // 비번확인 아이콘
const nickicon = document.querySelector(".uName i"); // 닉네임 아이콘

//==========================================================================

uid.addEventListener("keypress", () => {
  idicon.classList.add("ic-login-circle-active");
  idicon.classList.remove("ic-login-circle-default");
});

// 아이디 유효성 검사

uid.addEventListener("input", function () {
  // 입력이 되지 않은 경우
  if (uid.value.length == 0) {
    idMessage.innerText = "메일을 받을 수 있는 이메일을 입력해주세요.";
    idMessage.classList.remove("confirm", "error");

    checkObj.uid = false;
    return;
  }

  // 입력 된 경우
  const regExp = /^[\w\-\_]{4,}@[\w\-\_]+(\.\w+){1,3}$/;

  if (regExp.test(uid.value)) {
    $.ajax({
      url: "idDupCheck",

      data: { uid: uid.value },

      type: "GET",

      success: function (result) {
        if (result == 1) {
          // 중복 O
          idMessage.innerText = "이미 사용중인 이메일 입니다.";
          idMessage.classList.add("error");
          idMessage.classList.remove("confirm");
          uid.style.borderColor = "var(--red)";
          idicon.classList.add("ic-login-circle-wrong");

          checkObj.uid = false;
        } else {
          // 중복 X
          idMessage.innerText = "사용 가능한 이메일 입니다.";
          idMessage.classList.add("confirm");
          idMessage.classList.remove("error");
          idicon.classList.remove("ic-login-circle-wrong");
          idicon.classList.add("ic-login-circle-active");
          uid.style.borderColor = "var(--primary)";

          checkObj.uid = true;
        }
      },

      error: function () {
        console.log("에러 발생");
      },
    });
  } else {
    idMessage.innerText = "이메일 형식이 유효하지 않습니다.";
    idMessage.classList.add("error");
    idMessage.classList.remove("confirm");
    uid.style.borderColor = "var(--red)";
    idicon.classList.add("ic-login-circle-wrong");

    checkObj.uid = false;
  }
});

// 닉네임 유효성 검사

nn.addEventListener("keypress", () => {
  nickicon.classList.add("ic-login-circle-active");
  nickicon.classList.remove("ic-login-circle-default");
});

nn.addEventListener("input", function () {
  // 입력되지 않은 경우
  if (nn.value.length == 0) {
    nameMessage.innerText = "deVoca 내에서 사용할 닉네임을 입력해주세요.";
    nameMessage.classList.remove("confirm", "error");

    checkObj.nn = false;
    return;
  }

  const regExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

  if (regExp.test(nn.value)) {
    // 닉네임 중복검사
    $.ajax({
      url: "nicknameDupCheck",
      data: { nn: nn.value },
      type: "GET",

      success: function (res) {
        if (res == 0) {
          // 닉네임 중복 X
          nameMessage.innerText = "사용 가능한 닉네임 입니다.";
          nameMessage.classList.add("confirm");
          nameMessage.classList.remove("error");
          nickicon.classList.remove("ic-login-circle-wrong");
          nickicon.classList.add("ic-login-circle-active");
          nn.style.borderColor = "var(--primary)";

          checkObj.nn = true;
        } else {
          // 닉네임 중복 O
          nameMessage.innerText = "이미 사용중인 닉네임 입니다.";
          nameMessage.classList.add("error");
          nameMessage.classList.remove("confirm");
          nn.style.borderColor = "var(--red)";
          nickicon.classList.add("ic-login-circle-wrong");

          checkObj.nn = false;
        }
      },

      error: function () {
        console.log("에러 발생");
      },
    });
  } else {
    nameMessage.innerText = "닉네임 형식이 유효하지 않습니다.";
    nameMessage.classList.add("error");
    nameMessage.classList.remove("confirm");
    nn.style.borderColor = "var(--red)";
    nickicon.classList.add("ic-login-circle-wrong");

    checkObj.nn = false;
  }
});

upw.addEventListener("keypress", () => {
  pwicon.classList.add("ic-login-circle-active");
  pwicon.classList.remove("ic-login-circle-default");
});

// 비밀번호 유효성 검사

upw.addEventListener("input", function () {
  if (upw.value.length == 0) {
    pwMessage.innerText =
      "영어 대소문자, 숫자, 특수문자 포함 8~20자로 작성해주세요";
    pwMessage.classList.remove("confirm", "error");

    checkObj.upw = false; // 유효 X
    return;
  }

  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;

  if (regExp.test(upw.value)) {
    // 비밀번호 유효

    checkObj.upw = true;

    if (upw2.value.length == 0) {
      pwMessage.innerText = "유효한 비밀번호 형식입니다.";
      pwMessage.classList.add("confirm");
      pwMessage.classList.remove("error");
      pwicon.classList.remove("ic-login-circle-wrong");
      pwicon.classList.add("ic-login-circle-active");
      upw.style.borderColor = "var(--primary)";
    } else {
      checkPw(); // 비밀번호 일치 검사 함수 호출()
    }
  } else {
    pwMessage.innerText =
      "영어 대소문자, 숫자, 특수문자 포함 8~20자로 작성해주세요";
    pwMessage.classList.add("error");
    pwMessage.classList.remove("confirm");
    upw.style.borderColor = "var(--red)";
    pwicon.classList.add("ic-login-circle-wrong");

    checkObj.upw = false; // 유효 X
  }
});

upw2.addEventListener("keypress", () => {
  pw2icon.classList.add("ic-login-circle-active");
  pw2icon.classList.remove("ic-login-circle-default");
});

// 비밀번호 확인 유효성 검사
upw2.addEventListener("input", checkPw);

function checkPw() {
  // 비밀번호 / 비밀번호 확인이 같을 경우
  if (upw.value == upw2.value) {
    pw2Message.innerText = "비밀번호가 일치합니다.";
    pw2Message.classList.add("confirm");
    pw2Message.classList.remove("error");
    pw2icon.classList.remove("ic-login-circle-wrong");
    pw2icon.classList.add("ic-login-circle-active");
    upw2.style.borderColor = "var(--primary)";

    checkObj.upw2 = true; // 유효 O
  } else {
    pw2Message.innerText = "비밀번호가 일치하지 않습니다.";
    pw2Message.classList.add("error");
    pw2Message.classList.remove("confirm");
    upw2.style.borderColor = "var(--red)";
    pw2icon.classList.add("ic-login-circle-wrong");

    checkObj.upw2 = false;
  }
}

// 회원가입 버튼 클릭 시 유효성 검사가 완료 되었는지 확인하는 함수
function signUpValidate() {
  let str;

  for (let key in checkObj) {
    if (!checkObj[key]) {
      switch (key) {
        case "uid":
          str = "이메일이";
          break;
        case "upw":
          str = "비밀번호가";
          break;
        case "upw2":
          str = "비밀번호 확인이";
          break;
        case "nn":
          str = "닉네임이";
          break;
      }

      str += "유효하지 않습니다.";

      alert(str);

      document.getElementById(key).focus();

      return false;
    }
  }
  return true;
}
