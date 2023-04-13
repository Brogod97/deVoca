// 회원정보 입상 시 인풋창

(function () {
  const pwInput = document.querySelector("#pw-input");
  const pwcheckInput = document.querySelector("#pwcheck-input");

  pwInput.value = "123456789";
  pwcheckInput.value = "123456789";
})();

//--------------------------------------------------------------

// ***전역변수***
const infoChangeBtn = document.querySelector("#info-change-btn"); // 편집 버튼
const submitBtn = document.querySelector("#submit-btn"); // 편집 완료버튼
const pwInput = document.querySelector("#pw-input"); // 비밀번호 인풋
const pwcheckInput = document.querySelector("#pwcheck-input"); // 비밀번호 확인 인풋
const nmInput = document.querySelector("#nm-input"); // 닉네임 인풋
const updateCancle = document.querySelector("#update-cancle-btn"); // 편집 취소 버튼
const secessionArea = document.querySelector(".secession-area"); // 회원탈퇴 영역
const secessionBtn = document.querySelector("#secession-btn"); // 회원탈퇴 버튼
const secessionModalWindow = document.querySelector(".secession-modal-window"); // 회원탈퇴 모달바깥부분
const secessionModal = document.querySelector(".secession-modal"); // 회원탈퇴 모달창
const secessionModalBox = document.querySelector(".secession-modal-box"); // 회원탈퇴 모달 박스
const pwicon = document.querySelector(".pw-input-box i"); // 비밀번호 인풋 자물쇠 아이콘
const pwcheckicon = document.querySelector(".pwcheck-input-box i"); // 비밀번호 확인 인풋 자물쇠 아이콘
const modalpwicon = document.querySelector(".icon-position-box-modal i"); // 모달 현재비밀번호 입력 모달 자물쇠 아이콘
const cancleBtn = document.querySelector("#cancle-btn"); // 회원탈퇴 모달창 아니오 버튼
const nowPwInput = document.querySelector("#now-pw-input"); // 회원탈퇴 모달창 현재비밀번호 입력 인풋
const imgUpdateFileInput = document.querySelector("#img-update-file-input"); // 이미지 편집 파일 인풋
const imgEdit = document.querySelector("#img-edit"); // 이미지 편집 버튼 (모달 키는 버튼)
const updateImgModalWindow = document.querySelector(".update-img-modal-window"); // 이미지 편집 모달 바깥 부분
const updateImgCancleBtn = document.querySelector("#update-img-cancle-btn"); // 이미지모달창 편집 취소 버튼
const updateImgModal = document.querySelector(".update-img-modal"); // 프로필 편집 모달창

// 편집 활성화

function editActive(snsFlag) {
  if (snsFlag == "N") {
    pwInput.removeAttribute("disabled");
    pwcheckInput.removeAttribute("disabled");
    nmInput.removeAttribute("disabled");
    pwInput.value = null;
    pwcheckInput.value = null;
    pwInput.focus();
  } else {
    nmInput.removeAttribute("disabled");
    nmInput.focus();
  }
  infoChangeBtn.style.display = "none";
  secessionBtn.style.display = "inline";
  updateCancle.style.display = "inline";
  submitBtn.style.display = "inline";
}

// 편집 취소버튼 클릭 시

updateCancle.addEventListener("click", () => {
  updateCancle.style.display = "none";
  secessionBtn.style.display = "none";
  submitBtn.style.display = "none";
  infoChangeBtn.style.display = "inline";

  window.location.reload();
});

// 비밀번호 인풋창 아이콘 색상 바꾸기

pwInput.addEventListener("focusin", () => {
  pwicon.classList.add("ic-lock-active");
  pwicon.classList.remove("ic-lock");
});

pwInput.addEventListener("focusout", () => {
  pwicon.classList.remove("ic-lock-active");
  pwicon.classList.add("ic-lock");
});

pwcheckInput.addEventListener("focusin", () => {
  pwcheckicon.classList.add("ic-lock-active");
  pwcheckicon.classList.remove("ic-lock");
});

pwcheckInput.addEventListener("focusout", () => {
  pwcheckicon.classList.remove("ic-lock-active");
  pwcheckicon.classList.add("ic-lock");
});

nowPwInput.addEventListener("focusin", () => {
  modalpwicon.classList.add("ic-lock-active");
  modalpwicon.classList.remove("ic-lock");
});

nowPwInput.addEventListener("focusout", () => {
  modalpwicon.classList.remove("ic-lock-active");
  modalpwicon.classList.add("ic-lock");
});
//----------------------------------------------------------------

// 회원탈퇴 모달창 띄우기

secessionBtn.addEventListener("click", () => {
  secessionModal.style.display = "flex";
});

// 모달 창 밖에 눌러서 모달 끄기
secessionModalWindow.addEventListener("click", () => {
  secessionModal.style.display = "none";
});

// 아니오 버튼 눌러서 회원탈퇴 모달창 끄기 & 현재 비밀번호 input value 비우기

cancleBtn.addEventListener("click", () => {
  secessionModal.style.display = "none";
  nowPwInput.value = "";
});

// 프로필 편집 모달창 띄우기

imgEdit.addEventListener("click", () => {
  updateImgModal.style.display = "flex";
});

// 모달 창 밖에 눌러서 모달 끄기
updateImgModalWindow.addEventListener("click", () => {
  updateImgModal.style.display = "none";
  window.location.reload();
});

// 아니오 버튼 눌러서 프로필 편집 모달창 끄기

updateImgCancleBtn.addEventListener("click", () => {
  updateImgModal.style.display = "none";
  window.location.reload();
});

