function closestNumbers(arr) {
  // Write your code here

  // sort the input array
  // initialize a variable to hold min diff (to Infinity)
  // initialize an empty array to hold pairs with min diff

  // iterate thru the array, comparing arr[i] with arr[i+1]
  // if the abs value of their difference is smaller than the current min diff, then:
  // replace current min difference
  // replace the array with these two numbers
  // else if the abs val of their diff is EQUAL to the current min,
  // push these two nums to the current array
  // else do nothing

  // in the end, print the values of the array

  let currentMinDiff = Infinity;
  let arrayOfPairs = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i + 1] - arr[i]);
    if (diff < currentMinDiff) {
      currentMinDiff = diff;
      arrayOfPairs = [arr[i], arr[i + 1]];
    } else if (diff === currentMinDiff) {
      arrayOfPairs.push(arr[i]);
      arrayOfPairs.push(arr[i + 1]);
    }
  }
  return arrayOfPairs;
}
