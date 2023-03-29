//버튼 색 변하게 하기
function change_btn(e) {
    var btns = document.querySelectorAll(".button");
    btns.forEach(function (btn, i) {
      if (e.currentTarget == btn) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    console.log(e.currentTarget);
  }




	$(document).ready(function(){

		$('#btn1').click(function(){

			var offset = $('#page1').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	        $('html').animate({scrollTop : offset.top}, 400);

		});

	});



	$(document).ready(function(){

		$('#btn2').click(function(){

			var offset = $('#page2').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	        $('html').animate({scrollTop : offset.top}, 400);

		});

	});
