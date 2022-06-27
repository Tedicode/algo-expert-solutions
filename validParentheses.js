/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // APPROACH

  // use a hash map to store corresponding closing brackets (for look-up)
  // iterate through string, holding current value to compare :
  // is this an opening or closing bracket?
  // if its an opening bracket, add that to a stack to 'remember' a pair is open
  // if it's a closing bracket
  // then it cannot contain an un-closed pair (follow an opened bracket of diff type)
  // if it is, then return false in this case

  let bracketMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // use a stack to keep track of all the open parentheses
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];

    // if 'current' is a NOT a key in our hashmap, then it's a closing parenthesis
    if (!bracketMap[current]) {
      // if it's closing (following) an open bracket of another type, then return false
      // so check top item in stack against current item, using hash map for lookup
      // if they don't correspond (or if stack is empty) then return false
      if (stack.length) {
        let topOfStack = stack.pop();
        if (bracketMap[topOfStack] === current) continue;
        return false;
      }
      // if stack was empty return false
      // b/c that means we have a bracket closing, with no opener
      return false;

      // otherwise, we have an opening parenthesis. Add it to the stack
    } else {
      stack.push(current);
    }
  }

  // once we've gotten through entire string without disqualifying,
  // make sure the stack is empty (no un-closed brackets remaining)
  if (stack.length) return false;
  return true;
};

// TIME: O(N) where n = length of input string, because we must visit and process each character in the string once. For each iteration we use constant time operations, (hashmap lookup, and push and pop methods)

// SPACE: O(N) where n = length of input string because in the worst case scenario, we could have one very long input string of all opening brackets, building up our stack to the size of n
