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
  categoryCloseBtn.append(categoryI);

  document.querySelector(".category-list > ul").append(categoryLi);

  closeCategoryMenu();

  inputEnter(categoryInput);
});

// 카테고리 메뉴 - 편집 버튼 클릭 시 동작
categoryEdit.addEventListener("click", function () {
  closeCategoryMenu(); // 카테고리 메뉴 닫기
  showDeleteBtn(); // X (삭제) 버튼 표시
  inputDelete();

  // 외부영역 클릭시 엑스버튼 사라짐
  document.addEventListener("mouseup", function (e) {
    const xBtn = document.querySelectorAll(".category-list button");

    for (let i = 0; i < xBtn.length; i++) {
      if (!xBtn[i].contains(e.target)) {
        xBtn[i].classList.add("invisible");
      }
    }
  });
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
  // 인풋 요소에 이벤트 핸들러를 등록합니다.
  categoryInput.addEventListener("keydown", function (event) {
    // 이벤트가 키다운이고, 눌린 키 코드가 13(엔터키)일 때 실행됩니다.
    if (event.keyCode == "13") {
      // 입력 요소를 읽기 전용으로 설정하여 수정할 수 없도록 합니다.
      this.setAttribute("readonly", "true");
      // 입력 요소의 외곽선과 배경을 없애고, 글자 크기와 두께를 설정합니다.
      this.style.border = "none";
      this.style.outline = "none";
      this.style.backgroundColor = "transparent";
      this.style.fontSize = "16px";
      this.style.fontWeight = "700";
      this.style.cursor = "pointer";
      // 입력 요소의 포커스를 해제합니다.
      this.blur();

      // 삭제 버튼이 보이는 상태라면 모든 삭제 버튼을 숨깁니다.
      if (showDeleteBtn) {
        const btnAll = document.querySelectorAll(".category-delete");
        btnAll.forEach((btn) => {
          btn.classList.add("invisible");
        });
      }

      // 입력 값이 비어있다면, 해당 항목을 삭제합니다.
      if (this.value == "") {
        this.parentNode.remove();
      } else {
        // 입력한 값을 서버로 전송하여 새로운 카테고리를 추가합니다.
        $.ajax({
          url: "insertCategory",
          type: "POST",
          data: {
            categoryTitle: categoryInput.value,
          },
          dataType: "JSON",
          success: function (result) {
            // 카테고리 추가에 성공하면 알림을 띄운다.
            if (result > 0) {
              swal.fire({
                title: "완료",
                text: "새카테고리가 추가되었습니다!",
                icon: "success",
                confirmButtonText: "확인",
              });

              window.location.reload();
              // 카테고리 목록에서 각 항목을 클릭할 때마다
              // 해당 항목의 이름을 표시하고, 단어 목록을 보여줍니다.
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
              // 카테고리 추가에 실패하면 알림을 띄웁니다.
              swal.fire({
                title: "실패",
                text: "카테고리 추가에 실패하였습니다!",
                icon: "error",
                confirmButtonText: "확인",
              });
            }
          },
          error: function () {
            // 서버 오류가 발생하면 알림을 띄웁니다.
            swal.fire({
              title: "실패",
              text: "서버 오류가 발생하였습니다.!",
              icon: "error",
              confirmButtonText: "확인",
            });
          },
        });

        event.preventDefault();
      }
    }
  });
  categoryInput.addEventListener("blur", function () {
    // 다른 곳을 클릭했을 때의 이벤트 핸들러 코드
    if (this.value === "") {
      this.parentNode.remove();
    }
  });
}

const categoryList = document.querySelectorAll(".voca-category-li");
const categoryDeleteBtn = document.querySelectorAll(".category-delete");

// 카테고리 삭제 구현 함수
function inputDelete() {
  function handleDeleteButtonClick(event) {
    event.stopPropagation();

    const categoryNo = this.nextElementSibling.innerText.trim();
    console.log(categoryNo);

    $.ajax({
      url: "deleteCategory",
      type: "POST",
      dataType: "JSON",
      data: { categoryNo: categoryNo },
      success: function () {
        const listItem = event.target.closest(".voca-category-li");
        listItem.remove();

        // 다음 카테고리의 단어 목록 초기화
        const nextCategory = listItem.nextElementSibling;
        if (nextCategory) {
          nextCategory.querySelector(".word-list").innerHTML = "";
        }

        // 하나를 지우면 다른 것들은 x표시가 사라짐
        const btnAll = document.querySelectorAll(".category-delete");
        btnAll.forEach((btn) => {
          btn.classList.add("invisible");
        });

        const wordList = document.querySelector(".word-list");
        wordList.style.display = "none";
      },
      error: function () {
        console.log("카테고리 삭제 실패 오류");
      },
    });
  }

  categoryList.forEach((category) => {
    category.addEventListener("click", (event) => {
      if (event.target.closest(".category-delete")) {
        handleDeleteButtonClick.call(
          event.target.closest(".category-delete"),
          event
        );
      } else {
        const wordList = category.querySelector(".word-list");
        const isVisible = wordList.style.display === "block";

        categoryList.forEach((category) => {
          category.querySelector(".word-list").style.display = "none";
        });

        if (!isVisible) {
          wordList.style.display = "block";
        }
      }
    });
  });
}

// -----------------------------------------------------------------------------

// 추가 모달창
const addOpen = () => {
  document.querySelector(".addModal").classList.remove("hidden");
  vocaSave.style.display = "block";
  modifyBtn.style.display = "none";
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
  let textarea = document.getElementById("voca-code-block");

  // 다음줄부터 커서 깜빡임
  textarea.addEventListener("focus", function () {
    textarea.value = "\n"; // 텍스트 영역에 새로운 줄을 추가합니다.
    textarea.setSelectionRange(1, 1); // 커서 위치를 다음 줄의 첫 번째 문자로 이동합니다.
  });

  // 탭키 가능
  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault(); // 기본 동작을 취소합니다.
      let start = this.selectionStart;
      let end = this.selectionEnd;
      this.value =
        this.value.substring(0, start) + "\t" + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 1; // 커서 위치를 이동합니다.
    }
  });
});
document.querySelector(".addBg").addEventListener("click", addClose);

