var isAnagram = require("./isAnagram");

describe("Test method to determine whether two strings are anagrams", function(){
	it("should handle empty strings", function(){
		expect(isAnagram("", "")).toBe(true);
		expect(isAnagram("", "something")).toBe(false);
	});

	it("should correctly detect anagrams with multiple uses of the same letter", function(){
		expect(isAnagram("a", "a")).toBe(true);
		expect(isAnagram("aabbcc", "abcabc")).toBe(true);
	});

	it("should correctly detect when two strings of same length are not anagrams", function(){
		expect(isAnagram("hello", "world")).toBe(false);
		expect(isAnagram("a", "b")).toBe(false);
	});
});