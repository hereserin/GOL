
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
