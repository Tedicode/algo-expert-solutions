// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node, depth = -1) => {
  // todo

  if (node === null) return depth;
  return Math.max(
    howHigh(node.left, depth + 1),
    howHigh(node.right, depth + 1)
  );

  // alt solution from structy:

  // if (node === null) return -1;

  // const leftHeight = howHigh(node.left);
  // const rightHeight = howHigh(node.right);
  // return 1 + Math.max(leftHeight, rightHeight);
};

module.exports = {
  howHigh,
};
