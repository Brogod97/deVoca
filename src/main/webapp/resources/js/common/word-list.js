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

const close = () => {
  document.querySelector(".modal").classList.add("hidden");
};

document.querySelector(".bg").addEventListener("click", close);

const vocaSave = document.getElementById("voca-save");
const vocaInput = document.querySelector("input[name='voca-title']");
const vocadefinition = document.querySelector("input[name='voca-definition']");
const vocaMemo = document.querySelector("#voca-memo");
const vocaReadTitle = document.getElementById("voca-read-title");
const vocaReadDefinition = document.getElementById("voca-read-definition");
const vocaReadMemo = document.getElementById("voca-read-memo");
const vocaCodeBlock = document.getElementById("voca-code-block");
const vocaReadCode = document.getElementById("voca-read-code");
const modifyBtn = document.querySelector(".modify-btn");
const vocaModify = document.querySelector(".voca-modify");
const vocaDelete = document.querySelector(".voca-delete");
const vocaDeleteDone = document.getElementById("voca-delete-done");

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

// 단어 삭제 모달창
const vocaDeleteModal = document.querySelector(".voca-delete-modal");
const vocaDeleteCancell = document.getElementById("voca-delete-cancell");

function wordDeleteModal() {
  vocaDelete.addEventListener("click", () => {
    vocaDeleteModal.style.display = "block";
  });

  vocaDeleteCancell.addEventListener("click", () => {
    vocaDeleteModal.style.display = "none";
  });
}

