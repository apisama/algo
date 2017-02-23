var hasUnique = require('./hasUnique');
describe("Test method that determines if a string is made of unique characters", function(){
	it("should handle empty strings", function(){
		expect(hasUnique("")).toBe(true);
	});

	it("should handle one char string", function(){
		expect(hasUnique("a")).toBe(true);
	});

	it("should correctly detect unique char strings", function(){
		expect(hasUnique("abcABC")).toBe(true);
	});

	it("should correctly detect non-unique char strings", function(){
		expect(hasUnique("abcabc")).toBe(false);
	});
});