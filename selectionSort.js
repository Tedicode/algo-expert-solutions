function selectionSort(array) {
  // Write your code here.

  let start = 0;

  while (start < array.length) {
    let smallIdxPointer = start;
    let smallestValue = array[smallIdxPointer];
    let trackingPointer = start + 1;

    while (trackingPointer < array.length) {
      if (array[trackingPointer] < smallestValue) {
        smallestValue = array[trackingPointer];
        smallIdxPointer = trackingPointer;
      }
      trackingPointer++;
    }
    // swap the values at the smallIdxPointer and "start" (zeroth index of unsorted)
    swap(smallIdxPointer, start, array);
    // increment "start"
    start++;
  }

  return array;
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

// APPROACH
// create two sublists from the input array
// the first represents sorted list, the second reps unsorted list
// to start, sorted list length = 0; unsorted list length = array.length
// create a pointer to track the smallest number in unsorted array
// start it at the zeroth index of the unsorted array

// create a second ("tracking")pointer for traversing until we move smallIdx
// for the length of the array,
// while tracking pointer is < length of array,
// continue comparing each value with current smallest num
// and if/when we find a smaller num, move the smallIdxPointer to that index

// once tracking pointer reaches end the array,
// swap the value at smallIdx with the value right after the end of sorted sublist
// which is actually the zero'th index of the unsorted array, and saved in "start" variable
// ALSO: increment "start" for the next iteration in outer loop

// Do not edit the line below.
exports.selectionSort = selectionSort;
