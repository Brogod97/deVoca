window.onload = function () {
    showLoadingPage();
};

function showLoadingPage() {
    // 로딩 페이지를 화면에 보여줍니다.
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container-main").style.display = "none";

    // 3초 후에 hideLoadingPage 함수를 호출합니다.
    setTimeout(hideLoadingPage, 2000);
}

function hideLoadingPage() {
    // 로딩 페이지를 화면에서 숨깁니다.
    document.querySelector(".wrap").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".container-main").style.display = "flex";
}

// 카테고리를 선택후 시작하기 버튼을 눌러야 하는 로직

let count = 0; // 카운트 변수 초기화
const requiredCount = 1; // 필요한 클릭 수
const selectButtons = document.querySelectorAll(".select-btn"); // 버튼 요소들 선택
const startButton = document.querySelector(".container-main-btn"); // 시작하기 버튼 요소 선택

// 단어를 선택했을때 고정으로 색이 변하는 이벤트

let selectedButton = null; // 선택된 버튼을 저장하는 변수

selectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (selectedButton) {
      // 이미 선택된 버튼이 있을 경우
      selectedButton.classList.remove("selected");
    }
    if (selectedButton !== button) {
      // 새로운 버튼이 선택된 경우
      button.classList.add("selected");
      selectedButton = button;
    } else {
      // 이미 선택된 버튼이 다시 눌렸을 경우
      selectedButton = null;
    }
  });
});

// 각 버튼에 클릭 이벤트 핸들러 등록
for (let i = 0; i < selectButtons.length; i++) {
  selectButtons[i].addEventListener("click", function () {
    count++; // 카운트 증가
  });
}

// 시작하기 버튼에 클릭 이벤트 핸들러 등록
startButton.addEventListener("click", function (event) {
  if (count == requiredCount) {
    window.location.href = "quiz-game"; // 페이지 이동
  } else {
    alert("카테고리 버튼을 눌러주세요"); // 경고 메시지 출력
    event.preventDefault();
  }
});
