var isSameTree = function (p, q) {
  // dfs or bfs to compare all nodes' values
  // build up 2 arrays and compare all values

  let tree1 = [];
  let tree2 = [];

  function printTree(node, storageArr) {
    if (node) {
      storageArr.push(node.val);
      if (node.left) {
        printTree(node.left, storageArr);
      } else storageArr.push("#");
      if (node.right) {
        printTree(node.right, storageArr);
      } else storageArr.push("#");
    }
  }

  printTree(p, tree1);
  printTree(q, tree2);

  if (tree1.length !== tree2.length) return false;

  for (let i = 0; i < tree1.length; i++) {
    if (tree1[i] !== tree2[i]) return false;
  }

  return true;
};
