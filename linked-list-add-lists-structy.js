class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  // todo

  let thirdList = new Node(null);
  let head3 = thirdList;
  let remainder = 0;
  let sum;

  // while at least ONE is not null, keep going, progressing pointers on both input LL's
  // sum up the values at both nodes (or one, if the other is now null)
  // plus the remainder from previous round
  // carry over 10s place if needed (adjusting sum and remainder)
  // assign the final sum as the next digit (new node) for LL3
  // attach to LL3 and progress pointer on LL3
  // and progress pointers of LL1 and LL2

  while (head1 !== null || head2 !== null) {
    sum = remainder;
    if (head1 !== null) sum += head1.val;
    if (head2 !== null) sum += head2.val;
    remainder = 0;
    while (sum > 9) {
      sum -= 10;
      remainder += 1;
    }
    let newNode = new Node(sum);
    head3.next = newNode;
    head3 = head3.next;
    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }

  if (remainder > 0) head3.next = new Node(remainder);

  return thirdList.next;
};

module.exports = {
  addLists,
};
