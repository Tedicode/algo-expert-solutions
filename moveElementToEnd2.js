function moveElementToEnd(array, toMove) {
  // Write your code here.

  // approach using pointers

  // [4,6,7,4,6,2,4,3,4,5], 4

  // Time: O(n) - we process each element in the array, starting with pointers on both ends and only
  // ending once the pointers meet in the middle
  // Space: O(1) - we process the original array in place

  let leftP = 0;
  let rightP = array.length - 1;

  while (array[rightP] === toMove) rightP--;

  while (leftP < rightP) {
    if (array[leftP] === toMove) {
      [array[leftP], array[rightP]] = [array[rightP], array[leftP]];
      while (array[rightP] === toMove) rightP--;
    }
    leftP++;
  }

  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
