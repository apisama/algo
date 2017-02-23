var removeDups = require('./removeDups');

describe("Test method that removes duplicate characters from a string", function(){
	
	it("should handle empty strings", function(){
		var str = "";
		removeDups(str);
		expect(str).toBe("");
	});

	it("should successfuly remove duplicate characters", function (){
		var str = "Hello World";
		removeDups(str);
		expect(str).toBe("Helo Wrd");
	});

	
});