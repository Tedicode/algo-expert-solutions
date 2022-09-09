// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  // // iterative:

  // let arr = []

  // let current = head
  // while(current !== null) {
  //   arr.push(current.val)
  //   current = current.next
  // }

  // return arr
  // Time: O(N)
  // Space: O(N)

  // recursive:

  //   let arrayOfVals = []

  function helperRecurse(arr, node) {
    if (node === null) return arr;
    arr.push(node.val);
    return helperRecurse(arr, node.next);
  }

  return helperRecurse(arrayOfVals, head);
};

module.exports = {
  linkedListValues,
};
