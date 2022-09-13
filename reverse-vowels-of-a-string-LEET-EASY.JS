/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // approach:
  // itersate thru the string
  // when encountering a vowel, record the vowel and the index
  // store the vowel in vowelsArray
  // and store the index in indicesArray
  // else put the consonant into the consonantsArray
  // reverse the vowels array
  // build up new string, from 0 to length of input string 's'
  // if index is in the indicesArray, pop the vowel off the stack
  // and concat onto the new string
  // else

  let vowels = "aeiouAEIOU";
  let vowelsArr = [];
  let indicesArr = [];
  let consonantsArr = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsArr.push(s[i]);
      indicesArr.push(i);
    } else consonantsArr.push(s[i]);
  }

  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    if (indicesArr.includes(i)) newStr += vowelsArr.pop();
    else newStr += consonantsArr.shift();
  }

  return newStr;
};
