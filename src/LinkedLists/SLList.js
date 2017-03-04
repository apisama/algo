module.exports = SSList;

/* Private constants */
var BASE = 10;


function Node(data){
	this.next = null;
	this.data = data;
}

function SSList(array){
	this.head = null;
	if(array){
		for(var i = 0; i < array.length; i++){
			this.push(array[i]);
		}
	}
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
	return node;
}

SSList.prototype.remove = function(node){
	var curr = this.head;
	if(curr == node){
		this.head = this.head.next;
	}

	while(curr.next != node && curr !== null){
		curr = curr.next;
	}

	if(curr == null){
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


SSList.prototype.getNodeFromLast = function (n){
	var node = this.head;
	var curr = node;

	while(curr !== null){
		if(n < 0){
			node = node.next;
		}
		else{
			n--;
		}

		curr = curr.next;
	}

	return n < 0 ? node : null;
}

SSList.prototype.toArray = function() {
	var curr = this.head;
	var arr = [];
	if(curr == null) return [];
	do{
		arr.push(curr.data);
		curr = curr.next;
	} while(curr != null);

	return arr;
};

/* Static methods */
SSList.add = function(list_a, list_b){
	var carry = 0;
	var curr_a = list_a.head;
	var curr_b = list_b.head;
	var sum = new SSList();

	while(curr_a != null || curr_b != null || carry > 0){
		var val_a = curr_a != null ? curr_a.data : 0;
		var val_b = curr_b != null ? curr_b.data : 0;
		var val_sum = val_a + val_b + carry;

		if(val_sum >= BASE){
			carry = 1;
			val_sum = val_sum % BASE;
		}
		else {
			carry = 0;
		}

		var n_sum = new Node(val_sum);
		n_sum.next = sum.head;
		sum.head = n_sum;

		curr_a = curr_a != null ? curr_a.next : null;
		curr_b = curr_b != null ? curr_b.next : null;
	}

	return sum;

}