function tournamentWinner(competitions, results) {
  // Write your code here.

  // convert results array : iterate thru it;
  // if results[i] === 0, results[i] = 1
  // if results[i] === 1, results[i] = 0

  // iterate through competitions array [i] gives the current competition
  // index THAT value (the competition array) by the results[i] value
  // add the resulting value to a hash table (frequency/dictionary) or increment its value if already there
  // return the key with the highest frequency
  // how?
  // object.values ==> get the max value from this array
  // then return the key from hashTable whose value === that max we found

  for (let val in results) {
    if (results[val] === 0) results[val] = 1;
    else if (results[val] === 1) results[val] = 0;
  }

  let hashTable = {};
  for (let i = 0; i < competitions.length; i++) {
    let currentWinner = competitions[i][results[i]];
    if (hashTable[currentWinner]) hashTable[currentWinner] += 3;
    else hashTable[currentWinner] = 3;
  }

  let values = Object.values(hashTable);
  let maxVal = values.sort()[values.length - 1];

  for (let key in hashTable) {
    if (hashTable[key] === maxVal) return key;
  }
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
