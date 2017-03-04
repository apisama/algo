var Graph = require("./Graph");

describe("Test Graph implementation", function(){
	
	var graph = new Graph();
	
	it("should add nodes", function(){
		graph.addNode("A");
		expect(graph._graph["A"]).toBeDefined();
		expect(graph._graph["A"].id).toBe("A");

	})

	it("should connect two vertices", function(){
		graph.connect("A", "B");
		expect(graph._graph["A"].edges["B"]).toBeDefined();
		expect(graph._graph["B"].edges["A"]).toBeDefined();
	})

	it("should find if there's a path between two nodes", function(){
		graph.addNode("C");
		expect(graph.hasPath("A", "B")).toBe(true);
		expect(graph.hasPath("A", "C")).toBe(false);
	});
});