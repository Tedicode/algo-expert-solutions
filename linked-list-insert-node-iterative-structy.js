class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  // iterative approach:

  let newNode = new Node(value);

  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let count = 1;
  let current = head;

  while (current !== null) {
    if (count === index) {
      // take the new node and attach it to the current node's next
      // but first, attach the remainder of the list as the new node's next
      newNode.next = current.next;
      current.next = newNode;
      break;
    }
    count++;
    current = current.next;
  }

  return head;
};

// Time: O(n)
// visiting each node in the LL once, where we perform simple comparison and re-assignments

// Space: O(1)
// insertion in place. always only creating 3 variables: for newNode, count, and current

module.exports = {
  insertNode,
};
