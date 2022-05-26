function nodeDepths(root) {
  // Write your code here.

  // create an array to store all of the nodes' depths
  // create a helper function that will recursively visit each node, keeping track of the current depth
  // incrementing the depth with each recursive call and pushing the depth value to the array
  // as each node is visited

  // after traversing the entire tree, we can sum up the values in this array and return the sum

  const arrayOfDepths = [];

  function getNodeDepth(node, currentDepth) {
    if (!node) return;

    arrayOfDepths.push(currentDepth);
    currentDepth++;

    if (!node.left && !node.right) return;
    getNodeDepth(node.left, currentDepth);
    getNodeDepth(node.right, currentDepth);
  }

  getNodeDepth(root, 0);
  const sum = arrayOfDepths.reduce((a, c) => a + c);
  return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
