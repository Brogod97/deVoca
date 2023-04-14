Kakao.init("9d374526a129a5254fe7d0637efad8a0");
console.log(Kakao.isInitialized());

var memberEmail;
var memberNick;
var memberImg;

//카카오로그인
function kakaoLogin() {
    Kakao.Auth.login({
        success: function (response) {
            Kakao.API.request({
                url: "/v2/user/me",
                success: function (response) {
                    //console.log(response)

                    memberEmail = JSON.stringify(response.kakao_account.email);
                    memberNick = JSON.stringify(response.properties.nickname);
                    memberImg = JSON.stringify(
                        response.properties.profile_image
                    );

                    console.log("memberEmail", memberEmail);
                    console.log("memberNick", memberNick);
                    console.log("memberImg", memberImg);

                    process(memberEmail, memberNick, memberImg);

                    //접속된 회원의 토큰값 출력됨
                    //alert(JSON.stringify(authObj));
                },
                fail: function (error) {
                    console.log(error);
                },
            });
        },
    });

    function process(memberEmail, memberNick, memberImg) {
        $.ajax({
            url: "kakaoLogin",
            data: {
                memberEmail: memberEmail,
                memberNick: memberNick,
                memberImg: memberImg,
            },
            type: "post",
            //dataType:"JSON",
            success: function (data) {
                //성공적으로 하고나면 이동할 url

                console.log("data", data);
                console.log("aJax", memberEmail);
                console.log("aJax", memberNick);
                console.log("aJax", memberImg);

                alert("성공");
                location.href = "login";
            },

            error: function (error, status) {
                console.log(error, status);
            },
        });
    }
}

// ======================================================================

function kakaoSignUp() {
    Kakao.Auth.login({
        success: function (response) {
            Kakao.API.request({
                url: "/v2/user/me",
                success: function (response) {
                    //console.log(response)

                    memberEmail = JSON.stringify(response.kakao_account.email);
                    memberNick = JSON.stringify(response.properties.nickname);
                    memberImg = JSON.stringify(
                        response.properties.profile_image
                    );

                    console.log("memberEmail", memberEmail);
                    console.log("memberNick", memberNick);
                    console.log("memberImg", memberImg);

                    process(memberEmail, memberNick, memberImg);

                    //접속된 회원의 토큰값 출력됨
                    //alert(JSON.stringify(authObj));
                },
                fail: function (error) {
                    console.log(error);
                },
            });
        },
    });

    function process(memberEmail, memberNick, memberImg) {
        $.ajax({
            url: "kakaoSignUp",
            data: {
                memberEmail: memberEmail,
                memberNick: memberNick,
                memberImg: memberImg,
            },
            type: "post",
            //dataType:"JSON",
            success: function (data) {
                //성공적으로 하고나면 이동할 url

                console.log("data", data);
                console.log("aJax", memberEmail);
                console.log("aJax", memberNick);
                console.log("aJax", memberImg);

                alert("성공");
                location.href = "login";
            },

            error: function (error, status) {
                console.log(error, status);
            },
        });
    }
}
