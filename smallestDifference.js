function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  // Time: O(n^2) - two nested for loops, and inside the nested for loop are constant time operations
  // Space: O(1) - we are only storing two variables, smallestDif and closestPair, regardless of input size

  // Approach:
  // brute force: nested for loops
  // store the current smallest difference
  // iterate through the first array in outer loop, while the inner loop iterates through second array
  // at each iteration of inner loop, check the current different against the current smallest difference

  // to find the difference:
  // subtract (either) one from the other
  // THEN get the absolute value of THAT

  let smallestDiff = Infinity;
  let closestPair = [];
  for (let i = 0; i < arrayOne.length; i++) {
    let firstVal = arrayOne[i];
    for (let k = 0; k < arrayTwo.length; k++) {
      let secondVal = arrayTwo[k];
      let currentDiff = Math.abs(firstVal - secondVal);
      if (currentDiff < smallestDiff) {
        smallestDiff = currentDiff;
        closestPair = [firstVal, secondVal];
      }
    }
  }

  return closestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
