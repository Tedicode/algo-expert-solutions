function moveElementToEnd(array, toMove) {
  // Write your code here.

  // [4,6,7,4,6,2,4,3,4,5], 4

  // First, check to see if the last element in the array is the target integer
  // if it is, (while it is), count up how many integers at the end are the target integer
  // we will use this number to determine the 'next-to-last' available index at the end
  // to swap a value into, if that value is another instance
  let numInst = 0;

  function checkNextToLast() {
    while (array[array.length - 1 - numInst] === toMove) numInst++;
  }

  checkNextToLast();

  // next, iterate through the array...
  for (let i = 0; i < array.length - 1 - numInst; i++) {
    // at index i, if the value is === the integer to move,
    if (array[i] === toMove) {
      // swap value at current index with value at next-to-last index
      [array[i], array[array.length - 1 - numInst]] = [
        array[array.length - 1 - numInst],
        array[i],
      ];
      // and update that 'next-to-last' index by --
      numInst++;
      // before moving on, check again the NEXT next-to-last slot, and increment if needed
      checkNextToLast();
    }
  }
  // once i === next-to-last index, return the array
  return array;
}

// Time: O(n) - where n is the number of elements in the original input array
//  we iterate through the array, and must check each value
// Space: O(1) - we are mutating the original input array, and don't use any additional space

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
