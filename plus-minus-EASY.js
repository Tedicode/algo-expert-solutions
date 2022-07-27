function plusMinus(arr) {
  // Write your code here

  let denom = arr.length;
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let val of arr) {
    if (val > 0) pos++;
    else if (val < 0) neg++;
    else zero++;
  }

  console.log(pos / denom);
  console.log(neg / denom);
  console.log(zero / denom);
}
