module.exports = SSList;

function Node(data){
	this.next = null;
	this.data = data;
}

function SSList(){
	this.head = null;
}

SSList.prototype.push = function(data){
	var node = new Node(data);
	if(this.head == null){
		this.head = node;
		return;
	}
	var tail = this.head;
	while(tail.next !== null){
		tail = tail.next;
	}
	tail.next = node;

}

SSList.prototype.remove = function(node){
	//find node before it
	var curr = this.head;
	while(curr.next != node && curr !== null){
		curr = curr.next;
	}

	if(curr !== null){
		return;
	}

	curr.next = node.next;
}

SSList.prototype.removeDuplicates = function(){
	var buffer = {};
	var curr = this.head; 

	
	buffer[curr.data] = true;

	while(curr.next !== null){
		
		if(buffer[curr.next.data]){
			curr.next = curr.next.next;
		}
		else{
			buffer[curr.next.data] = true;
			curr = curr.next;
		}
	

	}
}

SSList.prototype.toArray = function() {
	var curr = this.head;
	var arr = [];
	do{
		arr.push(curr.data);
		curr = curr.next;
	} while(curr != null);

	return arr;
};