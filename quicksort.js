
function sort(array){
	quicksort(array, 0, array.length - 1);
}

function quicksort(array, lo, hi){
	if (hi <= lo){
		return;
	}
	console.log("do partition to arr...low-hi: ", array,lo,hi);
	let p = partition(array, lo, hi);
	console.log("in progress...low-p-hi: ", lo,p,hi);
	quicksort(array, lo, p - 1);
	quicksort(array, p, hi);

}

function partition(array, lo, hi){
	p_value = array[hi];

	let i = lo - 1;
	let j = hi + 1;

	while(true){
		//traverse array to value greater than pivot
		i++;
		while(i < hi && array[i] < p_value){
			i++;
		}
		j--;
		//traverse array in reverse for value smaller than pivot
		while(j > lo && array[j] > p_value){
			j--;
		}

		if (i >= j) {
			return j;
		}
		//swap values
		swap(array, i, j);
	}

 }

function swap(array, a, b){
	let tmp = array[b];
	array[b] = array[a];
	array[a] = tmp;
}

function arrayIsEquals(a,b){
	if (b.length != a.length){
		return false;
	}
	for (let i = 0; i < a.length; i++){
		if (a[i] !== b[i]){
			return false;
		}
	}
	return true;
}


function test_it_sorts(){
	let arr = [3,4,3,1,5,6];
	let exp = [1,3,3,4,5,6];
	console.log("Input: ", arr);
	sort(arr);
	console.log("output: ", arr);
	console.log("expected", exp);

	if (arrayIsEquals(arr,exp)){
		console.log("success");
	}
	else {
		console.log("failed")
	}
}
