var minHeap = require("./minHeap");
describe("MinHeap test suite", function (){
	var min = new minHeap();
	var len;
	it("should insert one element", function(){
		expect(min.top()).toBe(null);
		min.insert(10);
		expect(min.heap.length).toBe(1);
		expect(min.top()).toBe(10);
	});

	it("should keep track of smallest element after a few insertions", function(){
		min.insert(3);
		min.insert(4);
		min.insert(2);
		min.insert(1);
		min.insert(0);
		expect(min.top()).toBe(0);
	});
	
	it("should pop smallest value", function(){
		len = min.heap.length;
		var v = min.pop();
		expect(v).toBe(0);
	});
	
	it("should have one less node after popping", function(){
		expect(min.heap.length + 1).toBe(len);
	});
	
	it("should update the top element to be smallest value", function(){
		expect(min.top()).toBe(1);
	});

	it("should remove arbitrary data from the heap", function(){
		var minheap = new minHeap();
		minheap.insert(1);
		minheap.insert(2);
		minheap.insert(3);
		minheap.insert(4);

		minheap.remove(2);
		expect(minheap.top()).toBe(1);
		minheap.remove(1);
		expect(minheap.top()).toBe(3);

	});


		
}); 