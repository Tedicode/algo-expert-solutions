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

// Time: O(m + n)
// - where n is length of "characters" and m is length of "document"
// We are looping once through 'characters', and once thru 'document'
// the loops are not nested, and inside each loop are only the
// constant time operations of accessing/updating values of object keys

// Space: O(n)
// - where n is the length of the "characters" string (avalable chars)
// b/c we build up an object (freqTable) with potentially as many entries as
// there are chars in "characters"

// Do not edit the line below.
exports.generateDocument = generateDocument;
