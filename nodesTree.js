function Node(key) {
  this.key = key;
  this.rightChild = null;
  this.leftChild = null;
}

// 插入节点
function insertNode(node, newNode) {
  if (newNode.key < node.key) { //排序二叉树
    if (node.leftChild === null) {
      node.leftChild = newNode;
    } else {
      insertNode(node.leftChild, newNode)
    }
  } else {
    if (node.rightChild === null) {
      node.rightChild = newNode;
    } else {
      insertNode(node.rightChild, newNode);
    }
  }
};

// global root
var res = [];
var root = null;
function insert(key) {
  var newNode = new Node(key);
  if (root === null) {
    root = newNode;
  } else {
    insertNode(root, newNode);
  }
}

// 前序 根-左-右
function firstRoot(node) {
  if (node != null) {
    res.push(node.key);
    firstRoot(node.leftChild);
    firstRoot(node.rightChild);
  } else {
    return;
  }
}

// 中序 左-根-右
function middleRoot(node) {
  if (node != null) {
    middleRoot(node.leftChild);
    res.push(node.key);
    middleRoot(node.rightChild);
  } else {
    return;
  }
}

// 后序遍历 左-右-根
function lastRoot(node) {
  if (node != null) {
    lastRoot(node.leftChild);
    lastRoot(node.rightChild);
    res.push(node.key);
  } else {
    return;
  }
}

// 层级遍历
function levelRoot(node) {
  var front = 0, rear = 1, n = 0;
  var q = [], output = [];
  q[0] = node;
  var current = q[0];
  output[n++] = current.key;
  while (front < rear) {
    current = q[front++];
    if (!current.leftChild && !current.rightChild) {
      return output;
    }
    if (current.leftChild !== null) {
      q[rear++] = current.leftChild;
      output[n++] = current.leftChild.key;
    }
    if (current.rightChild !== null) {
      q[rear++] = current.rightChild;
      output[n++] = current.rightChild.key;
    }
  }
}

//main
insert(6);
insert(11);
insert(4);
insert(3);
insert(5);
insert(8);
// console.log(root);
// lastRoot(root);
// console.log(res)
var loi = levelRoot(root);
console.log(loi)