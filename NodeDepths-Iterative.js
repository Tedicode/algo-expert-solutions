function nodeDepths(root) {
  // Write your code here.

  // Iterative solution:
  // use a stack to store/stack up the nodes, attending to the top node on the stack at a time
  // initialize the stack with one item: an array holding both the root node, and its depth of zero
  // processing a node will entail 1. adding its depth to the overall sum of depths
  // and then 2. checking to see if it has children. if it does, add its children to the stack
  // each child is added to the stack as an item (an array) holding both the child node and the
  // child node's depth ( equal to the node's own depth + 1 )
  // *while* the stack (array) has any length, pop off the top item to be processed
  // after the while loop breaks, return the resulting sum

  // Time complexity: O(N)
  // because we must visit each node to process it, so we have N iterations in the while loop,
  // but for each iteration, we are operating only in constant time (using same # of operations)
  // Space complexity: O(N)
  // we are storing, at most, N items in the stack (an array) at once
  // and then a single variable to hold the sum (O(1), which is negligible next to O(N))

  let sumOfDepths = 0;

  let stack = [[root, 0]];
  while (stack.length) {
    let topItem = stack.pop();
    let currentNode = topItem[0];
    let depth = topItem[1];
    sumOfDepths += depth;

    if (currentNode.left) stack.push([currentNode.left, depth + 1]);
    if (currentNode.right) stack.push([currentNode.right, depth + 1]);
  }

  return sumOfDepths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
