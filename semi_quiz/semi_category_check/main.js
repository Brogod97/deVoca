// 모달창
// 조회 모달창
const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
}

const close = () => {
    document.querySelector(".modal").classList.add("hidden");
}

document.querySelector(".openBtn").addEventListener("click", open);
document.querySelector(".bg").addEventListener("click", close);

// 추가 모달창
const addOpen = () => {
    document.querySelector(".addModal").classList.remove("hidden");
}

const addClose = () => {
    document.querySelector(".addModal").classList.add("hidden");
}

document.querySelector(".addOpenBtn").addEventListener("click", addOpen);
document.querySelector(".addBg").addEventListener("click", addClose);


// 메뉴 모달창
const menuOpen = () => {
    document.querySelector(".voca-menu-modal").classList.remove("menu-hidden");
}

const menuClose = () => {
    document.querySelector(".voca-menu-modal").classList.add("menu-hidden");
}

document.querySelector(".menu-openBtn").addEventListener("click", menuOpen);
document.querySelector(".voca-menu-bg").addEventListener("click", menuClose);
