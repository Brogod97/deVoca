const googleSearchBtn = document.querySelector(".google-search-btn");
const googleSearchInput = document.getElementById("google-search-input");

// 구글 검색용 URL
const queryUrl = "https://www.google.com/search?q=";

// 검색 버튼 클릭 시 이벤트
googleSearchBtn.addEventListener("click", function () {
  let url = queryUrl + googleSearchInput.value;
  window.open(url);
  googleSearchInput.value = "";
});

googleSearchInput.addEventListener("keyup", function () {
  if (window.event.keyCode == 13) {
    let url = queryUrl + googleSearchInput.value;
    window.open(url);
    this.value = "";
  }
});
