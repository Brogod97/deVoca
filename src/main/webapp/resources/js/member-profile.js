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

infoChangeBtn.addEventListener("click", (e) => {
  pwInput.removeAttribute("disabled");
  pwcheckInput.removeAttribute("disabled");
  nmInput.removeAttribute("disabled");
  pwInput.value = null;
  pwcheckInput.value = null;
  pwInput.focus();

  e.target.style.display = "none";
  secessionBtn.style.display = "inline";
  updateCancle.style.display = "inline";
  submitBtn.style.display = "inline";
});

// 편집 취소버튼 클릭 시

updateCancle.addEventListener("click", () => {
  updateCancle.style.display = "none";
  secessionBtn.style.display = "none";
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
});

// 아니오 버튼 눌러서 프로필 편집 모달창 끄기

updateImgCancleBtn.addEventListener("click", () => {
  updateImgModal.style.display = "none";
});


/*******************************************************/




// 비밀번호 유효성검사
pwInput.addEventListener("keyup", () => {
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
pwcheckInput.addEventListener("keyup", () => {
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

// 경고 출력 + 포커스 + false 반환  함수
function printAlert(el, message){ // 매개변수 el은 요소
    alert(message);
    el.focus();
    return false;
}

function infoValidate(){
	const regEx1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
	 const regEx2 = /[가-힣|a-z|A-Z]{2,10}/;
	// 닉네임 유효성 검사
    if(nmInput.value.length == 0){ // 미작성 시 : 닉네임 입력해주세요.
        return printAlert(nmInput, "닉네임을 입력해주세요.");
    }

    if(!regExp2.test(nmInput.value)){ // 유효하지 않은 경우
        return false;
    }
   // 비밀번호 유효성 검사
	if(pwInput.value.trim().length == 0){

        return printAlert(pwInput, "비밀번호를 입력해주세요.");
    }
    if(!regExp1.test(pwInput.value)){ // 유효하지 않은 경우
        return false;
    }
    
    
    if(pwcheckInput.value.trim().length == 0){

        return printAlert(pwcheckInput, "비밀번호 확인을 입력해주세요.");
    }
    
    // 새 비밀번호 != 새 비밀번호 확인
    if(pwInput.value != pwcheckInput.value){
        return printAlert(newPwConfirm, " 비밀번호가 일치하지 않습니다.");
    }

    return true; // true를 반환해서 form 제출 수행
}




//TODO: 회원탈퇴 비밀번호 유효성 검사
// DB회원 비밀번호와 비교 검사 후 alert창 띄우기