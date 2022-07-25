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

  breadthFirstSearch() {
    let queue = [];
    let visited = [];

    queue.push(this.root);

    while (queue.length) {
      const shiftNode = queue.shift();
      visited.push(shiftNode.val);
      if (shiftNode.left) {
        queue.push(shiftNode.left);
      }
      if (shiftNode.right) {
        queue.push(shiftNode.right);
      }
    }

    return visited;
  }
  depthFirstSearchFreeOrder() {
    let current = this.root;
    let visited = [];

    function traverse(node){
      visited.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(current);

    return visited;
  }
  depthFirstSearchPostOrder() {
    let current = this.root;
    let visited = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(current);

    return visited;
  }
  depthFirstSearchInOrder(){ 
    let current = this.root;
    let visited = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.val);
      if(node.right) traverse(node.right);
    }

    traverse(current);

    return visited;
  }
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

console.log(tree.breadthFirstSearch());
console.log(tree.depthFirstSearchFreeOrder());
console.log(tree.depthFirstSearchPostOrder());
console.log(tree.depthFirstSearchInOrder());
