// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
  // todo

  let current = head;
  let prev;

  while (current !== null) {
    if (prev && current.val === targetVal) {
      prev.next = current.next;
      // and return head, returning the function
      return head;
    } else if (current.val === targetVal) {
      return current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
};

module.exports = {
  removeNode,
};
