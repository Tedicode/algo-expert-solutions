class TrieNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let idx = 0;
    let char = word[idx];

    let current = this.root;

    while (current.children.find((node) => node.val === char)) {
      current = current.children.find((node) => node.val === char);
      idx++;
      char = word[idx];
    }
    if (
      idx === word.length &&
      current.children.find((child) => child.val === "*")
    )
      return "that word is already here!";

    while (!current.children.includes(char)) {
      let newNode = new TrieNode(char);
      current.children.push(newNode);
      current = newNode;
      idx++;
      char = word[idx];
      if (idx === word.length) {
        let endOfWordNode = new TrieNode("*");
        current.children.push(endOfWordNode);
        break;
      }
    }

    return current;
  }

  search(word) {
    let idx = 0;
    let char = word[idx];

    let current = this.root;

    while (current.children.find((node) => node.val === char)) {
      current = current.children.find((node) => node.val === char);
      idx++;
      char = word[idx];
    }
    if (
      idx === word.length &&
      current.children.find((child) => child.val === "*")
    )
      return true;
    else return false;
  }

  startsWith(word) {
    let idx = 0;
    let char = word[idx];

    let current = this.root;

    while (current.children.find((node) => node.val === char)) {
      current = current.children.find((node) => node.val === char);
      idx++;
      char = word[idx];
    }
    if (idx === word.length) return true;
    else return false;
  }
}

let myTrie = new Trie();
console.log(myTrie.insert("tea"));
console.log(myTrie.insert("teach"));
console.log(myTrie.insert("teach"));
console.log(myTrie.insert("tim"));
console.log(myTrie.insert("space"));
console.log(myTrie.insert("string"));

myTrie.root.children.forEach((child) =>
  console.log(
    "child",
    child.val,
    ": ",
    child.children.map((child) => child.val)
  )
);

console.log(myTrie.search("stri"));
console.log(myTrie.startsWith("stri"));
