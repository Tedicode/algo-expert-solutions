function spiralTraverse(array) {
  // Write your code here.

  let newArray = [];

  let startCol = 0;
  let endCol = array[0].length - 1;
  let startRow = 0;
  let endRow = array.length - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // 4 for loops to traverse a perimeter: right, down, left and up

    // traverse to right:
    // HOLDS CONSTANT the row (using the boundary designated by this iteration of the outer loop) : 'startRow'
    // and iterates thru columns
    for (let col = startCol; col <= endCol; col++) {
      newArray.push(array[startRow][col]);
    }

    // traverse down
    // HOLDS CONSTANT the column (using boundary : 'endCol')
    // and ITERATES thru rows
    for (let row = startRow + 1; row <= endRow; row++) {
      newArray.push(array[row][endCol]);
    }

    // traverse left
    // HOLDS CONSTANT the row (using boundary : 'endRow')
    // and ITERATES thru columns
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      newArray.push(array[endRow][col]);
    }

    // traverse up
    // HOLDS CONSTANT the column (using boundary : 'startCol')
    // and ITERATES thru rows
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      newArray.push(array[row][startCol]);
    }

    // move the bounds inward
    startCol++;
    endCol--;
    startRow++;
    endRow--;
  }
  return newArray;
}

// Time: O(n) - where n is the total number of elements in the input 2D array
// - b/c we are just traversing the n elements, and performing constant time
// operations (push to array) at each visit

// Space: O(n) - where n is total number of elements in the input 2D array
// - we are storing an array of 'n' elements
// - with this iterative approach we don't use additional memory for call stack

// APPROACH :
// 4 for loops to traverse a perimeter: right, down, left and up
// as we traverse, push each visited element to the results array
// move the bounds inward (start & end columns and start & end rows)
// repeat this (traversal then moving bounds inward) until the bounds overlap

// ** edge case where endRow === startRow
// ** edge case where endCol === startCol
// in both cases, break out of the loop instead of repeating that row (or column)
// this happens in the event of an odd num of rows or cols  - so only one single row (or col) in the middle

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
