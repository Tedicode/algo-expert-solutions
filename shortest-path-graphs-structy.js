const shortestPath = (edges, nodeA, nodeB) => {
  // for most graph problems that ask you to find a shortest path,
  // you'll want to employ breadth first search (bc you will encounter
  // the target sooner than you would by pursuing paths deeply)
  let graph = makeGraph(edges);
  let visited = new Set();
  let queue = [[nodeA, 0]];

  while (queue.length) {
    let current = queue.shift();
    let [currentNode, currentLevel] = current;
    if (currentNode === nodeB) return currentLevel;

    if (!visited.has(currentNode)) {
      // important to mark the nodes visited when enqueueing, instead of when dequeueing, b/c
      // If you enqueue a node and don't mark it as discovered, you run the risk of enqueueing it again and processing duplicates
      visited.add(currentNode);
      for (let neighbor of graph[currentNode])
        queue.push([neighbor, currentLevel + 1]);
    }
  }

  return -1;
};

function makeGraph(edges) {
  let graph = {};

  for (let edge of edges) {
    let [v1, v2] = edge;
    if (!graph[v1]) graph[v1] = [];
    if (!graph[v2]) graph[v2] = [];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  return graph;
}

module.exports = {
  shortestPath,
};
