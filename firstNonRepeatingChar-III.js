function firstNonRepeatingCharacter(string) {
  // Write your code here.

  // implement a frequency counter
  // iterate through the string, populating freqTable, creating a key for each character
  // then iterate through string again, returning the index of the first
  // character, whose corresponding key in freqTable has a value === 1
  // complexity wise, two loops are infinitely better than two nested loops

  // Time: O(n)
  // 2n, b/c we iterate through entire string 2 times

  // Space: O(n) - where n is number of characters in input string
  // we store a frequency table with one entry for every char in the input string
  let freqTable = {};

  for (let char of string) {
    freqTable[char] = ++freqTable[char] || 1;
  }

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (freqTable[char] === 1) {
      return idx;
    }
  }

  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
