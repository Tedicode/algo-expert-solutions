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

// Time:
// O(n) - where n is number of nodes in the tree

// Space:
// AVERAGE case: O(logn) or O(d) where d = depth of the tree :
// - when we recurse down a balanced tree, we'll use frames on the call stack
// but only as many as there are nodes in one branch
// WORST case: O(n)
// - when we have a totally unbalanced tree, with all n nodes on one branch,
// we'll be using up to 'n' frames on the call stack at one time

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
