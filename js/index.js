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
    addToArray(this.id);
    if(turnCount == 1){
      event.stopPropagation();
      divInnerSquare.addClass('circle');
      turnCount = 2;
      checker(1);
    }
    //If it is player twos turn, do this.
    else{
      event.stopPropagation();
      divInnerSquare.addClass('circle2');
      turnCount = 1;
      checker(2);
    }
  }
  else{
    $('#updatingTXT').text(turnCount + "'s turn (Square already selected)");
  }
  console.log(positionArray);
})

function addToArray(idTag){
  switch(idTag){
    case "square1":
      positionArray[0] = turnCount;
      break;
    case "square2":
      positionArray[1] = turnCount;
      break;
    case "square3":
      positionArray[2] = turnCount;
      break;
    case "square4":
      positionArray[3] = turnCount;
      break;
    case "square5":
      positionArray[4] = turnCount;
      break;
    case "square6":
      positionArray[5] = turnCount;
      break;
    case "square7":
      positionArray[6] = turnCount;
      break;
    case "square8":
      positionArray[7] = turnCount;
      break;
    case "square9":
      positionArray[8] = turnCount;
      break;
  }
}

function checker(number){
  var foundWinner = false;
  //Check row wins
  for (var i = 0; i < positionArray.length; i+=3) {
    if(positionArray[i] == number && positionArray[i + 1] == number && positionArray[i + 2] == number){
      foundWinner = true;
    }
  }
  //Check column wins
  for (var i = 0; i < positionArray.length; i++) {
    if(positionArray[i] == number && positionArray[i + 3] == number && positionArray[i + 6] == number){
      foundWinner = true;
    }
  }
  //Check Diagonal wins
  if(positionArray[0] == number && positionArray[4] == number && positionArray[8] == number){
    foundWinner = true;
  }
  if(positionArray[2] == number && positionArray[4] == number && positionArray[6] == number){
    foundWinner = true;
  }

  if(foundWinner == true){
    $('#updatingTXT').text(number + " wins");
    $('.square').unbind("click");
  }

  else{
    $('#updatingTXT').text(turnCount + "'s turn");
  }
  
}
