module.exports = bomberMan;

function bomberMan(matrix, m, n){
	if (!matrix || (m * n) !== matrix.length)
		throw "Invalid input";
	var row = {};
	var col = {};
	var i;
	//track zeroes
	for (i = 0; i < matrix.length; i++){
		if (matrix[i] === 0){
			row[Math.floor(i / n)] = true;
			col[i % n] = true;
		}
	}

	for(i = 0; i < matrix.length; i++){
		//determine whether this spot needs to be zeroed
		if(row[Math.floor(i / n)] || col[i % n]){
			matrix[i] = 0;
		}
	}
}

