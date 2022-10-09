// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const maxPathSum = (root, sum = 0) => {
  // may assume the tree is non-empty. so at least root will not be null

  if (root === null) {
    // return 0
    return -Infinity;
    // ^^ zero is not sufficient to return, b/c compared
    // to negative numbers, it may not be evaluted as the smaller
    // and we are returning this to the call site, where that
    // result is compared against another, to pick the MAX of the 2
  }
  if ((root.left === null) & (root.right === null)) return root.val;

  return (
    root.val + Math.max(maxPathSum(root.left, sum), maxPathSum(root.right, sum))
  );
};

module.exports = {
  maxPathSum,
};
