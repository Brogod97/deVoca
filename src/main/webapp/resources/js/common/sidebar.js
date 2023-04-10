// const categoryBtn = document.getElementById("category-btn");
// const categoryAdd = document.querySelector(".category-add");
// const categoryEdit = document.querySelector(".category-edit");
// const categoryMenuWrapper = document.getElementById("category-menu-wrapper");
// const categoryMenuOveray = document.getElementById("category-menu-overlay");

// // 카테고리 메뉴 버튼 클릭시 표시 / 닫기
// categoryBtn.addEventListener("click", function () {
//   categoryMenuWrapper.classList.toggle("invisible");
// });

// // 카테고리 메뉴 - 추가 버튼 클릭 시 동작
// categoryAdd.addEventListener("click", function () {
//   const categoryLi = document.createElement("li");
//   const addBtn = document.createElement("button");
//   addBtn.setAttribute("type", "button");

//   categoryLi.classList.add("voca-category-li");

//   const categoryInput = document.createElement("input");
//   categoryInput.setAttribute("name", "categoryTitle");
//   $(function () {
//     categoryInput.focus();
//   });

//   categoryInput.style.border = "none";
//   categoryInput.style.outline = "none";
//   categoryInput.style.backgroundColor = "transparent";

//   // 카테고리 추가시 만들어지는 요소들
//   const categoryBtn = document.createElement("button");
//   categoryBtn.classList.add("invisible");
//   categoryBtn.classList.add("category-delete");
//   categoryBtn.setAttribute("type", "button");
//   const categoryI = document.createElement("i");
//   categoryI.classList.add("ic-close");

//   categoryLi.append(addBtn, categoryBtn);
//   addBtn.append(categoryInput);
//   categoryBtn.append(categoryI);

//   document.querySelector(".category-list > ul").append(categoryLi);

//   closeCategoryMenu();
//   inputEnter(categoryInput, addBtn);
//   inputFocus(categoryInput, addBtn);
//   inputEdit(categoryInput);
//   inputDelete(categoryLi);
// });

// // 카테고리 메뉴 - 편집 버튼 클릭 시 동작
// categoryEdit.addEventListener("click", function () {
//   closeCategoryMenu(); // 카테고리 메뉴 닫기
//   showDeleteBtn(); // X (삭제) 버튼 표시
// });

// // 카테고리 메뉴 외부 영역 클릭 시 닫기
// categoryMenuOveray.addEventListener("click", function () {
//   closeCategoryMenu();
// });

// // 카테고리 메뉴 close 함수
// function closeCategoryMenu() {
//   categoryMenuWrapper.classList.add("invisible");
// }

// // x 표시 보이게 변경하는 함수
// function showDeleteBtn() {
//   const categoryXbtnAll = document.querySelectorAll(".category-list button");

//   for (let i = 0; i < categoryXbtnAll.length; i++) {
//     categoryXbtnAll[i].classList.remove("invisible");
//   }
// }

// // 인풋창에 엔터키를 누르면 내가 입력한 값이 그대로 나옴
// function inputEnter(categoryInput, addBtn) {
//   let enterKeyPressed = false;
//   function handleKeyPress() {
//     categoryInput.addEventListener("keyup", function (event) {
//       if (event.keyCode == "13") {
//         if (enterKeyPressed) {
//           this.setAttribute("readonly", "true");
//           this.style.border = "none";
//           this.style.outline = "none";
//           this.style.backgroundColor = "transparent";
//           this.style.fontSize = "16px";
//           this.style.fontWeight = "700";
//           this.style.cursor = "pointer";
//           addBtn.append = this.value;

//           if (showDeleteBtn) {
//             const btnAll = document.querySelectorAll(".category-delete");
//             btnAll.forEach((btn) => {
//               btn.classList.add("invisible");
//             });
//           }

//           if (this.value == "") {
//             this.parentNode.parentNode.remove();
//           } else {
//             $.ajax({
//               url: "insertCategory",
//               type: "POST",
//               data: {
//                 categoryTitle: categoryInput.value,
//               },
//               dataType: "JSON",
//               success: function (result) {
//                 if (result > 0) {
//                   alert("새 카테고리가 추가되었습니다.");
//                   const categoryList =
//                     document.querySelectorAll(".voca-category-li");

//                   for (let i = 0; i < categoryList.length; i++) {
//                     categoryList[i].addEventListener("click", function () {
//                       const categoryName =
//                         document.getElementById("categoryName");
//                       categoryName.innerText =
//                         this.firstElementChild.firstElementChild.value;

//                       const wordListStyle =
//                         document.querySelector(".word-list");
//                       wordListStyle.style.display = "block";
//                     });
//                   }
//                 } else {
//                   alert("카테고리 추가에 실패하였습니다.");
//                 }
//               },
//               error: function () {
//                 alert("서버 오류가 발생하였습니다.");
//               },
//             });
//           }
//           event.preventDefault();
//         }
//         enterKeyPressed = true;
//       }
//     });
//   }
//   function resetEnterKeyPress() {
//     enterKeyPressed = false;
//   }

//   document.addEventListener("keydown", handleKeyPress);
//   document.addEventListener("keyup", resetEnterKeyPress);
// }

// // 인풋창 focus가 해제 되었을때도 내가 입력한 값이 그대로 나오는 이벤트
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

// // 편집시 카테고리 제목 바꿀수 있게 하는 이벤트
// function inputEdit(categoryInput) {
//   categoryEdit.addEventListener("click", function () {
//     categoryInput.removeAttribute("readonly");
//     categoryInput.focus();
//   });
// }

// // // x 누르면 삭제 하는 이벤트
// // function inputDelete(categoryLi) {
// //   categoryBtn.addEventListener("click", function (event) {
// //     categoryLi.remove();

// //     // 하나를 지우면 다른 것들은 x표시가 사라짐
// //     const btnAll = document.querySelectorAll(".category-delete");
// //     btnAll.forEach((btn) => {
// //       btn.classList.add("invisible");
// //     });

// //     const wordList = document.querySelector(".word-list");
// //     wordList.style.display = "none";

// //     event.stopPropagation();
// //   });
// // }

// const categoryList = document.querySelectorAll(".voca-category-li");

// function inputDelete(categoryLi) {
//   for (let i = 0; i < categoryList.length; i++) {
//     categoryList[i].addEventListener("click", function () {
//       const categoryNo = this.lastElementChild.innerText.trim();

//       document
//         .querySelector(".category-delete")
//         .addEventListener("click", function () {
//           $.ajax({
//             url: "deleteCategory",
//             type: "POST",
//             dataType: "JSON",
//             data: { categoryNo: categoryNo },
//             success: function () {
//               categoryLi.remove();

//               // 하나를 지우면 다른 것들은 x표시가 사라짐
//               const btnAll = document.querySelectorAll(".category-delete");
//               btnAll.forEach((btn) => {
//                 btn.classList.add("invisible");
//               });

//               const wordList = document.querySelector(".word-list");
//               wordList.style.display = "none";

//               event.stopPropagation();
//             },
//             error: function () {
//               console.log("카테고리 삭제 실패 오류");
//             },
//           });
//         });
//     });
//   }
// }
