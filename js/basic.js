// 메뉴 모달창
const modal = {
  open: function () {
    $("#modal-wrapper").show();
  },
  close: function () {
    $("#modal-wrapper").hide();
  },
};
$(document)
  .on("click", "#modal-overlay", function () {
    window.history.back();
  })
  .on("click", ".menu-openBtn", function () {
    window.history.pushState({}, "modal", "/modal");
    modal.open();
  });

window.onpopstate = history.onpushstate = function (e) {
  if (window.location.href.split("/").pop().indexOf("modal") === -1) {
    // 마지막 segment가 cards라면 모달이 아닌 리스트인 상태이어야한다.
    modal.close(); // 현재의 모달을 닫는다.
  }
};
