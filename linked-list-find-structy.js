// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  // todo
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }

  return false;
};

module.exports = {
  linkedListFind,
};
