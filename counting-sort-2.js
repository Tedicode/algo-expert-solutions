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
