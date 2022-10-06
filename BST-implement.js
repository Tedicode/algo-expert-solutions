class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;
      while (current) {
        if (val >= current.val) {
          if (current.right) current = current.right;
          else {
            current.right = newNode;
            current = null;
          }
        } else {
          if (current.left) current = current.left;
          else {
            current.left = newNode;
            current = null;
          }
        }
      }
    }

    return this;

    // recursive solution:

    //  see recursive construction (and recursive insert method definition)
    // in algo expert :
    // https://www.algoexpert.io/questions/bst-construction
    // recursive nature built in when defining class BST and each Node is itself a BST
    // but above, we defined classes for Node and BinarySearchTree separately, with diff properties
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      if (val > current.val) current = current.right;
      else current = current.left;
    }

    return null;
  }

  // recursive approach:  find method

  // find(val, node = this.root) {
  //   // ** Note that .find method is only accessible on the root of the tree
  //   // not on any subsequent node. so we can't call '.find' on any node other than root
  //   // so in recursive definition, just pass as an argument, to operate on the next node (lines 64, 67)

  //   if (!node) return null;
  //   if (node.val === val) return true;
  //   if (val > node.val) {
  //     if (!node.right) return null;
  //     else return this.find(val, node.right);
  //   }
  //   if (val < node.val !== null) {
  //     if (node.left) return this.find(val, node.left);
  //     else return null;
  //   }
  // }

  breadthFirstSearch() {
    if (!this.root) return [];
    let q = [this.root];
    let values = [];
    let dequeuedItem;

    while (q.length) {
      dequeuedItem = q.shift();
      if (dequeuedItem.left) q.push(dequeuedItem.left);
      if (dequeuedItem.right) q.push(dequeuedItem.right);
      values.push(dequeuedItem.val);
    }

    return values;
  }

  preOrderDFS() {
    let data = [];
    let current = this.root;

    function helperRecurse(node) {
      if (!node) return;
      data.push(node.val);
      if (node.left) helperRecurse(node.left);
      if (node.right) helperRecurse(node.right);
    }

    helperRecurse(current);
    return data;
  }

  postOrderDFS() {
    let data = [];

    function helperRecurse(node) {
      if (!node) return;
      if (node.left) helperRecurse(node.left);
      if (node.right) helperRecurse(node.right);
      data.push(node.val);
    }

    helperRecurse(this.root);
    return data;
  }

  inOrderDFS() {
    let data = [];

    function helperRecurse(node) {
      if (!node) return;
      if (node.left) helperRecurse(node.left);
      // node.left && helperRecurse(node.left);
      data.push(node.val);
      if (node.right) helperRecurse(node.right);
      // node.right && helperRecurse(node.right)
    }

    helperRecurse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(22);
// console.log(tree.root.left);
// console.log(tree.root.right.right);
console.log(tree.find(3));
console.log(tree.preOrderDFS());
console.log(tree.postOrderDFS());
console.log(tree.inOrderDFS());
