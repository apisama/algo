module.exports = rotateMatrix;
function rotateMatrix(matrix, n){
	if(!n || ((n * n) !== matrix.length)) {
		throw "Dimension of matrix is an invalid value";
	}
	var map = [];
	for(var i = 0; i < matrix.length; i++){
		//translate
		var i_p = rotate(i, n);
		var val;
		if(map[i] !== undefined){
			val = map[i];
		}
		else {
			val = matrix[i];
		}
		map[i_p] = matrix[i_p];
		matrix[i_p] = val;

	}
}

function rotate(i, n){
	return n * (i % n) + n - 1 - Math.floor(i / n);
}


/**
 * Useful info
 *
 * row = i / N
 * col = i % N
 * i = N * row + col
 *
 * 
 */