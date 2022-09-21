class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  // todo

  const helperRecurse = (node, value, index, currentIdx) => {
    if (currentIdx === index) {
      // create the new node and insert it
      let newNode = new Node(value);

      newNode.next = node;
      // node.next = newNode
      node = newNode;
    }

    // must put this base case after the one above ^^
    // for cases when inserting the new node at the very end of the LL
    // b/c sometimes we'll enter a call where the current node IS null,
    // but we don't want to return/exit yet. Must first create the new node & append to end
    if (node === null) return null;

    node.next = helperRecurse(node.next, value, index, currentIdx + 1);
    return node;
  };

  return helperRecurse(head, value, index, 0);
};

module.exports = {
  insertNode,
};
