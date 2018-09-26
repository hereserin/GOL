import Grid from './grid';
// import Cell from './cell.js';
//

let grid_a = new Grid();
let grid_b = new Grid();


document.addEventListener("DOMContentLoaded", function(){


  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 1000;
  canvasEl.height = 600;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 1000, 600);
  let cols
  let rows
  ctx.fillStyle = "gray";
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 60; j++) {
      let x = 1 + ( i * 10 );
      let y = 1 + ( j * 10 );
      ctx.fillRect(x, y, 8, 8);
      cols = i;
    }
    rows = j;
  }
  console.log(cols);
  console.log(rows);
  
  console.log(grid_a);

});
