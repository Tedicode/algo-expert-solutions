const hasPath = (graph, src, dst) => {
  // breath first traversal

  let queue = [src];

  while (queue.length) {
    let vertex = queue.shift();
    if (vertex === dst) return true;
    // else consider its neighbors
    for (let neighbor of graph[vertex]) {
      queue.push(neighbor);
    }
  }

  return false;
};

module.exports = {
  hasPath,
};
