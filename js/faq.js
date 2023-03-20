const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('on');
    
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('on');
      }
    });
  });
});



$(".rotate").click(function () {
  $(this).toggleClass("down");
})