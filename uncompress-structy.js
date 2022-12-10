const uncompress = (s) => {
  // todo

  // initialize a variable to hold the result string, to empty string
  // traverse the string with 2 pointers
  // move num pointer to continue capturing the num, until we encounter an alpha char

  // split string at this point into the number and the character
  // for that num of times, add that char to the result string
  // continue until we reach the end of the string, then return the resultString

  let start = 0;
  let end = 0;

  let resultString = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let char = "";
  let num;

  while (end < s.length) {
    if (alpha.includes(s[end])) {
      char = s[end];
      num = Number(s.slice(start, end));

      for (let k = 0; k < num; k++) resultString += char;

      end++;
      start = end;
    } else end++;
  }
  return resultString;
};

module.exports = {
  uncompress,
};
