// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  // iterative:

  let arr = [];

  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
  // Time: O(N)
  // Space: O(N)
};

module.exports = {
  linkedListValues,
};
