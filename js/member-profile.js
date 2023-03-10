// 회원정보 입상 시 인풋창

(function () {
  const idInput = document.querySelector("#id-input");
  idInput.value = "thiszino@gmail.com";

  const pwInput = document.querySelector("#pw-input");
  const pwcheckInput = document.querySelector("#pwcheck-input");

  pwInput.value = "devoca1234";
  pwcheckInput.value = "devoca1234";

  const nmInput = document.querySelector("#nm-input");
  nmInput.value = "불꽃전사지노";
})();

//--------------------------------------------------------------

// ***전역변수***
const infoChangeBtn = document.querySelector("#info-change-btn");
const submitBtn = document.querySelector("#submit-btn");
const pwInput = document.querySelector("#pw-input");
const pwcheckInput = document.querySelector("#pwcheck-input");
const nmInput = document.querySelector("#nm-input");
const updateCancle = document.querySelector("#update-cancle-btn");
const withdrawalArea = document.querySelector(".withdrawal-area");
const withdrawalBtn = document.querySelector("#withdrawal-btn");
const withdrawalModalWindow = document.querySelector(
  ".withdrawal-modal-window"
);

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

updateCancle.addEventListener("click", (e) => {
  e.target.style.display = "none";
  withdrawalBtn.style.display = "none";
  submitBtn.style.display = "none";
  infoChangeBtn.style.display = "inline";
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
