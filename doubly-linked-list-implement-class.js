class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create new node to add to the end, with the val passed in
    let newNode = new Node(val);
    // check if list is empty. if yes, then both head and tail are new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // take current tail, and set its next to the new node
      // also take the new node and make it's previous property point to the old tail
      // then set this.tail to the newNode
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    // let lastNode = this.tail
    if (this.length === 0) return undefined;
    let cutTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.head = null;
    } else {
      this.tail = cutTail.prev;
      this.tail.next = null;
      // this.tail.prev.next = null;
      // this.tail = this.tail.prev;
    }
    this.length--;
    // and just to clean up :
    // (we want to remove BOTH references, so the popped off node doesn't have lingering connections
    cutTail.prev = null;
    // then return the popped value
    return cutTail;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      // if its an empty list
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let current, count;
    if (idx >= this.length / 2) {
      // start from beginning and traverse forward via .next's
      count = this.length - 1;
      current = this.tail;
      while (count > idx) {
        count--;
        current = current.prev;
      }
    } else {
      // start from the end and traverse backwards via .prev's
      count = 0;
      current = this.head;
      while (count < idx) {
        count++;
        current = current.prev;
      }
    }
    return current;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.unshift(10);
