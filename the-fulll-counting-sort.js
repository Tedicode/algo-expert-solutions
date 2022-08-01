function countSort(arr) {
  // Write your code here

  // Time: O(nlogn)  - where n is length of original input array
  // - we are performing simple for loops of length n, with constant time operations in them
  // but we also use .sort() method on the input array, giving us time complexity of nlogn

  // Space: O(n) - we are building up a string (or array) of length n, where n is length of input array

  // get the length, and then half the length of the input array
  // b/c for the first half, we'll convert/replace strings with '-'
  // then we'll iterate thru the entire input array again, after conversion
  // and build up secondary array, where x is the index of each element (subarrays)
  // and each subarray is a list of the strings associated with that index

  // finally we'll print the contents of all these subarrays (like one long string / sentence)

  let len = arr.length - 1;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i <= halfLen; i++) {
    arr[i][1] = "-";
  }

  for (let val of arr) {
    let newSubArr = val;
    let stringInt = newSubArr[0];
    newSubArr[0] = Number(stringInt);
  }

  arr.sort((a, b) => a[0] - b[0]);

  let resultString = "";
  for (let val of arr) resultString += val[1] + " ";
  console.log(resultString);

  // alternate solution for lines 27 - 29 (technically instructions ask to build new array THEN print)
  // let newArr = []

  // for(let i=0; i < arr.length; i++) {
  //     let subArr = arr[i]
  //     let idx = subArr[0]
  //     if(newArr[idx]) newArr[idx].push(subArr[1])
  //     else {
  //         newArr[idx] = [subArr[1]]
  //     }

  // }

  // // finally we'll print the contents of all these subarrays (like one long string / sentence)
  // let resultsStr = ''
  // for(let val of newArr) {
  //     if(val) {
  //         let newSub = val.join(' ')
  //         resultsStr += newSub
  //         resultsStr += ' '

  //     }
  // }

  // console.log(resultsStr)
}
