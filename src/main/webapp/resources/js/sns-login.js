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
function googleLogin() {
	var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
		id = profile.getId();
		username = profile.getName();
		img = profile.getImagUrl();
		
		post_to_url("http://localhost:8080/voca/voca-main",
					{'id' : id, 'username' : username, 'email' : email, 'img' : img})
}

function post_to_url(path, params, method='post') {
	const form = document.createElement('form');
	form.method = method;
	form.action = path;
	
	for(const key in params) {
		if(params.hasOwnProperty(key)) {
			const hiddenField = document.createElement('input');
			hiddenField.type = 'hidden';
			hiddenField.name = key;
			hiddenField.value = params[key];
			form.appendChild(hiddenField);
		}
	}
	
	document.body.appendChild(form);
	form.submit();
}
	
	