// 메뉴 모달창
const menuOpen = () => {
  document.querySelector(".voca-menu-modal").classList.remove("invisible");
};

const menuClose = () => {
  document.querySelector(".voca-menu-modal").classList.add("invisible");
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

const readCode = document.getElementById("read-code");

// ---------- 코드블럭 구간 -----------------

const codeInput = document.getElementById("voca-code-block");
const codeOutput = document.getElementById("read-code");

// ---------코드블럭-------
function changeLanguage() {
  const language = document.getElementById("voca-code-select").value;
  readCode.className = "language-" + language;
}

//카테고리를 눌렀을때
let categoryNo;

for (let i = 0; i < categoryList.length; i++) {
  categoryList[i].addEventListener("click", function () {
    categoryNo = this.lastElementChild.innerText.trim();
    const categoryName = document.getElementById("categoryName");
    categoryName.innerText = this.firstElementChild.value;

    const wordListStyle = document.querySelector(".word-list");
    wordListStyle.style.display = "block";

    vocaCheckAjax(categoryNo);
  });
}

// 저장했을때 ajax

vocaSave.addEventListener("click", function () {
  let highlighted = $("#voca-code-block").val();
  highlighted = hljs.highlightAuto(highlighted).value;

  if (vocaInput.value == "") {
    swal.fire({
      title: "중요",
      text: "메소드명을 입력해주세요!",
      icon: "warning",
      confirmButtonText: "확인",
    });
  } else if (vocadefinition.value == "") {
    swal.fire({
      title: "중요",
      text: "메모를 입력해주세요!",
      icon: "warning",
      confirmButtonText: "확인",
    });
  } else {
    $.ajax({
      url: "insertWord",
      type: "POST",
      data: {
        categoryNo: categoryNo,
        wordTitle: vocaInput.value,
        wordDf: vocadefinition.value,
        wordMemo: vocaMemo.value,
        codeBlock: highlighted,
      },
      dataType: "JSON",

      success: function () {
        // swal({
        //   title: "저장",
        //   text: "완료되었습니다!",
        //   icon: "success",
        //   button: "확인",
        // });

        const Toast = Swal.mixin({
          toast: true,
          position: "center-center",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "저장되었습니다",
        });

        addClose();
        vocaCheckAjax(categoryNo);
        // vocaSave.style.display = "none";
        codeOutput.textContent = codeInput.value;
      },
      error: function () {
        swal.fire({
          title: "중요",
          text: "메소드명을 입력해주세요!",
          icon: "warning",
          confirmButtonText: "확인",
        });
      },
    });
  }
});

// 단어 조회 ajax
function vocaCheckAjax(categoryNo) {
  $.ajax({
    url: "mainSelectWordAll",
    type: "POST",
    data: { categoryNo: categoryNo },
    dataType: "JSON",
    success: function (wordList) {
      const contentMain = document.querySelector(".content-main-text");

      console.log("wordList:::", wordList);

      contentMain.innerHTML = "";
      if (wordList.categoryNo != 0) {
        for (let i = 0; i < wordList.length; i++) {
          const wordNo = wordList[i].wordNo;
          const favoriteFlag = wordList[i].favorite;
          const checkedFlag = wordList[i].checked;

          const div1 = document.createElement("div");
          div1.classList.add("content-main-add-line");

          const div2 = document.createElement("div");
          div2.classList.add("content-main-text-flex");
          const div3 = document.createElement("div");

          const button1 = document.createElement("button");
          const img1 = document.createElement("i");
          const button2 = document.createElement("button");
          button2.classList.add("openBtn");

          if (checkedFlag == "Y") {
            img1.classList.add("ic-check-cc");
            img1.style.color = "var(--gray200)";
            button2.style.textDecoration = "line-through";
            button2.style.color = "var(--gray200)";
          } else {
            img1.classList.add("ic-check-cc");
            img1.style.color = "var(--dark)";
            button2.style.textDecoration = "none";
            button2.style.color = "var(--dark)";
          }

          const div4 = document.createElement("div");
          const button3 = document.createElement("button");
          const img2 = document.createElement("img");

          if (favoriteFlag == "Y") {
            img2.setAttribute(
              "src",
              contextPath + "/resources/assets/icon/star-active.svg"
            );
          } else {
            img2.setAttribute(
              "src",
              contextPath + "/resources/assets/icon/star.svg"
            );
          }

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

          button2.addEventListener("click", function (e) {
            open(e);
            wordCheckAjax(wordNo, button2, categoryNo);
          });

          const open = (e) => {
            console.log("모달 전달 wordNo:::", wordNo);
            document.querySelector(".modal").classList.remove("hidden");
            document.querySelector(".modal").setAttribute("id", wordNo);
          };

          document.querySelector(".openBtn").addEventListener("click", open);

          let flag = true;
          let favorite = "N";

          button3.addEventListener("click", function () {
            if (flag) {
              favorite = "Y";

              flag = false;
              wordFavoriteUpdate(favorite, wordNo, img2);
            } else {
              favorite = "N";
              flag = true;
              wordFavoriteUpdate(favorite, wordNo, img2);
            }
          });

          button4.addEventListener("click", function () {
            open();
            wordCheckAjax(wordNo, button2, categoryNo);
          });

          // v 버튼 눌렀을때 초록색으로 변하고 옆에 글자 선 그어짐
          let checked = "N";
          button1.addEventListener("click", function () {
            if (flag) {
              checked = "Y";
              flag = false;
              wordCheckedUpdate(checked, img1, button2, wordNo);
            } else {
              checked = "N";
              flag = true;
              wordCheckedUpdate(checked, img1, button2, wordNo);
            }
          });

          addClose();
        }
      } else {
        swal.fire({
          title: "조회 실패",
          text: "단어가 없습니다!",
          icon: "error",
          confirmButtonText: "확인",
        });
      }
    },

    error: function () {
      console.log("단어조회 오류");
    },
  });
}

// 전체보기 정렬
const allMenu = document.querySelector(".all-menu");
allMenu.addEventListener("click", function () {
  vocaCheckAjax(categoryNo);
  menuClose();
});

// 즐겨찾기 정렬
const favoriteMenu = document.querySelector(".favorite-menu");
favoriteMenu.addEventListener("click", function () {
  $.ajax({
    url: "favoriteSort",
    data: { categoryNo: categoryNo },
    type: "GET",
    dataType: "JSON",
    success: function (wordList) {
      menuClose();
      let hasFavorites = false; // 즐겨찾기한 단어가 있는지 확인하기 위한 변수

      for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].favorite == "Y") {
          hasFavorites = true; // 즐겨찾기한 단어가 있음을 표시

          $.ajax({
            url: "mainSelectWordAll",
            type: "POST",
            data: { categoryNo: categoryNo },
            dataType: "JSON",
            success: function (wordList) {
              const contentMain = document.querySelector(".content-main-text");
              contentMain.innerHTML = "";
              if (wordList.categoryNo != 0) {
                for (let i = 0; i < wordList.length; i++) {
                  const wordNo = wordList[i].wordNo;
                  const favoriteFlag = wordList[i].favorite;
                  const checkedFlag = wordList[i].checked;

                  if (favoriteFlag == "Y") {
                    const div1 = document.createElement("div");
                    div1.classList.add("content-main-add-line");

                    const div2 = document.createElement("div");
                    div2.classList.add("content-main-text-flex");
                    const div3 = document.createElement("div");

                    const button1 = document.createElement("button");
                    const img1 = document.createElement("i");
                    const button2 = document.createElement("button");
                    button2.classList.add("openBtn");

                    if (checkedFlag == "Y") {
                      img1.classList.add("ic-check-cc");
                      img1.style.color = "var(--gray200)";
                      button2.style.textDecoration = "line-through";
                      button2.style.color = "var(--gray200)";
                    } else {
                      img1.classList.add("ic-check-cc");
                      img1.style.color = "var(--dark)";
                      button2.style.textDecoration = "none";
                      button2.style.color = "var(--dark)";
                    }

                    const div4 = document.createElement("div");
                    const button3 = document.createElement("button");
                    const img2 = document.createElement("img");

                    if (favoriteFlag == "Y") {
                      img2.setAttribute(
                        "src",
                        contextPath + "/resources/assets/icon/star-active.svg"
                      );
                    } else {
                      img2.setAttribute(
                        "src",
                        contextPath + "/resources/assets/icon/star.svg"
                      );
                    }

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

                    document
                      .querySelector(".content-main-text")
                      .append(div2, div1, span);

                    button2.addEventListener("click", function () {
                      open();
                      wordCheckAjax(wordNo, button2, categoryNo);
                    });

                    const open = () => {
                      document
                        .querySelector(".modal")
                        .classList.remove("hidden");
                    };

                    document
                      .querySelector(".openBtn")
                      .addEventListener("click", open);

                    let flag = true;
                    let favorite = "N";

                    button3.addEventListener("click", function () {
                      if (flag) {
                        favorite = "Y";

                        flag = false;
                        wordFavoriteUpdate(favorite, wordNo, img2);
                      } else {
                        favorite = "N";
                        flag = true;
                        wordFavoriteUpdate(favorite, wordNo, img2);
                      }
                    });

                    button4.addEventListener("click", function () {
                      open();
                      wordCheckAjax(wordNo, button2, categoryNo);
                    });

                    // v 버튼 눌렀을때 초록색으로 변하고 옆에 글자 선 그어짐
                    let checked = "N";
                    button1.addEventListener("click", function () {
                      if (flag) {
                        checked = "Y";
                        flag = false;
                        wordCheckedUpdate(checked, img1, button2, wordNo);
                      } else {
                        checked = "N";
                        flag = true;
                        wordCheckedUpdate(checked, img1, button2, wordNo);
                      }
                    });

                    addClose();
                    // ---------코드블럭-------
                    codeOutput.textContent = codeInput.value;
                    hljs.highlightBlock(codeOutput);
                  }
                }
              } else {
                swal.fire({
                  title: "조회 실패",
                  text: "단어가 없습니다!",
                  icon: "error",
                  confirmButtonText: "확인",
                });
              }
            },

            error: function () {
              console.log("즐겨찾기 단어조회 오류");
            },
          });
        }
      }
      if (!hasFavorites) {
        swal.fire({
          title: "조회 실패",
          text: "즐겨찾기한 단어가 없습니다!",
          icon: "warning",
          confirmButtonText: "확인",
        });
        vocaCheckAjax(categoryNo);
      }
    },
    error: function () {
      console.log("즐겨찾기 오류");
    },
  });
});

