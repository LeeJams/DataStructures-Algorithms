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
    let newQueue = new Node(val);
    if (!this.size) {
      this.first = newQueue;
      this.last = newQueue;
    } else {
      this.last.next = newQueue;
      this.last = newQueue;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.size) return undefined;
    this.size--;
    let queue = this.first;
    if (!this.size) {
      this.last = null;
    }
    this.first = queue.next;
    queue.next = null;

    return queue.val;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
