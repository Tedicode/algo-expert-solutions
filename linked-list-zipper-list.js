// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
  // todo

  let current = head1;
  let pointerA = head1.next;
  let pointerB = head2;
  let count = 0;

  while (pointerA !== null && pointerB !== null) {
    // when count is even, add from pointerB
    // when count is odd, add from pointerA
    if (count % 2 === 0) {
      current.next = pointerB;
      pointerB = pointerB.next;
    } else {
      current.next = pointerA;
      pointerA = pointerA.next;
    }
    current = current.next;
    count++;
  }

  if (pointerA === null) {
    // then append the rest of currentB
    current.next = pointerB;
    return head1;
  } else if (count % 2 !== 0 && pointerB === null) {
    current.next = pointerA;
    return head1;
  }

  return head1;
};

module.exports = {
  zipperLists,
};
