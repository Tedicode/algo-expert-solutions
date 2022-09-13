/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // alternate solution:
  // pre-condition check: if there are no words, return ''
  if (strs.length === 0) return "";

  let prefix = strs[0];

  // while this word is not included in (And at beginning of) NEXT word, shorten it
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
  // // approach:

  // // create a variable to hold the prefix, initialized as empty string
  // let prefix = "";

  // // create a temp variable to hold the potential next prefix
  // let potentialPrefix = "";

  // // iterate through first word of the array
  // let firstWord = strs[0];

  // for (let i = 0; i < firstWord.length; i++) {
  //   potentialPrefix += firstWord[i];
  //   let commonToAll = true;

  //   // if the potentialPrefix is indeed common among all words in the array,
  //   // then set prefix = potentialPrefix
  //   // and continue
  //   // else, return the prefix that has been built up so far

  //   for (let word of strs) {
  //     let sliceOfWord = word.slice(0, potentialPrefix.length);
  //     if (sliceOfWord !== potentialPrefix) {
  //       commonToAll = false;
  //       break;
  //     }
  //   }

  //   if (!commonToAll) return prefix;
  //   else prefix = potentialPrefix;
  // }

  // return prefix;
};
