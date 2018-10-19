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

var Grid = __webpack_require__(/*! ./lib/grid */ "./lib/grid.js");

var Game = __webpack_require__(/*! ./lib/game */ "./lib/game.js");

var Cell = __webpack_require__(/*! ./lib/cell */ "./lib/cell.js");

var CanvasGrid = __webpack_require__(/*! ./lib/canvas_grid */ "./lib/canvas_grid.js");

document.addEventListener("DOMContentLoaded", function () {
  var controlButtons = {
    startButton: document.getElementById("start"),
    stopButton: document.getElementById("stop"),
    resetButton: document.getElementById("reset")
  };
  var templateImages = {
    template1: document.getElementById("template1"),
    template2: document.getElementById("template2"),
    template3: document.getElementById("template3"),
    template4: document.getElementById("template4"),
    template5: document.getElementById("template5"),
    template6: document.getElementById("template6")
  };
  var canvasEl = document.getElementById("mycanvas");
  var canvasInstance = new CanvasGrid(canvasEl);
  canvasInstance.buildGrid();
  var game = new Game(canvasInstance, controlButtons, templateImages);
  game.play();
});

/***/ }),

/***/ "./lib/canvas_grid.js":
/*!****************************!*\
  !*** ./lib/canvas_grid.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CanvasGrid =
/*#__PURE__*/
function () {
  function CanvasGrid(canvasEl) {
    _classCallCheck(this, CanvasGrid);

    this.canvasEl = canvasEl;
    this.game = undefined;
    this.ctx = this.canvasEl.getContext("2d");
    this.respondToClick = this.respondToClick.bind(this);
    this.canvasEl.addEventListener("click", this.respondToClick);
    this.dimenInBoxes = undefined;
    this.game = undefined;
  }

  _createClass(CanvasGrid, [{
    key: "attachToGame",
    value: function attachToGame(game) {
      this.game = game;
    }
  }, {
    key: "buildGrid",
    value: function buildGrid() {
      this.canvasEl.width = 800;
      this.canvasEl.height = 400;
      this.ctx.fillStyle = "#37233a";
      this.ctx.fillRect(0, 0, 800, 400);
      var cols;
      var rows;
      this.ctx.fillStyle = "black";

      for (var i = 0; i < 80; i++) {
        for (var j = 0; j < 40; j++) {
          var x = 1 + i * 10;
          var y = 1 + j * 10;
          this.ctx.fillRect(x, y, 8, 8);
          cols = i;
        }

        rows = j;
      }

      this.dimenInBoxes = [i, j];
    }
  }, {
    key: "acceptArray",
    value: function acceptArray(arr) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          if (arr[i][j]) {
            this.birthCell([i, j]);
          } else {
            this.killCell([i, j]);
          }
        }
      }
    }
  }, {
    key: "fillSquare",
    value: function fillSquare(coords, color) {
      var squareArea = this.convertCoords(coords);
      this.ctx.fillStyle = color;
      this.ctx.fillRect(squareArea[0], squareArea[1], 8, 8);
    }
  }, {
    key: "birthCell",
    value: function birthCell(coords) {
      this.fillSquare(coords, "yellow");
    }
  }, {
    key: "killCell",
    value: function killCell(coords) {
      this.fillSquare(coords, "black");
    }
  }, {
    key: "convertCoords",
    value: function convertCoords(coords) {
      var x = coords[0];
      var y = coords[1];
      var xLoc = 1 + x * 10;
      var yLoc = 1 + y * 10;
      return [xLoc, yLoc];
    }
  }, {
    key: "respondToClick",
    value: function respondToClick(e) {
      var area = this.canvasEl.getBoundingClientRect();
      var clickLocation = {
        x: e.pageX - this.canvasEl.offsetLeft,
        y: e.pageY - this.canvasEl.offsetTop
      };
      var a = Math.floor(clickLocation.x / 10);
      var b = Math.floor(clickLocation.y / 10);
      var boxCoord = [a, b];
      this.toggleOnClick(boxCoord);
    }
  }, {
    key: "toggleOnClick",
    value: function toggleOnClick(coords) {
      var wasPopulated = this.game.passUserInputToGrid(coords);

      if (wasPopulated) {
        this.killCell(coords);
      } else {
        this.birthCell(coords);
      }
    }
  }]);

  return CanvasGrid;
}();

