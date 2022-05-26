function nodeDepths(root) {
  // Write your code here.
  // here is the space optimized version

  // Time complexity:
  // on average: O(log(N))
  // - because we are recursing, assuming a balanced tree, with each recursive call we
  // eliminate half of the nodes
  // worst case: O(N)
  // - in the worst case scenario of a completely unbalanced/degenerate tree, we
  // would have to visit each node in an subsequent frame on the call stack

  // Space complexity:
  // on average and worst case : Constant space complexity O(1)
  // because no matter how many nodes are on the tree (N), we will be storing only one variable,
  // the sum of depths

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
