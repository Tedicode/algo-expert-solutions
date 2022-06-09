function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  // Approach: using pointers and both arrays sorted

  // Time: O(nlogn) - where n is the total number of values in both input arrays combined

  // Space: O(1) - constant space because we are not using additional space with increasing input,
  // and we are sorting the input arrays in place

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idx1 = 0;
  let idx2 = 0;
  let smallestDiff = Infinity;
  let closestPair = [];
  let currentDiff;

  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    let firstNum = arrayOne[idx1];
    let secondNum = arrayTwo[idx2];
    if (firstNum < secondNum) {
      currentDiff = secondNum - firstNum;
      idx1++;
    } else if (secondNum < firstNum) {
      currentDiff = firstNum - secondNum;
      idx2++;
    } else return [firstNum, secondNum];

    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closestPair = [firstNum, secondNum];
    }
  }

  return closestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
