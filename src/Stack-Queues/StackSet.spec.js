var StackSet = require('./StackSet');

describe("Test Stack Set implementation", function(){
	var ss = new StackSet();

	it("should push data correctly, even beyond its threshold", function(){
		for(var i = 0; i < ss.getThreshold() + 5; i++){
			ss.push(i);
			expect(ss.top()).toBe(i);
		}
	});

	it("should pop data correctly", function(){
		
		for(i = ss.getThreshold() + 4; i >= 0 ; i--){			
			expect(ss.pop()).toBe(i);
		}

		expect(ss.pop()).toBe(null);
	});
});