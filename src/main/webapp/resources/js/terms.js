
 


function checkSelectAll() {
 // 전체 체크박스
  const checkboxes = document.querySelectorAll('input[name="checkbox"]');

  // 선택된 체크박스
  const checked = document.querySelectorAll('input[name="checkbox"]:checked');

  // select all 체크박스
  const selectAll = document.querySelector('input[name="select-all"]');

  if (checkboxes.length === checked.length) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
}

function selectAll(selectAll) {
  const checkboxes = document.getElementsByName("checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}


// 모두 동의해야 다음이로 이동
function signUp() {
	
	 const selectAll = document.querySelector('input[name="select-all"]');
	
	if(selectAll.checked){
	
	window.location.href = contextPath + "/member/signUp";
	
	} else {
		
		alert("모두 동의해주세요");
	}
	
}