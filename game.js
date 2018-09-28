const Grid = require('./grid');
const Cell = require('./cell.js');

class Game {
  constructor(canvasGrid) {
    // debugger
    this.currentGrid = new Grid();
    this.currentGrid.testInitialPopulate();
    this.nextGenGrid = this.currentGrid.nextGenGrid();
    this.canvasGrid = canvasGrid;
    this.stepGeneration = this.stepGeneration.bind(this);
    this.renderGridToCanvas = this.renderGridToCanvas.bind(this);
  }

  play() {
      let j = 0;
      let gameInt = setInterval(() => {
        this.stepGeneration();
        this.renderGridToCanvas();
        j++;

        if ( j > 5 ) {
          clearInterval(gameInt);
        }

        console.log(j);
      }, 1000);

  }

  stepGeneration() {
    this.currentGrid = this.nextGenGrid;
    this.nextGenGrid = this.currentGrid.nextGenGrid();
  }


  renderGridToCanvas() {
    this.canvasGrid.acceptArray(this.currentGrid.provideArray());
  }
}


module.exports = Game;
