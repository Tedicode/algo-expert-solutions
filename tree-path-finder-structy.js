// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target, pathArr = []) => {
  // todo

  // not just finding the target value,
  // but keeping track of every path, and returning THAT path (in an array)
  // if it results in the target

  // traverse the tree, and base cases will return the array OR null
  // if we get to the end of a branch, and no target found, then return null
  if (root === null) return null;
  if (root.val === target) return [...pathArr, root.val];
  return (
    pathFinder(root.left, target, [...pathArr, root.val]) ||
    pathFinder(root.right, target, [...pathArr, root.val])
  );
};

module.exports = {
  pathFinder,
};
