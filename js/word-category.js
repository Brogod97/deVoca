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


// 태그
const input = document.querySelector('input[name=basic]');
let tagify = new Tagify(input, {
    
}); // initialize Tagify

// 태그가 추가되면 이벤트 발생
tagify.on('add', function() {
    console.log(tagify.value); // 입력된 태그 정보 객체
})





