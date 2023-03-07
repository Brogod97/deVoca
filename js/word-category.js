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

// 카테고리 옆 ... 메뉴
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
  categoryI.classList.add("fa-solid");
  categoryI.classList.add("fa-x");

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

const vocaSave = document.getElementById("voca-save");
const vocaInput = document.querySelector("input[name='voca-title']");
const vocaTag = document.querySelector("input[name='basic']");
const vocadefinition = document.querySelector(".voca-definition");
const vocaMemo = document.querySelector("#voca-memo");

vocaSave.addEventListener("click", function () {
  const div1 = document.createElement("div");
  div1.classList.add("content-main-add-line");

  const div2 = document.createElement("div");
  div2.classList.add("content-main-text-flex");
  const div3 = document.createElement("div");

  const button1 = document.createElement("button");
  const img1 = document.createElement("img");
  img1.setAttribute("src", "/assets/images/v.svg");

  const button2 = document.createElement("button");
  button2.classList.add("openBtn");

  const div4 = document.createElement("div");
  const button3 = document.createElement("button");
  const img2 = document.createElement("img");
  img2.setAttribute("src", "/assets/images/star.svg");

  const button4 = document.createElement("button");
  const img3 = document.createElement("img");
  img3.setAttribute("src", "/assets/images/arrow.svg");

  div2.append(div3, div4);
  div3.append(button1, button2);
  button1.append(img1);
  button2.append(vocaInput.value);

  div4.append(button3, button4);
  button3.append(img2);
  button4.append(img3);
  document.querySelector(".content-main-text").append(div2, div1);

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
    open(event);
  });
  const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
    const vocaSelect = event.target.parentElement.lastElementChild;
    document.querySelector("h1").innerText = vocaSelect.innerText;
    console.log(event.target.parentElement.lastElementChild);
  };

  button3.addEventListener("click", function () {
    if (flag) {
      img2.setAttribute("src", "/assets/images/star2.svg");
      flag = false;
    } else {
      img2.setAttribute("src", "/assets/images/star.svg");
      flag = true;
    }
  });

  button4.addEventListener("click", function () {
    open();
  });

  const close = () => {
    document.querySelector(".modal").classList.add("hidden");
  };

  document.querySelector(".openBtn").addEventListener("click", open);
  document.querySelector(".bg").addEventListener("click", close);

  addClose();
});
