
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
  }

  buildGrid() {
    this.canvasEl.width = 800;
    this.canvasEl.height = 400;

    // const ctx = this.canvasEl.getContext("2d");
    this.ctx.fillStyle = "purple";
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

  toggleSquare(coords) {

  }

  convertCoords(coords) {
    let x = coords[0];
    let y = coords[1];
    let x_loc = 1 + ( x * 10 );
    let y_loc = 1 + ( y * 10 );
    return [x_loc, y_loc];
  }

  clickLocToBoxCoords() {

  }

  respondToClick(e) {
    // console.log(this);
    // const clickLocation = this.getMousePos(e);
    // console.log(clockLocation);

    const area = this.canvasEl.getBoundingClientRect();
    // debugger
    const clickLocation = {
      x: e.screenX - area.left,
      y: e.screenY - area.top
    };

    let a = Math.floor(clickLocation.x/10);
    let b = Math.floor(clickLocation.y/10);
    let boxCoord = [a, b];
    this.birthCell(boxCoord);

    console.log(clickLocation);
    debugger
    let d = "hi";

  }


}

module.exports = CanvasGrid
