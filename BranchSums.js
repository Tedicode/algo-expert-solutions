// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let listOfSums = [];
  // recurse through the tree, splitting off into branches
  // keep track of the current sum so far from each point in the stack,
  // passing it through to each recursive call to add the current node's value to that sum
  // ONLY at the end of a branch, push the sum of that branch to the listOfSums
  let currentSum = 0;
  DFSearch(root, currentSum);

  function DFSearch(node, currentSum) {
    currentSum += node.value;
    // we are at the end of a branch when the current node has no child nodes
    if (!node.left && !node.right) {
      listOfSums.push(currentSum);
      return;
    }

    // if we are not at the end of the branch, continue down the branch(es), passing the sum down to keep adding
    if (node.left) DFSearch(node.left, currentSum);
    if (node.right) DFSearch(node.right, currentSum);
  }

  // finally, return the list of sums
  return listOfSums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