const categoryList = document.querySelectorAll(".voca-category-li");
// 단어 조회
for (let i = 0; i < categoryList.length; i++) {
  categoryList[i].addEventListener("click", function () {
    const categoryNo = this.lastElementChild.innerText.trim();
    const categoryName = document.getElementById("categoryName");
    categoryName.innerText = this.firstElementChild.firstElementChild.value;

    const wordListStyle = document.querySelector(".word-list");
    wordListStyle.style.display = "block";
    // 단어 조회 ajax
    $.ajax({
      url: "mainSelectWordAll",
      type: "POST",
      data: { categoryNo: categoryNo },
      dataType: "JSON",
      success: function (wordList) {
        if (wordList.categoryNo != 0) {
          console.log(wordList);
          const contentMain = document.querySelector(".content-main-text");
          contentMain.innerHTML = "";
          for (let i = 0; i < wordList.length; i++) {
            console.log(wordList[i].categoryTitle);
            const div1 = document.createElement("div");
            div1.classList.add("content-main-add-line");

            const div2 = document.createElement("div");
            div2.classList.add("content-main-text-flex");
            const div3 = document.createElement("div");

            const button1 = document.createElement("button");
            const img1 = document.createElement("i");
            img1.classList.add("ic-check-cc");

            const button2 = document.createElement("button");
            button2.classList.add("openBtn");

            const div4 = document.createElement("div");
            const button3 = document.createElement("button");
            const img2 = document.createElement("img");
            img2.setAttribute(
              "src",
              contextPath + "/resources/assets/icon/star.svg"
            );

            const button4 = document.createElement("button");
            const img3 = document.createElement("img");
            img3.setAttribute(
              "src",
              contextPath + "/resources/assets/icon/chevron.svg"
            );

            div2.append(div3, div4);
            div3.append(button1, button2);
            button1.append(img1);
            button2.append(wordList[i].wordTitle);

            div4.append(button3, button4);
            button3.append(img2);
            button4.append(img3);
            document.querySelector(".content-main-text").append(div2, div1);

            button2.addEventListener("click", function () {
              open();
            });

            const open = () => {
              document.querySelector(".modal").classList.remove("hidden");
              // vocaReadTitle.value = wordList[i].wordTitle;
              // vocaReadDefinition.value = wordList[i].wordDf;
              // vocaReadMemo.value = wordList[i].wordMemo;
              // vocaReadCode.value = wordList[i].codeBlock;

              // 조회 했을때 타이틀 정의 메모 코드블럭 ajax

              const wordListAll =
                document.querySelectorAll(".content-main-text");

              function clickOneForEach(nodeList, f) {
                nodeList.forEach((node) => {
                  node.addEventListener("click", f);
                });
              }

              clickOneForEach(wordListAll, function () {
                // 단어가 눌렸을 때 해당 단어와 관련된 MEMBER_NO, CATEGORY_NO, WORD_NO를 비교해 일치하는 단어 하나 조회
                const wordNo = this.firstChild.children[2].innerText.trim();
                selectWordOneAjax(wordNo);
              });

              function selectWordOneAjax(wordNo) {
                $.ajax({
                  url: "selectWordOne",
                  data: {
                    wordNo: wordNo,
                  },
                  type: "POST",
                  dataType: "JSON",
                  success: function (word) {
                    vocaReadTitle.value = word.wordTitle;
                    vocaReadDefinition.value = word.wordDf;
                    vocaReadMemo.value = word.wordMemo;
                    vocaReadCode.value = word.codeBlock;
                  },
                  error: function () {
                    console.log("selectWordOne 실패");
                  },
                });
              }
            };

            document.querySelector(".openBtn").addEventListener("click", open);

            button3.addEventListener("click", function () {
              if (flag) {
                img2.setAttribute(
                  "src",
                  contextPath + "/resources/assets/icon/star-active.svg"
                );
                flag = false;
              } else {
                img2.setAttribute(
                  "src",
                  contextPath + "/resources/assets/icon/star.svg"
                );
                flag = true;
              }
            });

            button4.addEventListener("click", function () {
              open();
            });

            // 단어 수정

            vocaModify.addEventListener("click", function () {
              vocaReadTitle.focus();
              vocaReadTitle.removeAttribute("readonly");
              vocaReadDefinition.removeAttribute("readonly");
              vocaReadMemo.removeAttribute("readonly");
              modifyBtn.style.display = "block";
            });

            // 단어수정 완료

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

            wordDeleteModal();

            // v 버튼 눌렀을때 초록색으로 변하고 옆에 글자 선 그어짐

            let flag = true;
            button1.addEventListener("click", function () {
              if (flag) {
                img1.style.color = "#5bc236";
                button2.style.textDecoration = "line-through";
                flag = false;
              } else {
                img1.style.color = "black";
                button2.style.textDecoration = "none";
                flag = true;
              }
            });

            addClose();
            // ---------코드블럭-------
            codeOutput.textContent = codeInput.value;
            hljs.highlightBlock(codeOutput);
          }
        } else {
          alert("단어가 없습니다");
        }
      },

      error: function () {
        alert("오류발생");
      },
    });

    // 저장했을때 ajax
    vocaSave.addEventListener("click", function () {
      $.ajax({
        url: "insertWord",
        type: "POST",
        data: {
          categoryNo: categoryNo,
          wordTitle: vocaInput.value,
          wordDf: vocadefinition.value,
          wordMemo: vocaMemo.value,
          codeBlock: vocaCodeBlock.value,
        },
        dataType: "JSON",

        success: function () {
          alert("성공");
          vocaCreateWordList();
        },
        error: function () {
          alert("오류발생");
        },
      });
    });
  });
}

// 단어 생성하는 함수
function vocaCreateWordList() {
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

  button2.addEventListener("click", function () {
    open();
  });

  document.querySelector(".openBtn").addEventListener("click", open);

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
  });

  button4.addEventListener("click", function () {
    open();
  });

  // 단어 수정

  vocaModify.addEventListener("click", function () {
    vocaReadTitle.focus();
    vocaReadTitle.removeAttribute("readonly");
    vocaReadDefinition.removeAttribute("readonly");
    vocaReadMemo.removeAttribute("readonly");
    modifyBtn.style.display = "block";
  });

  // 단어수정 완료

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

  wordDeleteModal();

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

  addClose();
  // ---------코드블럭-------
  codeOutput.textContent = codeInput.value;
  hljs.highlightBlock(codeOutput);
}
