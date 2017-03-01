var Queue = require("./QueueOfStack");

describe("Test QueueOfStack implementation", function(){
	
	var queue = new Queue();
	it("should queue items and dequeue them correctly ", function(){
		queue.enqueue(0);
		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.dequeue()).toBe(0);
		expect(queue.dequeue()).toBe(1);
		expect(queue.dequeue()).toBe(2);
		expect(queue.dequeue()).toBe(null); 
	});
});
