module.exports = Queue;

function Node(data){
	this.next = null;
	this.data = data;
}

function Queue(){
	
	this.front = null;
	this.back = null;
}

Queue.prototype.enqueue = function(data){
	var node = new Node(data);
	if(!this.front){
		this.front = node;
		this.back = node;
	}
	else{
		this.back.next = node;
		this.back = this.back.next;
	}
}

Queue.prototype.dequeue = function(){
	if(this.front){
		var node = this.front;
		this.front = this.front.next;
		return node.data;
	}
	return null;
}


