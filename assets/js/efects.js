window.addEventListener('load', function(){
  var divTransition = document.getElementsByClassName('transition');
    console.log(divTransition);
  var time=0;
  var j=1000
  setTimeout(function(){
    for (var i = 0; i < divTransition.length; i++) {
        divTransition[i].classList.add("hola")
        }
      j=j+200;
  }, j);

});
