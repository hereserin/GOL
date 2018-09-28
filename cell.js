
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
