function firstNonRepeatingCharacter(string) {
  // Write your code here.

  // implement a frequency counter
  // iterate through the string, populating freqTable, creating a key for each character
  // then iterate through string again, assigning our result the first
  // character, whose corresponding key in freqTable has a value === 1
  // return the index of the resulting char, or else -1
  // complexity wise, two loops (or three loops) are infinitely better than two nested loops

  // Time: O(n)
  // 3n, b/c we iterate through entire string 3 times: 2 for loops, and then with .indexOf method

  // Space: O(n) - where n is number of characters in input string
  // we store a frequency table with one entry for every char in the input string
  let freqTable = {};
  let firstUniqueChar = "";

  for (let char of string) {
    freqTable[char] = ++freqTable[char] || 1;
  }

  for (let char of string) {
    if (freqTable[char] === 1) {
      firstUniqueChar = char;
      break;
    }
  }

  if (firstUniqueChar) return string.indexOf(firstUniqueChar);
  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
