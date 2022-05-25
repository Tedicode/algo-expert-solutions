function twoNumberSum(array, targetSum) {
  // Write your code here.
  array = array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let first = array[left];
    let second = array[right];
    if (first + second === targetSum) return [first, second];
    else if (first + second > targetSum) {
      right--;
    } else left++;
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
