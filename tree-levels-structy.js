// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeLevels = (root) => {
  // todo

  // performing BFS
  // creating an array and pushing it to the overall array once we've collected all nodes
  // of one level

  let allLevelsArr = [];

  let queue = [[root, 0]];
  let currentLevel = 0;
  let currentArr = [];

  while (queue.length) {
    let [current, level] = queue.shift();

    if (!current) return [];

    if (level !== currentLevel) {
      allLevelsArr.push(currentArr);
      currentArr = [];
      currentLevel = level;
    }

    currentArr.push(current.val);

    if (current.left) queue.push([current.left, level + 1]);
    if (current.right) queue.push([current.right, level + 1]);
  }

  allLevelsArr.push(currentArr);
  return allLevelsArr;
};

module.exports = {
  treeLevels,
};