/*******************************************************/
// 비밀번호 유효성검사
pwInput.addEventListener("input", () => {
  const pwReg = document.getElementById("pw-reg-text");
  const regEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
  //최소 8 자 및 최대 20 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상 :

  if (regEx.test(pwInput.value)) {
    pwReg.innerText = "";
    pwReg.classList.remove("wrong");
    pwInput.style.borderColor = "var(--primary)";
    pwicon.classList.add("ic-lock-active");
    pwicon.classList.remove("ic-lock-wrong");
  } else {
    pwReg.innerText = "사용불가능한 비밀번호입니다.";
    pwReg.classList.add("wrong");
    pwInput.style.borderColor = "var(--red)";
    pwicon.classList.add("ic-lock-wrong");
  }
});

// 비밀번호 확인 유효성검사
pwcheckInput.addEventListener("input", () => {
  const pwCheckReg = document.getElementById("pwcheck-reg-text");

  if (pwInput.value == pwcheckInput.value) {
    pwCheckReg.innerText = "";
    pwCheckReg.classList.remove("wrong");
    pwcheckInput.style.borderColor = "var(--primary)";
    pwcheckicon.classList.add("ic-lock-active");
    pwcheckicon.classList.remove("ic-lock-wrong");
  } else {
    pwCheckReg.innerText = "비밀번호가 일치하지않습니다.";
    pwCheckReg.classList.add("wrong");
    pwcheckInput.style.borderColor = "var(--red)";
    pwcheckicon.classList.add("ic-lock-wrong");
  }
});

// 닉네임 확인 유효성 검사
nmInput.addEventListener("input", () => {
  //TODO: DB 중복 닉네임 확인
  const regEx = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  const nmReg = document.getElementById("nm-reg-text");
  if (regEx.test(nmInput.value)) {
    // 닉네임 중복검사

    $.ajax({
      url: "nicknameDupCheck",
      data: { nn: nmInput.value },
      type: "GET",

      success: function (result) {
        console.log(result);
        if (result == 0) {
          nmReg.innerText = "";
          nmReg.classList.remove("wrong");
          nmInput.style.borderColor = "var(--primary)";
        } else {
          nmReg.innerText = "이미 사용중인 닉네임 입니다.";
          nmReg.classList.add("wrong");
          nmInput.style.borderColor = "var(--red)";
        }
      },

      error: function () {
        console.log("에러 발생");
      },
    });
  } else {
    nmReg.innerText = "사용불가능한 닉네임입니다.";
    nmReg.classList.add("wrong");
    nmInput.style.borderColor = "var(--red)";
  }
});

// 회원 정보변경 유효성검사
function infoValidate() {
  const regEx1 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
  const regEx2 = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  const pwreg = document.getElementById("pw-reg-text");
  const pwcheckreg = document.getElementById("pwcheck-reg-text");
  const nmreg = document.getElementById("nm-reg-text");

  if (!regEx1.test(pwInput.value)) {
    pwreg.innerText = "사용불가능한 비밀번호입니다.";
    pwInput.focus();
    return false;
  }

  if (pwInput.value != pwcheckInput.value) {
    pwcheckreg.innerText = "비밀번호가 일치하지 않습니다.";
    pwcheckInput.focus();
    return false;
  }

  if (!regEx2.test(nmInput.value)) {
    nmreg.innerText = "사용불가능한 닉네임입니다.";
    nmInput.focus();
    return false;
  }

  return true;
}

// 회원 탈퇴 유효성 검사
function secessionValidate() {
  // 정말 탈퇴할지 확인
  // - window.confirm("내용") : 대화 상자에 확인/취소 생성
  //      확인 클릭 시 true / 취소 클릭 시 false
  //      window는 생략 가능

  if (!confirm("정말 탈퇴 하시겠습니까?")) {
    //  취소를 누른 경우
    return false;
  }

  return true;
}

// 이미지 미리보기
const inputImage = document.getElementById("update-img-file-input");
if (inputImage != null) {
  // inputImage 요소가 화면에 존재 할 때

  // input type="file" 요소는 파일이 선택 될 때 change 이벤트가 발생한다.
  inputImage.addEventListener("change", function () {
    // this : 이벤트가 발생한 요소 (input type="file")

    // files : input type="file"만 사용 가능한 속성으로
    //         선택된 파일 목록(배열)을 반환
    //console.log(this.files)
    //console.log(this.files[0]) // 파일목록에서 첫 번째 파일 객체를 선택

    if (this.files[0] != undefined) {
      // 파일이 선택되었을 때

      const reader = new FileReader();
      // 자바스크립트의 FileReader
      // - 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 사용하는 객체

      reader.readAsDataURL(this.files[0]);
      // FileReader.readAsDataURL(파일)
      // - 지정된 파일의 내용을 읽기 시작함.
      // - 읽어오는게 완료되면 result 속성 data:에
      //   읽어온 파일의 위치를 나타내는 URL이 포함된다.
      //  -> 해당 URL을 이용해서 브라우저에 이미지를 볼 수 있다.

      // FileReader.onload = function(){}
      // - FileReader가 파일을 다 읽어온 경우 함수를 수행
      reader.onload = function (e) {
        // 고전 이벤트 모델
        // e : 이벤트 발생 객체
        // e.target : 이벤트가 발생한 요소(객체) -> FileReader
        // e.target.result : FileReader가 읽어온 파일의 URL

        // 프로필 이미지의 src 속성의 값을 FileReader가 읽어온 파일의 URL로 변경
        const profileImage = document.getElementById("profile-image");

        profileImage.setAttribute("src", e.target.result);
        // -> setAttribute() 호출 시 중복되는 속성이 존재하면 덮어쓰기
      };
    }
  });
}