// 체크된 단어 정렬
const checkMenu = document.querySelector(".check-menu");
checkMenu.addEventListener("click", function () {
  $.ajax({
    url: "checkedSort",
    data: { categoryNo: categoryNo },
    type: "GET",
    dataType: "JSON",
    success: function (wordList) {
      menuClose();
      let haschecked = false; // 체크한 단어가 있는지 확인하기 위한 변수

      for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].checked == "Y") {
          haschecked = true; // 체크한 단어가 있음을 표시

          $.ajax({
            url: "mainSelectWordAll",
            type: "POST",
            data: { categoryNo: categoryNo },
            dataType: "JSON",
            success: function (wordList) {
              const contentMain = document.querySelector(".content-main-text");

              contentMain.innerHTML = "";
              if (wordList.categoryNo != 0) {
                for (let i = 0; i < wordList.length; i++) {
                  const wordNo = wordList[i].wordNo;
                  const favoriteFlag = wordList[i].favorite;
                  const checkedFlag = wordList[i].checked;

                  if (checkedFlag == "Y") {
                    const div1 = document.createElement("div");
                    div1.classList.add("content-main-add-line");

                    const div2 = document.createElement("div");
                    div2.classList.add("content-main-text-flex");
                    const div3 = document.createElement("div");

                    const button1 = document.createElement("button");
                    const img1 = document.createElement("i");
                    const button2 = document.createElement("button");
                    button2.classList.add("openBtn");

                    if (checkedFlag == "Y") {
                      img1.classList.add("ic-check-cc");
                      img1.style.color = "var(--gray200)";
                      button2.style.textDecoration = "line-through";
                      button2.style.color = "var(--gray200)";
                    } else {
                      img1.classList.add("ic-check-cc");
                      img1.style.color = "var(--dark)";
                      button2.style.textDecoration = "none";
                      button2.style.color = "var(--dark)";
                    }

                    const div4 = document.createElement("div");
                    const button3 = document.createElement("button");
                    const img2 = document.createElement("img");

                    if (favoriteFlag == "Y") {
                      img2.setAttribute(
                        "src",
                        contextPath + "/resources/assets/icon/star-active.svg"
                      );
                    } else {
                      img2.setAttribute(
                        "src",
                        contextPath + "/resources/assets/icon/star.svg"
                      );
                    }

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

                    document
                      .querySelector(".content-main-text")
                      .append(div2, div1, span);

                    button2.addEventListener("click", function () {
                      open();
                      wordCheckAjax(wordNo, button2, categoryNo);
                    });

                    const open = () => {
                      document
                        .querySelector(".modal")
                        .classList.remove("hidden");
                    };

                    document
                      .querySelector(".openBtn")
                      .addEventListener("click", open);

                    let flag = true;
                    let favorite = "N";

                    button3.addEventListener("click", function () {
                      if (flag) {
                        favorite = "Y";

                        flag = false;
                        wordFavoriteUpdate(favorite, wordNo, img2);
                      } else {
                        favorite = "N";
                        flag = true;
                        wordFavoriteUpdate(favorite, wordNo, img2);
                      }
                    });

                    button4.addEventListener("click", function () {
                      open();
                      wordCheckAjax(wordNo, button2, categoryNo);
                    });

                    // v 버튼 눌렀을때 초록색으로 변하고 옆에 글자 선 그어짐
                    let checked = "N";
                    button1.addEventListener("click", function () {
                      if (flag) {
                        checked = "Y";
                        flag = false;
                        wordCheckedUpdate(checked, img1, button2, wordNo);
                      } else {
                        checked = "N";
                        flag = true;
                        wordCheckedUpdate(checked, img1, button2, wordNo);
                      }
                    });

                    addClose();
                    // ---------코드블럭-------
                    codeOutput.textContent = codeInput.value;
                    hljs.highlightBlock(codeOutput);
                  }
                }
              }
            },

            error: function () {
              console.log("체크 단어조회 오류");
            },
          });
        }
      }
      if (!haschecked) {
        swal.fire({
          title: "조회 실패",
          text: "체크한 단어가 없습니다!",
          icon: "warning",
          confirmButtonText: "확인",
        });
        vocaCheckAjax(categoryNo);
      }
    },
    error: function () {
      console.log("체크오류");
    },
  });
});

