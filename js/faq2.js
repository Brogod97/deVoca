$(".faq-question").on("click", function () {
  if ($(this).next("p").css("display") == "none") {
    $(".faq-menu")
      .siblings()
      .children("p.faq-answer")
      .slideUp(function () {
        $(this)
          .siblings(".faq-question")
          .find(".faq-arrow-up")
          .removeClass("faq-arrow-up")
          .css("transform", "rotate(0deg)");
        $(this)
          .children(".faq-question")
          .children(".faq-arrow-down")
          .css("transform", "rotate(-180deg)");
      });

    $(".faq-question.selected").removeClass("selected");

    $(this).find(".faq-arrow-down").toggleClass("faq-arrow-up");
    $(this).find(".faq-arrow-up").css("transform", "rotate(-180deg)");

    $(this).next().slideDown();
    $(this).addClass("selected");
  } else {
    $(this).find(".faq-arrow-up").css("transform", "rotate(0deg)");
    $(this).next().slideUp();
    $(this).removeClass("selected");
    $(this).find(".faq-arrow-down").toggleClass("faq-arrow-up");
  }
});
