var Stack = require("./Stack");
var hanoiT = require("./hanoiT");

describe("Test hanoi tower implementation", function(){
	var src = new Stack();
	var mid = new Stack();
	var dst = new Stack();

	src.push(8);
	src.push(7);
	src.push(6);
	src.push(5);
	src.push(4);
	src.push(3);
	src.push(2);
	src.push(1);

	it("should properly move elemnts of one stack to another following the hanoi tower rules", function(){
		hanoiT(src, mid, dst, 8);
		expect(src.top()).toBe(null);
		expect(mid.top()).toBe(null);

		for(var i = 0; i < 8; i++){
			expect(dst.pop()).toBe(i + 1);
		}
	});



});