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
}

let priorityQ = new PriorityQueue();

priorityQ.enqueue("get car", 3);
priorityQ.enqueue("get $$", 2);
priorityQ.enqueue("get awesome job", 1);

console.log(priorityQ.values.map((val) => val.val));
