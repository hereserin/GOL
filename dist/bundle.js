/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./gol.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gol.js":
/*!****************!*\
  !*** ./gol.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Grid = __webpack_require__(/*! ./lib/grid */ "./lib/grid.js");
const Game = __webpack_require__(/*! ./lib/game */ "./lib/game.js");
const Cell = __webpack_require__(/*! ./lib/cell */ "./lib/cell.js");
const CanvasGrid = __webpack_require__(/*! ./lib/canvas_grid */ "./lib/canvas_grid.js");

document.addEventListener("DOMContentLoaded", function(){
  const controlButtons = {
    startButton: document.getElementById("start"),
    stopButton: document.getElementById("stop"),
    resetButton: document.getElementById("reset")
 }

  const canvasEl = document.getElementById("mycanvas");
  let canvasInstance = new CanvasGrid(canvasEl);
  canvasInstance.buildGrid();
  let game = new Game(canvasInstance, controlButtons);
  game.play();
});


/***/ }),

/***/ "./lib/canvas_grid.js":
/*!****************************!*\
  !*** ./lib/canvas_grid.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {


class CanvasGrid {
  constructor(canvasEl) {
    this.canvasEl = canvasEl;
    this.game = undefined;
    this.ctx = this.canvasEl.getContext("2d");
    this.respondToClick = this.respondToClick.bind(this);
    this.canvasEl.addEventListener('click', this.respondToClick);
    this.fillSquare = this.fillSquare.bind(this);
    this.birthCell = this.birthCell.bind(this);
    this.killCell = this.killCell.bind(this);
    this.dimenInBoxes = undefined;
    this.game = undefined;
  }

  attachToGame(game) {
    this.game = game;
  }

  buildGrid() {
    this.canvasEl.width = 800;
    this.canvasEl.height = 400;

    // const ctx = this.canvasEl.getContext("2d");
    this.ctx.fillStyle = "#37233a";
    this.ctx.fillRect(0, 0, 800, 400);
    let cols
    let rows
    this.ctx.fillStyle = "black";
    for (var i = 0; i < 80; i++) {
      for (var j = 0; j < 40; j++) {
        let x = 1 + ( i * 10 );
        let y = 1 + ( j * 10 );
        this.ctx.fillRect(x, y, 8, 8);
        cols = i;
      }
      rows = j;
    }
    this.dimenInBoxes = [i,j];
  }

  acceptArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if ( arr[i][j] ) {
          this.birthCell([i,j]);
        } else {
          this.killCell([i,j]);
        }
      }
    }
  }

  fillSquare(coords, color) {
    const squareArea = this.convertCoords(coords);
    this.ctx.fillStyle = color;
    this.ctx.fillRect(squareArea[0], squareArea[1], 8, 8);
  }

  birthCell(coords) {
    this.fillSquare(coords, 'yellow');
  }

  killCell(coords) {
    this.fillSquare(coords, 'black');
  }

  convertCoords(coords) {
    let x = coords[0];
    let y = coords[1];
    let x_loc = 1 + ( x * 10 );
    let y_loc = 1 + ( y * 10 );
    return [x_loc, y_loc];
  }

  respondToClick(e) {
    const area = this.canvasEl.getBoundingClientRect();

    const clickLocation = {
      x: e.pageX - this.canvasEl.offsetLeft,
      y: e.pageY - this.canvasEl.offsetTop
    };

    let a = Math.floor(clickLocation.x/10);
    let b = Math.floor(clickLocation.y/10);
    let boxCoord = [a, b];
    // this.birthCell(boxCoord);
    this.toggleOnClick(boxCoord);
  }

  toggleOnClick(coords) {
    const wasPopulated = this.game.passUserInputToGrid(coords);
    if (wasPopulated) {
      this.killCell(coords);
    } else {
      this.birthCell(coords);
    }
  }


}

module.exports = CanvasGrid


/***/ }),

/***/ "./lib/cell.js":
/*!*********************!*\
  !*** ./lib/cell.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {


class Cell {
  constructor(a, b, populated=false) {
    this.coordinates = [a,b]
    this.populated = populated;
  }

  neighbors() {
    const a = this.coordinates[0]
    const b = this.coordinates[1]
    return ([
      [a, b - 1],
      [a, b + 1],
      [a - 1, b],
      [a + 1, b],
      [a - 1, b - 1],
      [a - 1, b + 1],
      [a + 1, b - 1],
      [a + 1, b + 1]
    ]);
  }

}


//  Any live cell with fewer than two live neighbors dies, as if by under population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// if the sum of all nine fields in a given
// neighborhood is three, the inner field state
// for the next generation will be life; if the all-field sum is four,
// the inner field retains its current state;
// and every other sum sets the inner field to death.


module.exports = Cell;


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Grid = __webpack_require__(/*! ./grid */ "./lib/grid.js");
const Cell = __webpack_require__(/*! ./cell.js */ "./lib/cell.js");

