const Grid = require('./lib/grid');
const Game = require('./lib/game');
const Cell = require('./lib/cell');
const CanvasGrid = require('./lib/canvas_grid');

document.addEventListener("DOMContentLoaded", function(){
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
});
