// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
  // iterative

  let current = head;
  let prev = null;

  while (current !== null) {
    let holdingNext = current.next;
    current.next = prev;
    prev = current;
    current = holdingNext;
  }

  return prev;
};

module.exports = {
  reverseList,
};
