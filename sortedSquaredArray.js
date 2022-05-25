function sortedSquaredArray(array) {
  // Write your code here.
  let squaresArray = [];
  for (num of array) {
    squaresArray.push(num * num);
  }
  return squaresArray.sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
