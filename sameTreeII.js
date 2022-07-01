var isSameTree = function (tree1, tree2) {
  // base cases:

  // return true if neither node exists (both are null)
  if (!tree1 && !tree2) return true;
  // and return false if only one of the nodes exists
  if (!tree1 || !tree2) return false;
  // return false if/when the two node values passed to the current frame are not equal
  if (tree1.val !== tree2.val) return false;

  // recurse to compare the trees'child nodes on both left and right sides(child nodes)

  return (
    isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
  );
};
