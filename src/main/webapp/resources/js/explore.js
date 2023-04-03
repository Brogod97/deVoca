// ***** 회원 목록(member-list)의 li(member) 클릭 시 발생하는 이벤트 *****
// -> 1. li 배경색 스타일 변경
// -> 2. categoryList 표시
const memberList = document.querySelectorAll(".member");
// let sharedCategoryList = null;

memberList.forEach((member) => {
    const sharedUserName = document.getElementById("shared-user-name");
    const sharedHeaderCategoryArea = document.getElementById(
        "shared-header-category-area"
    );

    member.addEventListener("click", function () {
        // 1. 클릭된 회원 배경색 primary로 활성화 + 기존에 활성화 된 회원이 있을 경우 해제
        removeMemberListClassname(this, "backgroundPrimary");
        this.classList.add("backgroundPrimary");

        sharedUserName.innerText = this.innerText;

        // 2-1. shared-header-category-area 보이게 설정
        sharedHeaderCategoryArea.style.display = "block";

        // 2-2. categoryList 요청 및 화면 출력
        let memberNo = this.children[2].innerText.trim(); // 각 회원들은 보이지 않지만, 2번째 자식으로 memberNo를 갖고 있음

        $.ajax({
            url: "selectCategoryAll",
            data: { memberNo: memberNo },
            type: "POST",
            success: function (categories) {
                const categoryList = JSON.parse(categories); // JS 객체 리스트

                const ul = document.getElementById("shared-category-list");

                if (categoryList.length != 0) {
                    // ** categoryList의 길이가 0이 아니다 == 최소 1개 이상의 객체를 갖고 있다.
                    ul.innerHTML = "";

                    for (let index = 0; index < categoryList.length; index++) {
                        const li = document.createElement("li");
                        li.classList.add("shared-category");

                        const i = document.createElement("i");
                        i.classList.add("ic-hive-cc");

                        const span = document.createElement("span");
                        span.classList.add("category-title");
                        span.innerText = categoryList[index].categoryTitle;

                        const categoryNumSpan = document.createElement("span");
                        categoryNumSpan.innerText =
                            categoryList[index].categoryNo;
                        categoryNumSpan.style.display = "none";

                        li.append(i, span, categoryNumSpan);
                        ul.append(li);
                    }

                    // // ***** 카테고리 목록(shared-category-list)의 li(shared-category) 클릭 시 발생하는 이벤트 *****

                    // ** 클릭된 시점에 재생성된 li들 중 shared-category라는 클래스를 가진 요소들 전체 선택
                    // 이 변수를 이용해 i.ic-hive의 클릭된 요소에만 .active 추가
                    const sharedCategoryList =
                        document.querySelectorAll(".shared-category");

                    let memberNo = null;
                    let categoryNo = null;
                    sharedCategoryList.forEach((category) => {
                        category.addEventListener("click", function () {
                            // 1. ic-hive 아이콘 컬러 변경
                            removeCategoryListClassname(
                                this, // ** this == li
                                "active"
                            );
                            // ** this.firstChild = <i> 태그
                            this.firstChild.classList.add("active");

                            // 2. 카테고리가 클릭되는 순간 해당 memberNo와 categoryNo를 가진 단어들을 조회해와서 출력
                            // memberNo와 cateogryNo 값과 일치하는 word 전체 조회
                            memberNo = categoryList[0].memberNo; // memberNo는 클릭된 멤버의 것으로, 어느 인덱스건 모두 동일함
                            categoryNo = this.children[2].innerText;

                            $.ajax({
                                url: "selectWordAll",
                                data: {
                                    memberNo: memberNo,
                                    categoryNo: categoryNo,
                                },
                                type: "POST",
                                success: function (words) {
                                    console.log(
                                        "selectWordAll 성공, words : " + words
                                    );

                                    const sharedVocaListArea =
                                        document.querySelector(
                                            ".shared-voca-list-area"
                                        );

                                    const contentMainText =
                                        document.createElement("div");
                                    contentMainText.classList.add(
                                        "content-main-text"
                                    );

                                    const contentMainTextFlex =
                                        document.createElement("div");
                                    contentMainTextFlex.classList.add(
                                        "content-main-text-flex"
                                    );

                                    const div1 = document.createElement("div");
                                    const titleBtn =
                                        document.createElement("button");
                                    titleBtn.innerText = words.wordTitle;

                                    const div2 = document.createElement("div");
                                    const chevronBtn =
                                        document.createElement("button");
                                    const chevronImg =
                                        document.createElement("img");
                                    // TODO: 이미지 경로 제대로 설정하기
                                    chevronImg.setAttribute("src", "");

                                    const contentMainAddLine =
                                        document.createElement("div");
                                    contentMainAddLine.classList.add(
                                        "content-main-add-line"
                                    );
                                },
                                error: function () {
                                    console.log("selectWordAll 실패");
                                },
                            });
                        });
                    });
                } else {
                    // ** categoryList의 길이가 0이다 == JS 객체는 생성됐으나 비어있다.
                    // -> 카테고리가 없을 경우 : "저장된 카테고리가 없습니다" 표시
                    ul.innerHTML = "";

                    // FIXME: 임시로 innerHTML 방식으로 작성 + h태그 사용
                    ul.innerHTML =
                        "<div style='height: 100px; display: flex; align-items: center;'> <h4 style='color:var(--footer-color);'> 저장된 카테고리가 없습니다 </h4> </div>";
                }
            },
            error: function () {
                console.log("categoryList 가져오기 실패");
            },
        });
    });
});

