function countUniqueValues(sortedArr) {
  // add whatever parameters you deem necessary - good luck!

  if (sortedArr.length === 0) return 0;
  let uniqueCount = 1;
  let i = 0;
  let j = 1;

  while (j < sortedArr.length) {
    if (sortedArr[i] !== sortedArr[j]) {
      uniqueCount++;
      i = j;
    }
    j++;
  }

  return uniqueCount;
}

// Approach:
// set two pointers, at the first two indices of the array
// compare the values at the two pointers
// for each iteration (regardless) move the second pointer up to explore the next value and compare
// when the two values are different:
// increment the countOfUnique
// move the first pointer up to the second pointer's position
// increment the second pointer
// repeat
// exit the loop once the second pointer reaches the length of the array
