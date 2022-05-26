function nodeDepths(root, depth = 0) {
  // Write your code here.
  // Optimal Recursive approach:

  // base case:
  if (!root) return 0;
  // recursive case:
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

// Time Complexity: O(n)
// Space Complexity: O(h)
// where h = height of tree

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
