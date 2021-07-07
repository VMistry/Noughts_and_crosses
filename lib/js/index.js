//find the squares by its class name and store it in divsquare.
var divSquare = $(".square");
//This will hold the player number. This will update once the player had made thier move.
var turnCount = 1;
//This will store all the positions taken up by players.
var positionArray = [0,0,0,0,0,0,0,0,0];

//This click event will find whihc div has been clicked and edit the inner divs to a O or an X.
divSquare.on('click', clickAction);
//This is the function, activated when clicked on the board.
function clickAction(){
  //This targets the div inside of the selected div.
  var divInnerSquare = $('.innerSquare', this);
  //If the space is not occupied, do this.
  if(!(divInnerSquare.hasClass('circle') || divInnerSquare.hasClass('circle2'))){
    //This is linked to function alled addToArray. This sorts out where to put the current players number in to the array.
    addToArray(this.id);
    //If player 1 has taken turn, do this.
    if(turnCount == 1){
      //add a class to the selected square.
      divInnerSquare.addClass('circle');
      //Change it to the oppositions turn.
      turnCount = 2;
      //Check for winnning states.
      checker(1);
    }
    //If player 1 has taken turn, do this.
    else{
      //add a class to the selected square.
      divInnerSquare.addClass('circle2');
      //Change it to the oppositions turn.
      turnCount = 1;
      //Check for winnning states.
      checker(2);
    }
  }
  //If the square is occupied, do this.
  else{
    $('#updatingTXT').text(turnCount + "'s turn (Square already selected)");
  }
}


//function to change 0 to a number.
function addToArray(idTag){
  //Take in the ID.
  switch(idTag){
  //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square1":
      positionArray[0] = turnCount;
      break;
    //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square2":
      positionArray[1] = turnCount;
      break;
    //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square3":
      positionArray[2] = turnCount;
      break;
    //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square4":
      positionArray[3] = turnCount;
      break;
    //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square5":
      positionArray[4] = turnCount;
      break;
    //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square6":
      positionArray[5] = turnCount;
      break;
    //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square7":
      positionArray[6] = turnCount;
      break;
    //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square8":
      positionArray[7] = turnCount;
      break;
    //If the idTag matches this case, fill the specific array element with what ever the turn count is.
    case "square9":
      positionArray[8] = turnCount;
      break;
  }
}

//This checks if the current player has won the game.
function checker(number){
  //The false means that no-one has won so far.
  var foundWinner = false;

  //Check if row wins
  for (var i = 0; i < positionArray.length; i+=3) {
    if(positionArray[i] == number && positionArray[i + 1] == number && positionArray[i + 2] == number){
      foundWinner = true;
    }
  }

  //Check if column wins
  for (var i = 0; i < positionArray.length; i++) {
    if(positionArray[i] == number && positionArray[i + 3] == number && positionArray[i + 6] == number){
      foundWinner = true;
    }
  }

  //Check if Diagonal wins
  if(positionArray[0] == number && positionArray[4] == number && positionArray[8] == number){
    foundWinner = true;
  }
  if(positionArray[2] == number && positionArray[4] == number && positionArray[6] == number){
    foundWinner = true;
  }
  //flag is used to see if all the squares are filled.
  var flag = 0;
  //This for loop checks if the array is a zero or not
  for(i = 0; i < positionArray.length; ++i) {
    //if element of array is not a 0, add 1 to flag.
    if(positionArray[i] != 0) {
      flag += 1;
    }
  }

  //If someone won, do this.
  if(foundWinner == true){
    //Print out who's won the game.
    $('#updatingTXT').text(number + " wins");
    //Make buttons unclickable
    divSquare.off('click');
    $('#reset').on('click', resetButton)
  }
  //If there is a draw, do this.
  else if(foundWinner == false && flag == 9){
    //Print out draw.
    $('#updatingTXT').text("Draw");
    //Make buttons unclickable
    divSquare.off('click');
    $('#reset').on('click', resetButton)
  }
  //If the game is not over, do this.
  else{
    //Print out who's turn it is next
    $('#updatingTXT').text(turnCount + "'s turn");
  }

}
//This is to reset the game.
function resetButton(){
  divSquare.on('click', clickAction);
  var divInnerSquare = $('.innerSquare', '.square');
  divInnerSquare.removeClass('circle');
  divInnerSquare.removeClass('circle2');
  positionArray = [0,0,0,0,0,0,0,0,0];
  turnCount = 1;
  $('#updatingTXT').text(turnCount + "'s turn");
  $('#reset').off('click')
}
