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
