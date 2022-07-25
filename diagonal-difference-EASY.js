function diagonalDifference(arr) {
  // Write your code here
  // 2D array:
  // n = num rows (and columns)

  // i : row
  // j : column

  // 7 9 5 3
  // 3 2 0 5
  // 3 5 8 7
  // 0 9 6 8

  // compute sum of primary diagonal
  let primSum = 0;
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    primSum += arr[i][j];
    i++;
    j++;
  }

  // compute sum of secondary diagonal
  let secSum = 0;
  i = 0;
  j = arr.length - 1;

  while (i < arr.length) {
    secSum += arr[i][j];
    i++;
    j--;
  }

  return Math.abs(primSum - secSum);
}
