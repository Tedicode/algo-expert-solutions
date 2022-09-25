// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  // todo

  // recursive:
  // Time: O(n)
  // will have as many iterations as we have nodes on the LL b/c we'll evaluate each node. And each iteration only comprises constant time operations
  // Space: O(n)
  // will have as many frames on the callstack as we have nodes on the LL

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
