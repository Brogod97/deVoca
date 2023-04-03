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