class Game {
  constructor(canvasGrid, controlButtons) {
    // debugger
    this.currentGrid = new Grid();

    this.currentGrid.testInitialPopulate();
    this.nextGenGrid = this.currentGrid.nextGenGrid();

    this.controlButtons = controlButtons;
    this.stop = true;
    this.setupButtons();
    this.canvasGrid = canvasGrid;
    this.canvasGrid.attachToGame(this);

    // this.canvasGrid.game = this;
    this.stepGeneration = this.stepGeneration.bind(this);
    this.renderGridToCanvas = this.renderGridToCanvas.bind(this);
  }

  setupButtons() {
    Object.entries(this.controlButtons).forEach((buttonArr) => {
      return this.attachButtonToMethod(buttonArr);
    });
  }

  attachButtonToMethod(butnArr) {
    const that = this;
    const methodChooser = {
      startButton: that.startButtonMethod,
      stopButton: that.stopButtonMethod,
      resetButton: that.resetButtonMethod
    };

    butnArr[1].addEventListener('click', (e) => {
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


/***/ }),

/***/ "./lib/grid.js":
/*!*********************!*\
  !*** ./lib/grid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const Cell = __webpack_require__(/*! ./cell.js */ "./lib/cell.js");
const templates = __webpack_require__(/*! ./templates.js */ "./lib/templates.js");
// import Cell from "./cell";

class Grid {
  constructor(a=80, b=40 ) {
    this.populateACell = this.populateACell.bind(this);
    this.grid = this.create_grid(a,b);
    this.acceptArray = this.acceptArray.bind(this);
    this.provideArray = this.provideArray.bind(this);
    this.nextGenGrid = this.nextGenGrid.bind(this);
    this.testInitialPopulate = this.testInitialPopulate.bind(this);

    // this.templates = templates;
  }

  create_grid(a,b, template) {
    let output_grid = [];
    for (var i = 0; i < a; i++) {
      let new_row = [];
      for (var j = 0; j < b; j++) {

        let new_cell = new Cell(i, j, this.shouldBePopulated(i,j));
        new_row.push(new_cell);
      }
      output_grid.push(new_row);
    }

    // templates.blankReset();


    return output_grid;
  }

  populateACell(coords) {
    console.log(this);
    this.grid[coords[0]][coords[1]].populated = true;
  }

  renderTemplate(template) {
    // this.reset();
    const chosenTemplate = templates[template];
    chosenTemplate.forEach((setOfCoords) => {
      return this.populateACell(setOfCoords);
    });
  }

  reset() {
    // debugger;
    this.grid = this.create_grid(80, 40, templates.blankReset);
    // this.populateACell([4,7]);
    this.renderTemplate('pulsar');
  }


