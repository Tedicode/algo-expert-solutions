function threeNumberSum(array, targetSum) {
  // Write your code here.

  // 2nd approach: implemented with pointers in a while loop for the inner loop

  // iterate through the array, holding constant one element at a time
  // set a "left" pointer directly to the right of the current number held constant by the outer loop
  // set a "right" pointer at the end of the array
  // while left pointer < right pointer, check to see if the three values are >, <, or =
  // if the three values add up to the target sum, push to the tripletsArr an array containing: the first num, left pointer's value, and right pointer's value
  // AND THEN push the left pointer up to the next value, and  the right pointer down one value, for the next iteration to check the next two values
  // else, if larger than the targetsum, bring right pointer down 1, else if less than the targetsum, bring the left pointer up 1, and continue evaluating

  // once we reach the end of the array (2nd to last num) return tripletsArr

  // sort the input array
  array.sort((a, b) => a - b);

  // create an array to store all triplet arrays
  let tripletsArr = [];

  for (let i = 0; i < array.length - 2; i++) {
    let firstNum = array[i];
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      if (firstNum + array[leftPointer] + array[rightPointer] === targetSum) {
        tripletsArr.push([firstNum, array[leftPointer], array[rightPointer]]);
        leftPointer++;
        rightPointer--;
      } else if (
        firstNum + array[leftPointer] + array[rightPointer] >
        targetSum
      )
        rightPointer--;
      else leftPointer++;
    }
  }
  return tripletsArr;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

// Time: O(n^2) - becuase we have a nested loop, wherein we perform constant time operations

// Space: O(n) - where n is the number of values in the original input array. Because,
// all of the original input values could potentially end up in the triplets arrays, and some
// could recur in multiple triplets. ALL of the values cannot recur (b/c they are all distinct
// integers in the input array) so we are still bound by ~n.
