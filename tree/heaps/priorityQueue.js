class Node {
  constructor(values, priority) {
    this.values = values;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(values, priority) {
    const newQueue = new Node(values, priority);
    this.values.push(newQueue);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    if (!this.values.length) return undefined;

    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    if (!this.values.length) return;
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let leftPriority, rightPriority;
      let swap = null;

      if (leftIdx < length) {
        leftPriority = this.values[leftIdx].priority;
        if (leftPriority < element.priority) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightPriority = this.values[rightIdx].priority;
        if (
          (swap === null && rightPriority < element.priority) ||
          (swap !== null && rightPriority < leftPriority)
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

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("머리아픔", 3);
priorityQueue.enqueue("머리아픔", 3);
priorityQueue.enqueue("머리아픔", 3);
priorityQueue.enqueue("목아픔", 2);
priorityQueue.enqueue("총맞음", 0);
priorityQueue.enqueue("손 짤림", 1);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

console.log(priorityQueue.values);
