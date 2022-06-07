function binarySearch(array, target) {
  // Write your code here.
  let leftP = 0;
  let rightP = array.length - 1;

  while (leftP <= rightP) {
    midIdx = leftP + Math.floor((rightP - leftP) / 2);

    if (target === array[midIdx]) return midIdx;
    else if (target < array[midIdx]) rightP = midIdx - 1;
    else leftP = midIdx + 1;
  }

  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

// Time: O(logn)  -- where n is the size of the input array
// - because we are able to cut the number of operations in half with each iteration of the while loop

// Space: O(1) - because we aren't using any extra space for storage - like an array - that would scale with the input size.
// we only store 3 variables, leftP, rightP, and midIdx, and these do not vary with input size
// and we are not using recursion so no frames on the callstack using up space

// Approach:

// use binary search to locate target integer in an array, returning the index, or else -1 :
// find the midpoint
// comparing the target to the midpoint
// if target < midpoint, we can eliminate the second half of the array
// else, eliminate the first half of the array
// and continue this process to narrow the search pool

// midpoint will always be (rightP - leftP )/ 2
// if target > midpoint, eliminate first half by setting leftP = midpoint + 1
// if target < midpoint, eliminate second half by setting rightP = midpoint - 1
