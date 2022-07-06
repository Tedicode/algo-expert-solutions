function runLengthEncoding(string) {
  // Write your code here.

  // Approach:
  // have a variable that is currentChar
  // have a variable that is the count
  // have a variable holding the run-length string that we'll return

  let currentChar = string[0];
  let count = 0;
  let runLengthStr = "";

  // set currentChar to first character
  // iterate through the string
  // while a character is repeating, increment count
  // when we encounter a character distinct from the previous (currentChar),
  // 1. concatenate onto runLengthStr both count and currentChar
  // 2. assign currentChar to this next character
  // 3. reset count back to 1
  // when count surpasses 9,
  // 1. concatenate onto runLengthStr both count and currentChar
  // 2. don't re-assign currentChar
  // 3. reset count back to 1
  // string = string.toUpperCase()
  for (let char of string) {
    if (char !== currentChar || count === 9) {
      runLengthStr += count + currentChar;
      currentChar = char;
      count = 1;
    } else count++;
  }

  runLengthStr += count + currentChar;
  return runLengthStr;
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;

// Time: O(n) - where n is the length of the string.
// We iterate through the entire string, processing each character
// but only using constant time operations for each iteration

// Space: O(n) - the only auxiliary space used, that scales with input is the runLengthStr that we return
// in worst case scenario, where each consecutive character is distinct from the last,
// we'd store a string twice as long as the input string (same as input string, punctuated with '1's).
//  >> space complexity of 2n (which becomes n)
