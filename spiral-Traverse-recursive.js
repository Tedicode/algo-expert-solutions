function spiralTraverse(array) {
  // Write your code here.

  // Time: O(n) - where n is the total number of elements in the input 2D array
  // - b/c we are just traversing the n elements, and performing constant time
  // operations (push to array) at each visit

  // Space: O(n) - where n is total number of elements in the input 2D array
  // - we are storing an array of 'n' elements
  // - this captures (surpasses) the amount of memory we'll use on the call stack
  // which would be less than 'n' number of calls

  // recursive approach:
  // very similar to iterative approach
  // but use the while condition for the base case
  // and recurse otherwise, traversing & building out the new array
  // each recursive call will pass the bounds adjusted

  let result = [];
  function recurseHelper(array, startRow, endRow, startCol, endCol) {
    // base case :
    if (startRow > endRow || startCol > endCol) return;
    // recurse

    // right
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    // down
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    // left
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    // up
    for (let row = endRow - 1; row >= startRow + 1; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }

    recurseHelper(array, ++startRow, --endRow, ++startCol, --endCol);
  }

  recurseHelper(array, 0, array.length - 1, 0, array[0].length - 1);

  return result;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
