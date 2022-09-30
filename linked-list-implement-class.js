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

  remove(idx) {
    // 3 edge cases:
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    // otherwise use our built in .get method to grab ahold of node at idx-1
    // and patch it to the node after it's next node
    let prevNode = this.get(idx - 1);
    let trashNode = prevNode.next;
    prevNode.next = prevNode.next.next;
    this.length--;
    return trashNode;
  }

  reverse() {
    let prev = null;
    let current = this.head;

    // traverse, keeping track of the prev and next, and reverse the direction
    // of the connection at each node
    while (current !== null) {
      let nextHolder = current.next;
      current.next = prev;
      prev = current;
      current = nextHolder;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }
}

let myList = new SinglyLinkedList();

myList.push("1");
myList.push("2");
myList.push("3");
myList.push("4");
myList.push("5");
myList.push("6");
console.log(myList.reverse());
console.log(myList.head);
console.log(myList.tail);
