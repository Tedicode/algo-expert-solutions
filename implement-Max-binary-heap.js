class MaxBinHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    if (this.values.length === 1) return this.values;
    else {
      // bubble up until added value is in correct place
      // do so by comparing it with it's "parent", according to position
      let idx = this.values.length - 1;
      let parentIdx = Math.floor((idx - 1) / 2);
      while (this.values[idx] > this.values[parentIdx]) {
        // if val is greater than its "parent", then swap them
        let temp = this.values[idx];
        this.values[idx] = this.values[parentIdx];
        this.values[parentIdx] = temp;
        // and get ready to check it again, against its NEW parent now
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
        // else, order is correct already, so do nothing
      }
      return this.values;
    }
  }

  extractMax() {
    // identify the root  (this.values[0]) , which is the max value we're removing
    let max = this.values[0];

    let length = this.values.length;
    // edge case: if heap is empty, return undefined and do nothing more
    if (length === 0) return undefined;

    // otherwise:
    // capture the end of the heap (smallest value)
    let end = this.values[length - 1];
    // and swap with the max
    this.values[0] = end;
    this.values[length - 1] = max;

    // remove the max from the end now
    this.values.pop();
    let leftChild, rightChild;

    // while loop for 'end' el to bubble back down to correct place (where no greater children)
    // starting at root, where 'end' el has been placed
    let idx = 0;
    while (idx >= length - 1) {
      // each iteration is a potential swap
      let swap = null;
      // identify children's indexes
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      // make sure child indices are not out of bounds (the child exists)
      if (leftChildIdx >= length) break;
      //  ^ then both are out of bounds, there are no children

      // else, capture left child
      leftChild = this.values[leftChildIdx];
      // if it is greater than the 'end' el
      if (leftChild > end) swap = leftChildIdx;

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        // if right child exists, and is greater than the left child
        // OR if no swap has occurred yet, and right child is greater than  'end' element
        // then update swap to take the right child instead
        if (rightChild > leftChild || swap === null) swap = rightChildIdx;
      }

      // if by now we've found no reason to swap, break out of loop
      if (swap === null) break;

      // do the swap
      this.values[idx] = this.values[swap];
      this.values[swap] = end;

      // update the idx to keep swapping/bubbling down, if needed
      idx = swap;
    }

    //return the removed val
    return max;
  }
}

let heap = new MaxBinHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
