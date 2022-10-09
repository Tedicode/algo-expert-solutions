// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  // todo
  if (!root) return [];
  let values = [];

  let queue = [root];

  while (queue.length) {
    let current = queue.shift();
    values.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return values;
};

module.exports = {
  breadthFirstValues,
};
