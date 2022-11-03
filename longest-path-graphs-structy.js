const longestPath = (graph) => {
  // dont need 'visited' set
  // this is an acyclic graph, directed graph
  // and we DO want to explore/traverse every starting node, as we iterate

  //  iterative code to perform traversal on every start node
  // and return the maximum of all of those different directions taken
  let allPathLengthsInGraph = [];

  for (let node in graph) {
    allPathLengthsInGraph.push(helperRecurse(node, graph));
  }

  return allPathLengthsInGraph.sort((a, b) => b - a)[0];

  // traversal code to perform the traversal (prob recursively)
  function helperRecurse(node, graph, pathSize = 0) {
    // base case for end of a path (node has no neighbors) return 0?
    if (!graph[node].length) return pathSize;

    let neighborPaths = [];
    for (let neighbor of graph[node]) {
      neighborPaths.push(helperRecurse(neighbor, graph, pathSize + 1));
    }
    return Math.max(...neighborPaths);
  }
};

module.exports = {
  longestPath,
};
