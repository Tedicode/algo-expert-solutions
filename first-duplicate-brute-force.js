function firstDuplicateValue(array) {
  // Write your code here.

  // iterate thru the array
  // and for the current value,
  // compare indexOf with current index
  // only if they are different, return that value
  // because we want to return this integer if IT is not the first

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (array.indexOf(current) !== i) return current;
  }

  return -1;
}

// Time: O(n^2) - where n is length of input array
// in worst case scenario, we are running indexOf (a linear time operation)
// inside of the outer loop, n times

// Space: O(1) - no extra space used with scaling input

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
