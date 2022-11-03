const closestCarrot = (grid, startRow, startCol) => {
  // use breadth first traversal to respond when we encounter
  // the first Carrot

  // respond with the distance, which we will keep track of by
  // pairing each item we push to the queue with the distance
  // for that node

  // initialize the queue with the start position, given to us
  let queue = [[startRow, startCol, 0]];
  // DONT FORGET TO ADD THE START POSITION TO THE VISITED LIST TOO
  let visited = new Set([startRow + "," + startCol]);

  while (queue.length) {
    let current = queue.shift();
    let [currentX, currentY, distance] = current;
    if (grid[currentX][currentY] === "C") return distance;

    // else, mark visited and push all neighbors to queue
    let adjustments = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let [x, y] of adjustments) {
      let neighborX = currentX + x;
      let neighborY = currentY + y;

      let pos = neighborX + "," + neighborY;
      let outOfBounds =
        neighborX < 0 ||
        neighborX >= grid.length ||
        neighborY < 0 ||
        neighborY >= grid[0].length;
      if (
        !outOfBounds &&
        !visited.has(pos) &&
        grid[neighborX][neighborY] !== "X"
      ) {
        visited.add(pos);
        queue.push([neighborX, neighborY, distance + 1]);
      }
    }
  }

  return -1;
};

module.exports = {
  closestCarrot,
};
