const Grid = require('./grid');
const Cell = require('./cell.js');

class Game {
  constructor(canvasGrid, controlButtons, templateImages) {
    // debugger
    this.currentGrid = new Grid();

    this.currentGrid.testInitialPopulate();
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
      return this.attachTemplateIconsToMethod(iconArr);
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
      return methodChooser[butnArr[0]].apply(that);
    });
  }

  attachTemplateIconsToMethod(iconArr) {
    const that = this;

    // const methodChooser = {
    //   template1: that.templateButtonMethod("pulsar"),
    //   template2: that.templateButtonMethod("pulsar"),
    //   template3: that.templateButtonMethod("pulsar"),
    //   template4: that.templateButtonMethod("pulsar"),
    //   template5: that.templateButtonMethod("pulsar"),
    //   template6: that.templateButtonMethod("pulsar")
    // };
    const templateChooser = {
      template1: "pulsar",
      template2: "glider",
      template3: "pentadecathlon",
      template4: "pulsar",
      template5: "pulsar",
      template6: "pulsar"
    };


    iconArr[1].addEventListener('click', (e) => {
      console.log(iconArr[1]);
      // debugger
      return that.templateButtonMethod(templateChooser[iconArr[0]]);
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


        if ( j > 2 ) {
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
    // this.nextGenGrid = this.currentGrid.nextGenGrid();
  }


  renderGridToCanvas() {

    this.canvasGrid.acceptArray(this.currentGrid.provideArray());
  }

  passUserInputToGrid(coords){
    const wasPopulated = this.currentGrid.acceptUserInput(coords);
  }


}


module.exports = Game;
