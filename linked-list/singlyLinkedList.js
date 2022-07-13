// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.length) {
      return undefined;
    }
    let pre = this.head;
    let cur = pre;

    while (cur.next) {
      pre = cur;
      cur = pre.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }
  shift() {
    if (!this.length) {
      return undefined;
    }
    const beforeHead = this.head;
    this.head = beforeHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return beforeHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (typeof index !== "number" || index < 0 || this.length <= index)
      return undefined;
    let selected = this.head;
    for (let i = 0; i < index; i++) {
      selected = selected.next;
    }
    return selected;
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
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let foundNode = this.get(index - 1);
    if (foundNode) {
      let newNode = new Node(val);
      newNode.next = foundNode.next;
      foundNode.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }
  remove(index) {
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let foundNode = this.get(index - 1);
    if (foundNode) {
      foundNode.next = foundNode.next.next;
      this.length--;
      return true;
    }
    return false;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let nextTemp;
    for(let i = 0; i < this.length; i++){
      // temp.next
    }

    return this;
  }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push(44);

// console.log("pop - ", list.pop());
// console.log("pop - ", list.pop());
// console.log("pop - ", list.pop());
// console.log("pop - ", list.pop());

// console.log("shift - ", list.shift());

// console.log(list.push("shift 1"));
// console.log("shift - ", list.shift());
// console.log("shift - ", list.shift());
// console.log(list);

// console.log(list.push("shift 2"));
// console.log(list.push("shift 3"));
// console.log(list.push("shift 4"));
// console.log("shift - ", list.shift());

// console.log("unshift - ", list.unshift(123));
// console.log("unshift - ", list.unshift(456));

// console.log("get - ", list.get(2));

// console.log("set - ", list.set(2, 77));

console.log("insert - ", list.insert(2, 12934));
list.traverse();

// console.log("remove - ", list.remove(2));
// console.log("remove - ", list.remove(2));
// console.log("remove - ", list.remove(20));
console.log('--revers--')
list.reverse()
console.log('--revers End--')

list.traverse();

console.log(list);
