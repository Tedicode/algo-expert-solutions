function binarySearch(array, target) {
  // Write your code here.

  // recursive approach :

  let leftP = 0;
  let rightP = array.length - 1;

  function helper(array, target, left, right) {
    if (left > right) return -1;
    let midIdx = Math.floor((left + right) / 2);
    let value = array[midIdx];

    if (target === value) return midIdx;
    else if (target > value) return helper(array, target, midIdx + 1, right);
    else return helper(array, target, left, midIdx - 1);
  }

  return helper(array, target, leftP, rightP);
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

// Time: O(log(n)) -- where n is the size of the input array
// : because with each recursive call, we are able to halve the input size that we're operating on
// Space: O(log(n)) : at any one point in time we will have no more than, but may have up to, log n frames on the call stack,
// since we are using recursion

// so, for binary search the iterative approach is slightly more efficient than recursive because space complexity would be constant
