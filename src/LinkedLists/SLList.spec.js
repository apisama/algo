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
});