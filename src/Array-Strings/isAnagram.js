module.exports = isAnagram;

function isAnagram(a, b){

	"olo"
	"loo"


	if (a.length !== b.length){
		return false;
	}
	var map = {};
	var i =0;
	var uniqueCnt = 0;
	for(i = 0; i < a.length; i++){
		if(map[a[i]]){
			map[a[i]]++;
		}
		else{
			map[a[i]] = 1;
			uniqueCnt++;
		}
	}

	for(i = 0; i < b.length; i++){
		if(!map[b[i]]){
			return false;
		}
		else{
			if(--map[b[i]] === 0){
				uniqueCnt--;
			}
		}
	}

	return uniqueCnt > 0 ? false : true;

}
