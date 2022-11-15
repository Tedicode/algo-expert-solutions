const largestComponent = (graph) => {
  // todo

  // 2 mechanisms:
  // 1. iterative code to start each new traversal
  // once a single traversal completes, add the length to an array
  // 2. traversal code to pursue each traversal
  // throughout this traversal, keep track of length of traversal/path
  let visited = new Set();
  let pathLengths = [0];

  for (let node in graph) {
    let thisNodesPath = explore(graph, node);
    if (thisNodesPath !== 0) pathLengths.push(thisNodesPath);
  }

  function explore(graph, node, path = []) {
    if (visited.has(String(node))) return 0;

    visited.add(String(node));
    path.push(node);

    for (let neighbor of graph[node]) {
      explore(graph, neighbor, path);
    }

    return path.length;
  }

  return pathLengths.sort((a, b) => b - a)[0];
  // return the greatest from the array of path lengths
};

module.exports = {
  largestComponent,
};
