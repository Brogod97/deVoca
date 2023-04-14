const checkObj = {
    uid: false,
    sendEmail: false,
};

const uid = document.getElementById("uid");
const idMessage = document.getElementById("idMessage");

uid.addEventListener("input", function () {
    // 입력이 되지 않은 경우
    if (uid.value.length == 0) {
        idMessage.innerText = "회원가입 시 사용한 이메일을 입력해주세요";
        idMessage.classList.remove("confirm", "error");

        checkObj.uid = false;
        return;
    }

    // 입력 된 경우
    const regExp = /^[\w\-\_]{4,}@[\w\-\_]+(\.\w+){1,3}$/;

    if (regExp.test(uid.value)) {
        // 유효한 경우

        $.ajax({
            url: "idDupCheck",

            data: { uid: uid.value },

            type: "GET",

            success: function (result) {
                // ajax가 성공한 경우
                console.log(result);

                if (result == 1) {
                    // 중복 O
                    idMessage.innerText = "사용 가능한 이메일 입니다";
                    idMessage.classList.add("confirm");
                    idMessage.classList.remove("error");
                    checkObj.uid = true;
                } else {
                    // 중복 X
                    idMessage.innerText = "존재하지 않는 회원입니다.";
                    idMessage.classList.add("error");
                    idMessage.classList.remove("confirm");
                    checkObj.uid = false;
                }
            },

            error: function () {
                console.log("에러 발생");
            },
        });
    } else {
        idMessage.innerText = "이메일 형식이 유효하지 않습니다.";
        idMessage.classList.add("error");
        idMessage.classList.remove("confirm");

        checkObj.uid = false;
    }
});

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", function () {
    if (checkObj.uid) {
        // 유효한 이메일이 작성되어 있을 경우에만 메일 보내기

        $.ajax({
            url: "resetPw",
            data: { uid: uid.value },
            type: "GET",
            success: function (result) {
                console.log("이메일 발송 성공");
                console.log(result);

                // 인증 버튼이 클릭되어 정상적으로 메일이 보내졌음을 checkObj에 기록
                if (result == "1") {
                    checkObj.sendEmail = true;
                }
            },
            error: function () {
                console.log("이메일 발송 실패");
            },
        });

        console.log(checkObj.sendEmail);

        if ((checkObj.sendEmail = true)) {
            alert("인증번호가 발송되었습니다. 이메일을 확인해주세요.");
        }
    }
});

function signUpValidate() {
    let str;

    for (let key in checkObj) {
        if (!checkObj[key]) {
            switch (key) {
                case "uid":
                    str = "이메일이 유효하지 않습니다";
                    break;
                case "sendEmail":
                    str = "이메일을 확인해주세요";
                    break;
            }

            alert(str);

            document.getElementById(key).focus();

            return false;
        }
    }
    return true;
}
