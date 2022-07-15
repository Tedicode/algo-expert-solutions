function firstDuplicateValue(array) {
  // Write your code here.

  // Optimized approach:
  // to avoid the n^2 time complexity of a nested loop,
  // we can instead use one loop, building up a frequency counter
  // and while building the frequency counter, if we ecounter an already existing key
  // then immediately return that value

  let freqTable = {};

  for (let val of array) {
    if (freqTable[val]) return val;
    else freqTable[val] = 1;
  }

  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
