// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
  // todo

  // traverse the tree
  // if we encounter target, return true
  if (!root) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

// Time: O(n)
// Space: due to the frames used on the call stack, O(n) in worst case
// (degenerate tree) and O(logn) in best case (balanced tree)

module.exports = {
  treeIncludes,
};
