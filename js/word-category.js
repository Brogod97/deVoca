// 모달창
// 조회 모달창
const open = () => {
  document.querySelector(".modal").classList.remove("hidden");
};

const close = () => {
  document.querySelector(".modal").classList.add("hidden");
};

document.querySelector(".openBtn").addEventListener("click", open);
document.querySelector(".bg").addEventListener("click", close);

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

// 태그
const input = document.querySelector("input[name=basic]");
let tagify = new Tagify(input, {}); // initialize Tagify

// 태그가 추가되면 이벤트 발생
tagify.on("add", function () {
  console.log(tagify.value); // 입력된 태그 정보 객체
});

// 단어 추가
const vocaSave = document.getElementById("voca-save");
const vocaInput = document.querySelector("input[name='voca-title']");

vocaSave.addEventListener("click", function () {
  const div1 = document.createElement("div");
  div1.classList.add("content-main-add-line");
  const div2 = document.createElement("div");
  div2.classList.add("content-main-add-text");
  const div3 = document.createElement("div");
  div3.classList.add("content-main-text-flex");
  const div4 = document.createElement("div");

  const button1 = document.createElement("button");
  const img1 = document.createElement("img");
  img1.setAttribute("src", "/assets/images/v.svg");

  const button2 = document.createElement("button");
  button2.classList.add("openBtn");

  const div5 = document.createElement("div");
  const button3 = document.createElement("button");
  const img2 = document.createElement("img");
  img2.setAttribute("src", "/assets/images/star.svg");

  const button4 = document.createElement("button");
  const img3 = document.createElement("img");
  img3.setAttribute("src", "/assets/images/arrow.svg");

  div2.append(div3);
  div3.append(div4, div5);
  div4.append(button1, button2);
  button1.append(img1);
  button2.append(vocaInput.value);

  div5.append(button3, button4);
  button3.append(img2);
  button4.append(img3);
  document.querySelector(".content-main-text").append(div1, div2);

  button2.addEventListener("click", function () {
    const div1 = document.createElement("div");
    div1.classList.add("modal hidden");
    const div2 = document.createElement("div");
    div2.classList.add("bg");
    const div3 = document.createElement("div");
    div3.classList.add("voca-modalBox");
    const div4 = document.createElement("div");
    div4.classList.add("voca-category1");
    const div5 = document.createElement("div");
    div5.classList.add("voca-category-tag");
    const div6 = document.createElement("div");
    const button1 = document.createElement("button");
    button1.classList.add("voca-modify");
    button1.setAttribute("onclick", "addOpen()");
    const button2 = document.createElement("button");
    button2.classList.add("voca-delete");
    const div7 = document.createElement("div");
    div7.classList.add("voca-category2");
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    const h1 = document.createElement("h1");
    const div8 = document.createElement("div");
    div8.classList.add("voca-category3");
    const span1 = document.createElement("span");
    const div9 = document.createElement("div");
    div9.classList.add("voca-category4");
    const img1 = document.createElement("img");
    img1.setAttribute("src", "/assets/images/Icon.svg");
    const div10 = document.createElement("div");
    div10.classList.add("voca-content1");
    const span2 = document.createElement("span");
    const div11 = document.createElement("div");
    div11.classList.add("voca-category5");
    const img2 = document.createElement("img");
    img2.setAttribute("src", "/assets/images/Icon (1).svg");
    const div12 = document.createElement("div");
    div12.classList.add("voca-content2");
    const p = document.createElement("p");
    const div13 = document.createElement("div");
    div13.classList.add("voca-category6");
    const img3 = document.createElement("img");
    img3.setAttribute("src", "/assets/images/Vector.svg");

    div1.append(div2, div3);
    div3.append(div4, div7, div8, div9, div10, div11, div12, div13);
    div4.append(div5, div6);
    div6.append(button1, button2);
    div7.append(input, h1);
    div8.append(span1);
    div9.append(img1);
    div10.append(span2);
    div11.append(img2);
    div12.append(p);
    div13.append(img3);
  });

  addClose();
});
