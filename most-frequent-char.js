const mostFrequentChar = (s) => {
  let freqTable = {};
  for (let char of s) {
    freqTable[char] = freqTable[char] ? freqTable[char] + 1 : 1;
  }

  let entries = Object.entries(freqTable);
  entries.sort((a, b) => a[1] - b[1]);

  let highestFreq = entries[entries.length - 1][1];

  let tiedEntries = entries.filter((entry) => entry[1] === highestFreq);

  let tiedVals = tiedEntries.map((entry) => entry[0]);
  tiedVals = new Set(tiedVals);
  for (let val of s) {
    if (tiedVals.has(val)) return val;
  }
};

module.exports = {
  mostFrequentChar,
};
