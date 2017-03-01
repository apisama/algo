var Stack = require("./Stack");

module.exports = StackSet;

var THRESHOLD = 4;

function StackSet(){
	this.ss = new Stack();
	this.size = 0;
}

StackSet.prototype.push = function(data){
	if(this.size >= THRESHOLD 
	|| this.ss.top() == null){
		this.ss.push(new Stack());
		this.size = 0;
	}

	this.ss.top().push(data);
	this.size++;
}

StackSet.prototype.pop = function(){
	if(this.size <= 0){
		this.ss.pop();
		if(this.ss.top() == null){
			return null;
		}

		this.size = THRESHOLD;
	}

	this.size--;
	return this.ss.top().pop();
}

StackSet.prototype.top = function(){
	if(this.ss.top() == null){
		return null;
	}

	return this.ss.top().top();
}

StackSet.prototype.getThreshold = function(){
	return THRESHOLD;
}