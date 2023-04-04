/* *************************** 전역 변수 *************************** */

/** 단어 클릭시 활성화 되는 모달 */
const vocaModal = document.getElementById("modal");

/** 모달 활성화 시 뒤에 표시되는 검은 배경 */
const bgBlur = document.querySelector(".bg");

/** 유저 검색창 */
const userSearchInput = document.getElementById("voca-search-input");

/** 유저 검색창에 입력된 value를 저장할 변수 */
let inputUserName;

/** 유저 검색창 돋보기 버튼 */
const userSearchBtn = document.getElementById("user-search-btn");

/** 카테고리 헤더 영역 */
const sharedHeaderCategoryArea = document.getElementById(
    "shared-header-category-area"
);

/** 카테고리 타이틀 - 유저명 부분
 * '000'님의 공유된 단어 리스트
 */
let sharedUserName = document.getElementById("shared-user-name");

/** 카테고리 (li)의 부모 ul */
const sharedCategoryList = document.getElementById("shared-category-list");

/** 조회된 단어의 부모 div */
const sharedVocaListArea = document.querySelector(".shared-voca-list-area");

/* *************************** 이벤트 *************************** */

// 단어 조회 모달창에서 뒷 배경 부분 클릭 시 사라지게 하는 클릭 이벤트
bgBlur.addEventListener("click", function () {
    vocaModal.style.display = "none";
});

// 유저 검색창 - 검색 아이콘 클릭 이벤트
userSearchBtn.addEventListener("click", function () {
    inputUserName = userSearchInput.value;
    searchUserAjax(inputUserName);
});

// 유저 검색창 - 엔터 입력 클릭 이벤트
userSearchInput.addEventListener("keyup", function () {
    if (window.event.keyCode == 13) {
        inputUserName = userSearchInput.value;
        searchUserAjax(inputUserName);
    }
});

// 최초 진입 시 생성된 회원 목록을 기준, 회원 1명 클릭시 이벤트
/** 페이지 진입 직후 결정된 회원 목록 li들 */
const memberList = document.querySelectorAll(".member"); // ** clickOneForEach 전달할 nodeList

clickOneForEach(memberList, function () {
    sharedUserName = document.getElementById("shared-user-name"); // '000'님의 공유된 단어 리스트

    // 클릭된 회원 배경색 backgroundPrimary 클래스 추가 + 형제 요소 스타일 제거
    removeSiblingsClassName(this, "backgroundPrimary");
    this.classList.add("backgroundPrimary");

    // 클릭된 회원명 대입
    sharedUserName.innerText = this.innerText;

    // shared-header-category-area 보이게 설정 (기본 none)
    sharedHeaderCategoryArea.style.display = "block";

    const memberNo = this.children[2].innerText.trim(); // 현재 회원의 MEMBER_NO

    // 현재 회원의 카테고리 생성 Ajax 호출
    selectCategoryAllAjax(memberNo);
});

/* *************************** Ajax *************************** */

/** 전달받은 유저명 검색어와 MEMBER_NM이 일치하는 MEMBER 조회 Ajax
 * @param inputUserName(입력된 유저명)
 * @returns void
 */
function searchUserAjax(inputUserName) {
    $.ajax({
        url: "searchUser",
        data: { inputUserName: inputUserName },
        type: "POST",
        success: function (result) {
            // createUserList에 전달할 child 객체
            const userList = JSON.parse(result);

            // createUserList에 전달할 parent 변수
            const memberList = document.querySelector(".member-list");
            memberList.innerHTML = ""; // 초기화 후 함수 실행

            createUserList(memberList, userList);

            // 생성된 회원 <li>를 모두 조회
            const userResultList = document.querySelectorAll(".member");

            clickOneForEach(userResultList, function () {
                const memberNo = this.children[2].innerText.trim();

                // 클릭된 회원 배경색 backgroundPrimary 클래스 추가 + 형제 요소 스타일 제거
                removeSiblingsClassName(this, "backgroundPrimary");
                this.classList.add("backgroundPrimary");

                // 클릭된 회원명 대입
                sharedUserName.innerText = this.innerText;

                // shared-header-category-area 보이게 설정 (기본 none)
                sharedHeaderCategoryArea.style.display = "block";

                // MEMBER_NO가 일치하는 카테고리 조회
                selectCategoryAllAjax(memberNo);
            });
        },
        error: function () {
            console.log("searchUserAjax 실패");
        },
    });
}

