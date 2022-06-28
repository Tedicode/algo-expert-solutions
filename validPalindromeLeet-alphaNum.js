/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  s = s.toLowerCase();

  // first create a new string that only includes the alphanumeric characters
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar === "0") newString += currentChar;
    if (Number(currentChar) || alphabet.includes(currentChar)) {
      // then add that character
      newString += currentChar;
    }
  }

  let left = 0;
  let right = newString.length - 1;

  while (left < right) {
    if (newString[left] !== newString[right]) return false;
    left++;
    right--;
  }

  return true;
};

// Time: O(N) where n is the length of input string.
// We iterate through each character in the input string once, to build up new string --- O(n)
// we make all characters lowercase --- O(n)
// Then we operate on new string n/2 times, in the while loop - as we compare two characters at once, approaching the center -- O(n/2)

// Space: O(N) where n is the length of input string
// we create a new string to operate on, in order to strip the original string of non-alphanumerics. Worst case, newstring is as long as the input string
