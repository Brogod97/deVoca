// *--------------이벤트---------------

// 회원 목록(member-list)의 li(member) 클릭 이벤트
// -> 1. li 스타일 변경
// -> 2. categoryList 표시
const memberList = document.querySelectorAll(".member");

memberList.forEach((member) => {
    const sharedUserName = document.getElementById("shared-user-name");
    const sharedHeaderCategoryArea = document.getElementById(
        "shared-header-category-area"
    );

    member.addEventListener("click", function () {
        // 1. backgroudPrimary 추가 시 스타일 활성화
        removeMemberListClassname(this, "backgroundPrimary");
        this.classList.add("backgroundPrimary");

        sharedUserName.innerText = this.innerText;

        // 2. shared-header-category-area 보이게 설정
        sharedHeaderCategoryArea.style.display = "block";

        // 3. categoryList 요청 및 표시
        // $.ajax(
        //     url : "",
        //     data : "",
        //     type : "",
        //     success : "",
        //     error : ""
        // );
    });
});

// 카테고리 목록(shared-category-list)의 li(shared-category) 클릭 시 아이콘 컬러 변경
const sharedCategoryList = document.querySelectorAll(".shared-category");

sharedCategoryList.forEach((category) => {
    // .active 추가 시 색상 활성화
    category.addEventListener("click", function () {
        removeCategoryListClassname(
            this.firstChild.nextElementSibling,
            "active"
        );
        this.firstChild.nextElementSibling.classList.add("active");
        // this.firstChild.nextElementSibling.classList == ic-hive-cc 접근
    });
});

// --------------이벤트---------------*

// *-------------Functions-------------

/**
 * MemberList에서 클릭한 요소 제외 다른 형제 요소의 클래스 제거하는 함수
 * @returns void
 *  */
function removeMemberListClassname(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}

/**
 * CategoryList에서 클릭한 li의  클래스 제거하는 함수
 * @returns void
 *  */
function removeCategoryListClassname(t, removeClass) {
    const children = t.parentElement.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].firstChild.nextSibling.classList.remove(removeClass);
    }
}

// // -------------Functions-------------*
