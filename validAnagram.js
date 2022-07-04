function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!

  if (str1.length !== str2.length) return false;

  let word1counter = {};

  // build up the frequency table with characters of str1
  for (let char of str1) {
    word1counter[char] = ++word1counter[char] || 1;
  }

  // iterate thru str2
  // for each character, decrement the corresponding value in the frequency counter
  for (let char of str2) {
    // if the count is already 0, return false
    if (word1counter[char] === 0) return false;
    else word1counter[char]--;
  }

  // for each key in frequency counter, if counter[key] is not zero, then return false

  //  for(let key in word1counter) {
  //      if(word1counter[key] !== 0) return false
  //  }

  // NOT NEEDED actually ^^  - b/c we already checked in pre-condition for equal lengths (line 4)

  // in the end return true
  return true;
}
