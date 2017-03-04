var BinarySearchTree = require("./BinarySearchTree");

describe("Test Binary Search Tree implementation", function(){
	var bst = new BinarySearchTree();

	it("should insert values in the correct order", function(){
		bst.insert(10);
		expect(bst.top.value).toBe(10);
		bst.insert(5);
		expect(bst.top.left.value).toBe(5);
		bst.insert(20);
		expect(bst.top.right.value).toBe(20);
		bst.insert(40);
		expect(bst.top.right.right.value).toBe(40);

		
	})

	it("should generate an array of values by traversing in preOrder, inOrder and postOrder", function(){
		expect(bst.toArrayPreOrder()).toEqual([10,5,20,40]);
		expect(bst.toArrayInOrder()).toEqual([5,10,20,40]);
		expect(bst.toArrayPostOrder()).toEqual([5, 40, 20, 10]);
	});

	it("should know if it is balanced", function(){
		expect(bst.isBalanced()).toBe(true);
		bst.insert(60);
		expect(bst.isBalanced()).toBe(false);
	});

	it("should create a balanced tree from a sorted array", function(){
debugger;
		var array = [0,1,10,15,20,33,33,33,45];
		var tree = new BinarySearchTree(array);
		expect(tree.isBalanced()).toBe(true);
		var array2 = [40, 12,5, 12, 20];
		var tree2 = new BinarySearchTree(array2);
		expect(tree2.isBalanced()).toBe(false);

		var array3 = [1,1,1,1,1,1,1,1,1,1,1,1];
		var tree3 = new BinarySearchTree(array3);
		expect(tree3.isBalanced()).toBe(false);
	});

	// it("should create D linked lists for every level of a tree with D height", function(){
	// 	var tree = new BinarySearchTree([25,50,75,100,125,150,175,200]);
	// 	var lists = tree.toList();
	// 	expect(lists.length).toBe(3);
	// 	expect(lists[0].toArray()).toEqual([100]);
	// 	expect(lists[1].toArray()).toEqual([50, 150]);
	// 	expect(lists[2].toArray()).toEqual([25, 75, 125, 175]);
	// });
})

