/* Determine whether string has unique values */
module.exports = hasUnique;
function hasUnique(str){
	var map = {};
	for (var i = 0;i < str.length; i++){
		if (map[str[i]]){
			return false;
		}
		map[str[i]] = true;
	}
	return true; 
}