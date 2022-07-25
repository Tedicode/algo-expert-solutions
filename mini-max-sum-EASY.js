function miniMaxSum(arr) {
  // Write your code here

  // sort the array
  // sum up the first 4
  // sum up the last 4

  // print both sums, separated by a space
  let sortedArr = arr.sort((a, b) => a - b);
  let minSum = arr.slice(0, 4).reduce((a, c) => a + c);
  let maxSum = arr.slice(1, 5).reduce((a, c) => a + c);
  console.log(minSum, maxSum);
}
