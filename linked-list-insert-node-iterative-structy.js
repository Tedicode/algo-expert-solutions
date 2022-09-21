class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  // iterative approach:

  // create the new Node off the bat
  let newNode = new Node(value);
  // if index === 0, then right away the new node goes at the beginning, and return the LL
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  // otherwise, we'll iterate through LL until we reach the index for insertion.
  // create a variable to track count, to compare with index
  let count = 1;

  // traverse the LL...
  let current = head;

  while (current !== null) {
    if (count === index) {
      // take the new node and attach it to the current node's next
      // but first, attach the remainder of the list as the new node's next
      // then break out of the loop so we can return the head
      // let newNode = new Node(value)
      newNode.next = current.next;
      current.next = newNode;
      break;
    }
    count++;
    current = current.next;
  }

  return head;
};

module.exports = {
  insertNode,
};
