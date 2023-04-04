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

        selectCategoryAll(memberNo);
        // $.ajax({
        //     url: "selectCategoryAll",
        //     data: { memberNo: memberNo },
        //     type: "POST",
        //     success: function (categories) {
        //         const categoryList = JSON.parse(categories); // JS 객체 리스트

        //         const ul = document.getElementById("shared-category-list");

        //         // ** 회원 li 클릭 시 내부 초기화용으로 상위에 선언
        //         const sharedVocaListArea = document.querySelector(
        //             ".shared-voca-list-area"
        //         );

        //         if (categoryList.length != 0) {
        //             // ** categoryList의 길이가 0이 아니다 == 최소 1개 이상의 객체를 갖고 있다.
        //             ul.innerHTML = "";

        //             for (let index = 0; index < categoryList.length; index++) {
        //                 const li = document.createElement("li");
        //                 li.classList.add("shared-category");

        //                 const i = document.createElement("i");
        //                 i.classList.add("ic-hive-cc");

        //                 const span = document.createElement("span");
        //                 span.classList.add("category-title");
        //                 span.innerText = categoryList[index].categoryTitle;

        //                 const categoryNumSpan = document.createElement("span");
        //                 categoryNumSpan.innerText =
        //                     categoryList[index].categoryNo;
        //                 categoryNumSpan.style.display = "none";

        //                 li.append(i, span, categoryNumSpan);
        //                 ul.append(li);
        //             }

        //             // // ***** 카테고리 목록(shared-category-list)의 li(shared-category) 클릭 시 발생하는 이벤트 *****

        //             // ** 클릭된 시점에 재생성된 li들 중 shared-category라는 클래스를 가진 요소들 전체 선택
        //             // 이 변수를 이용해 i.ic-hive의 클릭된 요소에만 .active 추가
        //             const sharedCategoryList =
        //                 document.querySelectorAll(".shared-category");

        //             sharedVocaListArea.innerHTML = "";

        //             let memberNo = null;
        //             let categoryNo = null;
        //             sharedCategoryList.forEach((category) => {
        //                 category.addEventListener("click", function () {
        //                     // 1. ic-hive 아이콘 컬러 변경
        //                     removeCategoryListClassname(
        //                         this, // ** this == li
        //                         "active"
        //                     );
        //                     // ** this.firstChild = <i> 태그
        //                     this.firstChild.classList.add("active");

        //                     // 2. 카테고리가 클릭되는 순간 해당 memberNo와 categoryNo를 가진 단어들을 조회해와서 출력
        //                     // memberNo와 cateogryNo 값과 일치하는 word 전체 조회
        //                     memberNo = categoryList[0].memberNo; // memberNo는 클릭된 멤버의 것으로, 어느 인덱스건 모두 동일함
        //                     categoryNo = this.children[2].innerText;

        //                     $.ajax({
        //                         url: "selectWordAll",
        //                         data: {
        //                             memberNo: memberNo,
        //                             categoryNo: categoryNo,
        //                         },
        //                         type: "POST",
        //                         success: function (words) {
        //                             console.log(
        //                                 "selectWordAll 성공, words : " + words
        //                             );

        //                             const wordList = JSON.parse(words);

        //                             sharedVocaListArea.innerHTML = "";

        //                             for (
        //                                 let index = 0;
        //                                 index < wordList.length;
        //                                 index++
        //                             ) {
        //                                 const contentMainText =
        //                                     document.createElement("div");
        //                                 contentMainText.classList.add(
        //                                     "content-main-text"
        //                                 );

        //                                 const contentMainTextFlex =
        //                                     document.createElement("div");
        //                                 contentMainTextFlex.classList.add(
        //                                     "content-main-text-flex"
        //                                 );

        //                                 const div1 =
        //                                     document.createElement("div");
        //                                 const titleBtn =
        //                                     document.createElement("button");
        //                                 titleBtn.innerText =
        //                                     wordList[index].wordTitle;
        //                                 titleBtn.style.display = "block";

        //                                 const div2 =
        //                                     document.createElement("div");
        //                                 const chevronBtn =
        //                                     document.createElement("button");
        //                                 chevronBtn.style.display = "block";
        //                                 const chevronImg =
        //                                     document.createElement("img");
        //                                 chevronImg.setAttribute(
        //                                     "src",
        //                                     contextPath +
        //                                         "/resources/assets/icon/chevron.svg"
        //                                 );

        //                                 const contentMainAddLine =
        //                                     document.createElement("div");
        //                                 contentMainAddLine.classList.add(
        //                                     "content-main-add-line"
        //                                 );

        //                                 chevronBtn.append(chevronImg);
        //                                 div2.append(chevronBtn);
        //                                 div1.append(titleBtn);
        //                                 contentMainTextFlex.append(div1, div2);
        //                                 contentMainText.append(
        //                                     contentMainTextFlex,
        //                                     contentMainAddLine
        //                                 );
        //                                 sharedVocaListArea.append(
        //                                     contentMainText
        //                                 );
        //                             }
        //                             // 생성된 wordList를 순회하며, content-main-text 클릭 시 modal 클래스에 hidden 삭제
        //                             const wordListAll =
        //                                 document.querySelectorAll(
        //                                     ".content-main-text"
        //                                 );

        //                             // TODO: FIXME: selectWordOne 서비스 완성되고 나면 연결작업 시작
        //                             wordListAll.forEach((word) => {
        //                                 // 단어가 눌렸을 때 해당 단어와 관련된 MEMBER_NO, CATEGORY_NO, WORD_NO를 비교해 일치하는 단어 하나 조회
        //                                 word.addEventListener(
        //                                     "click",
        //                                     function () {
        //                                         console.log(this);
        //                                         const modal =
        //                                             document.getElementById(
        //                                                 "modal"
        //                                             );
        //                                         modal.style.display = "flex";
        //                                     }
        //                                 );
        //                             });
        //                         },
        //                         error: function () {
        //                             console.log("selectWordAll 실패");
        //                         },
        //                     });
        //                 });
        //             });
        //         } else {
        //             // ** categoryList의 길이가 0이다 == JS 객체는 생성됐으나 비어있다.
        //             // -> 카테고리가 없을 경우 : "저장된 카테고리가 없습니다" 표시
        //             ul.innerHTML = "";

        //             sharedVocaListArea.innerHTML = "";

        //             // FIXME: 임시로 innerHTML 방식으로 작성 + h태그 사용
        //             ul.innerHTML =
        //                 "<div style='height: 100px; display: flex; align-items: center;'> <h4 style='color:var(--footer-color);'> 저장된 카테고리가 없습니다 </h4> </div>";
        //         }
        //     },
        //     error: function () {
        //         console.log("categoryList 가져오기 실패");
        //     },
        // });
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

