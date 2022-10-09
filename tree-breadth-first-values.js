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
// time: O(n^2) - while loop iterates n times, and will execute the .shift() method
// each time, which itself has time complexity of n
// * more optimal would be implementing our own class for a queue, using a linkedList.
// that way, we could make accessible methods that can both enqueue and dequeue in constant time, giving the algorithm an overall time complexity of O(n)

// space: O(n) - we have an array for values and an array for queue, each of length n
// O(2n) space that reduces to O(n)

// ***A recursive solution:
// is not practical for breath first search, because it needs a queue order
// so always use an iterative solution for BFS

module.exports = {
  breadthFirstValues,
};
