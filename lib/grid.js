const Cell = require("./cell.js");
const templates = require("./templates.js");

class Grid {
  constructor(a = 80, b = 40) {
    this.grid = this.createGrid(a, b);
  }

  createGrid(a, b, template) {
    let outputGrid = [];
    for (var i = 0; i < a; i++) {
      let newRow = [];
      for (var j = 0; j < b; j++) {
        let newCell = new Cell(i, j, this.shouldBePopulated(i, j));
        newRow.push(newCell);
      }
      outputGrid.push(newRow);
    }

    return outputGrid;
  }

  populateACell(coords) {
    this.grid[coords[0]][coords[1]].populated = true;
  }

  renderTemplate(template) {
    const chosenTemplate = templates[template];
    chosenTemplate.forEach(setOfCoords => {
      return this.populateACell(setOfCoords);
    });
  }

  reset() {
    this.grid = this.createGrid(80, 40, templates.blankReset);
    this.renderTemplate("blankReset");
  }

  useTemplate(templateName) {
    this.grid = this.createGrid(80, 40, templates.blankReset);
    this.renderTemplate(templateName);
  }

  testInitialPopulate() {
    this.grid[18][12].populated = true;
    this.grid[16][13].populated = true;
    this.grid[18][13].populated = true;
    this.grid[19][13].populated = true;
    this.grid[16][14].populated = true;
    this.grid[18][14].populated = true;
    this.grid[16][15].populated = true;
    this.grid[14][16].populated = true;
    this.grid[12][17].populated = true;
    this.grid[14][17].populated = true;
  }

  shouldBePopulated(n, m) {
    return false;
  }

  acceptArray(arr) {
    this.grid = arr;
  }

  provideArray() {
    return this.grid.map(row => {
      return row.map(cell => {
        return cell.populated;
      });
    });
  }

  acceptUserInput(coords) {
    const x = coords[0];
    const y = coords[1];
    const wasPopulated = this.grid[x][y].populated;
    this.grid[x][y].populated = !this.grid[x][y].populated;
    return wasPopulated;
  }

  nextGenGrid() {
    let nextGenGrid = new this.constructor(
      this.grid.length,
      this.grid[0].length
    );
    let nextGenArr = this.grid.map(row => {
      return row.map(eachCell => {
        let populate = this.cellIsPopulatedInNextGeneration(eachCell);
        let coords = eachCell.coordinates;
        let nextGen = new Cell(coords[0], coords[1], populate);
        return nextGen;
      });
    });
    nextGenGrid.acceptArray(nextGenArr);
    return nextGenGrid;
  }

  cellIsPopulatedInNextGeneration(cell) {
    const n = this.numberOfPopulatedNeighbors(cell);
    if (n == 3) {
      return true;
    } else if (n == 2 && cell.populated) {
      return true;
    } else {
      return false;
    }
  }

  numberOfPopulatedNeighbors(cell) {
    return cell.neighbors().reduce((acc, neighbor) => {
      if (
        this.coordsAreInGrid(neighbor) &&
        this.grid[neighbor[0]][neighbor[1]].populated
      ) {
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
}

module.exports = Grid;
