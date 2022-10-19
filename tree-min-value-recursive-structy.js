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
