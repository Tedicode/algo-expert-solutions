const minimumIsland = (grid) => {
  // todo

  // instead of keeping a count, initialize a smallest island
  let smallest = Infinity;
  let visited = new Set();

  // iterative code to hop from island to island
  // since its a grid, we'll traverse w/ a nested for loop
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let nextIslandSize = explore(row, col);
      if (nextIslandSize > 0 && nextIslandSize < smallest)
        smallest = nextIslandSize;
    }
  }

  return smallest;

  // traversal code to explore any one island
  function explore(row, col) {
    // first, if out of bounds --  return Infinity
    // also, if it === 'W' -- return Infinity
    // also, if it was already visited -- return Infinity
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return 0;
    if (grid[row][col] === "W") return 0;
    let pos = row + "," + col;
    if (visited.has(pos)) return 0;

    // otherwise,
    // 1. mark it visited
    visited.add(pos);
    // ** remember the nuance of javascript Sets is that remember
    // if you add a non-primitive (reference type/object) to a set,
    // you can't check for it later with set.has() b/c this query
    // will interpret this as another, separate (reference type) value
    // so instead add any pair to the Set as some string type value
    // ^^ see the above comma separated value created for 'pos'
    // 2. initialize the size to 1
    let size = 1;
    // 3. recurse on its neighbors
    // * don't look before you leap. just recurse on each direction
    // and if they are out of bounds, it will be caught in that call
    // ADDING their returned sums to the size
    size += explore(row + 1, col);
    size += explore(row - 1, col);
    size += explore(row, col + 1);
    size += explore(row, col - 1);

    // 4. return size
    return size;
  }
};

module.exports = {
  minimumIsland,
};
