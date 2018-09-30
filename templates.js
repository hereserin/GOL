const templates = {

  blankReset: () => {
    return null;
  },

  patternOne: () => {
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



};

module.exports = templates;
