var Stack = require("./Stack");

describe("Test Stack implementation", function(){
	
	var stack = new Stack();
	it("should push items to top and pop them correctly ", function(){
		stack.push(0);
		stack.push(1);
		stack.push(2);
		expect(stack.pop()).toBe(2);
		expect(stack.pop()).toBe(1);
		expect(stack.pop()).toBe(0);
		expect(stack.pop()).toBe(null);
	});

	it("should keep track and return minimum value inserted in the stack", function(){
		stack.push(1);
		stack.push(2);
		expect(stack.min()).toBe(1);
		stack.push(0);
		expect(stack.min()).toBe(0);
		stack.pop();
		stack.pop();
		stack.pop();
		expect(stack.min()).toBe(null);
	});

	it("should sort elements in stack in ascending order", function(){
			
		var arr = [3,1,5,3,0,9];
		var sorted = [0,1,3,3,5,9];
		for(var i = 0; i < arr.length; i++){
			stack.push(arr[i]);
		}
		
		stack.sort();

		for(i = 0; i < sorted.length; i++){
			expect(stack.pop()).toBe(sorted[i]);
		}


	});
});