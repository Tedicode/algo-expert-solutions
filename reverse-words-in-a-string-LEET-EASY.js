/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arrOfWords = s.split(" ");
  let newArr = [];

  for (let word of arrOfWords) {
    newArr.push(reverse(word));
  }

  return newArr.join(" ");
};

// create helper function to accept a word and return it reversed:
// use pointers
function reverse(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) reversedWord += word[i];
  return reversedWord;
}
