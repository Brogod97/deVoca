// 로딩 페이지 함수 호출
window.onload = function () {
  showLoadingPage();
};
/** 로딩페이지 호출 함수 */
function showLoadingPage() {
  // 로딩 페이지를 화면에 보여줍니다.
  document.querySelector(".wrap").style.display = "block";
  document.querySelector(".container").style.display = "none";
  document.querySelector(".main-content-area").style.display = "none";

  // 3초 후 종료
  setTimeout(hideLoadingPage, 2000);
}

/** 로딩페이지 종료 함수 */
function hideLoadingPage() {
  // 로딩 페이지를 화면에서 숨깁니다.
  document.querySelector(".wrap").style.display = "none";
  document.querySelector(".container").style.display = "flex";
  document.querySelector(".main-content-area").style.display = "flex";
}

const categoryBtn = document.getElementById("category-btn");
const categoryAdd = document.querySelector(".category-add");
const categoryEdit = document.querySelector(".category-edit");
const categoryMenuWrapper = document.getElementById("category-menu-wrapper");
const categoryMenuOveray = document.getElementById("category-menu-overlay");

const vocaSearchInput = document.getElementById("voca-search-input");
const sidebarSearch = document.querySelector(".sidebar-search");

// 단어 검색 기능(엔터키)
vocaSearchInput.addEventListener("keyup", function () {
  if (window.event.keyCode == "13") {
    const filter = vocaSearchInput.value.toUpperCase();

    for (let i = 0; i < categoryList.length; i++) {
      const listSearch = categoryList[i].firstElementChild.value.toUpperCase();

      if (listSearch.indexOf(filter) > -1) {
        categoryList[i].style.display = "";
      } else {
        categoryList[i].style.display = "none";
      }
    }
  }
});

// 단어 검색 기능 (돋보기 버튼)
sidebarSearch.addEventListener("click", function () {
  const filter = vocaSearchInput.value.toUpperCase();

  for (let i = 0; i < categoryList.length; i++) {
    const listSearch = categoryList[i].firstElementChild.value.toUpperCase();

    if (listSearch.indexOf(filter) > -1) {
      categoryList[i].style.display = "";
    } else {
      categoryList[i].style.display = "none";
    }
  }
});

// 카테고리 메뉴 버튼 클릭시 표시 / 닫기
categoryBtn.addEventListener("click", function () {
  categoryMenuWrapper.classList.toggle("invisible");
});

// 카테고리 메뉴 - 추가 버튼 클릭 시 동작
categoryAdd.addEventListener("click", function () {
  const categoryLi = document.createElement("li");
  // const addBtn = document.createElement("button");
  // addBtn.setAttribute("type", "button");

  categoryLi.classList.add("voca-category-li");

  const categoryInput = document.createElement("input");
  categoryInput.setAttribute("name", "categoryTitle");
  $(function () {
    categoryInput.focus();
  });

  categoryInput.style.border = "none";
  categoryInput.style.outline = "none";
  categoryInput.style.backgroundColor = "transparent";

  const categoryCloseBtn = document.createElement("button");
  categoryCloseBtn.classList.add("invisible");
  categoryCloseBtn.classList.add("category-delete");
  categoryCloseBtn.setAttribute("type", "button");
  const categoryI = document.createElement("i");
  categoryI.classList.add("ic-close");

  categoryLi.append(categoryInput, categoryCloseBtn);
  // addBtn.append(categoryInput);
  categoryCloseBtn.append(categoryI);

  document.querySelector(".category-list > ul").append(categoryLi);

  closeCategoryMenu();
  inputEnter(categoryInput);
  // inputFocus(categoryInput);
  inputEdit(categoryInput);
});

