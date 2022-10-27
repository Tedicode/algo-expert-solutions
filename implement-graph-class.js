class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [];
    if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [];
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1);
  }

  removeVertex(vertex) {
    // should loop as long as there are any other vertices in the adjacency list for
    // that vertex. For each of these, we can just call the removeEdge method
    for (let edge of this.adjacencyList[vertex]) this.removeEdge(vertex, edge);
    this.adjacencyList[vertex] = [];
    // finally delete the key of the vertex we're removing
    delete this.adjacencyList[vertex];
  }

  DFSrecursive(start) {
    // takes in a vertex as the starting point b/c, unlike a tree, there is no root
    let results = [];
    let visited = {};

    const helperRecurse = (vertex) => {
      if (visited[vertex]) return;
      results.push(vertex);
      visited[vertex] = true;
      if (!this.adjacencyList[vertex]) return;
      let neighbors = this.adjacencyList[vertex];
      for (let neighbor of neighbors) helperRecurse(neighbor);
    };

    helperRecurse(start);
    return results;
  }

  DFSiterative(start) {
    let results = [];
    let visited = {};
    let stack = [start];

    let currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      if (visited[currentVertex]) continue;
      visited[currentVertex] = true;
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) =>
        stack.push(neighbor)
      );
    }
    return results;
  }

  printAll() {
    for (let key of Object.keys(this.adjacencyList)) {
      console.log(`key/vertex: ${key}`);
      console.log("and its list of edges:");
      for (let edge of this.adjacencyList[key]) console.log(edge);
    }
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.printAll();
// console.log(g.DFSrecursive("A"));
console.log(g.DFSiterative("A"));