// 미체크된 단어 정렬
const unCheckMenu = document.querySelector(".unCheck-menu");
unCheckMenu.addEventListener("click", function () {
  $.ajax({
    url: "uncheckedSort",
    data: { categoryNo: categoryNo },
    type: "GET",
    dataType: "JSON",
    success: function (wordList) {
      menuClose();
      let unchecked = false; // 미체크한 단어가 있는지 확인하기 위한 변수

      for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].checked == "N") {
          unchecked = true; // 미체크한 단어가 있음을 표시

          $.ajax({
            url: "mainSelectWordAll",
            type: "POST",
            data: { categoryNo: categoryNo },
            dataType: "JSON",
            success: function (wordList) {
              const contentMain = document.querySelector(".content-main-text");

              contentMain.innerHTML = "";
              if (wordList.categoryNo != 0) {
                for (let i = 0; i < wordList.length; i++) {
                  const wordNo = wordList[i].wordNo;
                  const favoriteFlag = wordList[i].favorite;
                  const checkedFlag = wordList[i].checked;

                  if (checkedFlag == "N") {
                    const div1 = document.createElement("div");
                    div1.classList.add("content-main-add-line");

                    const div2 = document.createElement("div");
                    div2.classList.add("content-main-text-flex");
                    const div3 = document.createElement("div");

                    const button1 = document.createElement("button");
                    const img1 = document.createElement("i");
                    const button2 = document.createElement("button");
                    button2.classList.add("openBtn");

                    if (checkedFlag == "Y") {
                      img1.classList.add("ic-check-cc");
                      img1.style.color = "var(--gray200)";
                      button2.style.textDecoration = "line-through";
                      button2.style.color = "var(--gray200)";
                    } else {
                      img1.classList.add("ic-check-cc");
                      img1.style.color = "var(--dark)";
                      button2.style.textDecoration = "none";
                      button2.style.color = "var(--dark)";
                    }

                    const div4 = document.createElement("div");
                    const button3 = document.createElement("button");
                    const img2 = document.createElement("img");

                    if (favoriteFlag == "Y") {
                      img2.setAttribute(
                        "src",
                        contextPath + "/resources/assets/icon/star-active.svg"
                      );
                    } else {
                      img2.setAttribute(
                        "src",
                        contextPath + "/resources/assets/icon/star.svg"
                      );
                    }

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

                    document
                      .querySelector(".content-main-text")
                      .append(div2, div1, span);

                    button2.addEventListener("click", function () {
                      open();
                      wordCheckAjax(wordNo, button2, categoryNo);
                    });

                    const open = () => {
                      document
                        .querySelector(".modal")
                        .classList.remove("hidden");
                    };

                    document
                      .querySelector(".openBtn")
                      .addEventListener("click", open);

                    let flag = true;
                    let favorite = "N";

                    button3.addEventListener("click", function () {
                      if (flag) {
                        favorite = "Y";

                        flag = false;
                        wordFavoriteUpdate(favorite, wordNo, img2);
                      } else {
                        favorite = "N";
                        flag = true;
                        wordFavoriteUpdate(favorite, wordNo, img2);
                      }
                    });

                    button4.addEventListener("click", function () {
                      open();
                      wordCheckAjax(wordNo, button2, categoryNo);
                    });

                    // v 버튼 눌렀을때 초록색으로 변하고 옆에 글자 선 그어짐
                    let checked = "N";
                    button1.addEventListener("click", function () {
                      if (flag) {
                        checked = "Y";
                        flag = false;
                        wordCheckedUpdate(checked, img1, button2, wordNo);
                      } else {
                        checked = "N";
                        flag = true;
                        wordCheckedUpdate(checked, img1, button2, wordNo);
                      }
                    });

                    addClose();
                    // ---------코드블럭-------
                    codeOutput.textContent = codeInput.value;
                    hljs.highlightBlock(codeOutput);
                  }
                }
              }
            },

            error: function () {
              console.log("미체크 단어조회 오류");
            },
          });
        }
      }
      if (!unchecked) {
        swal.fire({
          title: "조회 실패",
          text: "미체크된 단어가 없습니다!",
          icon: "warning",
          confirmButtonText: "확인",
        });
        vocaCheckAjax(categoryNo);
      }
    },
    error: function () {
      console.log("미체크 오류");
    },
  });
});

