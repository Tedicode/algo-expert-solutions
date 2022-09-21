class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index, count = 0) => {
  // instructor's approach:
  if (head === null) return null;

  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  if (count === index - 1) {
    const temp = head.next;
    head.next = new Node(value);
    head.next.next = temp;
    // return head
    // technically don't need to return anything here,
    // b/c the recursive call is actually just performing a
    // side effect, not capturing the return  -- Line 30
    // only in the end do we return the list (head) -- Line 31
  }

  insertNode(head.next, value, index, count + 1);
  return head;
};

module.exports = {
  insertNode,
};
