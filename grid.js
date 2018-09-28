const Cell = require("./cell.js");
// import Cell from "./cell";


class Grid {
  constructor(a=60, b=99 ) {
    this.grid = [];
    this.grid = this.create_grid(a,b);
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

  accept_array(arr) {
    this.grid = arr;
  }

  generate_next_gen_grid() {
    let next_gen_grid = new this.constructor(this.grid.length, this.grid[0].length);
    let next_gen_arr = this.grid.map((row)=>{
      return row.map((each_cell=>{
        let populate = each_cell.is_populated_in_next_generation();
        let coords = each_cell.coordinates;
        let next_gen = new Cell(coords[0], coords[1], populate);
        return next_gen;
      }));
    });
    next_gen_grid.accept_array(next_gen_arr);
    return next_gen_arr;
  }

}

module.exports = Grid
