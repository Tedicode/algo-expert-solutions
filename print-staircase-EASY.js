function staircase(n) {
  // Write your code here

  // initialize num of spaces = n -1
  // initialize num of hashes = 1
  // as we iterate: print spaces and hashes
  // then decrement spaces, increment hashes

  let numSpace = n - 1;
  let numHash = 1;
  let str = "";

  while (numHash <= n) {
    let arr = new Array(numSpace).fill(" ");
    let arr2 = new Array(numHash).fill("#");
    str = arr.concat(arr2).join("");
    console.log(str);
    numSpace--;
    numHash++;
  }
}
