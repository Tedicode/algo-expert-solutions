function longestPeak(array) {
  // Write your code here.

  // APPROACH:
  // iterate thru the array
  // search for a peak
  // (there's a peak at "i" if BOTH elements - to the left and right - are less than value at current position i)
  // IF a peak is found :
  // then expand outward to left and right, to find the full length of the peak
  // if this peak is longer than the longest peak so far, then update the longestPeak to this value

  let longestPeak = 0;

  for (let i = 0; i < array.length; i++) {
    let isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];

    // if i is NOT a peak, then continue to next iteration of the loop
    if (!isPeak) {
      continue;
    }
    // else, if i IS a peak, then go on to find out how long of a peak

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx--;

    let rightIdx = i + 2;
    while (
      rightIdx <= array.length - 1 &&
      array[rightIdx] < array[rightIdx - 1]
    )
      rightIdx++;

    let distBetweenPointers = rightIdx - leftIdx + 1;
    // since the left and right pointers both increment/decrement one last time before exiting their loop:
    lengthOfThisPeak = distBetweenPointers - 2;

    longestPeak = Math.max(longestPeak, lengthOfThisPeak);
  }

  return longestPeak;
}

// Time: O(n) - where n is length of input array
// for loop of length n iterates thru the array
// though we have while loops inside of this, the values visited by the while loop in one iteration
// will NOT be revisited in any subsequent iteration of the outer loop
// because, these while loops only execute for the length of peak, and peaks do not overlap

// Space: O(1)
// we are not using additional space that scales with growing input.
// Only a constant number of single variables used

// Do not edit the line below.
exports.longestPeak = longestPeak;