module.exports = CanvasGrid;

/***/ }),

/***/ "./lib/cell.js":
/*!*********************!*\
  !*** ./lib/cell.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cell =
/*#__PURE__*/
function () {
  function Cell(a, b) {
    var populated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Cell);

    this.coordinates = [a, b];
    this.populated = populated;
  }

  _createClass(Cell, [{
    key: "neighbors",
    value: function neighbors() {
      var a = this.coordinates[0];
      var b = this.coordinates[1];
      return [[a, b - 1], [a, b + 1], [a - 1, b], [a + 1, b], [a - 1, b - 1], [a - 1, b + 1], [a + 1, b - 1], [a + 1, b + 1]];
    }
  }]);

  return Cell;
}();

module.exports = Cell;

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Grid = __webpack_require__(/*! ./grid */ "./lib/grid.js");

var Cell = __webpack_require__(/*! ./cell.js */ "./lib/cell.js");

var Game =
/*#__PURE__*/
function () {
  function Game(canvasGrid, controlButtons, templateImages) {
    _classCallCheck(this, Game);

    this.currentGrid = new Grid();
    this.controlButtons = controlButtons;
    this.stop = true;
    this.setupButtons();
    this.canvasGrid = canvasGrid;
    this.canvasGrid.attachToGame(this);
    this.templateImages = templateImages;
    this.setupTemplateIcons();
  }

  _createClass(Game, [{
    key: "setupButtons",
    value: function setupButtons() {
      var _this = this;

      Object.entries(this.controlButtons).forEach(function (buttonArr) {
        return _this.attachButtonToMethod(buttonArr);
      });
    }
  }, {
    key: "setupTemplateIcons",
    value: function setupTemplateIcons() {
      var _this2 = this;

      Object.entries(this.templateImages).forEach(function (iconArr) {
        _this2.attachTemplateIconsToMethod(iconArr);
      });
    }
  }, {
    key: "attachButtonToMethod",
    value: function attachButtonToMethod(butnArr) {
      var that = this;
      var methodChooser = {
        startButton: that.startButtonMethod,
        stopButton: that.stopButtonMethod,
        resetButton: that.resetButtonMethod
      };
      butnArr[1].addEventListener("click", function (e) {
        methodChooser[butnArr[0]].apply(that);
      });
    }
  }, {
    key: "attachTemplateIconsToMethod",
    value: function attachTemplateIconsToMethod(iconArr) {
      var that = this;
      var templateChooser = {
        template1: "pulsar",
        template2: "glider",
        template3: "pentadecathlon",
        template4: "another1",
        template5: "another2",
        template6: "another3"
      };
      iconArr[1].addEventListener("click", function (e) {
        that.templateButtonMethod(templateChooser[iconArr[0]]);
        that.startButtonMethod.apply(that);
      });
    }
  }, {
    key: "play",
    value: function play() {
      var _this3 = this;

      this.renderGridToCanvas();
      var j = 0;
      var gameInt = setInterval(function () {
        _this3.stepGeneration();

        _this3.renderGridToCanvas();

        j++;

        if (j > 0) {
          clearInterval(gameInt);
        }
      }, 500);
    }
  }, {
    key: "startButtonMethod",
    value: function startButtonMethod() {
      var _this4 = this;

      this.stop = false;
      this.renderGridToCanvas();
      var gameInt = setInterval(function () {
        _this4.stepGeneration();

        _this4.renderGridToCanvas();

        if (_this4.stop) {
          clearInterval(gameInt);
        }
      }, 500);
    }
  }, {
    key: "stopButtonMethod",
    value: function stopButtonMethod() {
      this.stop = true;
    }
  }, {
    key: "resetButtonMethod",
    value: function resetButtonMethod() {
      this.currentGrid.reset();
      this.renderGridToCanvas();
    }
  }, {
    key: "templateButtonMethod",
    value: function templateButtonMethod(templateName) {
      this.currentGrid.useTemplate(templateName);
      this.renderGridToCanvas();
    }
  }, {
    key: "stepGeneration",
    value: function stepGeneration() {
      this.nextGenGrid = this.currentGrid.nextGenGrid();
      this.currentGrid = this.nextGenGrid;
    }
  }, {
    key: "renderGridToCanvas",
    value: function renderGridToCanvas() {
      this.canvasGrid.acceptArray(this.currentGrid.provideArray());
    }
  }, {
    key: "passUserInputToGrid",
    value: function passUserInputToGrid(coords) {
      var wasPopulated = this.currentGrid.acceptUserInput(coords);
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/grid.js":
/*!*********************!*\
  !*** ./lib/grid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cell = __webpack_require__(/*! ./cell.js */ "./lib/cell.js");

var templates = __webpack_require__(/*! ./templates.js */ "./lib/templates.js");

var Grid =
/*#__PURE__*/
function () {
  function Grid() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 80;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;

    _classCallCheck(this, Grid);

    this.grid = this.createGrid(a, b);
  }

  _createClass(Grid, [{
    key: "createGrid",
    value: function createGrid(a, b, template) {
      var outputGrid = [];

      for (var i = 0; i < a; i++) {
        var newRow = [];

        for (var j = 0; j < b; j++) {
          var newCell = new Cell(i, j, this.shouldBePopulated(i, j));
          newRow.push(newCell);
        }

        outputGrid.push(newRow);
      }

      return outputGrid;
    }
  }, {
    key: "populateACell",
    value: function populateACell(coords) {
      this.grid[coords[0]][coords[1]].populated = true;
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate(template) {
      var _this = this;

      var chosenTemplate = templates[template];
      chosenTemplate.forEach(function (setOfCoords) {
        return _this.populateACell(setOfCoords);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.grid = this.createGrid(80, 40, templates.blankReset);
      this.renderTemplate("blankReset");
    }
  }, {
    key: "useTemplate",
    value: function useTemplate(templateName) {
      this.grid = this.createGrid(80, 40, templates.blankReset);
      this.renderTemplate(templateName);
    }
  }, {
    key: "testInitialPopulate",
    value: function testInitialPopulate() {
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
  }, {
    key: "shouldBePopulated",
    value: function shouldBePopulated(n, m) {
      return false;
    }
  }, {
    key: "acceptArray",
    value: function acceptArray(arr) {
      this.grid = arr;
    }
  }, {
    key: "provideArray",
    value: function provideArray() {
      return this.grid.map(function (row) {
        return row.map(function (cell) {
          return cell.populated;
        });
      });
    }
  }, {
    key: "acceptUserInput",
    value: function acceptUserInput(coords) {
      var x = coords[0];
      var y = coords[1];
      var wasPopulated = this.grid[x][y].populated;
      this.grid[x][y].populated = !this.grid[x][y].populated;
      return wasPopulated;
    }
  }, {
    key: "nextGenGrid",
    value: function nextGenGrid() {
      var _this2 = this;

      var nextGenGrid = new this.constructor(this.grid.length, this.grid[0].length);
      var nextGenArr = this.grid.map(function (row) {
        return row.map(function (eachCell) {
          var populate = _this2.cellIsPopulatedInNextGeneration(eachCell);

          var coords = eachCell.coordinates;
          var nextGen = new Cell(coords[0], coords[1], populate);
          return nextGen;
        });
      });
      nextGenGrid.acceptArray(nextGenArr);
      return nextGenGrid;
    }
  }, {
    key: "cellIsPopulatedInNextGeneration",
    value: function cellIsPopulatedInNextGeneration(cell) {
      var n = this.numberOfPopulatedNeighbors(cell);

      if (n == 3) {
        return true;
      } else if (n == 2 && cell.populated) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "numberOfPopulatedNeighbors",
    value: function numberOfPopulatedNeighbors(cell) {
      var _this3 = this;

      return cell.neighbors().reduce(function (acc, neighbor) {
        if (_this3.coordsAreInGrid(neighbor) && _this3.grid[neighbor[0]][neighbor[1]].populated) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
    }
  }, {
    key: "coordsAreInGrid",
    value: function coordsAreInGrid(coordsArr) {
      if (coordsArr[0] < this.grid.length && coordsArr[0] > -1) {
        if (coordsArr[1] < this.grid[0].length && coordsArr[1] > -1) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Grid;
}();

module.exports = Grid;

/***/ }),

/***/ "./lib/templates.js":
/*!**************************!*\
  !*** ./lib/templates.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var templates = {
  'blankReset': [],
  'test': [[13, 15], [13, 16], [13, 17], [13, 21]],
  'pulsar': [[13, 15], [13, 16], [13, 17], [13, 21], [13, 22], [13, 23], [15, 13], [15, 18], [15, 20], [15, 25], [16, 13], [16, 18], [16, 20], [16, 25], [17, 13], [17, 18], [17, 20], [17, 25], [18, 15], [18, 16], [18, 17], [18, 21], [18, 22], [18, 23], [20, 15], [20, 16], [20, 17], [20, 21], [20, 22], [20, 23], [22, 13], [22, 18], [22, 20], [22, 25], [23, 13], [23, 18], [23, 20], [23, 25], [24, 13], [24, 18], [24, 20], [24, 25], [26, 15], [26, 16], [26, 17], [26, 21], [26, 22], [26, 23]],
  'glider': [[6, 8], [7, 8], [8, 7], [8, 8], [7, 6]],
  'pentadecathlon': [[38, 17], [38, 19], [36, 18], [37, 18], [39, 18], [40, 18], [41, 18], [42, 18], [44, 18], [45, 18], [43, 17], [43, 19]],
  'another1': [[18, 12], [16, 13], [18, 13], [19, 13], [16, 14], [18, 14], [16, 15], [14, 16], [12, 17], [14, 17]],
  'another2': [[23, 18], [24, 18], [25, 18], [26, 18], [27, 18], [28, 18], [29, 18], [30, 18], [32, 18], [33, 18], [34, 18], [35, 18], [36, 18], [40, 18], [41, 18], [42, 18], [49, 18], [50, 18], [51, 18], [52, 18], [53, 18], [54, 18], [55, 18], [57, 18], [58, 18], [59, 18], [60, 18], [61, 18]],
  'another3': [[15, 18], [16, 18], [17, 18], [19, 18], [15, 19], [18, 20], [19, 20], [16, 21], [17, 21], [19, 21], [15, 22], [17, 22], [19, 22]] // 'Gosper glider gun': [
  // NOT READY TO USE
  // THIS HITS THE EDGES AND DOESNT WORK
  //   [2, 10],
  //   [2, 11],
  //
  //   [3, 10],
  //   [3, 11],
  //
  //   [12, 10],
  //   [12, 11],
  //   [12, 12],
  //
  //   [13, 9],
  //   [13, 13],
  //
  //   [14, 8],
  //   [14, 14],
  //
  //   [15, 8],
  //   [15, 14],
  //
  //   [16, 11],
  //
  //   [17, 9],
  //   [17, 13],
  //
  //   [18, 10],
  //   [18, 11],
  //   [18, 12],
  //
  //   [19, 11],
  //
  //   [22, 8],
  //   [22, 9],
  //   [22, 10],
  //
  //   [23, 8],
  //   [23, 9],
  //   [23, 10],
  //
  //   [24, 7],
  //   [24, 11],
  //
  //   [26, 6],
  //   [26, 7],
  //   [26, 11],
  //   [26, 12],
  //
  //   [36, 11],
  //   [36, 12],
  //
  //   [37, 11],
  //   [37, 12],
  // ]
  // somePattern: [
  // [26, 15],
  // [26, 16],
  // [26, 17],
  // [26, 21],
  // [26, 22],
  // [26, 23],
  // ]

};
module.exports = templates;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map