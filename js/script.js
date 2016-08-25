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
}
Space.prototype.receiveMark = function() {
  this.mark += nowPlaying.mark;
}
//Board
function Board() {
  this.board1 = []
}
function Game() {

}
var xBoardName = new Board;
var player1 = new Player("X", 1);
//Functions
var switchPlaying = function(){
  if (counter%2===0) {
    nowPlaying = player1
  } else if (counter%2===1) {
    nowPlaying = player2
  }
};
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
  for(var i=0;i<10;i++) {
    $("."+(i+1)).append("<p>"+xBoardName.board1[i]+"</p>")
  }
  $("#a1").click(function() {
    one.receiveMark();
    alert(one.mark);
    counter++;
    switchPlaying();
  });
  $("#a2").click(function() {
    $("#a2").append("<p>"+player1.mark+"</p>");
  });
  $("#a3").click(function() {
    $("#a3").append("<p>"+player1.mark+"</p>");
  });
  $("#b1").click(function() {
    $("#b1").append("<p>"+player1.mark+"</p>");
  });
  $("#b2").click(function() {
    $("#b2").append("<p>"+player1.mark+"</p>");
  });
  $("#b3").click(function() {
    $("#b3").append("<p>"+player1.mark+"</p>");
  });
  $("#c1").click(function() {
    $("#c1").append("<p>"+player1.mark+"</p>");
  });
  $("#c2").click(function() {
    $("#c2").append("<p>"+player1.mark+"</p>");
  });
  $("#c3").click(function() {
    $("#c3").append("<p>"+player1.mark+"</p>");
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
