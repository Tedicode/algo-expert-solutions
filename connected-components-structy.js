const connectedComponentsCount = (graph) => {
  // todo
  // traverse the graph once, starting with one node
  // and collect all the values in a Set

  // if the number of nodes in this set is still less
  // than the total number of nodes in the graph (keys)
  // then repeat the process on the next unprocessed/unvisited node
  // determine this next starter node by iterating through
  // the keys in the graph and finding one that is not in the set
  // like this:
  let ourSet = new Set();
  let allVertices = Object.keys(graph);
  let startVertex;
  let count = 0;
  let collectedValues;
  let stack;
  let visited;
  let current;

  while (ourSet.size < allVertices.length) {
    for (let key of allVertices) {
      if (!ourSet.has(String(key))) {
        startVertex = key;
        count++;
        break;
      }
    }

    // collectedValues = []
    stack = [startVertex];
    visited = new Set();

    while (stack.length) {
      current = stack.pop();
      if (!visited.has(String(current))) {
        // collectedValues.push(current)
        ourSet.add(String(current));
        visited.add(String(current));
        for (let neighbor of graph[current]) {
          stack.push(neighbor);
        }
      }
    }
    // every time we iterate in the main while loop, increment count
    // that count is what we'll return in the end
    // main traversal logic
  }

  return count;
};

module.exports = {
  connectedComponentsCount,
};