  testInitialPopulate() {
  // TEST NO 1 *******
    // this.grid[10][5].populated = true;
    // this.grid[12][5].populated = true;
    // this.grid[11][4].populated = true;
    // this.grid[12][3].populated = true;
    //
    // this.grid[2][3].populated = true;
    // this.grid[4][3].populated = true;
    // this.grid[3][2].populated = true;
    // this.grid[4][1].populated = true;
    //
    // this.grid[20][5].populated = true;
    // this.grid[21][5].populated = true;
    // this.grid[22][5].populated = true;
  // ******

  // TEST NO 2 - USE THIS AS A FINAL TEMPLATE *******
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
  // *******


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

  acceptUserInput(coords) {
    const x = coords[0];
    const y = coords[1];
    const wasPopulated = this.grid[x][y].populated;
    this.grid[x][y].populated = !(this.grid[x][y].populated);
    return wasPopulated;
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


/***/ }),

/***/ "./lib/templates.js":
/*!**************************!*\
  !*** ./lib/templates.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const templates = {

  blankReset: [],

  // patternOne: [
  //   [[18][12]],
  //   [[16][13]],
  // [  [18][13]],
  //   [[19][13]],
  //   [[16][14]],
  // [  [18][14]],
  //   [[16][15]],
  //   [[14][16]],
  //   [[12][17]],
  //   [[14][17]]
  // ],

  'test': [
    [13, 15],
    [13, 16],
    [13, 17],
    [13, 21]
  ],

  'pulsar': [
    // console.log(`this from pulsar template: ${this}`);
    [13, 15],
    [13, 16],
    [13, 17],
    [13, 21],
    [13, 22],
    [13, 23],

    [15, 13],
    [15, 18],
    [15, 20],
    [15, 25],

    [16, 13],
    [16, 18],
    [16, 20],
    [16, 25],

    [17, 13],
    [17, 18],
    [17, 20],
    [17, 25],

    [18, 15],
    [18, 16],
    [18, 17],
    [18, 21],
    [18, 22],
    [18, 23],

    [20, 15],
    [20, 16],
    [20, 17],
    [20, 21],
    [20, 22],
    [20, 23],

    [22, 13],
    [22, 18],
    [22, 20],
    [22, 25],

    [23, 13],
    [23, 18],
    [23, 20],
    [23, 25],

    [24, 13],
    [24, 18],
    [24, 20],
    [24, 25],

    [26, 15],
    [26, 16],
    [26, 17],
    [26, 21],
    [26, 22],
    [26, 23],

  ]

  // somePattern: () => {
  //   this.grid[][].populated = true;
  //   this.grid[][].populated = true;
  //   this.grid[][].populated = true;
  //   this.grid[][].populated = true;
  //   this.grid[][].populated = true;
  //   this.grid[][].populated = true;
  // }


};

//**************ORIGINAL TEMPLATE OBJECT******************

//
// module.exports = templates;
// const templates = {
//
//   blankReset: () => {
//     return null;
//   },
//
//   patternOne: () => {
//     this.grid[18][12].populated = true;
//     this.grid[16][13].populated = true;
//     this.grid[18][13].populated = true;
//     this.grid[19][13].populated = true;
//     this.grid[16][14].populated = true;
//     this.grid[18][14].populated = true;
//     this.grid[16][15].populated = true;
//     this.grid[14][16].populated = true;
//     this.grid[12][17].populated = true;
//     this.grid[14][17].populated = true;
//   },
//
//   pulsar: () => {
//     console.log(`this from pulsar template: ${this}`);
//     this.grid[13][15].populated = true;
//     this.grid[13][16].populated = true;
//     this.grid[13][17].populated = true;
//     this.grid[13][21].populated = true;
//     this.grid[13][22].populated = true;
//     this.grid[13][23].populated = true;
//
//     this.grid[15][13].populated = true;
//     this.grid[15][18].populated = true;
//     this.grid[15][20].populated = true;
//     this.grid[15][25].populated = true;
//
//     this.grid[16][13].populated = true;
//     this.grid[16][18].populated = true;
//     this.grid[16][20].populated = true;
//     this.grid[16][25].populated = true;
//
//     this.grid[17][13].populated = true;
//     this.grid[17][18].populated = true;
//     this.grid[17][20].populated = true;
//     this.grid[17][25].populated = true;
//
//     this.grid[18][15].populated = true;
//     this.grid[18][16].populated = true;
//     this.grid[18][17].populated = true;
//     this.grid[18][21].populated = true;
//     this.grid[18][22].populated = true;
//     this.grid[18][23].populated = true;
//
//     this.grid[20][15].populated = true;
//     this.grid[20][16].populated = true;
//     this.grid[20][17].populated = true;
//     this.grid[20][21].populated = true;
//     this.grid[20][22].populated = true;
//     this.grid[20][23].populated = true;
//
//     this.grid[22][13].populated = true;
//     this.grid[22][18].populated = true;
//     this.grid[22][20].populated = true;
//     this.grid[22][25].populated = true;
//
//     this.grid[23][13].populated = true;
//     this.grid[23][18].populated = true;
//     this.grid[23][20].populated = true;
//     this.grid[23][25].populated = true;
//
//     this.grid[24][13].populated = true;
//     this.grid[24][18].populated = true;
//     this.grid[24][20].populated = true;
//     this.grid[24][25].populated = true;
//
//     this.grid[26][15].populated = true;
//     this.grid[26][16].populated = true;
//     this.grid[26][17].populated = true;
//     this.grid[26][21].populated = true;
//     this.grid[26][22].populated = true;
//     this.grid[26][23].populated = true;
//
//   }
//
//   // somePattern: () => {
//   //   this.grid[][].populated = true;
//   //   this.grid[][].populated = true;
//   //   this.grid[][].populated = true;
//   //   this.grid[][].populated = true;
//   //   this.grid[][].populated = true;
//   //   this.grid[][].populated = true;
//   // }
//
//
// };
//
module.exports = templates;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map