// 카테고리 메뉴 - 편집 버튼 클릭 시 동작
categoryEdit.addEventListener("click", function () {
  closeCategoryMenu(); // 카테고리 메뉴 닫기
  showDeleteBtn(); // X (삭제) 버튼 표시
  inputDelete();
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

// 인풋창에 엔터키를 누르면 내가 입력한 값이 그대로 나옴
function inputEnter(categoryInput) {
  categoryInput.addEventListener("keydown", function (event) {
    if (event.keyCode == "13") {
      this.setAttribute("readonly", "true");
      this.style.border = "none";
      this.style.outline = "none";
      this.style.backgroundColor = "transparent";
      this.style.fontSize = "16px";
      this.style.fontWeight = "700";
      this.style.cursor = "pointer";
      this.blur();

      if (showDeleteBtn) {
        const btnAll = document.querySelectorAll(".category-delete");
        btnAll.forEach((btn) => {
          btn.classList.add("invisible");
        });
      }

      if (this.value == "") {
        this.parentNode.parentNode.remove();
      } else {
        $.ajax({
          url: "insertCategory",
          type: "POST",
          data: {
            categoryTitle: categoryInput.value,
          },
          dataType: "JSON",
          success: function (result) {
            if (result > 0) {
              alert("새 카테고리가 추가되었습니다.");
              const categoryList =
                document.querySelectorAll(".voca-category-li");

              for (let i = 0; i < categoryList.length; i++) {
                categoryList[i].addEventListener("click", function () {
                  const categoryName = document.getElementById("categoryName");
                  categoryName.innerText = this.firstElementChild.value;

                  const wordListStyle = document.querySelector(".word-list");
                  wordListStyle.style.display = "block";
                });
              }
            } else {
              alert("카테고리 추가에 실패하였습니다.");
            }
          },
          error: function () {
            alert("서버 오류가 발생하였습니다.");
          },
        });

        event.preventDefault();
      }
    }
  });
}

// 인풋창 focus가 해제 되었을때도 내가 입력한 값이 그대로 나오는 이벤트
// function inputFocus(categoryInput, addBtn) {
//   categoryInput.addEventListener("blur", function focusOut() {
//     this.setAttribute("readonly", "true");
//     this.style.border = "none";
//     this.style.outline = "none";
//     this.style.backgroundColor = "transparent";
//     this.style.fontSize = "16px";
//     this.style.fontWeight = "700";
//     this.style.cursor = "pointer";
//     addBtn.append = this.value;

//     if (this.value == "") {
//       this.parentNode.parentNode.remove();
//     } else {
//       $.ajax({
//         url: "insertCategory",
//         type: "POST",
//         data: {
//           categoryTitle: categoryInput.value,
//         },
//         dataType: "JSON",
//         success: function (result) {
//           if (result > 0) {
//             alert("새 카테고리가 추가되었습니다.");
//             const categoryList = document.querySelectorAll(".voca-category-li");

//             for (let i = 0; i < categoryList.length; i++) {
//               categoryList[i].addEventListener("click", function () {
//                 const categoryName = document.getElementById("categoryName");
//                 categoryName.innerText =
//                   this.firstElementChild.firstElementChild.value;

//                 const wordListStyle = document.querySelector(".word-list");
//                 wordListStyle.style.display = "block";
//               });
//             }
//           } else {
//             alert("카테고리 추가에 실패하였습니다.");
//           }
//           // 이벤트 리스너를 제거합니다.
//           categoryInput.removeEventListener("blur", focusOut);
//         },
//         error: function () {
//           alert("서버 오류가 발생하였습니다.");
//         },
//       });
//     }
//   });
// }

// 편집시 카테고리 제목 바꿀수 있게 하는 이벤트
function inputEdit(categoryInput) {
  categoryEdit.addEventListener("click", function () {
    categoryInput.removeAttribute("readonly");
    categoryInput.focus();
  });
}

const categoryList = document.querySelectorAll(".voca-category-li");

// 카테고리 삭제 구현 함수
// function inputDelete() {
//   for (let i = 0; i < categoryList.length; i++) {
//     categoryList[i].addEventListener("click", function () {
//       const categoryNo = this.lastElementChild.innerText.trim();

//       console.log(this.childNodes[3]);

//       // 삭제 버튼 클릭 시 AJAX 요청 전송
//       this.childNodes[3].addEventListener("click", function () {
//         $.ajax({
//           url: "deleteCategory",
//           type: "POST",
//           dataType: "JSON",
//           data: { categoryNo: categoryNo },
//           success: function () {
//             $.ajax({
//               url: "mainSelectWordAll",
//               type: "POST",
//               data: { categoryNo: categoryNo },
//               dataType: "JSON",
//               success: function (wordList) {
//                 if (wordList.categoryNo == 0) {
//                   categoryList[i].remove();

//                   const btnAll = document.querySelectorAll(".category-delete");
//                   btnAll.forEach((btn) => {
//                     btn.classList.add("invisible");
//                   });

//                   const wordList = document.querySelector(".word-list");
//                   wordList.style.display = "none";
//                 } else {
//                   alert("단어를 먼저 삭제 해주세요");

//                   const btnAll = document.querySelectorAll(".category-delete");
//                   btnAll.forEach((btn) => {
//                     btn.classList.add("invisible");
//                   });

//                   const wordList = document.querySelector(".word-list");
//                   wordList.style.display = "none";
//                 }
//               },
//               error: function () {
//                 console.log("카테고리 삭제 실패 오류");
//               },
//             });
//           },
//         });
//       });
//     });
//   }
// }

// -----------------------------------------------------------------------------

// 추가 모달창
const addOpen = () => {
  document.querySelector(".addModal").classList.remove("hidden");
};

const addClose = () => {
  document.querySelector(".addModal").classList.add("hidden");
};

document.querySelector(".addOpenBtn").addEventListener("click", function () {
  addOpen();
  vocaInput.value = "";
  vocadefinition.value = "";
  vocaMemo.value = "";
  vocaCodeBlock.value = "";
});
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

// 조회 모달창

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

//카테고리를 눌렀을때
let categoryNo;
for (let i = 0; i < categoryList.length; i++) {
  categoryList[i].addEventListener("click", function () {
    const categoryNo = this.lastElementChild.innerText.trim();
    const categoryName = document.getElementById("categoryName");
    categoryName.innerText = this.firstElementChild.value;

    const wordListStyle = document.querySelector(".word-list");
    wordListStyle.style.display = "block";

    vocaSaveAjax(categoryNo);
    vocaCheckAjax(categoryNo);
  });
}

// 단어 조회 ajax
function vocaCheckAjax(categoryNo) {
  $.ajax({
    url: "mainSelectWordAll",
    type: "POST",
    data: { categoryNo: categoryNo },
    dataType: "JSON",
    success: function (wordList) {
      const contentMain = document.querySelector(".content-main-text");

      if (wordList.categoryNo != 0) {
        contentMain.innerHTML = "";
        for (let i = 0; i < wordList.length; i++) {
          const wordNo = wordList[i].wordNo;

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

          const span = document.createElement("span");
          span.style.display = "none";
          span.innerText = wordNo;

          document.querySelector(".content-main-text").append(div2, div1, span);

          button2.addEventListener("click", function () {
            open();
            wordCheckAjax(wordNo, button2, categoryNo);
          });

          const open = () => {
            document.querySelector(".modal").classList.remove("hidden");
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
      alert("단어조회 오류");
    },
  });
}

// 저장했을때 ajax
let saveButtonClicked = false;
function vocaSaveAjax(categoryNo) {
  vocaSave.addEventListener("click", function () {
    if (saveButtonClicked) {
      return;
    }
    for (let i = 0; i < categoryList.length; i++) {
      categoryList[i].addEventListener("click", function () {
        const categoryNo = this.lastElementChild.innerText.trim();
      });
    }
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
        alert("저장되었습니다");
        addClose();
        vocaCheckAjax(categoryNo);
        saveButtonClicked = true;
      },
      error: function () {
        alert("저장오류발생");
      },
    });
  });
}

// 선택한 단어가 조회되는 ajax
function wordCheckAjax(wordNo, button2, categoryNo) {
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
      vocaModifyBtnAjax(wordNo, button2);
      vocaDeleteDoneAjax(wordNo, categoryNo);
    },
    error: function () {
      console.log("조회실패오류");
    },
  });
}

