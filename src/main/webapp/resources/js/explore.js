// word-list 수정

// 회원 목록(member-list)의 li(member) 클릭 시 배경색 primary로 변경
// .backgroudPrimary 추가 시 스타일 활성화
const memberList = document.querySelectorAll(".member");

memberList.forEach((member) => {
    const sharedUserName = document.getElementById("shared-user-name");

    member.addEventListener("click", function () {
        removeMemberListClassname(this, "backgroundPrimary");
        this.classList.add("backgroundPrimary");
        console.log();

        sharedUserName.innerText = this.innerText;
    });
});

// MemberList에서 클릭한 요소 외 다른 형제 요소의 클래스 제거하는 함수
function removeMemberListClassname(t, removeClass) {
    const children = t.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(removeClass);
    }
}

// 카테고리 목록(shared-category-list)의 li(shared-category) 클릭 시 아이콘 컬러 변경
// .active 추가 시 색상 활성화
const sharedCategoryList = document.querySelectorAll(".shared-category");

sharedCategoryList.forEach((category) => {
    category.addEventListener("click", function () {
        removeCategoryListClassname(
            this.firstChild.nextElementSibling,
            "active"
        );
        this.firstChild.nextElementSibling.classList.add("active");
        // this.firstChild.nextElementSibling.classList == ic-hive-cc 접근
    });
});

// CategoryList에서 클릭한 li의  클래스 제거하는 함수
function removeCategoryListClassname(t, removeClass) {
    const children = t.parentElement.parentElement.children;

    for (let i = 0; i < children.length; i++) {
        children[i].firstChild.nextSibling.classList.remove(removeClass);
    }
}
