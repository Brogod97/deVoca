const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function onSlideChange() {
  if (swiper.isEnd) {
    // 마지막 슬라이드인 경우 버튼 생성
    console.log("마지막입니다");
    const link = document.createElement("a");
    link.href = "quiz-result";

    const btn = document.createElement("button");
    btn.classList.add("btn-primary-fill");
    btn.textContent = "결과보기";

    link.appendChild(btn);
    // 슬라이드 컨테이너를 선택합니다.
    const slideContainer = document.querySelector(
      ".swiper-slide.swiper-slide-active"
    );

    slideContainer.nextElementSibling.appendChild(link);

    // slideChange 이벤트 리스너를 해제합니다.
    swiper.off("slideChange", onSlideChange);
  }
}

swiper.on("slideChange", onSlideChange);

// 슬라이드 추가하는 함수
// swiper.appendSlide('<div class="swiper-slide">Slide 10</div>');

// appendSlide([
//   '<div class="swiper-slide">Slide 10"</div>',
//   '<div class="swiper-slide">Slide 11"</div>',
// ]);
