//find the squares by its class name and store it in divsquare.
var divSquare = $(".square");
//This will hold the player number. This will update once the player had made thier move.
var turnCount = 1;
var positionArray = [0,0,0,0,0,0,0,0,0];

//This click event will find whihc div has been clicked and edit the inner divs to a O or an X.
divSquare.on('click', function(){
  //This targets the div inside of the selected div.
  var divInnerSquare = $('.innerSquare', this);
  //If it is player ones turn, do this.
  if(!(divInnerSquare.hasClass('circle') || divInnerSquare.hasClass('circle2'))){
    if(turnCount == 1){
      event.stopPropagation();
      divInnerSquare.addClass('circle');
      turnCount = 2;
    }
    //If it is player twos turn, do this.
    else{
      event.stopPropagation();
      divInnerSquare.addClass('circle2');
      turnCount = 1;
    }
  }
  else{
    
  }
})
