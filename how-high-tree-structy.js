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
};

module.exports = {
  howHigh,
};
