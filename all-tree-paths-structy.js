// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (root) => {
  // todo

  // make an array for every single path
  // and push that path into the main array upon reaching its leaf
  // *** will need to pass copies of the array for each recursive call
  // so that we'll have separate paths, instead of using the same array for all calls as
  // passed into the first function call!!

  let allPaths = [];

  function helperRecurse(node, thisPath) {
    thisPath.push(node.val);
    if (node.left === null && node.right === null) {
      allPaths.push(thisPath);
      return;
    }

    if (node.left) helperRecurse(node.left, [...thisPath]);
    if (node.right) helperRecurse(node.right, [...thisPath]);
  }

  helperRecurse(root, []);

  return allPaths;
};

module.exports = {
  allTreePaths,
};
