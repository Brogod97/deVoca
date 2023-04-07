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

// 카테고리 버튼 클릭 시 스타일 활성화 이벤트
clickOneForEach(categoryList, function () {
    removeSiblingsClassName(this, "selected");
    this.classList.add("selected");
    btnActiveFlag = 1;
});

// 시작하기 버튼에 클릭 이벤트 핸들러 등록
const startBtn = document.querySelector(".container-main-btn");

startBtn.addEventListener("click", function () {
    if (btnActiveFlag == 0) {
        alert("카테고리 버튼을 눌러주세요"); // 경고 메시지 출력
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

function quizStart(memberNo, categoryNo) {
    console.log("memberNo::", memberNo);
    console.log("cate::", categoryNo);
}