// 단어 수정

vocaModify.addEventListener("click", function () {
  vocaReadTitle.focus();
  vocaReadTitle.removeAttribute("readonly");
  vocaReadDefinition.removeAttribute("readonly");
  vocaReadMemo.removeAttribute("readonly");
  modifyBtn.style.display = "block";
});

// 단어수정 완료
function vocaModifyBtnAjax(wordNo, button2) {
  modifyBtn.addEventListener("click", function () {
    // const contentMain = document.querySelector(".content-main-text");
    // const wordNo = contentMain.lastElementChild.innerText.trim();

    $.ajax({
      url: "updateWord",
      data: {
        wordNo: wordNo,
        wordTitle: vocaReadTitle.value,
        wordDf: vocaReadDefinition.value,
        wordMemo: vocaMemo.value,
        codeBlock: vocaCodeBlock.value,
      },
      type: "POST",
      dataType: "JSON",
      success: function () {
        vocaReadTitle.setAttribute("readonly", "true");
        vocaReadDefinition.setAttribute("readonly", "true");
        vocaReadMemo.setAttribute("readonly", "true");
        modifyBtn.style.display = "none";

        button2.innerText = vocaReadTitle.value;
        close();
      },
      error: function () {
        console.log("수정실패오류");
      },
    });
  });
}

// 단어 삭제 모달창
const vocaDeleteModal = document.querySelector(".voca-delete-modal");
const vocaDeleteCancell = document.getElementById("voca-delete-cancell");

vocaDelete.addEventListener("click", () => {
  vocaDeleteModal.style.display = "block";
});

vocaDeleteCancell.addEventListener("click", () => {
  vocaDeleteModal.style.display = "none";
});

// 단어 삭제 함수
function vocaDeleteDoneAjax(wordNo, categoryNo) {
  const $wordElement = $(`#word-${wordNo}`);
  vocaDeleteDone.addEventListener("click", () => {
    $.ajax({
      url: "deleteWord",
      data: { wordNo: wordNo },
      dataType: "JSON",
      type: "POST",
      success: function () {
        $wordElement.remove();
        vocaDeleteModal.style.display = "none";
        close();
        vocaCheckAjax(categoryNo);
      },
      error: function () {
        console.log("삭제 실패 오류");
      },
    });
  });
}
