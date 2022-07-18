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
      console.log("start tail");
      foundNode = this.tail;
      for (let i = 0; i < len - index; i++) {
        foundNode = foundNode.prev;
      }
    } else {
      console.log("start head");
      foundNode = this.head;
      for (let i = 0; i < index; i++) {
        foundNode = foundNode.next;
      }
    }
    return foundNode;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (!index) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let foundNode = this.get(index - 1);
    if (foundNode) {
      let newNode = new Node(val);
      newNode.prev = foundNode;
      newNode.next = foundNode.next;

      foundNode.next.prev = newNode;
      foundNode.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }
  remove(index) {
    if (!index) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removedNode = this.get(index);
    if (removedNode) {
      let beforeNode = removedNode.prev;
      let afterNode = removedNode.next;

      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;

      removedNode.next = null;
      removedNode.prev = null;

      this.length--;

      return removedNode;
    }
    return false;
  }
}

let list = new DoublyLinkedList();
console.log(list.pop());

list.push(1);
list.push(2);
list.push(3);

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// console.log(list.unshift(10));
// console.log(list.unshift(50));
// console.log(list.unshift(7897));

console.log("get - ", list.get(7));
// console.log("set - ", list.set(1, 100));

console.log("insert - ", list.insert(1, 5000));
console.log("remove - ", list.remove(1));
console.log("remove - ", list.remove(1));
console.log("remove - ", list.remove(1));

console.log(list);
