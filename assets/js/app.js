var $cont = document.querySelector('.cont');

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

var lastScrollTop = 0;
$( window ).scroll(function() {
   console.log("entra");
  var pantalla= $(window).width();
  var currentScroll=window.pageYOffset || document.documentElement.scrollTop;


  if (currentScroll < 340){
    $('#portfolio').addClass('top-line');
    //$('#portfolio').removeClass('top-line-hidden-black ');
  }
  if (currentScroll >790){
    $('#about').addClass('top-line');
    //$('#portfolio').removeClass('top-line-hidden-black ');
  }
  if (currentScroll > 840){
    $('#contact').addClass('top-line');
    //$('#portfolio').removeClass('top-line-hidden-black ');
  }

    lastScrollTop = currentScroll;
});
