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

//카카오로그아웃  
function kakaoLogout() {
	if (Kakao.Auth.getAccessToken()) {
	  Kakao.API.request({
	    url: '/v1/user/unlink',
	    success: function (response) {
	    	console.log(response)
	    },
	    fail: function (error) {
	      console.log(error)
	    },
	  })
	  Kakao.Auth.setAccessToken(undefined)
	}
}  
 

// 구글 로그인
	
	
	

        function handleCredentialResponse(response) {
        	const responsePayload = parseJwt(response.credential);
        	console.log("ID: " + responsePayload.sub);
            console.log('Full Name: ' + responsePayload.name);
            console.log('Given Name: ' + responsePayload.given_name);
            console.log('Family Name: ' + responsePayload.family_name);
            console.log("Image URL: " + responsePayload.picture);
            console.log("Email: " + responsePayload.email);
        }
        function parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        };
        
        export const GoogleInitialize = (clientId,google,callback)=>{
		google.accounts.id.initialize({
			client_id: clientId,
			callback:callback,
			context: 'default',
		})
	}
	
        window.onload = function () {
          google.accounts.id.initialize({
            client_id: "1002101588145-kha6vmfi1npbilafojfe5g7hlmscgej5.apps.googleusercontent.com",
            callback: "http://deVoca/voca/voca-main"
          });
          google.accounts.id.renderButton(
            document.getElementById("google"),
            {  }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
        }