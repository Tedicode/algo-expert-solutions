function threeNumberSum(array, targetSum) {
  // Write your code here.

  // Approach: 2 nested for loops

  // sort the original array
  array.sort((a, b) => a - b);

  // create an array to store all triplet arrays
  let tripletsArr = [];

  // iterate through the array, holding constant one element at a time
  // then creating the partial sum with every other element
  // and using this partial sum, with the target sum, to calculate the complement we need
  // then search the *remainder* of the array from that point, for this complement
  // if the complement is found, then push to the tripletsArr an array containing: the first num, second num, and final complement
  // once we reach the end of the array (2nd to last num) return tripletsArr

  for (let i = 0; i < array.length - 2; i++) {
    let firstNum = array[i];
    for (let k = i + 1; k < array.length; k++) {
      let secondNum = array[k];
      let complement = targetSum - (firstNum + secondNum);
      let indexOfComplement = array.slice(k + 1).indexOf(complement);
      if (indexOfComplement >= 0)
        tripletsArr.push([firstNum, secondNum, complement]);
    }
  }
  return tripletsArr;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

// Time: O(n^2) - becuase we have a nested loop, which outweights the nlogn complexity of the sorting we did in first line

// Space: O(n) - where n is the number of values in the original input array. Because,
// all of the original input values could potentially end up in the triplets arrays, and some
// could recur in multiple triplets. ALL of the values cannot recur (b/c they are all distinct
// integers in the input array) so we are still bound by ~n.
