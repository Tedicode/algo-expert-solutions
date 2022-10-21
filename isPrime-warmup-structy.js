const isPrime = (n) => {
  // todo
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
