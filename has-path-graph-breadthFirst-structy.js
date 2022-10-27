const hasPath = (graph, src, dst) => {
  // breath first traversal

  // Time: O(e) - where e is number of edges in the graph
  // -- though the while loop, containin a shift() operation might converge toward
  // n^2 in the worst case (where graph is basically a line), this complexity is surpassed
  // by the operation of processing every single neighbor of every single vertex (processing each edge)
  // Space: O(n) - where n is number of nodes/vertices in the graph
  // -- b/c we store a queue which may grow, in worst case scenario, to a length of total number of nodes/vertices

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