// 즐겨찾기 ajax
function wordFavoriteUpdate(favorite, wordNo, img2) {
  $.ajax({
    url: "updateFavoriteWord",
    type: "POST",
    data: { wordNo: wordNo, favorite: favorite },
    dataType: "JSON",
    success: function () {
      if (favorite == "Y") {
        img2.setAttribute(
          "src",
          contextPath + "/resources/assets/icon/star-active.svg"
        );
      } else {
        img2.setAttribute(
          "src",
          contextPath + "/resources/assets/icon/star.svg"
        );
      }
    },
    error: function () {
      alert("단어조회 오류");
    },
  });
}

// 체크 ajax
function wordCheckedUpdate(checked, img1, button2, wordNo) {
  $.ajax({
    url: "updateCheckedWord",
    type: "POST",
    data: { wordNo: wordNo, checked: checked },
    dataType: "JSON",
    success: function () {
      if (checked == "Y") {
        img1.style.color = "var(--gray200)";
        button2.style.textDecoration = "line-through";
        button2.style.color = "var(--gray200)";
      } else {
        img1.style.color = "var(--dark)";
        button2.style.textDecoration = "none";
        button2.style.color = "var(--dark)";
      }
    },
    error: function () {
      console.log("단어조회 오류");
    },
  });
}

