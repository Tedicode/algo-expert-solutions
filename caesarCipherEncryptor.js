function caesarCipherEncryptor(string, key) {
  // Write your code here.

  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let nextCharCode = charCode + key;
    while (nextCharCode > 122) {
      // nextCharCode = 96 + (nextCharCode - 122)
      nextCharCode -= 26;
    }
    let newLetter = String.fromCharCode(nextCharCode);
    newString += newLetter;
  }

  return newString;
}

// APPROACH
// initialize variable to hold new string
// iterate through input string
// at each index, get the character code for that character
// contat onto our new string the character that is THAT code plus K

// a = 97
// z = 122
// so after 122 go back to 97

// if the new code returned to us is > 122 , get the diff from newcode - 122
// and add that difference on to 97, and that's the new code

// *** consider: key (# spaces to shift) could be longer than the alphabet (26)
// so when adjusting for this, continue subtracting 26,
// as long as the nextCharCode is still greater than 122

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
