//Back-End
//Globals
var counter = 2;
//Players
function Player(mark, turn) {
  this.mark = mark;
  this.turn = turn;
}
var player1 = new Player("X", 1);
var player2 = new Player("O", 2);

var nowPlaying = player1;
//Space
function Space(coor) {
  this.coordinate = coor;
  this.mark = "";
  this.marked = false;
}
Space.prototype.receiveMark = function() {
  this.mark += nowPlaying.mark;
}
//Board
function Board() {
  this.board1 = []
}
var xBoardName = new Board;
//Game
function Game() {
  this.results = []
}
var gameOn = new Game;
Game.prototype.winChecker = function(array) {
  if((array[0]===array[1])&&(array[0]===array[2])&&(array[0]==="X") ||
    (array[3]===array[4])&&(array[3]===array[5])&&(array[3]==="X") ||
    (array[6]===array[7])&&(array[6]===array[8])&&(array[6]==="X") ||
    (array[0]===array[3])&&(array[0]===array[6])&&(array[0]==="X") ||
    (array[1]===array[4])&&(array[1]===array[7])&&(array[1]==="X") ||
    (array[2]===array[5])&&(array[2]===array[8])&&(array[2]==="X") ||
    (array[0]===array[4])&&(array[0]===array[8])&&(array[0]==="X") ||
    (array[2]===array[4])&&(array[2]===array[6])&&(array[2]==="X")
){
    alert("X wins");
    return "winner";
  } else if ((array[0]===array[1])&&(array[0]===array[2])&&(array[0]==="O") ||
    (array[3]===array[4])&&(array[3]===array[5])&&(array[3]==="O") ||
    (array[6]===array[7])&&(array[6]===array[8])&&(array[6]==="O") ||
    (array[0]===array[3])&&(array[0]===array[6])&&(array[0]==="O") ||
    (array[1]===array[4])&&(array[1]===array[7])&&(array[1]==="O") ||
    (array[2]===array[5])&&(array[2]===array[8])&&(array[2]==="O") ||
    (array[0]===array[4])&&(array[0]===array[8])&&(array[0]==="O") ||
    (array[2]===array[4])&&(array[2]===array[6])&&(array[2]==="O")
  ){
    alert("O wins");
    return "winner";
  } else if (counter===11){
  // ((array[0]&&array[1]&&array[2] &&array[3] &&array[4] &&array[5] &&array[6] &&array[7] && array[8])==="O"||"X"){
    alert("Tie");
    return "winner";
  }
}
//Functions
var switchPlaying = function(){
  if (counter%2===0) {
    nowPlaying = player1
  } else if (counter%2===1) {
    nowPlaying = player2
  }
};
var placedMarks = xBoardName.board1.map(function(space){
  return space.mark;
});
//Front-End


var testArray = ["1","2","3","4","5","6","7","8","9"]
$(document).ready(function() {

  var one = new Space(1);
  var two = new Space(2);
  var three = new Space(3);
  var four = new Space(4);
  var five = new Space(5);
  var six = new Space(6);
  var seven = new Space(7);
  var eight = new Space(8);
  var nine = new Space(9);
  var boardSpaces = [a1,a2,a3,b1,b2,b3,c1,c2,c3]
  xBoardName.board1.push(one, two, three, four, five, six, seven, eight, nine)
  // for(var i=0;i<10;i++) {
  //   $("."+(i+1)).append("<p>"+xBoardName.board1[i]+"</p>")
  // }
  $("#a1").click(function() {
    if (one.marked===false) {
      one.marked = true;
      one.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(one.mark === "X"){
        $("#x1").show();
      } else {
        $("#o1").show();
      }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];
  });
  $("#a2").click(function() {
    if (two.marked===false) {
      two.marked = true;
      two.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(two.mark === "X"){
      $("#x2").show();
    } else {
      $("#o2").show();
    }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];
  });
  $("#a3").click(function() {
    if (three.marked===false) {
      three.marked = true;
      three.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(three.mark === "X"){
      $("#x3").show();
    } else {
      $("#o3").show();
    }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];

  });
  $("#b1").click(function() {
    if (four.marked===false) {
      four.marked = true;
      four.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(four.mark === "X"){
      $("#x4").show();
    } else {
      $("#o4").show();
    }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];

  });
  $("#b2").click(function() {
    if (five.marked===false) {
      five.marked = true;
      five.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(five.mark === "X"){
      $("#x5").show();
    } else {
      $("#o5").show();
    }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];
  });
  $("#b3").click(function() {
    if (six.marked===false) {
      six.marked = true;
      six.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(six.mark === "X"){
      $("#x6").show();
    } else {
      $("#o6").show();
    }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];
  });
  $("#c1").click(function() {
    if (seven.marked===false) {
      seven.marked = true;
      seven.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(seven.mark === "X"){
      $("#x7").show();
    } else {
      $("#o7").show();
    }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];
  });
  $("#c2").click(function() {
    if (eight.marked===false) {
      eight.marked = true;
      eight.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(eight.mark === "X"){
      $("#x8").show();
    } else {
      $("#o8").show();
    }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];
  });
  $("#c3").click(function() {
    if (nine.marked===false) {
      nine.marked = true;
      nine.receiveMark();
      var placedMarks = xBoardName.board1.map(function(space){
        return space.mark;
      });
      if(nine.mark === "X"){
      $("#x9").show();
    } else {
      $("#o9").show();
    }
    }
    counter++;
    switchPlaying();
    placedMarks.forEach(function(mark) {
      gameOn.results.push(mark);
    });
    gameOn.winChecker(gameOn.results);
    gameOn.results = [];
  });

  // Board.prototype.makeBoard = function(array) {
  //   debugger;
  //   array.forEach(function(entry)) {
  //
  //   }
  //   // boardSpaces.forEach(function(x,index) {
  //   //   $("#"+x).append("<p>"+testArray[index]+"</p>")
  //   // });
  // };
  // xBoardName.makeBoard(xBoardName.board1);
});