/** MEMBER_NO가 일치하는 CATEOGRY 조회 Ajax
 * @param {Number} memberNo (DB와 비교할 MEMBER_NO)
 * @returns void
 */
function selectCategoryAllAjax(memberNo) {
    $.ajax({
        url: "selectCategoryAll",
        data: { memberNo: memberNo },
        type: "POST",
        success: function (result) {
            const categoryList = JSON.parse(result); // JS 객체 리스트

            if (categoryList.length != 0) {
                // == 최소 1개 이상의 객체가 있음

                sharedCategoryList.innerHTML = ""; // 카테고리 리스트 초기화
                sharedVocaListArea.innerHTML = ""; // 단어 리스트 초기화

                createCategoryList(sharedCategoryList, categoryList);

                // // ***** 카테고리 목록(shared-category-list)의 li(shared-category) 클릭 시 발생하는 이벤트 *****
                // ** 클릭된 시점에 재생성된 li들 중 shared-category라는 클래스를 가진 요소들 전체 선택
                const sharedCategories =
                    document.querySelectorAll(".shared-category");

                clickOneForEach(sharedCategories, function () {
                    // ic-hive 아이콘 컬러 변경
                    removeSiblingsFirstChildClassName(
                        this, // ** this == li
                        "active"
                    );
                    this.firstChild.classList.add("active"); // ** this.firstChild = <i> 태그

                    // 카테고리가 클릭되는 순간 해당 memberNo와 categoryNo를 가진 단어들을 조회해와서 출력
                    // memberNo와 cateogryNo 값과 일치하는 word 전체 조회
                    const memberNo = categoryList[0].memberNo; // ** memberNo는 어느 인덱스건 모두 동일함
                    const categoryNo = this.children[2].innerText.trim();

                    // MEMBER_NO & CATEGORY_NO가 일치하는 단어들 조회
                    selectWordAllAjax(memberNo, categoryNo);
                });
            } else {
                // == JS 객체는 생성됐으나 비어있음

                // 카테고리 리스트 & 단어 리스트 내부 초기화
                sharedCategoryList.innerHTML = "";
                sharedVocaListArea.innerHTML = "";

                // 카테고리 리스트에 "저장된 카테고리가 없습니다" 출력
                // FIXME: 임시로 innerHTML 방식으로 작성 + h태그 사용
                sharedCategoryList.innerHTML =
                    "<div style='height: 100px; display: flex; align-items: center;'> <h4 style='color:var(--footer-color);'> 저장된 카테고리가 없습니다 </h4> </div>";
            }
        },
        error: function () {
            console.log("categoryList 가져오기 실패");
        },
    });
}

/** MEMBER_NO와 CATEGORY_NO가 일치하는 WORD 조회 Ajax
 * @param {*} memberNum (회원 번호)
 * @param {*} categoryNum (카테고리 번호)
 * @returns void
 */
function selectWordAllAjax(memberNum, categoryNum) {
    $.ajax({
        url: "selectWordAll",
        data: {
            memberNo: memberNum,
            categoryNo: categoryNum,
        },
        type: "POST",
        success: function (result) {
            const wordList = JSON.parse(result);

            sharedVocaListArea.innerHTML = ""; // 단어 리스트 부모 초기화

            createWordList(sharedVocaListArea, wordList);

            // 생성된 wordList를 순회하며, content-main-text 클릭 시 modal 클래스에 hidden 삭제

            // 생성된 단어 1줄 전체
            const wordListAll = document.querySelectorAll(".content-main-text");

            clickOneForEach(wordListAll, function () {
                console.log(this);
                // 특정 단어 클릭 시 modal 활성화
                /** 단어 조회 모달 */
                const modal = document.getElementById("modal");
                modal.style.display = "flex";

                // TODO: FIXME: selectWordOne Ajax 함수 생성하고 작성
                // 단어가 눌렸을 때 해당 단어와 관련된 MEMBER_NO, CATEGORY_NO, WORD_NO를 비교해 일치하는 단어 하나 조회
            });
        },
        error: function () {
            console.log("selectWordAll 실패");
        },
    });
}

