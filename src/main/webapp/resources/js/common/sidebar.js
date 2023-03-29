const categoryBtn = document.getElementById("category-btn");
const categoryAdd = document.querySelector(".category-add");
const categoryEdit = document.querySelector(".category-edit");
const categoryMenuWrapper = document.getElementById("category-menu-wrapper");
const categoryMenuOveray = document.getElementById("category-menu-overlay");

// 카테고리 메뉴 버튼 클릭시 표시 / 닫기
categoryBtn.addEventListener("click", function () {
    categoryMenuWrapper.classList.toggle("invisible");
});

// 카테고리 메뉴 - 추가 버튼 클릭 시 동작
categoryAdd.addEventListener("click", function () {
    const categoryLi = document.createElement("li");
    const categoryA = document.createElement("a");
    categoryA.setAttribute("href", "#");
    const categoryInput = document.createElement("input");
    $(function () {
        categoryInput.focus();
    });

    categoryInput.style.border = "none";
    categoryInput.style.outline = "none";
    categoryInput.style.backgroundColor = "transparent";

    // 카테고리 추가시 만들어지는 요소들
    const categoryBtn = document.createElement("button");
    categoryBtn.classList.add("invisible");
    categoryBtn.classList.add("category-delete");
    categoryBtn.setAttribute("type", "submit");
    const categoryI = document.createElement("i");
    categoryI.classList.add("ic-close");

    categoryLi.append(categoryA, categoryBtn);
    categoryA.append(categoryInput);
    categoryBtn.append(categoryI);

    document.querySelector(".category-list > ul").append(categoryLi);

    // 인풋창에 엔터키를 누르면 내가 입력한 값이 그대로 나옴
    categoryInput.addEventListener("keyup", function () {
        if (window.event.keyCode == "13") {
            this.setAttribute("readonly", "true");
            this.style.border = "none";
            this.style.outline = "none";
            this.style.backgroundColor = "transparent";
            this.style.fontSize = "16px";
            this.style.fontWeight = "700";
            this.style.cursor = "pointer";
            categoryA.append = this.value;

            if (!showDeleteBtn()) {
                const categoryXbtnAll = document.querySelectorAll(
                    ".category-list button"
                );

                for (let i = 0; i < categoryXbtnAll.length; i++) {
                    categoryXbtnAll[i].classList.add("invisible");
                }
            }
        }
    });

    // 인풋창 focus가 해제 되었을때도 내가 입력한 값이 그대로 나오는 이벤트
    categoryInput.addEventListener("blur", function () {
        this.setAttribute("readonly", "true");
        this.style.border = "none";
        this.style.outline = "none";
        this.style.backgroundColor = "transparent";
        this.style.fontSize = "16px";
        this.style.fontWeight = "700";
        this.style.cursor = "pointer";
        categoryA.append = this.value;
    });

    // 편집시 카테고리 제목 바꿀수 있게 하는 이벤트
    categoryEdit.addEventListener("click", function () {
        categoryInput.removeAttribute("readonly");
        categoryInput.focus();
    });

    // x 누르면 삭제 하는 이벤트
    categoryBtn.addEventListener("click", function () {
        categoryLi.remove();
    });

    closeCategoryMenu();
});

// 카테고리 메뉴 - 편집 버튼 클릭 시 동작
categoryEdit.addEventListener("click", function () {
    closeCategoryMenu(); // 카테고리 메뉴 닫기
    showDeleteBtn(); // X (삭제) 버튼 표시
});

// 카테고리 메뉴 외부 영역 클릭 시 닫기
categoryMenuOveray.addEventListener("click", function () {
    closeCategoryMenu();
});

// 카테고리 메뉴 close 함수
function closeCategoryMenu() {
    categoryMenuWrapper.classList.add("invisible");
}

// x 표시 보이게 변경하는 함수
function showDeleteBtn() {
    const categoryXbtnAll = document.querySelectorAll(".category-list button");

    for (let i = 0; i < categoryXbtnAll.length; i++) {
        categoryXbtnAll[i].classList.remove("invisible");
    }
}
