function findClosestValueInBst(tree, target) {
  // Write your code here.

  // store the current closest (node's value) in a variable. Initialize this to the root's value
  // store the difference (distance) between the current node's value and the target
  // check to see if the target's value is greater or less than the current node's value
  // if greater, go (recurse) right, and if lesser, go (recurse) left - to evaluate the next difference
  // if there are NO child nodes to recurse on, return the currently stored 'currentClosest'
  // if this next difference is less than the difference currently stored, update the difference and currentClosest
  // then, continue recursing with the same steps through the rest of the tree
  // finally return the currentClosest at the end

  // let currentClosest = tree.value;
  // let difference = Math.abs(target - tree.value);

  // or start like this:
  let currentClosest = tree.value;
  let difference = Infinity;
  findTheClosest(tree);

  function findTheClosest(node) {
    if (!node) return;

    if (Math.abs(target - node.value) < difference) {
      // store new winner
      currentClosest = node.value;

      // store new difference
      difference = Math.abs(target - node.value);
    }

    if (!node.left && !node.right) return;
    // if difference is positive, go right
    if (target - node.value > 0) findTheClosest(node.right);
    // if difference is negative, go left
    else findTheClosest(node.left);
  }

  // return the currentWinner ('closest')
  return currentClosest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
