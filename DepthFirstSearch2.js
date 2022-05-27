// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.

// without helper function

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    this.children.forEach((child) => child.depthFirstSearch(array));
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;

// Time complexity: O(N) - because you'll need to visit each node, to store its name
// Space complexity: O(N) - the amount of space you'll need grows in proportion to the number of nodes, b/c you store in the array
// the name of every single node.
// CORRECTION:
// Time complexity : O(v+e) , where v = # vertices (nodes) and e = edges because not only are we processing each vertex,
// we are also recursively calling the function on each child of the node (represented by edges of a vertex)
// Space complexity: O(v) , where v = # of vertices (nodes) because we will store at least one value per node,
// the node's name, in the array. And even if weren't doing that, the number of function calls on the call stack
// will be, in the worst case scenario (degenerate branch), the number of vertices/nodes that we have
