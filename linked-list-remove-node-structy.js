// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
  // todo

  // iterative approach:

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

// Time: O(N) - traversing the entire linked list,
// the while loop perform N iterations, and each iteration
// comprises constant-time operations

// Space: O(1) - constant space - always uses just 2 variables
// to store current and prev node in each iteration

module.exports = {
  removeNode,
};
