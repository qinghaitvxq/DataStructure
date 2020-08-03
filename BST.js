function Node(data, left, right) {
  this.data = data;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function BST() {
  this.root = null;
}

BST.prototype.add = function (value) {
  var node = new Node(value);

  if (this.root === null) {
    this.root = node;
    return;
  } else {
    var addNodeToTree = function (node) {
      if (node.data < value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else {
          return addNodeToTree(node.right);
        }
      } else if (node.data > value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else {
          return addNodeToTree(node.left);
        }
      } else {
        return;
      }
    };

    addNodeToTree(this.root);
  }
};
// BST.prototype.preOrder=function(){

// }
BST.prototype.findMin = function () {
  var node = this.root;
  var getMin = function (node) {
    if (node.left === null) {
      return node;
    } else {
      return getMin(node.left);
    }
  };
  return getMin(node);
};
BST.prototype.findMax = function () {
  var node = this.root;
  var getMax = function (node) {
    if (node.right === null) {
      return node;
    } else {
      return getMax(node.right);
    }
  };

  return getMax(node);
};

BST.prototype.find = function (value) {
  var node = this.root;

  var findNode = function (node) {
    if (node.data === value) {
      return node;
    } else if (node.data > value) {
      if (node.left === null) return null;
      return findNode(node.left);
    } else if (node.data < value) {
      if (node.right === null) return null;
      return findNode(node.right);
    }
  };
  return findNode(node);
};

var bst = new BST();
bst.add(21);
bst.add(25);
bst.add(10);
bst.add(4);
bst.add(11);
var minNode = bst.findMin();
var maxNode = bst.findMax();
var target = bst.find(21);

console.log("最小的是", minNode.data);

console.log("最大的是", maxNode.data);
console.log("有21吗", target);
