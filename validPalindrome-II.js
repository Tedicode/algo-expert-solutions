/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  // return true if string can be palindrome after deleting at MOST one character

  // helper function takes in string, and left and right pointers and returns whether string is a palindrome
  function helper(string, left, right) {
    while (left < right) {
      if (string[left] !== string[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  // Time: O(n) - where n is the number of characters in the string. We must visit all of the characters to evaluate
  // Space: O(1) - constant space because we are not using additional space with larger input

  // use the helper function as soon as a mismatch is encountered
  // only one mismatch is allowed, so test 2 versions of the string:
  // the remaining string with left pointer's value deleted
  // and the remaining string with right pointer's value deleted
  // the helper function MUST return a palindrome from EITHER one or the other
  // else return false

  while (left < right) {
    if (s[left] !== s[right]) {
      return helper(s, left + 1, right) || helper(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true;
};

// Complexity explanation from leetcode:
// Complexity Analysis

// Given NN as the length of s,

// Time complexity: O(N)O(N).

// The main while loop we use can iterate up to N / 2 times, since each iteration represents a pair of characters. On any given iteration, we may find a mismatch and call checkPalindrome twice. checkPalindrome can also iterate up to N / 2 times, in the worst case where the first and last character of s do not match.

// Because we are only allowed up to one deletion, the algorithm only considers one mismatch. This means that checkPalindrome will never be called more than twice.

// As such, we have a time complexity of O(N)O(N).

// Space complexity: O(1)O(1).

// The only extra space used is by the two pointers i and j, which can be considered constant relative to the input size.
