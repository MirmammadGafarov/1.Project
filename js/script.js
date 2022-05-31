jQuery(document).ready(function($) {
  var whenChange = function() {
    var CW = document.body.clientWidth;
    if (CW <= 992) {
      $('.navigate').addClass('col-md-12');
      $('.navigate').removeClass('col-md-5');
     
    } else if (CW > 992) {
      $('.navigate').removeClass('col-md-12');
      $('.navigate').addClass('col-md-5');

    };
  };
  $(window).resize(function(){
      whenChange();
  });
  //Fire it when the page first loads:
  whenChange();
});