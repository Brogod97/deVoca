const quizProgress = document.getElementById("quiz-pro");
const res = document.querySelector(".quiz-res");

function skillUp() {
    let qp = quizProgress.value++;
    
    res.innerText = qp + ' / 100';
}