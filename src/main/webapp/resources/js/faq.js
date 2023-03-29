function FaqBox__init() {
  $('.faq-box > ul > li').click(function() {
    let $this = $(this);
    
    $this.siblings('.hover').find(' > .faq-box__answer').stop().slideUp(300); 
    $this.siblings('.hover').removeClass('hover');
    
    if ( $this.hasClass('hover') ) {
      $this.find(' > .faq-box__answer').stop().slideUp(300); 
      $this.removeClass('hover');
    }
    else {
      $this.find(' > .faq-box__answer').stop().slideDown(300); 
      $this.addClass('hover');
    }
  });
  
  $('.faq-box__answer').click(function() {
    return false;
  });
}

FaqBox__init();