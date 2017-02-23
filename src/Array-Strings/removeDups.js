module.exports = removeDups;

function removeDups(str){
	var map = {};
	var count = 0;
	var val;
	for(var i = 0; i < str.length; i++){
		val = str[i];
		str[i] = null;
		if(map[val]){
			count++;
		}
		else {
			map[val] = true;
			str[i - count] = val;
		}
	}

}

