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
}

let heap = new MaxBinHeap();
heap.insert(3);
heap.insert(33);
heap.insert(12);
heap.insert(2);
heap.insert(25);
heap.insert(200);
console.log(heap.insert(1));