/** CategoryList에서 클릭한 li의  클래스 제거하는 함수
 * @returns void
 *  */
function removeCategoryListClassname(t, removeClass) {
    const children = t.parentElement.children; // li들

    for (let i = 0; i < children.length; i++) {
        children[i].firstChild.classList.remove(removeClass);
    }
}

/** MemberList에서 클릭한 요소 제외 다른 형제 요소의 클래스 제거하는 함수
 * @returns void
 *  */
function removeMemberListClassname(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}

// ** ----------------------------------------------------------------- **

// word-list 관련 이벤트

// 추가 모달창
const addOpen = () => {
    document.querySelector(".addModal").classList.remove("hidden");
};

const addClose = () => {
    document.querySelector(".addModal").classList.add("hidden");
};

document.querySelector(".addOpenBtn").addEventListener("click", addOpen);
document.querySelector(".addBg").addEventListener("click", addClose);

// 메뉴 모달창
const menuOpen = () => {
    document.querySelector(".voca-menu-modal").classList.remove("menu-hidden");
};

const menuClose = () => {
    document.querySelector(".voca-menu-modal").classList.add("menu-hidden");
};

document.querySelector(".menu-openBtn").addEventListener("click", menuOpen);
document.querySelector(".voca-menu-bg").addEventListener("click", menuClose);

const vocaSave = document.getElementById("voca-save");
const vocaInput = document.querySelector("input[name='voca-title']");
const vocadefinition = document.querySelector("input[name='voca-definition']");
const vocaMemo = document.querySelector("#voca-memo");
const vocaReadTitle = document.getElementById("voca-read-title");
const vocaReadDefinition = document.getElementById("voca-read-definition");
const vocaReadMemo = document.getElementById("voca-read-memo");
const modifyBtn = document.querySelector(".modify-btn");
const vocaModify = document.querySelector(".voca-modify");
const vocaDelete = document.querySelector(".voca-delete");
const vocaDeleteDone = document.getElementById("voca-delete-done");

