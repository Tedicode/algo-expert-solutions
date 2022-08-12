// PRAMP MOCK INTERVIEW EXERCISE:

// PROMPT
// You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

// Example:

// let arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm','a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

// output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
//           'm', 'a', 'k', 'e', 's', '  ',
//           'p', 'e', 'r', 'f', 'e', 'c', 't' ]

// console.log(reverseSentence(arr))

function reverseSentence(arr) {
  //APPROACH

  // iterate thru array,
  // while current character is NOT space(s), concat to tempStr
  // once we encounter a space(s) :
  // push temp word to results array
  // then push the space(s) element to results array
  // and reset tempStr back to empty string

  // now we have array of words & space elements
  // we can reverse that array: iterate BACKWARDS thru it,
  // pushing into the results array : either:
  // thes space(s) element OR the word element, char by char

  let wordsArr = [];
  let tempStr = "";

  for (let el of arr) {
    if (/\s/.test(el)) {
      wordsArr.push(tempStr);
      wordsArr.push(el);
      tempStr = "";
    } else tempStr += el;
  }

  if (tempStr) wordsArr.push(tempStr);

  let resultsArr = [];

  for (let i = wordsArr.length - 1; i >= 0; i--) {
    // save current value in variable 'el'
    let el = wordsArr[i];
    // if el contains any space(s), push it to results
    if (/\s/.test(el)) {
      resultsArr.push(el);
    } else for (let char of el) resultsArr.push(char);
    // else, we know el is a WORD, so push each of its
    // letters, one by one, into the results array
  }
  return resultsArr;
}

// alternately: ------------------------------------

// function reverseSentence(arr) {
//   let wordsArr = []
//   let tempStr = ''

//   for(let el of arr) {
//     if(el.trim().length !== el.length) {
//       wordsArr.push(tempStr)
//       wordsArr.push(el)
//       tempStr = ''
//     } else tempStr += el
//   }

//   if(tempStr) wordsArr.push(tempStr)

//   let resultsArr = []

//   while(wordsArr.length) {
//     let word = wordsArr.pop()
//     if(word.trim().length !== word.length)resultsArr.push(word)
//     else for(let char of word) resultsArr.push(char)
//   }

//   return resultsArr;
// }
