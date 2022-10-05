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
          else (current.right = newNode), (current = null);
        } else {
          if (current.left) current = current.left;
          (current.left = newNode), (current = null);
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

  // find(val) {
  //   if (!this.root) return null;
  //   // check if root is the val
  //   // otherwise traverse the tree until finding the val
  //   // if we arrive at a leaf (child is null), without finding vall, return null
  //   let current = this.root;
  //   while (current) {
  //     if (current.val === val) return true;
  //     if (val > current.val) current = current.right;
  //     else current = current.left;
  //   }

  //   return null;
  // }

  // recursive approach:  find method

  find(val, node = this.root) {
    // ** Note that .find method is only accessible on the root of the tree
    // not on any subsequent node. so we can't call '.find' on any node other than root
    // so in recursive definition, just pass as an argument, to operate on the next node (lines 64, 67)

    if (!node) return null;
    if (node.val === val) return true;
    if (val > node.val) {
      if (!node.right) return null;
      else return this.find(val, node.right);
    }
    if (val < node.val !== null) {
      if (node.left) return this.find(val, node.left);
      else return null;
    }
  }
}

var tree = new BinarySearchTree();
tree.insert(7);
tree.insert(6);
tree.insert(12);
tree.insert(15);
console.log(tree.root.left);
console.log(tree.root.right.right);
console.log(tree.find(11));
