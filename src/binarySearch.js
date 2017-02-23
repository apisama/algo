/* Binary Search */
(function(){
	
	window.binarySearch = function(array, e){
		var a = clone(array);
		//sort(array);
		return binarySearch(a, e, 0, a.length - 1);
	}

	function binarySearch(array, e, lo, hi){

		if (lo > hi){
			return null;
		}

		var mid = Math.floor((hi - lo) / 2) + lo; 
		
		if (array[mid] === e){
			return mid;
		}
		else if(e > array[mid]){
			return binarySearch(array, e, mid + 1, hi);
		}
		else {
			return binarySearch(array, e, lo, mid - 1);
		}
	}

	function clone(a){
		var b = [];
		for(var i = 0; i < a.length; i++){
			b[i] = a[i];
		}
	}
})();