function countUniqueValues(sortedArr) {
  // add whatever parameters you deem necessary - good luck!

  // second -clever - approach: (Udemy)
  // using the array itself to store the unique values

  // start both pointers at the beginning (indices 0 and 1)
  // compare the two
  // if & when arr[i] !== arr[j], set arr[i] === arr[j], set i = j, and increment j++
  // once j reaches length of the array, return i + 1
  // use a pre-condition that if array is empty, return 0 off the bat

  // [1,1,1,4,6,6,7,8,8,8,9]

  if (!sortedArr.length) return 0;
  let i = 0;
  let j = 1;

  while (j < sortedArr.length) {
    if (sortedArr[i] !== sortedArr[j]) {
      i++;
      sortedArr[i] = sortedArr[j];
    }
    j++;
  }

  return i + 1;
}
