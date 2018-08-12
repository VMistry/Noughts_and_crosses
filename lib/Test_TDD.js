//function 1
function choice(answer){
  //This will ask the users a question on what to select. In order to select the choses, users would have to use the letter assossiated with the option.
  //If the user enters b, the basic calculator function will be activated.
  if(answer == "b" || answer == "basic calculator"){
    return "basic"
  }
  //If the user enters bl, the basic long calculator function will be activated.
  else if(answer == "bl" || answer == "basic Long calculator"){
    return "basicLong";
  }
  //If the user enters a, the advanced calculator function will be activated.
  else if(answer == "a" || answer == "advanced calculator"){
    return "Advanced";
  }
  //If the user enter bmi, the BMI calculator function will be activated.
  else if(answer == "bmi" || answer == "bmi calculator"){
    return "BMI";
  }
  //If the user enters t, the travel calculator function will be activated.
  else if(answer == "t" || answer == "trip calculator"){
    return "Trip_calculator";
  }
  //If the user enters something not on the list, an error message will popup.
  else{
    return "error"
  }
}
//function 2
function operationSelector(number1, operator, number2){
  //Find out if the operation is a +, -, * or divide.
  if(operator == "+"){
    //Display answer.
    return number1 + number2;
  }
  else if(operator == "-"){
    //Display answer.
    return number1 - number2;
  }
  else if(operator == "*"){
    //Display answer.
    return number1 * number2;
  }
  else if(operator == "/"){
    //Display answer.
    return number1 / number2;
  }
}
//function 3
function SorP(answer){
  if(answer == "sr" || answer == "square root"){
    return "squareRoot";
  }
  //If it it power, do this.
  else if(answer == "p" || answer == "power") {
    return "power";
  }
  //If it is none of the operations above, repeats the function.
  else{
    return "Error.";
  }

}
//function 4
function squareRoot(number1){
  number1 = Math.sqrt(number1);
  //round it to the nearest decimal place.
  number1 = Math.round( number1 * 10 ) / 10;
  //Display anwser
  return number1;
}

//function 5
function power(number1, power){
  //calculate the power
  number1 = Math.pow(number1, power);
  //round it to the nearest decimal place.
  number1 = Math.round( number1 * 10 ) / 10;
  //Display answer
  return number1;
}

//function 6
function MorI(answer){
  if(answer == "m" || answer == "metric"){
    return "metric";
  }
  //If the user enters bl, the basic long calculator function will be activated.
  else if(answer == "i" || answer == "imperial"){
    return "imperial";
  }

}
//function 7
function metricBMI(weight, height){
  //It will the calculate the BMI
  var result = (weight / height) / height;
  //round it to the nearest decimal place.
  result = Math.round( result * 10 ) / 10;
  //Display answer
  return result;
}

//function 8
function imperialBMI(weight, height){
  //It will the calculate the BMI
  var result = (weight * 703) / (height * height);
  //round it to the nearest decimal place.
  result = Math.round( result * 10 ) / 10;
  //Display answer
  return result;
}

//function 9
function Trip_cost(distance, fuel_consumption, cost){
  //Below does the calculation for travel costs.
  var result1 = distance/100;
  result1  = result1 * fuel_consumption;
  result1 = result1 * cost;
  //round it to the nearest decimal place.
  result1 = Math.round( result1  );
  return result1;
}

//function 10
function Trip_time(distance, speed){
  //Below does the calculation for travel costs.
  var result1 = distance/speed;
  result1 = Math.round( result1 * 100 ) / 100;
  return result1;
}

//export and test the functions
module.exports = {
  choice: choice,
  operationSelector:operationSelector,
  SorP: SorP,
  squareRoot: squareRoot,
  power: power,
  MorI: MorI,
  metricBMI: metricBMI,
  imperialBMI: imperialBMI,
  Trip_cost:Trip_cost,
  Trip_time:Trip_time,

}
