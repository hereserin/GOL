const Grid = require('./grid');
const Cell = require('./cell.js');

class Game {
  constructor() {
    // debugger
    this.current_grid = new Grid();
    this.next_gen_grid = undefined;
    this.canvasGrid = 0;
  }

  play() {
    [1,2,3,4,5].forEach((i) => {
      this.step_generation()
    });
  }

  step_generation() {
    this.current_grid = this.next_gen_grid;
    this.generate_next_gen_grid();
  }

  generate_next_gen_grid() {
    // debugger
    this.next_gen_grid = this.current_grid.generate_next_gen_grid();
    this.current_grid = new Grid();
    let okay = 0;
  }

}


module.exports = Game;
