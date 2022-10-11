class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, val) {
    let keyIdx = this._hash(key);
    if (this.keyMap[keyIdx]) this.keyMap[keyIdx].push([key, val]);
    this.keyMap[keyIdx] = [[key, val]];
  }

  get(key) {
    let keyIdx = this._hash(key);
    let valsArray = this.keyMap[keyIdx];
    if (valsArray.length > 1) {
      // then iterate through this array (of arrays) to find the array w/ this key
      for (let [theKey, theVal] of valsArray) {
        if (theKey === key) return theVal;
      }
    } else if (valsArray.length === 1) return valsArray[0][1];
    return undefined;
  }
}

let myHashTable = new HashTable();

myHashTable.set("pink", "strawberry");
myHashTable.set("orange", "tangerine");
myHashTable.set("blue", "blueberry");

console.log(myHashTable.get("blue"));
console.log(myHashTable.get("pink"));
console.log(myHashTable.get("orange"));
