const quizProgress = document.getElementById("quiz-pro");
const res = document.querySelector(".quiz-res");

// temp

function skillUp() {
  let qp = quizProgress.value++;

  res.innerText = qp + " / 100";
}
