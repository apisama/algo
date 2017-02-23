module.exports = minHeap;

function minHeap(){
	this.heap = []; 
}

minHeap.prototype.insert = function insert(num) {
	var i = this.heap.push(num) - 1;
	bubbleUp(i, this.heap);
}

minHeap.prototype.pop = function pop(){

	var ret = this.heap[0]; 
	var tmp = this.heap.pop();

	if (this.heap.length >= 1){
		this.heap[0] = tmp;
		bubbleDown(0, this.heap);
	}

	return ret;
}


function parent(n, heap){
	var p = Math.floor((n - 1)/ 2);
	return p >= 0 ? p : null;
}

function leftChild(n, heap){
	var child = 2 * n + 1;
	return child < heap.length ? child : null;
}

function rightChild(n, heap){
	var child = 2 * n + 2;
	return child < heap.length ? child : null;
}

function swap(array, a, b){
	var tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
}

function bubbleUp(i, heap){
	if (i === 0){
		return;
	}

	var p = parent(i, heap);

	if(heap[i] < heap[p]){
		swap(heap, i, p);
		bubbleUp(p, heap);
	}

}

function bubbleDown(top, heap){
	var l = leftChild(top, heap);
	var r = rightChild(top, heap);

	if(( l === null || heap[top] <= heap[l]) 
	&& ( r === null || heap[top] <= heap[r]) ){
		return;
	}

	var smallest = r && heap[r] < heap[l] ? r : l;  

	swap(heap, top, smallest);
	bubbleDown(smallest, heap);
}



