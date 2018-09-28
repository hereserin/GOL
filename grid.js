const Cell = require("./cell.js");
// import Cell from "./cell";


class Grid {
  constructor(a=60, b=99 ) {
    // this.grid = [];
    this.grid = this.create_grid(a,b);
    this.acceptArray = this.acceptArray.bind(this);
    this.provideArray = this.provideArray.bind(this);
    this.nextGenGrid = this.nextGenGrid.bind(this);
    this.testInitialPopulate = this.testInitialPopulate.bind(this);
  }

  create_grid(a,b) {
    let output_grid = [];
    for (var i = 0; i < a; i++) {
      let new_row = [];
      for (var j = 0; j < b; j++) {

        let new_cell = new Cell(i, j, this.shouldBePopulated(i,j));
        new_row.push(new_cell);
      }
      output_grid.push(new_row);
    }
    // output_grid[10][5].populateCell();
    // output_grid[12][5].populateCell();
    return output_grid;
  }

  testInitialPopulate() {
    this.grid[10][5].populated = true;
    this.grid[12][5].populated = true;
    this.grid[11][4].populated = true;
    this.grid[12][3].populated = true;

    this.grid[2][3].populated = true;
    this.grid[4][3].populated = true;
    this.grid[3][2].populated = true;
    this.grid[4][1].populated = true;

    this.grid[20][5].populated = true;
    this.grid[21][5].populated = true;
    this.grid[22][5].populated = true;



  }

  shouldBePopulated(n, m) {
    return false;
  }

  acceptArray(arr) {
    this.grid = arr;
  }

  provideArray() {
    return this.grid.map((row) => {
      return row.map((cell) => {
        return cell.populated;
      });
    });
  }

  nextGenGrid() {
    let next_gen_grid = new this.constructor(this.grid.length, this.grid[0].length);
    let next_gen_arr = this.grid.map((row)=>{
      return row.map((each_cell=>{
        // debugger
        let populate = this.cellIsPopulatedInNextGeneration(each_cell);
        let coords = each_cell.coordinates;
        let next_gen = new Cell(coords[0], coords[1], populate);
        return next_gen;
      }));
    });
    next_gen_grid.acceptArray(next_gen_arr);
    return next_gen_grid;
  }

// *****
  cellIsPopulatedInNextGeneration(cell) {
    const n = this.numberOfPopulatedNeighbors(cell)

    if (n == 3) {
      return true;
    } else if (n == 2 && cell.populated) {
      return true;
    } else {
      return false;
    }
  }

  numberOfPopulatedNeighbors(cell) {
    // console.log(cell.coordinates)
    // debugger
    return cell.neighbors().reduce((acc, neighbor) => {
      // debugger
      // console.log(neighbor);
      if (this.coordsAreInGrid(neighbor) && this.grid[neighbor[0]][neighbor[1]].populated) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }

  coordsAreInGrid(coordsArr) {
    if (coordsArr[0] < this.grid.length && coordsArr[0] > -1) {
      if (coordsArr[1] < this.grid[0].length && coordsArr[1] > -1) {
        return true;
      }
    }
      return false;
  }
  // ******

}

module.exports = Grid
