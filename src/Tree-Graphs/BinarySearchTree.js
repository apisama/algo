module.exports = BinarySearchTree;

var List = require("../LinkedLists/SLList");

function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(array){
	if(array !== undefined){
		return createFromSortedArray(array);
	}
	this.top = null;

}


BinarySearchTree.prototype.insert = function(data){

	if(this.top == null){
		this.top = new Node(data);
		return;
	}

	insertDown(this.top, data);
}

BinarySearchTree.prototype.toArrayInOrder = function(){
	return inOrder(this.top);
}

function inOrder(node){
	var array = [];
	if(node){
		array = array.concat(inOrder(node.left));
		array.push(node.value);
		array = array.concat(inOrder(node.right));
	}
	return array;
}

BinarySearchTree.prototype.toArrayPreOrder = function(){
	return preOrder(this.top);
}

function preOrder(node){
	var array = [];
	if(node){
		array.push(node.value);
		array = array.concat(preOrder(node.left));
		array = array.concat(preOrder(node.right));
	}
	return array;
}

BinarySearchTree.prototype.toArrayPostOrder = function(){
	return postOrder(this.top);
}

function postOrder(node){
	var array = [];
	if(node){
		array = array.concat(postOrder(node.left));
		array = array.concat(postOrder(node.right));
		array.push(node.value);
	}
	return array;
}

BinarySearchTree.prototype.toList = function(){
	var lists = [];
	treeToList(this.top, 0, lists);
	return lists;
}

function treeToList(node, index, lists){
	if(node == null) return;
	
	if(lists[index] == undefined){
		lists[index] = new List(node.value);
	}
	else{
		lists[index].push(node.value);
	}
	treeToList(node.left, index + 1, lists);
	treeToList(node.right, index + 1, lists);

}

BinarySearchTree.prototype.isBalanced = function(){
	if(this.top == null){
		return true;
	}

	var minMax = getMinMax(this.top);
	return (minMax[1] - minMax[0]) < 2;
}

createFromSortedArray = function(array){
	var tree = new BinarySearchTree();
	addNodeFromArray(tree, array, 0, array.length - 1);
	return tree;
}

function addNodeFromArray(tree, array, lo, hi){
	if(lo >= hi){
		return;
	}
	var mid = Math.floor((hi - lo)/ 2) + lo;
	tree.insert(array[mid]);
	addNodeFromArray(tree, array, lo, mid - 1);
	addNodeFromArray(tree, array, mid + 1, hi);
}

function getMinMax(node){
	if(node == null){
		return [0,0];
	}
	var minMax = [1,1];

	var minMaxLeft = getMinMax(node.left);
	var minMaxRight = getMinMax(node.right);

	minMax[0] += minMaxLeft[0] < minMaxRight[0] ? minMaxLeft[0] : minMaxRight[0];
	minMax[1] += minMaxLeft[1] > minMaxRight[1] ? minMaxLeft[1] : minMaxRight[1];

	return minMax;
}

function insertDown(node, value){
	if(node == null){
		return;
	}

	if(node.value < value){
		//right child
		if(node.right == null){
			node.right = new Node(value);
		}
		else {
			insertDown(node.right, value);
		}

	}else {
		//left child
		if(node.left == null){
			node.left = new Node(value);
		}
		else {
			insertDown(node.left, value);
		}
	}

}

