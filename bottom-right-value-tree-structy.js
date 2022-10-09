// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const bottomRightValue = (root) => {
  let queue = [root];
  let current;
  while (queue.length) {
    current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return current.val;

  // use a queue - breadth first - to traverse the whole tree
  // as soon as we get to the end of the queue
  // but have held on to the very last element ('current'),
  // then we can return that last remaining element
};

module.exports = {
  bottomRightValue,
};
