const Grid = require('./grid');
const Game = require('./game');
const Cell = require('./cell');
const CanvasGrid = require('./canvas_grid');

// TODO: change all SNAKECASE to CAMELCASE !!!

document.addEventListener("DOMContentLoaded", function(){
// will delete this code
  // let gridA = new Grid();
  // let gridB = new Grid();

  // let newCell = new Cell();

  // debugger
  // grid_a.generate_next_gen_grid();
  // console.log(grid_a.next_gen_grid);
  // game.step_generation();
  // console.log(game.next_gen_grid);
  // will delete this code

  // grab canvas
  // pass it to canvasGrid class
  // pass that canvasGrid to new instance of game
  // call play on the game

  const canvasEl = document.getElementById("mycanvas");
  let canvasInstance = new CanvasGrid(canvasEl);
  canvasInstance.buildGrid();
  let game = new Game(canvasInstance);
  game.play();



});
