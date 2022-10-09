// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  // todo

  // iterative approach:
  // (BFS)

  if (!root) return 0;
  let sum = 0;
  let queue = [root];

  while (queue.length) {
    let current = queue.shift();
    sum += current.val;
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return sum;
};

module.exports = {
  treeSum,
};
