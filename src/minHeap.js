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

minHeap.prototype.find = function(item){
	for(var i = 0; i < this.heap.length; i++){
		if(this.heap[i] === item){
			return i;
		}
	}
	return null;
}

minHeap.prototype.remove = function(lookup){
	//find node of item O(n)
	var item = this.find(lookup);
	//swap with last item
	if(item != null){
		swap(this.heap, item, this.heap.length - 1);
		//delete last item
		this.heap.pop()
		//bubbledown swapped element
		bubbleDown(item, this.heap);
	}
}

minHeap.prototype.top = function(){
	return this.heap[0] != undefined ? this.heap[0] : null;
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



