function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong

  let numbers = new Set("0123456789");
  let lower_case = new Set("abcdefghijklmnopqrstuvwxyz");
  let upper_case = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let special_characters = new Set("!@#$%^&*()-+");

  // turn each of these strings into a Set
  // because searching a set is O(1) operation

  // keep track of the criteria met in criteraCount
  // iterate over the 'password' string, and check each char
  // against all criteria. if the char satsifies a criterion,
  // then increment the criteriaCount
  // in the end, return the diff of 6 - criteriaCount

  let criteriaCount = 0;

  let hasNum = false;
  let hasUpper = false;
  let hasLower = false;
  let hasSpecial = false;

  for (let char of password) {
    if (numbers.has(char)) {
      hasNum = true;
    } else if (lower_case.has(char)) {
      hasLower = true;
    } else if (upper_case.has(char)) {
      hasUpper = true;
    } else if (special_characters.has(char)) {
      hasSpecial = true;
    }
  }
  if (hasNum) criteriaCount++;
  if (hasLower) criteriaCount++;
  if (hasUpper) criteriaCount++;
  if (hasSpecial) criteriaCount++;

  if (n >= 6) criteriaCount++;

  let diff = 5 - criteriaCount;
  // it's possible that after adding the characters needed to satisfy
  // the first 4 criteria, that the length is still short by MORE THAN 1
  // so, ALSO make up the rest of the difference in LENGTH, AFTER
  // accounting for how many more characters are needed to satisfy the other criteria
  while (diff + n < 6) diff++;
  return diff;
}
