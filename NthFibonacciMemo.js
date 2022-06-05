function getNthFib(n, hashTable = { 1: 0, 2: 1 }) {
  // Write your code here.

  // recursive approach with memoization

  // base case
  // if it's there, then get it
  if (n in hashTable) return hashTable[n];
  // if it's not, then set it
  else {
    hashTable[n] = getNthFib(n - 1, hashTable) + getNthFib(n - 2, hashTable);
    return hashTable[n];
  }
}

// Time : O(N)
// with memoization, we can eliminate the rest of the fibonacci tree (function calls) after
// the first traversal of the first branch (of depth n),
// storing in the hash table the return from each fibonacci call the first time we inquire.
// all subsequent inquiries for any fibonacci value (to calculate any other fibonacci value)
// (each Second call to the fibonacci function) can be accessed in a constant time operation
// from the hash table / memoization (no duplicate calculations)

// Space: O(N) -
// because we will need additional space in our memoization (hash table) for each fibonacci value (n)
// and as far as the call stack, at most we will have n frames/function calls at any given time

// Do not edit the line below.
exports.getNthFib = getNthFib;
