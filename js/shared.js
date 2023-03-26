// 회원 목록(member-list)의 li(member) 클릭 시 배경색 primary로 변경
// .backgroudPrimary 추가 시 스타일 활성화
const memberList = document.querySelectorAll(".member");

memberList.forEach((member) => {
    member.addEventListener("click", function () {
        // TODO: 선택된 member만 변경되도록 설정 필요 (jQuery의 siblings를 구현하고 싶음)
        // https://aosceno.tistory.com/488
        this.classList.add("backgroundPrimary");
    });
});

// 카테고리 목록(shared-category-list)의 li(shared-category) 클릭 시 아이콘 컬러 변경
// .active 추가 시 색상 활성화
const sharedCategoryList = document.querySelectorAll(".shared-category");

sharedCategoryList.forEach((category) => {
    category.addEventListener("click", function () {
        // TODO: 선택된 category만 변경되도록 설정 필요 (jQuery의 siblings를 구현하고 싶음)
        // ic-hive-cc 접근
        this.firstChild.nextElementSibling.classList.add("active");
    });
});
