//found the
var divSquare = $(".square");
var turnCount = 1;

// divSquare[0].addEventListener("click", function(event){
//   if(turnCount == 1){
//     event.stopPropagation();
//     divInnerSquare[0].className = "innerSquare circle";
//     turnCount = 2;
//   }
//   else{
//     event.stopPropagation();
//     divInnerSquare[0].className = "innerSquare circle2";
//     turnCount = 1;
//   }
// })


divSquare.on('click', function(){
  var divInnerSquare = $('.innerSquare', this);
  if(turnCount == 1){
    event.stopPropagation();
    divInnerSquare.addClass('circle');
    turnCount = 2;
  }
  else{
    event.stopPropagation();
    divInnerSquare.addClass('circle2');
    turnCount = 1;
  }
})
