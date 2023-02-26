let query = document.querySelector(".query");
const searchBtn = document.querySelector(".searchBtn");
const googleSearchInput = document.getElementById("googleSearchInput");

// 구글 검색용 URL
const queryUrl = "https://www.google.com/search?q=";

// 검색어 포함 URL

// 검색 버튼 클릭 시 이벤트
searchBtn.addEventListener("click", function () {
  let url = queryUrl + query.value;
  window.open(url);
});

googleSearchInput.addEventListener("keyup", function () {
  if (window.event.keyCode == 13) {
    let url = queryUrl + query.value;
    window.open(url);
  }
});