// 단어 조회 모달창에서 뒷 배경 부분 클릭 시 사라지게 하는 클릭 이벤트
const bgBlur = document.querySelector(".bg");
const vocaModal = document.getElementById("modal");

bgBlur.addEventListener("click", function () {
    vocaModal.style.display = "none";
});

// 유저 검색창 이벤트
const userSearchInput = document.getElementById("voca-search-input");
const userSearchBtn = document.getElementById("user-search-btn");

userSearchBtn.addEventListener("click", function () {
    searchUser();
});

userSearchInput.addEventListener("keyup", function () {
    if (window.event.keyCode == 13) {
        searchUser();
    }
});

function searchUser() {
    const inputUserName = userSearchInput.value;

    $.ajax({
        url: "searchUser",
        data: { inputUserName: inputUserName },
        type: "POST",
        success: function (result) {
            const userList = JSON.parse(result);

            // ** 회원 li 클릭 시 내부 초기화용으로 상위에 선언
            const sharedVocaListArea = document.querySelector(
                ".shared-voca-list-area"
            );
            const memberList = document.querySelector(".member-list");
            memberList.innerHTML = "";

            for (let index = 0; index < userList.length; index++) {
                const memberLi = document.createElement("li");
                memberLi.classList.add("member");

                const memberThumbnail = document.createElement("div");
                memberThumbnail.classList.add("member-thumbnail");

                const thumbnailImg = document.createElement("img");
                thumbnailImg.setAttribute(
                    "src",
                    contextPath + "/" + userList[index].profileImage
                );

                const memberNickname = document.createElement("span");
                memberNickname.classList.add("member-nickname");
                memberNickname.innerText = userList[index].memberNick;

                const memberNo = document.createElement("span");
                memberNo.classList.add("member-number");
                memberNo.style.display = "none";
                memberNo.innerText = userList[index].memberNo;

                memberThumbnail.append(thumbnailImg);

                memberLi.append(memberThumbnail, memberNickname, memberNo);

                memberList.append(memberLi);
            }

            const userResultList = document.querySelectorAll(".member");
            console.log(userResultList);

            userResultList.forEach((userResult) => {
                userResult.addEventListener("click", function () {
                    console.log(this.children[3].innerText);
                    // 클릭 시 메인 영역 출력
                    const memberNum = this.children[3].innerText;
                    selectCategoryAll(memberNum);
                });
            });
        },
        error: function () {
            console.log("searchUser 실패");
        },
    });
}

