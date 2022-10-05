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
    // let node = this.root;
    // let newNode = new Node(val);
    // if (!this.root) {
    //   this.root = newNode;
    //   return this;
    // }
    // if (val >= node.val) {
    //   if (node.right) return node.right.insert(val);
    //   else node.right = newNode;
    // }

    // if (val < node.val) {
    //   if (node.left) return node.left.insert(val);
    //   else node.left = newNode;
    // }

    // return this;
  }
}

//  see recursive construction (and recursive insert method definition)
// in algo expert :
// https://www.algoexpert.io/questions/bst-construction
// recursive nature built in when defining class BST and each Node is itself a BST
// but above, we defined classes for Node and BinarySearchTree separately, with diff properties

var tree = new BinarySearchTree();
tree.insert(7);
tree.insert(6);
tree.insert(12);
tree.insert(15);
console.log(tree.root.left);
console.log(tree.root.right.right);