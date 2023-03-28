window.Kakao.init("9d374526a129a5254fe7d0637efad8a0");

// 카카오 로그인
function kakaoLogin() {
  window.Kakao.Auth.login({
    scope: "profile_nickname, account_email",
    success: function (sesponse) {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (response) {
          console.log(response);
        },
        fail: function (error) {
          console.log(error);
        },
      });
    },
    fail: function (error) {
      console.log(error);
    },
  });
}
