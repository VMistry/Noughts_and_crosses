//Function1
function addToArray(idTag){
  //Take in the ID.
  var positionArray = [0,0,0,0,0,0,0,0];
  var turnCount = 1;
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
  return positionArray;
}

//Function 2
//This checks if the current player has won the game.
function checker(number, positionArray){
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

  return foundWinner;
}
//Function 3
function drawChecker(positionArray){
  //flag is used to see if all the squares are filled.
  var flag = 0;
  var hasDrawed = false;
  //This for loop checks if the array is a zero or not
  for(i = 0; i < positionArray.length; ++i) {
    //if element of array is not a 0, add 1 to flag.
    if(positionArray[i] != 0) {
      flag += 1;
    }
  }

  if(flag == 9){
    hasDrawed = true;
  }

  return hasDrawed;
}

//export and test the functions
module.exports = {
  addToArray:addToArray,
  checker:checker,
  drawChecker:drawChecker,
}
