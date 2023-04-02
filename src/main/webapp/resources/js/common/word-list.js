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
  img3.setAttribute("src", contextPath + "/resources/assets/icon/chevron.svg");

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
      img2.setAttribute("src", contextPath + "/resources/assets/icon/star.svg");
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
