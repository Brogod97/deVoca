const memberId = document.getElementById("uid");
const idMessage = document.querySelector("#idMessage");

memberId.addEventListener("input", function () {
  // 입력이 되지 않은 경우
  if (memberId.value.length == 0) {
    idMessage.innerText = "";
    idMessage.classList.remove("confirm", "입력안된 error");

    checkObj.memberId = false;
    return;
  }

  // 입력 된 경우
  const regExp = /^[\w\-\_]{4,}@[\w\-\_]+(\.\w+){1,3}$/;

  if (regExp.test(memberId.value)) {
    // 유효한 경우

    $.ajax({
      url: "idDupCheck",

      data: { uid: memberId.value },
      // 여기서 안되면 MVC 파라미터 uid로 변경해보기

      type: "GET",

      success: function (result) {
        // ajax가 성공한 경우
        console.log(result);

        if (result == 1) {
          // 중복 O
          idMessage.innerText = "사용 가능한 이메일 입니다";
          idMessage.classList.add("error");
          idMessage.classList.remove("confirm");
          checkObj.memberId = false;
        } else {
          // 중복 X
          idMessage.innerText = "존재하지 않는 회원입니다.";
          idMessage.classList.add("confirm");
          idMessage.classList.remove("error");
          checkObj.memberId = true;
        }
      },

      error: function () {
        console.log("에러 발생");
      },
    });
  } else {
    memberId.innerText = "이메일 형식이 유효하지 않습니다.";
    memberId.classList.add("error");
    memberId.classList.remove("confirm");

    checkObj.memberEmail = false;
  }
});
