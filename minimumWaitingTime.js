function minimumWaitingTime(queries) {
  // Write your code here.

  // sort the array in ascending numeric order
  // create a second array to hold the wait times so far
  // loop through the sorted queries array, each iteration adding the current value (at i) to the
  // value in the wait times array at [i-1]
  // exclude the first and last element
  // but initialize the sumWaitingTime to the first value in the queries array (queries[0])
  // and initialize the waitTimesArray to the first value in the queries array (queries[0])

  // precondition to short-circuit the edge cases: when the array is of length 1 or empty
  // where waiting time will always be zero :
  if (queries.length <= 1) return 0;

  queries.sort((a, b) => a - b);

  let waitTimesArray = [queries[0]];
  let sumWaitingTime = queries[0];
  let amountToAdd;

  // create a for loop, with index i starting at 1 instead of 0 to exclude first element
  // and for the limit, use the array length minus one, in order to exclude the last element from waiting times

  for (let i = 1; i < queries.length - 1; i++) {
    amountToAdd = waitTimesArray[i - 1] + queries[i];
    waitTimesArray.push(amountToAdd);
    sumWaitingTime += amountToAdd;
  }

  return sumWaitingTime;
}

// Time complexity: O(nlogn)
// we'll operate on each input in the array, with a constant number of operations
// but first, we will sort the array, and any sort method we use will at best be in nlogn time

// Space complexity: O(1)
// Constant space complexity because we'll store only one variable no matter what (to hold the sum).
// We do not use any additional space, as we are sorting the original input array *in place*

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
