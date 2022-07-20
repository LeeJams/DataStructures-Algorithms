class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newStack = new Node(val);
    if (!this.size) {
      this.first = newStack;
      this.last = newStack;
    } else {
      newStack.next = this.first;
      this.first = newStack;
    }
    return ++this.size;
  }
  pop() {
    if (!this.size) return undefined;
    this.size--;
    let popStack = this.first;
    if (!this.size) {
      this.last = null;
    }
    this.first = popStack.next;
    popStack.next = null;

    return popStack.val;
  }
}

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);
