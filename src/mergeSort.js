(function(){
	window.mergeSort = function(array){
		mergeSort(array, 0, array.length - 1, []);
	}

	function mergeSort(A, lo, hi, B){
		
		if (lo >= hi){
			return;
		}

		var mid = lo + Math.floor((hi - lo)/2);
		//divide
		mergeSort(A, lo, mid, B);
		mergeSort(A, mid + 1, hi, B);
		//merge
		merge(A, lo, mid, hi, B);

	}

	function merge(A, lo, mid, hi, B){
		var j = lo;
		var k = mid + 1;

		for (var i = lo; i <= hi; i++){
			B[i] = A[i];
		}

		for (var i = lo; i <= hi; i++){

			if ( j <= mid && (k > hi ||  B[j] < B[k]) ){
				A[i] = B[j];
				j++;
			}
			else {
				A[i] = B[k];
				k++;
			}
		}
	}
})()
