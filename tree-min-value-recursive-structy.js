// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root, min = Infinity) => {
  // recursive solution slimmer:
  // DFS
  if (!root) return min;
  if (root.val < min) min = root.val;
  return Math.min(treeMinValue(root.left, min), treeMinValue(root.right, min));

  // Time: O(n) - where n is num of nodes on input tree. We visit each nodes
  // each visit, we're processing the node with constant time operations

  // Space: O(n) worst case, O(logn) average case
  // - not using any aux storage but will use up to n frames on the call stack
  // - though on average just log n frames on the stack

  // function helperRecurse(node) {
  //   if (node === null) return;
  //   if (node.val < min) min = node.val;
  //   helperRecurse(node.left);
  //   helperRecurse(node.right);
  //   return;
  // }

  // helperRecurse(root);

  // return min;
};

module.exports = {
  treeMinValue,
};
