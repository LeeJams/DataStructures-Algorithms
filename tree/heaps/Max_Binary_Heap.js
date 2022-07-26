class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    if (!this.values.length) return undefined;

    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();
    return max;
  }
  sinkDown() {
    if (!this.values.length) return;
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let leftVal, rightVal;
      let swap = null;

      if (leftIdx < length) {
        leftVal = this.values[leftIdx];
        if (leftVal > element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightVal = this.values[rightIdx];
        if (
          (swap === null && rightVal > element) ||
          (swap !== null && rightVal > leftVal)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