/* **************************** 함수 **************************** */

/** 전달받은 t의 형제 요소들의 첫번째 자식에 적용된 클래스를 제거하는 함수
 * @param {Element} t
 * @param {String} removeClass
 * @returns void
 *  */
function removeSiblingsFirstChildClassName(t, removeClass) {
    const children = t.parentElement.children; // li들

    for (let i = 0; i < children.length; i++) {
        children[i].firstChild.classList.remove(removeClass);
    }
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

/** 전달받은 parent(ul)에 child 객체의 정보(MEMBER_NO, MEMBER_NM, USER_IMG)를 이용해 회원 목록 리스트 생성하는 함수
 * @param {ul} parent (회원 목록 리스트 넣을 ul)
 * @param {object} child (회원 목록 만들 객체)
 * @returns void
 */
function createUserList(parent, child) {
    for (let index = 0; index < child.length; index++) {
        const memberLi = document.createElement("li");
        memberLi.classList.add("member");

        const memberThumbnail = document.createElement("div");
        memberThumbnail.classList.add("member-thumbnail");

        const thumbnailImg = document.createElement("img");
        thumbnailImg.setAttribute(
            "src",
            contextPath + "/" + child[index].profileImage
        );

        const memberNickname = document.createElement("span");
        memberNickname.classList.add("member-nickname");
        memberNickname.innerText = child[index].memberNick;

        const memberNo = document.createElement("span");
        memberNo.classList.add("member-number");
        memberNo.style.display = "none";
        memberNo.innerText = child[index].memberNo;

        memberThumbnail.append(thumbnailImg);

        memberLi.append(memberThumbnail, memberNickname, memberNo);

        parent.append(memberLi);
    }
}

/** 전달받은 parent(ul)에 child 객체의 정보(CATEGORY_NO, MEMBER_NO, CATEGORY_TITLE)를 이용해 카테고리 목록 리스트 생성하는 함수
 * @param {ul} parent (카테고리 목록 리스트 넣을 ul)
 * @param {object} child (카테고리 목록 만들 객체)
 * @returns void
 */
function createCategoryList(parent, child) {
    for (let index = 0; index < child.length; index++) {
        const li = document.createElement("li");
        li.classList.add("shared-category");

        const i = document.createElement("i");
        i.classList.add("ic-hive-cc");

        const span = document.createElement("span");
        span.classList.add("category-title");
        span.innerText = child[index].categoryTitle;

        const categoryNumSpan = document.createElement("span");
        categoryNumSpan.innerText = child[index].categoryNo;
        categoryNumSpan.style.display = "none";

        li.append(i, span, categoryNumSpan);
        parent.append(li);
    }
}

/** 전달받은 parent(ul)에 child 객체의 정보(WORD의 정보 *)를 이용해 카테고리 목록 리스트 생성하는 함수
 * @param {ul} parent (카테고리 목록 리스트 넣을 ul)
 * @param {object} child (카테고리 목록 만들 객체)
 * @returns void
 */
function createWordList(parent, child) {
    for (let index = 0; index < child.length; index++) {
        const contentMainText = document.createElement("div");
        contentMainText.classList.add("content-main-text");

        const contentMainTextFlex = document.createElement("div");
        contentMainTextFlex.classList.add("content-main-text-flex");

        const div1 = document.createElement("div");
        const titleBtn = document.createElement("button");
        titleBtn.innerText = child[index].wordTitle;
        titleBtn.style.display = "block";

        const div2 = document.createElement("div");
        const chevronBtn = document.createElement("button");
        chevronBtn.style.display = "block";
        const chevronImg = document.createElement("img");
        chevronImg.setAttribute(
            "src",
            contextPath + "/resources/assets/icon/chevron.svg"
        );

        const contentMainAddLine = document.createElement("div");
        contentMainAddLine.classList.add("content-main-add-line");

        chevronBtn.append(chevronImg);
        div2.append(chevronBtn);
        div1.append(titleBtn);
        contentMainTextFlex.append(div1, div2);
        contentMainText.append(contentMainTextFlex, contentMainAddLine);
        parent.append(contentMainText);
    }
}
