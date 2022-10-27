const hasPath = (graph, src, dst) => {
  // if we can successfully traverse all the way from src to dst, return true
  // else return false

  // recursive approach

  function helperRecurse(graph, src, dst) {
    // base case: neighbor (current vertex) IS the destination node
    if (src === dst) return true;

    let neighborsResults = [];
    for (let neighbor of graph[src]) {
      neighborsResults.push(helperRecurse(graph, neighbor, dst));
    }
    // another base case is a dead end (can just return nothing)
    if (neighborsResults.includes(true)) return true;
    return false;
  }

  return helperRecurse(graph, src, dst);
};

module.exports = {
  hasPath,
};
