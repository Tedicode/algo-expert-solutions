const isPrime = (n) => {
  // Time: O(n)  - approaches n/2 iterations comprising constant time operations
  // which reduces to O(n)
  // Space: O(1) - constant space, using no auxilliary memory, only 1 variable, i

  if (n === 0) return false;
  if (n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

module.exports = {
  isPrime,
};
