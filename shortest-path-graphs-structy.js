const shortestPath = (edges, nodeA, nodeB) => {
  let graph = makeGraph(edges);
  let visited = new Set();
  let stack = [[nodeA, 0]];

  let level = 0;

  while (stack.length) {
    let current = stack.pop();
    let [currentNode, currentLevel] = current;

    if (currentLevel !== level) level++;
    if (visited.has(currentNode)) level--;
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      if (currentNode === nodeB) return currentLevel;

      for (let neighbor of graph[currentNode]) {
        if (neighbor === nodeB) return level + 1;

        stack.push([neighbor, level + 1]);
      }
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
