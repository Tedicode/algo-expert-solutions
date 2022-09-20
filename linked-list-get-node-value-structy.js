// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
  // todo

  let idx = 0;
  let current = head;
  while (current !== null) {
    if (idx === index) return current.val;
    idx++;
    current = current.next;
  }

  return null;

  // let arr = [];
  // while (current !== null) {
  //   arr.push(current.val);
  //   current = current.next;
  // }

  // return arr[index] || null;
};

module.exports = {
  getNodeValue,
};
