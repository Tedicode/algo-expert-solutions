function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }
  return array;
}

function swap(a, b, array) {
  let temp = array[b];
  array[b] = array[a];
  array[a] = temp;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
