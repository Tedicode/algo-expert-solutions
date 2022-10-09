// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  // todo
  // recursive approach :

  //   let sum = 0

  function helperRecurse(node) {
    if (node === null) return;
    sum += node.val;

    if (node.left) helperRecurse(node.left);
    if (node.right) helperRecurse(node.right);
    return;
  }

  helperRecurse(root);

  return sum;
};

// Time: O(n)
// Space: O(n)

module.exports = {
  treeSum,
};
