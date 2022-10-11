class MaxBinaryHeap {
  constructor() {
    this.val = [];
  }
  insert(val) {
    this.val.push(val);
    this.bubbleUp();

    // let newIndex = this.val.length - 1;
    // let parentIdx = Math.floor((newIndex - 1) / 2);

    // while (parentIdx >= 0) {
    //   if (this.val[newIndex] > this.val[parentIdx]) {
    //     const temp = this.val[newIndex];
    //     this.val[newIndex] = this.val[parentIdx];
    //     this.val[parentIdx] = temp;

    //     newIndex = parentIdx;
    //     parentIdx = Math.floor((parentIdx - 1) / 2);
    //   } else {
    //     break;
    //   }
    // }
  }
  bubbleUp() {
    let idx = this.val.length - 1;
    const element = this.val[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.val[parentIdx];
      if (element <= parent) break;
      this.val[parentIdx] = element;
      this.val[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    if (!this.val.length) return undefined;

    const max = this.val[0];
    const end = this.val.pop();
    if(this.val.length > 0){
      this.val[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const element = this.val[0];
    while (true) {
      const leftIdx = idx * 2 + 1;
      const leftVal = this.val[idx * 2 + 1];
      const rightIdx = idx * 2 + 2;
      const rightVal = this.val[idx * 2 + 2];

      if (element < leftVal && element < rightVal) {
        const maxIdx = leftVal > rightVal ? leftIdx : rightIdx;
        this.val[idx] = this.val[maxIdx];
        this.val[maxIdx] = element;
        idx = maxIdx;
      } else if (element < leftVal) {
        this.val[idx] = leftVal;
        this.val[leftIdx] = element;
        idx = leftIdx;
      } else if (element < rightVal) {
        this.val[idx] = rightVal;
        this.val[rightIdx] = element;
        idx = rightIdx;
      } else {
        break;
      }
    }
  }
}

const binaryHeap = new MaxBinaryHeap();

binaryHeap.insert(41);
binaryHeap.insert(39);
binaryHeap.insert(33);
binaryHeap.insert(18);
binaryHeap.insert(27);
binaryHeap.insert(12);
binaryHeap.insert(50);
console.log(binaryHeap.val);

console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());

console.log(binaryHeap.val);
