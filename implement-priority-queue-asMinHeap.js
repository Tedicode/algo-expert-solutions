class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // inserts a node at the end and bubbles it up according to node.priority
  // this is a min-heap so lowest number is bubbles up to the top
  enqueue(val, priority) {
    let node = new Node(val, priority);
    // if (this.values.length === 0) ...
    // insert at the end
    this.values.push(node);
    // find the length, and then the index of this node at the end
    // find its parent's index, derived from its own index
    let length = this.values.length;
    let idx = length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // if parent is already in place, with lower number than node, we're done
      if (parent.priority < node.priority) break;
      // else swap
      this.values[parentIdx] = node;
      this.values[idx] = parent;

      // and update the idx of node
      idx = parentIdx;
    }

    return this.values;
  }

  // remove the node from the top (which has the lowest number / highest priority)
  // take the node from the end and put it at the top, then bubble it down
  // return the removed node (that has the highest priority/lowest number)
  dequeue() {
    let topPriority = this.values[0];
    let end = this.values.pop();
    // if queue was empty, then the returned is undefined
    // if queue had only one node, then the returned is that node
    if (this.values.length === 0) return topPriority;

    // else, we'll have to swap end to the top and then bubble down by priority
    // UNTIL placed
    this.values[0] = end;

    let length = this.values.length;
    let idx = 0;
    let leftChild, rightChild;

    while (idx < length) {
      let swap = null;
      // locate children
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < end.priority) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < end.priority) ||
          rightChild.priority < leftChild.priority
        )
          swap = rightChildIdx;
      }

      if (swap === null) break;
      // do the swap
      this.values[idx] = this.values[swap];
      this.values[swap] = end;

      // update the idx of node, to that chosen swap index
      idx = swap;
    }
    // then return the removed node
    return topPriority;
  }
}

let priorityQ = new PriorityQueue();

priorityQ.enqueue("3", 3);
priorityQ.enqueue(" 2", 2);
priorityQ.enqueue("5", 5);
priorityQ.enqueue("9", 9);
priorityQ.enqueue("1 ", 1);

console.log(priorityQ.values.map((val) => val.val));
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
