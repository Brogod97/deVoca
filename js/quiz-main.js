window.onload = function () {
  showLoadingPage();
};

function showLoadingPage() {
  // 로딩 페이지를 화면에 보여줍니다.
  document.querySelector(".wrap").style.display = "block";
  document.querySelector(".container").style.display = "none";

  // 3초 후에 hideLoadingPage 함수를 호출합니다.
  setTimeout(hideLoadingPage, 2000);
}

function hideLoadingPage() {
  // 로딩 페이지를 화면에서 숨깁니다.
  document.querySelector(".wrap").style.display = "none";
  document.querySelector(".container").style.display = "flex";
}

// 단어를 선택했을때 고정으로 색이 변하는 이벤트
const content = document.querySelectorAll(".container-main-content > button");
for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", (e) => {
    if (e.target.style.backgroundColor == "white") {
      e.target.style.backgroundColor = "#ffc759";
    } else {
      e.target.style.backgroundColor = "white";
    }
  });
}
