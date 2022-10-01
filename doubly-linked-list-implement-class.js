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
        current = current.next;
      }
    }
    return current;
  }

  set(idx, val) {
    let theNode = this.get(idx);
    if (theNode !== null) {
      theNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    // create the new node

    let newNode = new Node(val);
    // edge cases:
    // if idx is invalid (less than zero or greater than length -- exact length is OK here)
    // then return undefined / null
    if (idx < 0 || idx > this.length) return false;
    // if idx is zero, utilize unshift method (& return ITS !!return value)
    if (idx === 0) return !!this.unshift(val);
    // if idx is exactly the LL's length, utilize push method (& return ITS !!return value)
    if (idx === this.length) return !!this.push(val);

    // otherwise, utilize .get method, passing idx-1, to get node before this idx
    // and store it as prev
    // store THAT node's next - b/c it will be the new node's next
    // then set all the needed connections
    let prev = this.get(idx - 1);
    let next = prev.next;

    (newNode.next = next), (next.prev = newNode);
    (newNode.prev = prev), (prev.next = newNode);

    this.length++;

    return true;
  }
}

let list = new DoublyLinkedList();
list.push("hi");
list.push("there");
