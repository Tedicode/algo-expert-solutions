function nodeDepths(root) {
  // Write your code here.

  // Time complexity:
  // on average: O(log(N))
  // - because we are recursing, assuming a balanced tree, with each recursive call we
  // eliminate half of the nodes
  // worst case: O(N)
  // - in the worst case scenario of a completely unbalanced/degenerate tree, we
  // would have to visit each node in an subsequent frame on the call stack

  // Space complexity:
  // on average and worst case : O(N)
  // because no matter how many nodes are on the tree (N), we will be storing N values in
  // our array, to represent each node's depth, before we sum all those values

  // We could optimize the algorithm space-wise if instead of storing an array with all N nodes' depths,
  // pushing each depth value to the array from each recursive call, we simply store the sum, and increment
  // the sum by each depth value from each recursive call.
  // This should give us constant time Space complexity

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
