var minHeap = require("./minHeap");
describe("MinHeap test suite", function (){
	var min = new minHeap();
	var len;
	it("should insert one element", function(){
		min.insert(10);
		expect(min.heap.length).toBe(1);
		expect(min.heap[0]).toBe(10);
	});

	it("should keep track of smallest element after a few insertions", function(){
		min.insert(3);
		min.insert(4);
		min.insert(2);
		min.insert(1);
		expect(min.heap[0]).toBe(1);
	});
	
	it("should pop smallest value", function(){
		len = min.heap.length;
		var v = min.pop();
		expect(v).toBe(1);
	});
	
	it("should have one less node after popping", function(){
		expect(min.heap.length + 1).toBe(len);
	});
	
	it("should update the top element to be smallest value", function(){
		expect(min.heap[0]).toBe(2);
	});


		
}); 