// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
  // todo

  let averagesArr = [];

  let queue = [[root, 0]];
  let currentLevel = 0;
  let currentArr = [];

  while (queue.length) {
    let [current, level] = queue.shift();

    if (!current) return [];

    if (level !== currentLevel) {
      // if we've begun a new level with this iteration,
      // then calculate the average and commit it to the averages array
      let sum = currentArr.reduce((a, c) => a + c, 0);
      averagesArr.push(sum / currentArr.length);
      // then empty currentArr
      // and update current level to 'level'
      currentArr = [];
      currentLevel = level;
    }
    currentArr.push(current.val);

    if (current.left) queue.push([current.left, level + 1]);
    if (current.right) queue.push([current.right, level + 1]);
  }

  // could improve on this, making it DRYer. This line is repeat from the iterative logic
  // just adds the very last iteration
  let lastAvg = currentArr.reduce((a, c) => a + c, 0) / currentArr.length;
  averagesArr.push(lastAvg);

  return averagesArr;
};

module.exports = {
  levelAverages,
};
