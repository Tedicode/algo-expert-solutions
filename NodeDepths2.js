function nodeDepths(root) {
  // Write your code here.
  // Space optimized version of the recursive approach:

  // Time complexity:
  // O(N)
  // because we will have to visit each node in the tree
  // but we're only doing constant time operations for each node

  // Space complexity:
  //  O(h)   -- in proportion to the height of the tree
  // because at most, at any given time, the number of frames we have on the stack will be equal
  // to the height of the tree (depth of the leaf node at the end)
  // and no matter how many nodes are on the tree (N), we will be storing only one variable,
  // in worst case scenario of a completely unbalanced/degenerate tree, h = N (height = # of nodes), so O(N)
  // and we would have to visit each node in a subsequent frame/function call on the call stack.
  // in a balanced tree, O(h) starts to look like O(log(N))

  // create a variable to store the sum of all depths
  // create a helper function that will recursively visit each node, keeping track of the current depth
  // incrementing the sum by each node depth, with each recursive call as each node is visited
  // after traversing the entire tree, return the sum

  let sumOfDepths = 0;

  function getNodeDepth(node, currentDepth) {
    if (!node) return;

    sumOfDepths += currentDepth;
    currentDepth++;

    if (!node.left && !node.right) return;
    getNodeDepth(node.left, currentDepth);
    getNodeDepth(node.right, currentDepth);
  }

  getNodeDepth(root, 0);

  return sumOfDepths;
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
