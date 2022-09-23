function PrimeTime(num) {
  // code goes here

  // a number is a prime number if it is only divisible by itself and 1

  // 2 --> true
  // 3 --> true
  // 4 --> false
  // 5 --> true
  // 6 --> false
  // 7 --> true

  // pre-condition check:
  // after 2, all even numbers are NOT prime
  if (num === 1) return true;
  else if (num === 2) return true;
  else if (!num % 2) return false;

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// keep this function call here
console.log(PrimeTime(readline()));
