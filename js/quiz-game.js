const quizProgress = document.getElementById("quiz-pro");
const res = document.querySelector(".quiz-res");

function skillUp() {
  let qp = quizProgress.value++;

  res.innerText = qp + " / 100";
}

// --------

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
