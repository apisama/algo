var SLList = require("./SLList");

describe("Test Singly Linked List", function(){
	var list = new SLList();
	
	it("should be defined after creation", function(){
		expect(list).toBeDefined()
	});

	it("should push elements", function(){
		list.push(1);
		list.push(2);
		list.push(2);
		list.push(3);
		list.push(3);
		list.push(1);
		expect(list.toArray()).toEqual([1,2,2,3,3,1]);
	});

	it("should remove duplicates", function(){
		list.removeDuplicates();
		expect(list.toArray()).toEqual([1,2,3]);
	})

	it("should successfully find a node n steps apart from last node", function(){
		expect(list.getNodeFromLast(0).data).toBe(3);
		expect(list.getNodeFromLast(1).data).toBe(2);
		expect(list.getNodeFromLast(2).data).toBe(1);
		expect(list.getNodeFromLast(100)).toBe(null);
	});

	it("should successfully remove a given node in the middle of the linkedlist", function(){
		var node = list.getNodeFromLast(1);
		list.remove(node);
		expect(list.toArray()).toEqual([1,3]);
	});

	it("should successfully sum number lists (lists where each node holds a single digit e.g the number 123 is represented as 3->2->1->null", function(){
		var num1 = new SLList([3,1,5]);// number 513
		var num2 = new SLList([5,9,2]);// number 295

		expect(SLList.add(num1, num2).toArray()).toEqual([8,0,8]); //number 808
	});


});