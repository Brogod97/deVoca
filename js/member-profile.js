// 회원정보 입상 시 인풋창

(function () {
  const idInput = document.querySelector("#id-input");
  idInput.value = "thiszino@gmail.com";

  const pwInput = document.querySelector("#pw-input");
  const pwcheckInput = document.querySelector("#pwcheck-input");

  pwInput.value = "Devoca1234!";
  pwcheckInput.value = "Devoca1234!";

  const nmInput = document.querySelector("#nm-input");
  nmInput.value = "불꽃전사지노";
})();

//--------------------------------------------------------------

// ***전역변수***
const infoChangeBtn = document.querySelector("#info-change-btn"); // 편집 버튼
const submitBtn = document.querySelector("#submit-btn"); // 편집 완료버튼
const pwInput = document.querySelector("#pw-input"); // 비밀번호 인풋
const pwcheckInput = document.querySelector("#pwcheck-input"); // 비밀번호 확인 인풋
const nmInput = document.querySelector("#nm-input"); // 닉네임 인풋
const updateCancle = document.querySelector("#update-cancle-btn"); // 편집 취소 버튼
const withdrawalArea = document.querySelector(".withdrawal-area"); // 회원탈퇴 영역
const withdrawalBtn = document.querySelector("#withdrawal-btn"); // 회원탈퇴 버튼
const withdrawalModalWindow = document.querySelector(
  ".withdrawal-modal-window"
); // 회원탈퇴 모달바깥부분
const withdrawalModal = document.querySelector(".withdrawal-modal"); // 회원탈퇴 모달창
const withdrawalModalBox = document.querySelector(".withdrawal-modal-box"); // 회원탈퇴 모달 박스
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

infoChangeBtn.addEventListener("click", (e) => {
  pwInput.removeAttribute("disabled");
  pwcheckInput.removeAttribute("disabled");
  nmInput.removeAttribute("disabled");
  pwInput.value = null;
  pwcheckInput.value = null;
  pwInput.focus();

  e.target.style.display = "none";
  withdrawalBtn.style.display = "inline";
  updateCancle.style.display = "inline";
  submitBtn.style.display = "inline";
});

// 편집 취소버튼 클릭 시

updateCancle.addEventListener("click", () => {
  updateCancle.style.display = "none";
  withdrawalBtn.style.display = "none";
  submitBtn.style.display = "none";
  infoChangeBtn.style.display = "inline";

  //TODO: DB연결되면 기존 회원정보 불러오는거 고려
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

withdrawalBtn.addEventListener("click", () => {
  withdrawalModal.style.display = "flex";
});

// 모달 창 밖에 눌러서 모달 끄기
withdrawalModalWindow.addEventListener("click", () => {
  withdrawalModal.style.display = "none";
});

// 아니오 버튼 눌러서 회원탈퇴 모달창 끄기 & 현재 비밀번호 input value 비우기

cancleBtn.addEventListener("click", () => {
  withdrawalModal.style.display = "none";
  nowPwInput.value = "";
});

// 프로필 편집 모달창 띄우기

imgEdit.addEventListener("click", () => {
  updateImgModal.style.display = "flex";
});

// 모달 창 밖에 눌러서 모달 끄기
updateImgModalWindow.addEventListener("click", () => {
  updateImgModal.style.display = "none";
});

// 아니오 버튼 눌러서 프로필 편집 모달창 끄기

updateImgCancleBtn.addEventListener("click", () => {
  updateImgModal.style.display = "none";
});

// 프로필사진 바꾸기

//FIXME:이미지 변경법 더 찾아보기 value값 못가져옴

/*const updateImgFileInput = document.querySelector("#update-img-file-input");
const updateImgAcceptBtn = document.querySelector("#update-img-accept-btn");
const profileImg = document.querySelector("#profile-img");
updateImgAcceptBtn.addEventListener("click", () => {
  profileImg.src = updateImgFileInput.value;
  console(updateImgFileInput.value);
});*/

// 유효성 검사

// 비밀번호 유효성검사
pwInput.addEventListener("keyup", () => {
  const pwReg = document.getElementById("pw-reg-text");
  const regEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
  //최소 8 자 및 최대 20 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상 :

  if (regEx.test(pwInput.value)) {
    pwReg.innerText = "";
    pwReg.classList.remove("wrong");
  } else {
    pwReg.innerText = "사용불가능한 비밀번호입니다.";
    pwReg.classList.add("wrong");
    pwInput.style.borderColor = "var(--red)";
  }
});

// 비밀번호 확인 유효성검사
pwcheckInput.addEventListener("keyup", () => {
  const pwCheckReg = document.getElementById("pwcheck-reg-text");

  if (pwInput.value == pwcheckInput.value) {
    pwCheckReg.innerText = "";
    pwCheckReg.classList.remove("wrong");
    pwcheckInput.style.borderColor = "var(--primary)";
  } else {
    pwCheckReg.innerText = "비밀번호가 일치하지않습니다.";
    pwCheckReg.classList.add("wrong");
    pwcheckInput.style.borderColor = "var(--red)";
  }
});

// 닉네임 확인 유효성 검사
nmInput.addEventListener("keyup", () => {
  //TODO: DB 중복 닉네임 확인
  const regEx = /[가-힣|a-z|A-Z]{2,10}/;
  const nmReg = document.getElementById("nm-reg-text");
  if (regEx.test(nmInput.value)) {
    nmReg.innerText = "";
    nmReg.classList.remove("wrong");
    nmInput.style.borderColor = "var(--primary)";
  } else {
    nmReg.innerText = "사용불가능한 닉네임입니다.";
    nmReg.classList.add("wrong");
    nmInput.style.borderColor = "var(--red)";
  }
});

// if (regEx.test(pw.value)) {
//   pwcheck.innerText = "사용가능한 비밀번호입니다.";
//   pwcheck.classList.add("right");
//   pwcheck.classList.remove("wrong");
// } else {
//   pwcheck.innerText = "사용불가능한 비밀번호입니다.";
//   pwcheck.classList.add("wrong");
//   pwcheck.classList.remove("right");
// }

//TODO: 회원탈퇴 비밀번호 유효성 검사
// DB회원 비밀번호와 비교 검사 후 alert창 띄우기