const vocaCodeBlockArea = document.querySelector(".voca-code-block-area");

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

      if (word.wordMemo == "undefined") {
        word.wordMemo = "";
        vocaReadMemo.value = word.wordMemo;
      } else {
        vocaReadMemo.value = word.wordMemo;
      }

      if (word.codeBlock == "undefined") {
        word.codeBlock = "";

        readCode.innerHTML = word.codeBlock;
      } else {
        readCode.innerHTML = word.codeBlock;
      }

      const codeBlockText = word.codeBlock;
      const pre = document.createElement("pre");
      pre.innerHTML = "<code>" + codeBlockText + "</code>";

      // 줄바꿈 문자를 <br> 태그로 대체하여 pre 요소에 추가
      const codeBlockHtml = pre.innerHTML;
      const codeBlockHtmlWithLineBreak = codeBlockHtml.replace(/\n/g, "<br>");
      pre.innerHTML = codeBlockHtmlWithLineBreak;

      // highlight.js 적용
      hljs.highlightBlock(pre);

      vocaModifyBtnAjax(wordNo, button2);
      vocaDeleteDoneAjax(wordNo, categoryNo);
    },
    error: function () {
      console.log("조회실패오류");
    },
  });
}

// 수정 버튼 클릭 시
vocaModify.addEventListener("click", function () {
  vocaInput.value = vocaReadTitle.value;
  vocadefinition.value = vocaReadDefinition.value;
  vocaMemo.value = vocaReadMemo.value;
  vocaCodeBlock.value = readCode.innerText;
  addOpen();
  close();
  vocaSave.style.display = "none";
  modifyBtn.style.display = "block";
});