vocaSave.addEventListener("click", function () {
    const div1 = document.createElement("div");
    div1.classList.add("content-main-add-line");

    const div2 = document.createElement("div");
    div2.classList.add("content-main-text-flex");
    const div3 = document.createElement("div");

    const button1 = document.createElement("button");
    const img1 = document.createElement("img");
    img1.setAttribute(
        "src",
        contextPath + "/resources/assets/icon/check-active.svg"
    );

    const button2 = document.createElement("button");
    button2.classList.add("openBtn");

    const div4 = document.createElement("div");
    const button3 = document.createElement("button");
    const img2 = document.createElement("img");
    img2.setAttribute("src", contextPath + "/resources/assets/icon/star.svg");

    const button4 = document.createElement("button");
    const img3 = document.createElement("img");
    img3.setAttribute(
        "src",
        contextPath + "/resources/assets/icon/chevron.svg"
    );

    div2.append(div3, div4);
    div3.append(button1, button2);
    button1.append(img1);
    button2.append(vocaInput.value);

    div4.append(button3, button4);
    button3.append(img2);
    button4.append(img3);
    document.querySelector(".content-main-text").append(div2, div1);

    // 객체생성
    const vocaContent = {
        id: randomIDGenerate(),
        title: vocaInput.value,

        definition: vocadefinition.value,
        memo: vocaMemo.value,
    };

    // 랜덤아이디 생성
    function randomIDGenerate() {
        return "_" + Math.random().toString(36).substring(2, 9);
    }

    vocaModify.addEventListener("click", function () {
        vocaReadTitle.focus();
        vocaReadTitle.removeAttribute("readonly");
        vocaReadDefinition.removeAttribute("readonly");
        vocaReadMemo.removeAttribute("readonly");
        modifyBtn.style.display = "block";
    });

    function modifyDone() {
        modifyBtn.addEventListener("click", function () {
            vocaContent.title = vocaReadTitle.value;
            vocaContent.definition = vocaReadDefinition.value;
            vocaContent.memo = vocaMemo.value;
            vocaReadTitle.setAttribute("readonly", "true");
            vocaReadDefinition.setAttribute("readonly", "true");
            vocaReadMemo.setAttribute("readonly", "true");
            modifyBtn.style.display = "none";

            close();
        });
    }

    const vocaDeleteModal = document.querySelector(".voca-delete-modal");
    const vocaDeleteCancell = document.getElementById("voca-delete-cancell");
    vocaDelete.addEventListener("click", () => {
        vocaDeleteModal.style.display = "block";
    });

    vocaDeleteCancell.addEventListener("click", () => {
        vocaDeleteModal.style.display = "none";
    });

    // v 버튼 눌렀을때 초록색으로 변하고 옆에 글자 선 그어짐
    let flag = true;
    button1.addEventListener("click", function () {
        if (flag) {
            img1.style.filter =
                "invert(70%) sepia(89%) saturate(1272%) hue-rotate(91deg) brightness(101%) contrast(104%)";
            button2.style.textDecoration = "line-through";
            flag = false;
        } else {
            img1.style.filter =
                "invert(60%) sepia(5%) saturate(1049%) hue-rotate(176deg) brightness(92%) contrast(96%)";
            button2.style.textDecoration = "none";
            flag = true;
        }
    });

    button2.addEventListener("click", function () {
        open(vocaContent.id);
    });
    const open = (id) => {
        document.querySelector(".modal").classList.remove("hidden");

        console.log(id);
        if (id == vocaContent.id) {
            console.log("같다");
            vocaReadTitle.value = vocaContent.title;
            vocaReadDefinition.value = vocaContent.definition;
            vocaReadMemo.innerText = vocaContent.memo;

            modifyDone();
        } else {
            console.log("다르다");
        }
    };

    button3.addEventListener("click", function () {
        if (flag) {
            img2.setAttribute(
                "src",
                contextPath + "/resources/assets/icon/star-active.svg"
            );
            flag = false;
        } else {
            img2.setAttribute(
                "src",
                contextPath + "/resources/assets/icon/star.svg"
            );
            flag = true;
        }

        // v 버튼 눌렀을때 초록색으로 변하고 옆에 글자 선 그어짐
        let flag = true;
        button1.addEventListener("click", function () {
            if (flag) {
                img1.style.filter =
                    "invert(70%) sepia(89%) saturate(1272%) hue-rotate(91deg) brightness(101%) contrast(104%)";
                button2.style.textDecoration = "line-through";
                flag = false;
            } else {
                img1.style.filter =
                    "invert(60%) sepia(5%) saturate(1049%) hue-rotate(176deg) brightness(92%) contrast(96%)";
                button2.style.textDecoration = "none";
                flag = true;
            }
        });

        button2.addEventListener("click", function () {
            open(vocaContent.id);
        });
        const open = (id) => {
            document.querySelector(".modal").classList.remove("hidden");

            console.log(id);
            if (id == vocaContent.id) {
                console.log("같다");
                vocaReadTitle.value = vocaContent.title;
                vocaReadDefinition.value = vocaContent.definition;
                vocaReadMemo.innerText = vocaContent.memo;
                modifyDone();
            } else {
                console.log("다르다");
            }
        };

        button3.addEventListener("click", function () {
            if (flag) {
                img2.setAttribute("src", "/assets/star-fill.svg");
                flag = false;
            } else {
                img2.setAttribute("src", "/assets/star-empty.svg");
                flag = true;
            }
        });

        button4.addEventListener("click", function () {
            open(vocaContent.id);
        });

        const close = () => {
            document.querySelector(".modal").classList.add("hidden");
        };

        document.querySelector(".openBtn").addEventListener("click", open);
        document.querySelector(".bg").addEventListener("click", close);

        addClose();
        // ---------코드블럭-------
        codeOutput.textContent = codeInput.value;
        hljs.highlightBlock(codeOutput);
    });
});

// ---------- 코드블럭 구간 -----------------

const codeInput = document.getElementById("voca-code-block");
const codeOutput = document.querySelector("pre code");

// textarea에서 커서 깜빡임이 다음줄부터 시작하는 코드
codeInput.focus();
codeInput.setSelectionRange(7, 7);

codeInput.value = codeInput.value.slice(0, 7) + "\n" + codeInput.value.slice(7);

function focusNextLine() {
    const lineHeight = parseInt(
        window.getComputedStyle(codeInput).lineHeight,
        10
    );
    codeInput.scrollTop += lineHeight;
}

focusNextLine();
