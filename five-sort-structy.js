const fiveSort = (nums) => {
  // todo

  // iterate thru input array
  // keep track of next idx available at end of array
  // with a pointer
  // swapping two elements in an array is a contant time operation
  // ...defined in our swap function (3 assignment operations)

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[end] === 5) end--;
    else if (nums[start] === 5) {
      swap(start, end, nums);
      start++;
    } else start++;
  }

  return nums;
};

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = {
  fiveSort,
};
