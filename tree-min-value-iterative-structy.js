// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  // In Breadth first (using a queue),  the "next up" to process will be all siblings before children
  // In Depth first (using a stack), "next up" to process will be children before siblings

  // iterative - BFS
  let min = Infinity;
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current.val < min) min = current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return min;
};

module.exports = {
  treeMinValue,
};
