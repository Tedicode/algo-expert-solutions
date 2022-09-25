// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  // todo

  // traverse the entire list
  // return false as soon as you encounter a different value
  // else, if you arrive at last node (null), then return true
  function helperRecurse(head, val) {
    if (head === null) return true;
    if (head.val !== val) return false;
    return true && helperRecurse(head.next, val);
  }

  return helperRecurse(head, head.val);
};

module.exports = {
  isUnivalueList,
};
