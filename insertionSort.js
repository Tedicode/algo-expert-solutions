function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }
  return array;
}

function swap(a, b, array) {
  let temp = array[b];
  array[b] = array[a];
  array[a] = temp;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

// Time : 0(n^2)
// we have an outer loop of n iterations, and for each
// iteration we have an inner loop that will perform,
// in the worse case scenario, n comparisons/operations
// in the best case scenario (an already sorted input array),
// the outer loop will iterate n times but the inner loop
// will never execute, so the outer loop would execute a
// constant time operation only, in that case - giving O(n) time

// Space: O(1)
// we are sorting in place, so we're not using additional space
