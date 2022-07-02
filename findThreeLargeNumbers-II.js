function findThreeLargestNumbers(array) {
  // Write your code here.

  // create an array to hold the largest numbers, initialized with -Infinity x 3
  // iterate thru input array, and for each element,
  // if it is greater than the smallest (first) number in the 'largests' array,
  // then swap it with that one
  // then sort the 'largests' array

  // Time: O(n^2) ? - we are sorting for every iteration of the for loop.
  // Should optimize this more by not sorting each time
  // Space: O(1) - we are not using additional space with growing input

  let largests = [array[0], array[1], array[2]];

  largests.sort((a, b) => a - b);

  for (let i = 3; i < array.length; i++) {
    let current = array[i];
    if (current > largests[0]) {
      largests[0] = current;
    }

    largests.sort((a, b) => a - b);
  }

  return largests;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
