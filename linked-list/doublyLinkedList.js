class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (!this.length) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.length) return undefined;
    let shiftHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftHead.next;
      this.head.prev = null;
      shiftHead.next = null;
    }
    this.length--;
    return shiftHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let len = this.length - 1;
    let foundNode;
    if (index > Math.floor(this.length / 2)) {
      console.log('start tail')
      foundNode = this.tail;
      for (let i = 0; i < len - index; i++) {
        foundNode = foundNode.prev;
      }
    } else {
      console.log('start head')
      foundNode = this.head;
      for (let i = 0; i < index; i++) {
        foundNode = foundNode.next;
      }
    }
    return foundNode;
  }
}

let list = new DoublyLinkedList();
console.log(list.pop());

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// console.log(list.unshift(10));
// console.log(list.unshift(50));
// console.log(list.unshift(7897));

console.log('get - ', list.get(7))

console.log(list);
