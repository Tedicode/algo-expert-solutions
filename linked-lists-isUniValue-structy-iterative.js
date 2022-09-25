// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  // todo

  // iterative approach:

  // Time: O(n)
  // Space: O(1)

  let current = head;
  let val = head.val;

  while (current !== null) {
    if (current.val !== val) return false;
    current = current.next;
  }

  return true;
};

module.exports = {
  isUnivalueList,
};
