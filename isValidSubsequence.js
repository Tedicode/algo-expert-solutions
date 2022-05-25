function isValidSubsequence(array, sequence) {
  // Write your code here.

  // iterate through sequence
  // search array (array.indexOf(val)) for the current val of sequence
  // if found, then slice the array, to exclude the recently found val (using that index)
  // meaning, save that index and if it is not === 1, then mutate the array to array.slice(index)

  // let searchArray = array;

  for (let val of sequence) {
    let index = array.indexOf(val);
    if (index === -1) return false;
    else {
      // searchArray = searchArray.slice(index+1)
      for (let i = 0; i < index + 1; i++) {
        array[i] = "x";
      }

      console.log(array);
    }
  }
  return true;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
