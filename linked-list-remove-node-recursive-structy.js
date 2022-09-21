// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
  // todo

  // recursive approach :

  // base case: empty linkedlist
  if (head === null) return null;
  // base case: we've reached a node with the target value
  if (head.val === targetVal) return head.next;
  // recursive case: we haven't yet reached a node w/ the target value
  head.next = removeNode(head.next, targetVal);
  return head;
};

// we recurse, passing to the next function call the next node
// so that it can be checked and removed if appropriate.
// then we need to attach the remainder of the list from that point on, to prev node
// so each time we recurse, whether or not we end up removing the next node,
// we'll re-attach the remainder of the linkedlist (the return from the next call)
// to the current node in any given function call (assign to .next)
// and then return that node (hands back the entire list to the call site)

module.exports = {
  removeNode,
};
