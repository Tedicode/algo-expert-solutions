const islandCount = (grid) => {
  // todo

  const visited = new Set();

  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(row, col) === true) count++;
    }
  }

  return count;

  function explore(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return false;

    if (grid[row][col] === "W") return false;

    let pos = row + "," + col;
    if (visited.has(pos)) return false;

    visited.add(pos);

    explore(row - 1, col);
    explore(row + 1, col);
    explore(row, col - 1);
    explore(row, col + 1);
    return true;
  }
};

module.exports = {
  islandCount,
};
