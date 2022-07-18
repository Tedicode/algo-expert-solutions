// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  return recurseHelper(tree, -Infinity, Infinity);

  function recurseHelper(tree, minVal, maxVal) {
    if (tree === null) return true;
    if (tree.value < minVal || tree.value >= maxVal) return false;
    return (
      recurseHelper(tree.left, minVal, tree.value) &&
      recurseHelper(tree.right, tree.value, maxVal)
    );
  }
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
