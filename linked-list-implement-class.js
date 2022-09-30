class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let prev;
    // take off the last node of the LL and return it
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      prev = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return prev;
    } else {
      // traverse the LL to access the second to last node
      // so we can made 2nd to last node the new tail
      let current = this.head;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      this.tail = prev;
      this.length--;
      return current;
    }
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.head === this.tail) this.tail = null;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.head) {
      let oldHead = this.head;
      newNode.next = oldHead;
    } else this.tail = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(idx) {
    // edge case: if given idx is less than 0 or greater than LL's length, return null
    if (idx < 0 || idx >= this.length) return null;
    // otherwise, can traverse the LL and return the value at the given idx
    let current = this.head;
    let count = 0;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    // return the whole node (not just the node's val) for this getter method
    return current;
  }

  set(idx, val) {
    let gotNode = this.get(idx);
    if (!gotNode) return false;
    else gotNode.val = val;
    return true;
  }

  insert(idx, val) {
    // pre-condition checks:
    if (idx < 0 || idx > this.length) return false;
    // if idx is EXACTLY the length, then just insert new node to the end (push)
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    // and for remaining cases:

    //  make use of our .get method -- but call it with (idx - 1) to get previous one
    let prevNode = this.get(idx - 1);
    // (where we'll attach the new node)
    let newNode = new Node(val);
    let temp = prevNode.next;
    newNode.next = temp;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
}

let myList = new SinglyLinkedList();

myList.push("9");
myList.push("8");
myList.push("7");
myList.push("6");
myList.push("5");
myList.push("4");
console.log(myList.get(0));
console.log(myList.get(1));
console.log(myList.get(2));
console.log(myList.length);
console.log(myList.insert(0, "hello"));
console.log(myList.length);
console.log(myList.get(0));
console.log(myList.get(1));
console.log(myList.get(2));
