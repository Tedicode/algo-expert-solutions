const hasPath = (graph, src, dst) => {
  // if we can successfully traverse all the way from src to dst, return true
  // else return false
  let path = [];

  // iterative depth-first approach
  let stack = [src];
  while (stack.length) {
    let currentVertex = stack.pop();
    path.push(currentVertex);
    // consider the neighbors of current vertex and add them to the stack
    for (let neighbor of graph[currentVertex]) {
      if (neighbor === dst) return true;
      stack.push(neighbor);
    }
  }

  return false;
};

module.exports = {
  hasPath,
};
