module.exports = QueueOfStacks;

var Stack = require("./Stack");

function QueueOfStacks(){
	this.stack = new Stack();
	this.buffer = new Stack();
}

QueueOfStacks.prototype.enqueue = function(data){
	this.stack.push(data);
}

QueueOfStacks.prototype.dequeue = function(){
	var val = this.buffer.pop();
	if(val == null){
		val = spill(this.stack, this.buffer);
	}
	return val;
}

function spill(stack, buffer){
	while(stack.top() != null){
		buffer.push(stack.pop());
	}

	return buffer.pop();
}