function firstNonRepeatingCharacter(string) {
  // Write your code here.

  // iterate through the string
  // double for-loop:
  // outer loop holds one character at a time
  // inner loop performs the evaluation of the remainder of the string

  let disqualified = [];

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (disqualified.includes(current)) continue;
    let count = 1;

    for (let j = i + 1; j < string.length; j++) {
      if (string[j] === current) {
        count++;
        break;
      }
    }
    if (count === 1) return i;
    else {
      disqualified.push(current);
      continue;
    }
  }

  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;

// Time: O(n^2) - where n is num of chars in input string
// we have a nested for loop

// Space: O(n) - where n is num of chars in input string
// worse case scenario, each char in the string is repeated,
// so our array, 'disqualified' could end up storing up to half
// as many characters as there are in the input string (n/2)
// constants are dropped so, (n/2) --> n
