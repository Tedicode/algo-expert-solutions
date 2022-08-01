function countingSort(arr) {
  // Write your code here

  // return a frequency array
  // 100 elements long
  // containing the frequency of each value found in the array
  // all other values excluded from the array will have a frequency of zero

  let freqArr = new Array(100).fill(0);

  // iterate over the input array, incrementing the frequency count at the index rep'ing each value
  for (let val of arr) {
    freqArr[val]++;
  }

  return freqArr;
}

// Time: O(n) - iterate thru the array one time, and each iteration performs a constant time operation
// Space: O(1) - we are using auxiliary space to create a frequency array; it will always be length 100
