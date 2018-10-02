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

  const templateImages = {
    template1: document.getElementById("template1"),
    template2: document.getElementById("template2"),
    template3: document.getElementById("template3"),
    template4: document.getElementById("template4"),
    template5: document.getElementById("template5"),
    template6: document.getElementById("template6")
  }

  const canvasEl = document.getElementById("mycanvas");
  let canvasInstance = new CanvasGrid(canvasEl);
  canvasInstance.buildGrid();
  let game = new Game(canvasInstance, controlButtons, templateImages);
  game.play();
});
