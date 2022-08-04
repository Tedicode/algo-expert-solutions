function camelcase(s) {
  // Write your code here

  // the number of words will be the number of times we encounter
  // a capital letter, plus 1

  // iterate thru the string, incrementing count if the current
  // char is uppercase (create helper function isUpper to check)
  // return the count + 1

  let count = 0;
  for (let char of s) {
    if (isUpper(char)) count++;
  }

  return count + 1;
}
