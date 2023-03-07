// 회원정보 입상 시 인풋창

(function () {
  const idInput = document.querySelector("#id-input");
  idInput.value = "thiszino";

  const pwInput = document.querySelector("#pw-input");
  const pwcheckInput = document.querySelector("#pwcheck-input");

  pwInput.value = "devoca1234";
  pwcheckInput.value = "devoca1234";

  const emailInput = document.querySelector("#email-input");
  emailInput.value = "thiszino@gmail.com";

  const nmInput = document.querySelector("#nm-input");
  nmInput.value = "안녕하세요";
})();

//--------------------------------------------------------------

// ***전역변수***
const pwChange = document.querySelector("#pw-change");
const pwInput = document.querySelector("#pw-input");
const pwcheckInput = document.querySelector("#pwcheck-input");
const emailInput = document.querySelector("#email-input");
const nmInput = document.querySelector("#nm-input");
const updateCancle = document.querySelector("#update-cancle-btn");
const withdrawalBtn = document.querySelector("#withdrawal-btn");
const withdrawalModalWindow = document.querySelector(
  ".withdrawal-modal-window"
);

// 편집 활성화

pwChange.addEventListener("click", () => {
  pwInput.removeAttribute("disabled");
  pwcheckInput.removeAttribute("disabled");
  emailInput.removeAttribute("disabled");
  nmInput.removeAttribute("disabled");
  pwInput.value = null;
  pwcheckInput.value = null;
  pwInput.focus();

  updateCancle.style.display = "inline";
});

// 편집 취소버튼 클릭 시

updateCancle.addEventListener("click", (e) => {
  const pwInput = document.querySelector("#pw-input");
  const pwcheckInput = document.querySelector("#pwcheck-input");
  const emailInput = document.querySelector("#email-input");
  const nmInput = document.querySelector("#nm-input");

  e.target.style.display = "none";

  // 기존 정보 불러오는 기능 추가???
  window.location.reload();
});

//----------------------------------------------------------------

// 회원탈퇴 모달창 띄우기

withdrawalBtn.addEventListener("click", () => {
  withdrawalModalWindow.style.display = "flex";
});

// 아니오 버튼 눌러서 모달창 끄기 & 인풋창 비우기
const cancleBtn = document.querySelector("#cancle-btn");
const nowPwInput = document.querySelector("#now-pw-input");
cancleBtn.addEventListener("click", () => {
  withdrawalModalWindow.style.display = "none";
  nowPwInput.value = "";
});

const imgUpdateFileInput = document.getElementById("img-update-file-input");
