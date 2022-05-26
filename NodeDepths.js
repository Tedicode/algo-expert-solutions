function nodeDepths(root) {
  // Write your code here.
  // first recursive approach

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
