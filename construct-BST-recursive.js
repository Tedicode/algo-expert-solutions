// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    let newNode = new BST(value);

    if (value >= this.value) {
      // if this.right is empty, can put the value there
      // else, recurse on this.right (see if value is >= or < IT)
      // (the value will be one of ITS children, just need to find out which one)
      if (this.right === null) this.right = newNode;
      else this.right.insert(value);
    } else {
      // will be its left child (UNLESS THAT spots taken, in which case we'll..)
      // recurse on this.left (do the same comparison, b/c...)
      // the value will be one of ITS children, just need to find out which (left/right)
      if (this.left === null) this.left = newNode;
      else this.left.insert(value);
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    // Write your code here.
    if (value === this.value) return true;
    if (value < this.value) {
      if (this.left === null) return false;
      else return this.left.contains(value);
    } else if (value > this.value) {
      if (this.right === null) return false;
      else return this.right.contains(value);
    }
  }

  remove(value, parent = null) {
    // Write your code here.

    if (value < this.value) {
      return this.left.remove(value, this);
    } else if (value > this.value) {
      return this.right.remove(value, this);
    } else {
      // we've found the value to remove
      if ((this.left !== null) & (this.right !== null)) {
        // if we have two children
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else {
        // we have only 1 or zero children
        if (parent === null) {
          // this is the root node we're removing (no parent)
          // so replace the node's data with that of its child (whether left, right or null)
          if (this.left !== null) {
            this.value = this.left.value;
            this.right = this.left.right;
            this.left = this.left.left;
          } else if (this.right !== null) {
            this.value = this.right.value;
            this.left = this.right.left;
            this.right = this.right.right;
          } else {
            // it's the only node in the tree we've been asked to remove. So do nothing
          }
        } else {
          // there is a parent node
          if (parent.left === this) {
            // its the left child
            parent.left = this.left !== null ? this.left : this.right;
          } else if (parent.right === this) {
            // its the right child
            parent.right = this.left !== null ? this.left : this.right;
          }
        }
      }
    }

    // first FIND the node with this value (like contains method did)
    // if this value is less than current node's value, keep searching LEFT
    // if this value is greater than current node's value, keep searching RIGHT
    // if this value IS the current node, we can start doing the work to remove it:
    // several edge cases branch from here:
    // 1. if the node has TWO children:
    // then we'll find the min value in the tree and simply reassign VALUE
    // 2. else, the node only has ONE or ZERO children:
    // several edge cases branch from here too:
    // a. there is NO parent (this is the root node we're removing)
    // we replace it with its one child (whether left or right)
    // this entails replacing the node's data (.value, .left and .right)
    // with all of that same data of the determined child (left or right)
    // in fact if it has NO children, we can just reassign node's value: Null
    // b. there IS a parent:
    // first find out if the node ITSELF is its parent's left or right child
    // because we'll replace itself - with its OWN child (left right or null)
    // meaning assign its parent.left or parent.right - to its own child

    // Do not edit the return statement of this method.
    return this;
  }

  // Need to create a helper function to get minimum value for replacement
  getMinValue() {
    if (this.left === null) return this.value;
    else return this.left.getMinValue();
  }
}

// Do not edit the line below.
exports.BST = BST;
