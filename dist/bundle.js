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

/***/ "./canvas_grid.js":
/*!************************!*\
  !*** ./canvas_grid.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {


class CanvasGrid {
  constructor(canvasEl) {
    this.canvasEl = canvasEl;
    this.ctx = this.canvasEl.getContext("2d")
    this.fillSquare = this.fillSquare.bind(this)
  }

  buildGrid() {
    this.canvasEl.width = 1000;
    this.canvasEl.height = 600;

    // const ctx = this.canvasEl.getContext("2d");
    this.ctx.fillStyle = "purple";
    this.ctx.fillRect(0, 0, 1000, 600);
    let cols
    let rows
    this.ctx.fillStyle = "black";
    for (var i = 0; i < 100; i++) {
      for (var j = 0; j < 60; j++) {
        let x = 1 + ( i * 10 );
        let y = 1 + ( j * 10 );
        this.ctx.fillRect(x, y, 8, 8);
        cols = i;
      }
      rows = j;
    }
  }

  fillSquare(coords) {
    console.log(this);
    console.log(this.ctx);
    const squareArea = this.convertCoords(coords);
    this.ctx.fillStyle = 'yellow';
    this.ctx.fillRect(squareArea[0], squareArea[1], 8, 8);
  }

  convertCoords(coords) {
    let x = coords[0];
    let y = coords[1];
    let x_loc = 1 + ( x * 10 );
    let y_loc = 1 + ( y * 10 );
    return [x_loc, y_loc];
  }

}

module.exports = CanvasGrid


/***/ }),

/***/ "./cell.js":
/*!*****************!*\
  !*** ./cell.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {


class Cell {
  constructor(a, b, populated=false) {
    this.coordinates = [a,b]
    this.populated = populated;
  }

  is_populated_in_next_generation() {
    const n = this.number_of_populated_neighbors()

    if (n == 3) {
      return true;
    } else if (n == 2 && this.populated) {
      return true;
    } else {
      return false;
    }
  }

  number_of_populated_neighbors() {
    return this.neighbors().reduce((acc, neighbor) => {
      if (neighbor && neighbor.populated) {
        return acc + 1;
      } else {
        return acc
      }
    }, 0);
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



//  Any live cell with fewer than two live neighbors dies, as if by under population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// if the sum of all nine fields in a given
// neighborhood is three, the inner field state
// for the next generation will be life; if the all-field sum is four,
// the inner field retains its current state;
// and every other sum sets the inner field to death.

}

module.exports = Cell;


/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Grid = __webpack_require__(/*! ./grid */ "./grid.js");
const Cell = __webpack_require__(/*! ./cell.js */ "./cell.js");

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


/***/ }),

/***/ "./gol.js":
/*!****************!*\
  !*** ./gol.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Grid = __webpack_require__(/*! ./grid */ "./grid.js");
const Game = __webpack_require__(/*! ./game */ "./game.js");
const Cell = __webpack_require__(/*! ./cell */ "./cell.js");
const CanvasGrid = __webpack_require__(/*! ./canvas_grid */ "./canvas_grid.js");



document.addEventListener("DOMContentLoaded", function(){
// will delete this code
  let grid_a = new Grid();
  let grid_b = new Grid();
  let game = new Game();
  let new_cell = new Cell();

  // debugger
  // grid_a.generate_next_gen_grid();
  // console.log(grid_a.next_gen_grid);
  // game.step_generation();
  // console.log(game.next_gen_grid);
  // will delete this code

  // grab canvas
  // pass it to canvasGrid class
  // pass that canvasGrid to new instance of game
  // call play on the game

  const canvasEl = document.getElementById("mycanvas");
  let canvasInstance = new CanvasGrid(canvasEl);
  canvasInstance.buildGrid();

  window.fillSquare = canvasInstance.fillSquare;

  // console.log(cols);
  // console.log(rows + 4);
  // console.log("test");
  //
  // console.log(grid_a);
  // console.log(game);

});


/***/ }),

/***/ "./grid.js":
/*!*****************!*\
  !*** ./grid.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Cell = __webpack_require__(/*! ./cell.js */ "./cell.js");
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map