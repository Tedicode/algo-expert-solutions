// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (node, prev = null) => {
  // recursive
  if (node === null) return prev;

  let holdingNext = node.next;
  node.next = prev;
  prev = node;
  return reverseList(holdingNext, prev);
};

module.exports = {
  reverseList,
};
