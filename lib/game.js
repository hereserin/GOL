const Grid = require('./grid');
const Cell = require('./cell.js');

class Game {
  constructor(canvasGrid, controlButtons, templateImages) {
    // debugger
    this.currentGrid = new Grid();

    // this.currentGrid.testInitialPopulate();
    this.nextGenGrid = this.currentGrid.nextGenGrid();

    this.controlButtons = controlButtons;
    this.stop = true;
    this.setupButtons();


    this.canvasGrid = canvasGrid;
    this.canvasGrid.attachToGame(this);

    this.templateImages = templateImages;
    // this.stop = true;
    this.setupTemplateIcons();

    // this.canvasGrid.game = this;
    this.stepGeneration = this.stepGeneration.bind(this);
    this.renderGridToCanvas = this.renderGridToCanvas.bind(this);
  }

  setupButtons() {
    Object.entries(this.controlButtons).forEach((buttonArr) => {
      return this.attachButtonToMethod(buttonArr);
    });
  }

  setupTemplateIcons() {
    // Object.entries(this.templateImages);
    // debugger
    Object.entries(this.templateImages).forEach((iconArr) => {
      this.attachTemplateIconsToMethod(iconArr);
      return that.stopButtonMethod.apply(that);
    });
  }

  attachButtonToMethod(butnArr) {
    const that = this;
    const methodChooser = {
      startButton: that.startButtonMethod,
      stopButton: that.stopButtonMethod,
      resetButton: that.resetButtonMethod
    };
    // debugger
    butnArr[1].addEventListener('click', (e) => {
      methodChooser[butnArr[0]].apply(that);

    });
  }

  attachTemplateIconsToMethod(iconArr) {
    const that = this;

    const templateChooser = {
      template1: "pulsar",
      template2: "glider",
      template3: "pentadecathlon",
      template4: "another1",
      template5: "another2",
      template6: "another3"
    };


    iconArr[1].addEventListener('click', (e) => {
      console.log(iconArr[1]);
      // debugger
      that.templateButtonMethod(templateChooser[iconArr[0]]);
      return that.startButtonMethod.apply(that);
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


        if ( j > 0 ) {
          clearInterval(gameInt);

        }


      }, 500);

  }

  startButtonMethod() {

      this.stop = false;
      this.renderGridToCanvas();
      let gameInt = setInterval(() => {
        this.stepGeneration();
        this.renderGridToCanvas();

        if ( this.stop ) {
          clearInterval(gameInt);
        }
      }, 500);
  }

  stopButtonMethod() {
    this.stop = true;
  }

  resetButtonMethod() {
    this.currentGrid.reset();
    this.renderGridToCanvas();
  }

  templateButtonMethod(templateName) {
    this.currentGrid.useTemplate(templateName);
    this.renderGridToCanvas();
  }

  stepGeneration() {
    this.nextGenGrid = this.currentGrid.nextGenGrid();
    this.currentGrid = this.nextGenGrid;
  }


  renderGridToCanvas() {

    this.canvasGrid.acceptArray(this.currentGrid.provideArray());
  }

  passUserInputToGrid(coords){
    const wasPopulated = this.currentGrid.acceptUserInput(coords);
  }


}


module.exports = Game;
