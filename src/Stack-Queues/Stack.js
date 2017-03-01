module.exports = Stack;
var minHeap = require("../minHeap");

function Node(data){
	this.next = null;
	this.data = data;
}

/* Extend singly linked list */
function Stack(){
	
	this._top = null;
	this._min = new minHeap();
}

Stack.prototype.push = function(data){
	var node = new Node(data);
	node.next = this._top;
	this._top = node;
	this._min.insert(node.data);
}

Stack.prototype.pop = function(){

	var top = this._top;
	if(!top){
		return null;
	}
	else {
		this._min.remove(top.data);
		this._top = this._top.next;
		return top.data;
		
	}
}

Stack.prototype.min = function(){
	return this._min.top();
}

Stack.prototype.top = function(){
	return this._top != null ? this._top.data : null;
}

Stack.prototype.sort = function(){
	if (this.top() == null){
		return;
	}

	var buffer = new Stack();
	while(this.top() != null){
		var t = this.pop();
		if(buffer.top() != null && t < buffer.top()){
			while(buffer.top() != null){
				this.push(buffer.pop());
			}
		}
		buffer.push(t);	
	}

	//return to original stack
	while(buffer.top() != null){
		this.push(buffer.pop());
	}

}