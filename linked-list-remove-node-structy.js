// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
  // todo

  // pre-condition to short circuit: if first node is target to be removed,
  // then just return the linked list beginning with the next node
  if (head.val === targetVal) return head.next;

  // otherwise traverset the linked list, keeping track of "prev" node too
  let current = head;
  let prev;

  while (current !== null) {
    if (current.val === targetVal) {
      // link the previous and the next together, splicing out the current from inbetween them
      prev.next = current.next;
      // and return head to return the linkedlist, now modified
      return head;
    } else {
      prev = current;
      current = current.next;
    }
  }
};

module.exports = {
  removeNode,
};
