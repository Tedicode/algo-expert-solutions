function generateDocument(characters, document) {
  // Write your code here.

  let freqTable = {};
  // build up frequency table of the available characters
  for (let char of characters) {
    freqTable[char] = ++freqTable[char] || 1;
  }

  // then iterate thru the document string, decrementing from the freqtable
  // if at any point the character is not available, return false
  // else if we make it to the end, return true
  for (let char of document) {
    if (!freqTable[char]) return false;
    freqTable[char]--;
  }

  return true;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
