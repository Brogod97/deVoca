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

swiper.once("click", function () {
  if (swiper.isEnd) {
    // 현재 슬라이드가 마지막 슬라이드인 경우
    const link = document.createElement("a");
    link.href = "/pages/quiz-result.html";

    const btn = document.createElement("button");
    btn.classList.add("btn-primary-fill");
    btn.textContent = "결과보기";

    link.appendChild(btn);

    // 현재 활성화된 슬라이드에 a 태그 추가
    const activeSlide = swiper.slides[swiper.activeIndex];
    activeSlide.append(link);

    // 화살표 엘리먼트의 pointer-events 속성 제거
    const arrowPrev = document.querySelector(".swiper-button-prev");
    const arrowNext = document.querySelector(".swiper-button-next");
    arrowPrev.style.pointerEvents = "auto";
    arrowNext.style.pointerEvents = "auto";
  }
});

// 슬라이드 추가하는 함수
// swiper.appendSlide('<div class="swiper-slide">Slide 10</div>');

// appendSlide([
//   '<div class="swiper-slide">Slide 10"</div>',
//   '<div class="swiper-slide">Slide 11"</div>',
// ]);
