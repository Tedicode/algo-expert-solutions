/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // pre-condition check
  if (s.length !== t.length) return false;

  // approach :

  // iterate through string s, populating a frequency table

  let freqTable = {};

  // populating frequency table / hashmap
  for (let char of s) {
    if (freqTable[char]) freqTable[char]++;
    else freqTable[char] = 1;
  }

  // iterate through string t , taking away from the frequency table, with each char
  for (let char of t) {
    // is zero falsy? in JavaSCript yes
    if (!freqTable[char]) return false;
    else freqTable[char]--;
  }

  return true;
};
