/* ************************************************************** */
/* ************************* 전역 변수 ************************** */
/* ************************************************************** */

/* ************************************************************** */
/* *************************** 이벤트 *************************** */
/* ************************************************************** */

// 로딩 페이지 함수 호출
window.onload = function () {
    showLoadingPage();
};

// TODO: 카테고리 하나를 클릭 했을 때 발생하는 이벤트
const categoryList = document.querySelectorAll(
    ".container-main-content > button"
);
let btnActiveFlag = 0;

// 카테고리 버튼 하나 클릭 시
clickOneForEach(categoryList, function () {
    //  1. 스타일 활성화 이벤트
    removeSiblingsClassName(this, "selected");
    this.classList.add("selected");

    // 2. 버튼 활성화 체크
    btnActiveFlag = 1;

    // 3. memberNo, categoryNo radio 활성화
    this.children[0].setAttribute("checked", true);
    this.children[1].setAttribute("checked", true);

    console.log(this.children[0]);
    console.log(this.children[1]);
});

// 시작하기 버튼에 클릭 이벤트 핸들러 등록
const startBtn = document.querySelector(".container-main-btn");

startBtn.addEventListener("click", function () {
    if (btnActiveFlag == 0) {
        alert("퀴즈를 시작할 카테고리를 선택해주세요 🐝"); // 경고 메시지 출력
    }
});

/* ************************************************************** */
/* **************************** 함수 **************************** */
/* ************************************************************** */

/** nodeList 저장 값에 forEach로 접근하여 클릭 이벤트를 수행하는 함수
 * @param {NodeListOf} nodeList (querySelectorAll 저장 변수)
 * @param {function} f (click 이벤트에 적용될 함수)
 * @returns void
 */
function clickOneForEach(nodeList, f) {
    nodeList.forEach((node) => {
        node.addEventListener("click", f);
    });
}

/** 전달받은 t의 형제 요소들의 클래스 제거하는 함수
 * @param {Element} t
 * @param {String} removeClass
 * @returns void
 *  */
function removeSiblingsClassName(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}

/** 로딩페이지 호출 함수 */
function showLoadingPage() {
    // 로딩 페이지를 화면에 보여줍니다.
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container-main").style.display = "none";

    // 3초 후 종료
    setTimeout(hideLoadingPage, 2000);
}

/** 로딩페이지 종료 함수 */
function hideLoadingPage() {
    // 로딩 페이지를 화면에서 숨깁니다.
    document.querySelector(".wrap").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".container-main").style.display = "flex";
}

/** quiz-main에서 카테고리 선택 시 호출 될 onClick 이벤트 함수 */
// function quizStart(memberNo, categoryNo) {
//     console.log("memberNo::", memberNo);
//     console.log("cate::", categoryNo);

//     location.href = "quizGame";

//     // $.ajax({
//     //     url: "quizGame",
//     //     data: { memberNo: memberNo, categoryNo: categoryNo },
//     //     type: "GET",
//     //     success: function (result) {
//     //         console.log("서블릿 도달 성공");
//     //         console.log("받아온 result : " + result);

//     //         location.replace(result);
//     //     },
//     //     error: function () {
//     //         console.log("서블릿 도달 실패");
//     //     },
//     // });

//     // $.get(
//     //     "quizGame",
//     //     { memberNo: memberNo, categoryNo: categoryNo },
//     //     function (result) {
//     //         console.log("서블릿 도달 성공");
//     //         console.log("받아온 result : " + result);
//     //     }
//     // );
// }
