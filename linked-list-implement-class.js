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
    // if (this.head === this.tail) {
    //   let temp = this.head;
    //   this.head = null;
    //   this.tail = null;
    //   this.length--;
    //   return temp;
    // }
    // else save oldHead to return, and make this.head.next the new head
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
    while (current) {
      if (count === idx) return current.val;
      current = current.next;
      count++;
    }
  }
}
