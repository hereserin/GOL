// const Cell = require("./cell.js");
import Cell from './cell';

class Grid {
  constructor( a = 60, b = 99 ) {
    this.grid = [];
    // this.grid = create_grid(a,b)
  }

  create_grid(a,b) {
    let output_grid = [];
    for (var i = 0; i < a; i++) {
      let new_row = [];
      for (var j = 0; j < b; j++) {
        let new_cell = new Cell(i, j, this.should_be_populated(i,j));
        new_row.push(new_cell);
      }
      output_grid.push(new_row);
    }
    return output_grid;
  }

  should_be_populated(n, m) {
    return false;
  }

}

// module.exports = Grid;
export default Grid;
