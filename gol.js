const Grid = require('./grid');
const Game = require('./game');
const Cell = require('./cell');
const CanvasGrid = require('./canvas_grid');

// TODO: change all SNAKECASE to CAMELCASE !!!

document.addEventListener("DOMContentLoaded", function(){
  // grab canvas
  // pass it to canvasGrid class
  // pass that canvasGrid to new instance of game
  // call play on the game


  // grab buttons
  // pass buttons to game class

  const controlButtons = {
    startButton: document.getElementById("start"),
    stopButton: document.getElementById("stop"),
    resetButton: document.getElementById("reset")
 }

  const canvasEl = document.getElementById("mycanvas");
  let canvasInstance = new CanvasGrid(canvasEl);
  canvasInstance.buildGrid();
  let game = new Game(canvasInstance, controlButtons);
  game.play();
  // debugger
  // let hi = "hi";


});
