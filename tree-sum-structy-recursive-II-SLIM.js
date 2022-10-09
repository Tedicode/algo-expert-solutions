// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  // todo

  // slimmer recursive approach
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};

// Time: O(n) - n iterations - to process each node. each iteration is simple addition O(1)
// Space: O(n) - n calls on the call stack - one for each node

module.exports = {
  treeSum,
};
