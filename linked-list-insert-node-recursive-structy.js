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
      node = newNode;
    }

    // must put this base case after the one above ^^
    if (node === null) return null;
    // for cases when inserting the new node at the very end of the LL
    // b/c sometimes we'll enter a call where the current node IS null,
    // but we don't want to return/exit yet. Must first create the new node & append to end

    node.next = helperRecurse(node.next, value, index, currentIdx + 1);
    return node;
  };

  return helperRecurse(head, value, index, 0);
};

// Time: O(n) - where n is number of nodes in the LL
// we'll have n function calls (to process each node), and the function call comprises only constant time operations (comparisons and assignments)

// Space: O(n)  - where n is number of nodes in the LL
// we are visiting and processing each node in a recursive call, so
// that takes n frames on the call stack. otherwise, we create one additional variable to hold the current index in each call, and one variable for creating the new Node to insert

module.exports = {
  insertNode,
};