// -------------------우측 카테고리 조회 및 카테고리 클릭 시 단어 리스트 조회 되는 이후의 모든 것 이벤트

function selectCategoryAll(memberNo) {
    $.ajax({
        url: "selectCategoryAll",
        data: { memberNo: memberNo },
        type: "POST",
        success: function (categories) {
            const categoryList = JSON.parse(categories); // JS 객체 리스트

            const ul = document.getElementById("shared-category-list");

            // ** 회원 li 클릭 시 내부 초기화용으로 상위에 선언
            const sharedVocaListArea = document.querySelector(
                ".shared-voca-list-area"
            );

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
                    categoryNumSpan.innerText = categoryList[index].categoryNo;
                    categoryNumSpan.style.display = "none";

                    li.append(i, span, categoryNumSpan);
                    ul.append(li);
                }

                // // ***** 카테고리 목록(shared-category-list)의 li(shared-category) 클릭 시 발생하는 이벤트 *****

                // ** 클릭된 시점에 재생성된 li들 중 shared-category라는 클래스를 가진 요소들 전체 선택
                // 이 변수를 이용해 i.ic-hive의 클릭된 요소에만 .active 추가
                const sharedCategoryList =
                    document.querySelectorAll(".shared-category");

                sharedVocaListArea.innerHTML = "";

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

                                const wordList = JSON.parse(words);

                                sharedVocaListArea.innerHTML = "";

                                for (
                                    let index = 0;
                                    index < wordList.length;
                                    index++
                                ) {
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
                                    titleBtn.innerText =
                                        wordList[index].wordTitle;
                                    titleBtn.style.display = "block";

                                    const div2 = document.createElement("div");
                                    const chevronBtn =
                                        document.createElement("button");
                                    chevronBtn.style.display = "block";
                                    const chevronImg =
                                        document.createElement("img");
                                    chevronImg.setAttribute(
                                        "src",
                                        contextPath +
                                            "/resources/assets/icon/chevron.svg"
                                    );

                                    const contentMainAddLine =
                                        document.createElement("div");
                                    contentMainAddLine.classList.add(
                                        "content-main-add-line"
                                    );

                                    chevronBtn.append(chevronImg);
                                    div2.append(chevronBtn);
                                    div1.append(titleBtn);
                                    contentMainTextFlex.append(div1, div2);
                                    contentMainText.append(
                                        contentMainTextFlex,
                                        contentMainAddLine
                                    );
                                    sharedVocaListArea.append(contentMainText);
                                }
                                // 생성된 wordList를 순회하며, content-main-text 클릭 시 modal 클래스에 hidden 삭제
                                const wordListAll =
                                    document.querySelectorAll(
                                        ".content-main-text"
                                    );

                                // TODO: FIXME: selectWordOne 서비스 완성되고 나면 연결작업 시작
                                wordListAll.forEach((word) => {
                                    // 단어가 눌렸을 때 해당 단어와 관련된 MEMBER_NO, CATEGORY_NO, WORD_NO를 비교해 일치하는 단어 하나 조회
                                    word.addEventListener("click", function () {
                                        console.log(this);
                                        const modal =
                                            document.getElementById("modal");
                                        modal.style.display = "flex";
                                    });
                                });
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

                sharedVocaListArea.innerHTML = "";

                // FIXME: 임시로 innerHTML 방식으로 작성 + h태그 사용
                ul.innerHTML =
                    "<div style='height: 100px; display: flex; align-items: center;'> <h4 style='color:var(--footer-color);'> 저장된 카테고리가 없습니다 </h4> </div>";
            }
        },
        error: function () {
            console.log("categoryList 가져오기 실패");
        },
    });
}
