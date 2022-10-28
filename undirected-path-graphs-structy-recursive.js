const undirectedPath = (edges, nodeA, nodeB) => {
  // create the graph
  let graph = {};
  for (let pair of edges) {
    let [v1, v2] = pair;
    if (!graph[v1]) graph[v1] = [v2];
    else graph[v1].push(v2);
    if (!graph[v2]) graph[v2] = [v1];
    else graph[v2].push(v1);
  }

  //  need to track already visited nodes
  let visited = {};
  // helper function to explore every path to see if one yields A-B path
  function helperRecurse(graph, src, dst) {
    if (src === dst) return true;
    visited[src] = true;

    for (let neighbor of graph[src]) {
      if (neighbor === dst) return true;
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        if (helperRecurse(graph, neighbor, dst) === true) return true;
      }
    }

    return false;
  }

  return helperRecurse(graph, nodeA, nodeB);
};

module.exports = {
  undirectedPath,
};
