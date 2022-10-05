class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // when implementing a queue with a SINGLY linked list,
    // it is least expensive to ADD to the end, and REMOVE from the beginning
    // so, we'll implement "enqueue" method by adding to the end
    // create new node
    let newNode = new Node(val);
    // if empty list
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    // increment the size and return the size too
    return ++this.size;
  }

  dequeue() {
    // if queue was empty to begin with, return null
    // else, remove from the BEGINNING
    if (!this.first) return null;

    let firstSaved = this.first;

    if (this.first === this.last) {
      // this.first = null;
      // ^ this gets overwritten anyway as null in next block, b/c 'this.first.next' will be null
      this.last = null;
    }
    // remove from the beginning
    this.first = this.first.next;

    // clean up any lingering references from the removed node
    firstSaved.next = null;

    this.size--;
    // and return the value of the removed node
    return firstSaved.val;
  }
}

let q = new Queue();
q.enqueue("anne");
q.enqueue("joe");
q.enqueue("tedi");
console.log(q);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q);
