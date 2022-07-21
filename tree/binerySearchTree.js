class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (current.val < val) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        } else if (current.val > val) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        } else {
          return this;
        }
      }
    }
  }
  find(val) {
    let current = this.root;
    if (current) {
      while (current) {
        if (current.val < val) {
          current = current.right;
        } else if (current.val > val) {
          current = current.left;
        } else {
          return true;
        }
      }
    }
    return false;
  }
  // find(val) {
  //   let current = this.root;
  //   let fount = false;
  //   if (current) {
  //     while (current && !fount) {
  //       if (current.val < val) {
  //         current = current.right;
  //       } else if (current.val > val) {
  //         current = current.left;
  //       } else {
  //         fount = true;
  //       }
  //     }
  //   }
  //   return fount;
  // }
}

let tree = new BinarySearchTree();

console.log(tree.find(3));

tree.insert(10);
tree.insert(13);
tree.insert(5);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.find(5));
console.log(tree.find(6));
console.log(tree.find(17));
console.log(tree.find(16));

console.log(tree);
