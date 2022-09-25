class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  // todo

  let tail = head1.val < head2.val ? head1 : head2;
  let resultingList = tail;
  if (tail === head1) {
    current1 = head1.next;
    current2 = head2;
  } else {
    current1 = head1;
    current2 = head2.next;
  }

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return resultingList;
};

module.exports = {
  mergeLists,
};
