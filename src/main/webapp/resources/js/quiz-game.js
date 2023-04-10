// *********************전역 변수*********************

/** 슬라이더 객체 생성 */
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

// function onSlideChange() {
//     if (swiper.isEnd) {
//         // 마지막 슬라이드인 경우 버튼 생성
//         console.log("마지막입니다");
//         const link = document.createElement("a");
//         link.href = "quiz-result";

//         const btn = document.createElement("button");
//         btn.classList.add("btn-primary-fill");
//         btn.textContent = "결과보기";

//         link.appendChild(btn);
//         // 슬라이드 컨테이너를 선택합니다.
//         const slideContainer = document.querySelector(
//             ".swiper-slide.swiper-slide-active"
//         );

//         slideContainer.nextElementSibling.appendChild(link);

//         // slideChange 이벤트 리스너를 해제합니다.
//         swiper.off("slideChange", onSlideChange);
//     }
// }

// swiper.on("slideChange", onSlideChange);

// *********************서버 요청*********************

/** 문항 선택 시 WORD 테이블의 QUIZ_OX 값 UDPATE 요청 Ajax */
function updateQuizOxAjax(quizOx, wordNo) {
    $.ajax({
        url: "updateQuizOx",
        data: { quizOx: quizOx, wordNo: wordNo },
        type: "get",
        success: function (result) {
            if (result == 0) {
                console.log("QUIZ_OX update 실패");
            }
        },
        error: function () {
            console.log("QUIZ_OX update 요청 실패");
        },
    });
}

// **********************함수**********************

/** 문제 풀이 카운트 */
let count = 0;

/** 특정 문항 클릭 시 발생하는 onclick 이벤트의 호출함수 */
function checkAnswer(e, correctDf, currDf, wordNo, total) {
    // 정답 여부 조건문
    let quizOx = null;

    // 현재 요소 포함 모든 형제 요소
    const answerBtns = e.parentNode.children;

    // 정답 요소 저장
    let correctBtn = null;

    if (correctDf == currDf) {
        // 클릭된 요소 정답 스타일로 변경
        correctAnswer(e);

        // 문항 클릭 시 모든 버튼 비활성화
        disableAnswerBtn(e, answerBtns);

        // DB에 결과 저장
        quizOx = "O";
        updateQuizOxAjax(quizOx, wordNo);
    } else {
        // 클릭된 요소 오답 스타일로 변경
        wrongAnswer(e);

        // TODO: 정답 요소 공개
        // correctAnswer(correctBtn);

        // 문항 클릭 시 모든 버튼 비활성화
        disableAnswerBtn(e, answerBtns);

        quizOx = "X";
        updateQuizOxAjax(quizOx, wordNo);
    }

    // 퀴즈 종료 검사
    count++;

    if (count == total) {
        const resultModal = document.querySelector(".result-modal-area");

        resultModal.classList.remove("invisible");
    }
}

/** 선택된 버튼의 스타일을 (정답) 으로 변경 하는 함수 */
function correctAnswer(Btn) {
    Btn.style.backgroundColor = "var(--primary)";
    Btn.style.color = "var(--white)";
    Btn.style.transitionDuration = "0.2s";
}

/** 선택된 버튼의 스타일을 (오답) 으로 변경 하는 함수 */
function wrongAnswer(Btn) {
    Btn.style.backgroundColor = "var(--quiz-wrong)";
    Btn.style.color = "var(--white)";
    Btn.style.transitionDuration = "0.2s";
}

/** 답안 선택 후 모든 버튼 요소의 클릭 이벤트 제거하는 함수 */
function disableAnswerBtn(e, answerBtns) {
    for (let i = 0; i < answerBtns.length; i++) {
        answerBtns[i].removeAttribute("onclick");
        answerBtns[i].style.border = "1px solid transparent";
        answerBtns[i].style.cursor = "auto";
    }
}
