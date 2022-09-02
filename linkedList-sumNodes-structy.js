// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
  // todo

  // recursive approach :

  let nodeSum = 0;
  function helperRecurse(sum, node) {
    if (node === null) return sum;
    sum += node.val;
    return helperRecurse(sum, node.next);
  }

  return helperRecurse(nodeSum, head);

  // iterative:

  // let sum = 0;
  // let current = head;
  // while (current !== null) {
  //   sum += current.val;
  //   current = current.next;
  // }
  // return sum;
};

module.exports = {
  sumList,
};
