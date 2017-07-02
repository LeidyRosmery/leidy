var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$("#turn-off").on("change", function(){
  if ($(this).prop( "checked" )) {
    $(".background-div").addClass("background-attach")
  }
  else {
     $(".background-div").removeClass("background-attach")
  }
})
