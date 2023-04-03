function changeBtnName()  {
    const btnElement = document.getElementById('btn');
    btnElement.innerText = '완료';
  }

function checkAll() {
  if(!checkName(form.name.value)) {
    return false;
  } else if (!checkemail(form.email.value)) {
    return false;
  } else if (!checkselect(form.select.value)) {
    return false;
  } else if (!checktextarea(form.textarea.value)) {
    return false;
  }
  return true;
}  


// 공백함수 확인
function checkExistData(value, dataName) {
  if(value == '') {
    alert(dataName + ' 입력해주세요.');
    return false;
  }
  return true;
}

function checkemail(email) {
 
  if(!checkExistData(email, '이메일을'))
    return false;

   var emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
   if(!emailRegExp.test(email)) {
    alert('이메일 형식이 올바르지 않습니다.');
    form.email.value = '';
    form.email.focus();
    return false;
   } 
   return true; 
}