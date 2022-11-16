function fibonacci(n) {
  let memo = { 1: 1, 2: 1 };
  function helperRecurse(num, memo) {
    // console.log(memo);
    if (num === 1) return 1;
    if (num === 2) return 1;
    if (memo[n - 1]) {
      memo[num] = memo[num - 1] + memo[num - 2];
      return memo[num];
    } else {
      memo[num] = helperRecurse(num - 1, memo) + helperRecurse(num - 2, memo);
      return memo[num];
    }
  }

  return helperRecurse(n, memo);
}

// [1,1,2,3,5,8,13...]
console.log(fibonacci(7));
