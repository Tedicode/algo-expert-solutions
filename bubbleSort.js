function bubbleSort(array) {
  // Write your code here.

  // Approach:
  // iterate over array, comparing 2 consecutive elements for each iteration
  // swap if needed
  // consider: if no swaps occur within one iteration,
  // then no need to keep iterating. Array is sorted

  // minor optimization:
  // after an iteration is complete, last number in place
  // WILL not move again, it is the largest
  // same goes for then second to last, third to last, etc
  // so: inner loop's limit can decrement by 1 w/ each iteration

  let swapped;
  let length = array.length;

  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapped = true;
        swapFunc(j, j + 1, array);
      }
    }

    if (swapped === false) break;
    else length--;
  }

  return array;
}

function swapFunc(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

// Time: O(n^2)
// - using a double for loop, and inner loop comprises constant time operations

// Space: O(1)
// - constant space b/c we are sorting the input array in place,
// using no more auxiliary space as the input scales
