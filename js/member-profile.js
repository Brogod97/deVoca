// 모달창 띄우기
const withdrawalBtn = document.querySelector("#withdrawal-btn");
const modalWindow = document.querySelector(".modal-window");
withdrawalBtn.addEventListener("click", () => {
  modalWindow.style.display = "flex";
});

// 모달창 끄기
const cancleBtn = document.querySelector("#cancle-btn");
cancleBtn.addEventListener("click", () => {
  modalWindow.style.display = "none";
});
