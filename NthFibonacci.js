function getNthFib(n) {
  // Write your code here.

  let fibSequence = [0, 1];

  function helper(current, nth, fibArray) {
    // base case
    // we've reached nth value in the sequence, so return it
    if (current >= nth) return fibArray[nth - 1];

    // recursing
    // we haven't yet built up to the nth value in the sequence, so continue building up the sequence
    fibArray.push(fibArray[current - 1] + fibArray[current - 2]);
    return helper(current + 1, nth, fibArray);
  }

  return helper(2, n, fibSequence);
}

// [0,1,1,2,3,5,8,13,21...]

// Time : O(N) - because as n grows larger, our fib sequence (array) grows in proportion: we must calculate another value to add to the array
// so, one calculation for each consecutive value up to 'n'

// Space: O(N) - because we will have n frames on the call stack, as we are recursively building up the fibonacci sequence

// Do not edit the line below.
exports.getNthFib = getNthFib;
