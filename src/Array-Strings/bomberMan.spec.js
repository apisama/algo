var bomberMan = require('./bomberMan');

describe("Test method that zeroes the rows and columns of cells with a value of zero ", function(){
	var matrix = 			[1,1,1,1,2,3,0,1,2,3,0,1]; //3 x 4
	var expectedMatrix = 	[1,1,0,1,0,0,0,0,0,0,0,0];

	it("should throw an exception for improper arguments", function(){
		expect(() => bomberMan(matrix,1,1)).toThrow();
	});

	it("should correctly zero rows and columns of M * N flat matrix", function(){
		bomberMan(matrix, 3, 4);
		expect(matrix).toEqual(expectedMatrix);
	});
});
