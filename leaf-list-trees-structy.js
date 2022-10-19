// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root) => {
  // Time: O(n)
  // Space: O(n)
  let leavesArr = [];

  function helperRecurse(node) {
    if (!node) return;
    if (node.left === null && node.right === null)
      return leavesArr.push(node.val);

    if (node.left) helperRecurse(node.left);
    if (node.right) helperRecurse(node.right);
  }

  helperRecurse(root);

  return leavesArr;
};

module.exports = {
  leafList,
};
