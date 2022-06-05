function getNthFib(n) {
  // Write your code here.

  // slim approach

  // base case(s)
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

//  Time: O(2^n) - because each call to getNthFib will make 2 more calls to getNthFib
// resulting in 2*2*2*2...etc operations, for 'n' number of calls

// Space: O(n) - because at any given time, the call stack will have at MOST 'n' frames

// (does not use the same amount of space as it does operations (2^n), because the stack
// only tends to one of the 2 calls from the previous call, at a time).
// see illustration in video

// Do not edit the line below.
exports.getNthFib = getNthFib;
