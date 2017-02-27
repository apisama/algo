var rotateMatrix = require("./rotateMatrix");

describe("Test method to rotate matrices stored as a flat array", function(){
	var matrix = [1,2,3,4,5,6,7,8,9];
	var expectedMatrix = [7,4,1,8,5,2,9,6,3];

	it("should throw error when passing invalid arguments", function(){
		expect(() => rotateMatrix([])).toThrow();
	});

	it("should correctly rotate a matrix in a flat array", function(){
		rotateMatrix(matrix, 3);
		expect(matrix).toEqual(expectedMatrix);
	});

});