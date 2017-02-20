/* Binary Search */
function(){

	if (window.quicksort == undefined && window.mergeSort == undefined){
		throw new Exception("Sort algorithm required");
	}

	let sort = window.quicksort !== undefined ? quicksort : mergeSort;

	window.binarySearch = function(array, e){
		let array = clone(array);
		sort(array);
		return binarySearch(array, e, 0, array.length - 1);
	}

	function binarySearch(array, e, lo, hi){

		if (lo > hi){
			return null;
		}

		let mid = Math.floor((hi - lo) / 2) + lo; 
		
		if (array[mid] === e){
			return mid;
		}
		else if(e > array[mid]){
			return binarySearch(array, e, mid + 1, hi);
		}
		else {
			return binarySearch(array, e, lo, mid - 1) ;
		}
	}

	function clone(a){
		let b = [];
		for(let i = 0; i < a.length; i++){
			b[i] = a[i];
		}
	}
}();