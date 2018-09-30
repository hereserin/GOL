const Grid = require('./grid');
const Cell = require('./cell.js');

class Game {
  constructor(canvasGrid, controlButtons) {
    // debugger
    this.currentGrid = new Grid();

    this.currentGrid.testInitialPopulate();
    this.nextGenGrid = this.currentGrid.nextGenGrid();

    this.controlButtons = controlButtons;
    this.setupButtons();
    this.canvasGrid = canvasGrid;

    // this.canvasGrid.game = this;
    this.stepGeneration = this.stepGeneration.bind(this);
    this.renderGridToCanvas = this.renderGridToCanvas.bind(this);
  }

  setupButtons() {
    Object.entries(this.controlButtons).forEach((buttonArr) => {
      // debugger
      return this.attachButtonToMethod(buttonArr);
    });
  }

  attachButtonToMethod(butnArr) {
    const that = this;
    const methodChooser = {
      startButton: that.play,
      stopButton: that.play,
      resetButton: that.play
    }

    butnArr[1].addEventListener('click', (e) => {
      // debugger
      // return methodChooser['${butnArr[0]}']();
      return methodChooser[butnArr[0]].apply(that);
    });
  }



  play() {
      // debugger
      this.renderGridToCanvas();
      let j = 0;
      let gameInt = setInterval(() => {
        this.stepGeneration();
        this.renderGridToCanvas();
        j++;

        console.log("before loop");
        if ( j > 5 ) {
          clearInterval(gameInt);
          console.log("inside loop")
        }

        console.log("outside loop");
      }, 500);
        console.log("outside of set interval situation");
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
