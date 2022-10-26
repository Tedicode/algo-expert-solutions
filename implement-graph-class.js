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

  printAll() {
    for (let key of Object.keys(this.adjacencyList)) {
      console.log(`key/vertex: ${key}`);
      console.log("and its list of edges:");
      for (let edge of this.adjacencyList[key]) console.log(edge);
    }
  }
}

let g = new Graph();

g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addEdge(1, 2);
g.removeVertex(2);

g.printAll();
