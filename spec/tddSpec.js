describe("TDD test for Noughts and Crosses", function(){

  var gameCheck = require("../lib/Test_TDD");

  //Function 1 - Checking all states
  it("Should add 1 to the first element of the array", function(){
    expect(gameCheck.addToArray("square1")).toEqual([1,0,0,0,0,0,0,0]);
  })

  it("Should add 1 to the second element of the array", function(){
    expect(gameCheck.addToArray("square2")).toEqual([0,1,0,0,0,0,0,0]);
  })

  it("Should add 1 to the third element of the array", function(){
    expect(gameCheck.addToArray("square3")).toEqual([0,0,1,0,0,0,0,0]);
  })

  it("Should add 1 to the fourth element of the array", function(){
    expect(gameCheck.addToArray("square4")).toEqual([0,0,0,1,0,0,0,0]);
  })

  it("Should add 1 to the fifth element of the array", function(){
    expect(gameCheck.addToArray("square5")).toEqual([0,0,0,0,1,0,0,0]);
  })

  it("Should add 1 to the sixth element of the array", function(){
    expect(gameCheck.addToArray("square6")).toEqual([0,0,0,0,0,1,0,0]);
  })

  it("Should add 1 to the seventh element of the array", function(){
    expect(gameCheck.addToArray("square7")).toEqual([0,0,0,0,0,0,1,0]);
  })

  it("Should add 1 to the eighth element of the array", function(){
    expect(gameCheck.addToArray("square8")).toEqual([0,0,0,0,0,0,0,1]);
  })

  //Function 2
  it("Should detect row wins and return true", function(){
    expect(gameCheck.checker(1, [1,1,1,0,2,2,0,0,0])).toEqual(true);
  })

  it("Should detect column wins and return true", function(){
    expect(gameCheck.checker(1, [0,2,1,0,2,1,0,0,1])).toEqual(true);
  })

  it("Should detect diagonal wins and return true", function(){
    expect(gameCheck.checker(1, [1,2,0,0,1,2,0,0,1])).toEqual(true);
  })

  it("Should detect diagonal wins and return true", function(){
    expect(gameCheck.checker(1, [0,2,1,0,1,2,1,0,0])).toEqual(true);
  })

  it("Should work for player two and return true", function(){
    expect(gameCheck.checker(2, [2,2,2,1,1,0,1,0,0])).toEqual(true);
  })

  it("Game is still being played", function(){
    expect(gameCheck.checker(1, [0,2,0,0,1,2,1,0,0])).toEqual(false);
  })

  //Function 3
  it("Should give out false, for the array still contains 0", function(){
    expect(gameCheck.drawChecker([0,2,0,0,1,2,1,0,0])).toEqual(false);
  })

  it("Should give out false, for the array still contains 0", function(){
    expect(gameCheck.drawChecker([1,2,2,1,1,2,1,2,1])).toEqual(true);
  })


})
//1)split code in to two files.
//2)include new file above calculator file.
//3)export and create functions.
//4)require function