// 수정완료버튼 클릭시
function vocaModifyBtnAjax(wordNo, button2) {
  console.log("button2:: ", button2.innerText);

  console.log("wordNo:: ", wordNo);

  modifyBtn.addEventListener("click", function () {
    let highlighted = $("#voca-code-block").val();
    highlighted = hljs.highlightAuto(highlighted).value;

    console.log("vocaInput.value:: ", vocaInput.value);
    console.log("vocaReadTitle:: ", vocaReadTitle);

    if (button2.innerText == "") {
      swal.fire({
        title: "중요",
        text: "메소드명을 입력해주세요!",
        icon: "warning",
        confirmButtonText: "확인",
      });
    } else if (vocadefinition.value == "") {
      swal.fire({
        title: "중요",
        text: "메모를 입력해주세요!",
        icon: "warning",
        confirmButtonText: "확인",
      });
    } else {
      $.ajax({
        url: "updateWord",
        data: {
          wordNo: wordNo,
          wordTitle: vocaInput.value,
          wordDf: vocadefinition.value,
          wordMemo: vocaMemo.value,
          codeBlock: highlighted,
        },
        type: "POST",
        dataType: "JSON",
        success: function () {
          modifyBtn.style.display = "none";

          button2.innerText = vocaInput.value;
          addClose();
          vocaCheckAjax(categoryNo);
          codeOutput.textContent = codeInput.value;
        },
        error: function () {
          console.log("수정실패오류");
        },
      });
    }
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
        const Toast = Swal.mixin({
          toast: true,
          position: "center-center",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "삭제되었습니다",
        });
      },
      error: function () {
        console.log("삭제 실패 오류");
      },
    });
  });
}
