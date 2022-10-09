// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target, count = 0) => {
  // todo

  if (root === null) return 0;
  let left = treeValueCount(root.left, target, count);
  let right = treeValueCount(root.right, target, count);
  return (root.val === target ? 1 : 0) + left + right;
};

module.exports = {
  treeValueCount,
};
