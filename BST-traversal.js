function inOrderTraverse(tree, array) {
  // Write your code here.

  if (tree === null) return;
  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);

  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  if (tree === null) return;
  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);

  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.

  if (tree === null) return;
  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);

  return array;
}

// Time: O(n) - where n is number of nodes in the tree
// - because we are visiting every node
// and using constant time operations at each visit

// Space: O(n) - because we are storing an array with n items
// so even in the best/average case of a blanaced tree, where our use of frames
// on the call stack only racks up O(logn) space complexity,
// our array itself creates O(n) complexity

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
