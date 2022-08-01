function countingSort(arr) {
  // Write your code here

  let freqArr = new Array(100).fill(0);

  for (let val of arr) {
    freqArr[val]++;
  }

  let newArr = [];

  // using the freq array, build back up the sorted array
  for (let i = 0; i < freqArr.length; i++) {
    let val = freqArr[i];
    let timesToPrint = val;

    for (let k = 0; k < timesToPrint; k++) newArr.push(i);
  }
  console.log(newArr);
  return newArr;
}

// time: O(n) - where n is the number of values in input array
// space: O(n) - we are storing an additional array of the same length as input array
