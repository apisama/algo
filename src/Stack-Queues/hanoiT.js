module.exports = hanoiT;

/**
 * Hanoi towers implementation. Given 3 stacks 
 * @param  {./Stack} src Stack object where each element on top is smaller than the one before
 * @param  {./Stack} mid Stack object where each element on top is smaller than the one before
 * @param  {./Stack} dst Stack object where each element on top is smaller than the one before
 * @param  { number} n   Size of the stack elements to move
 * @return {void}
 */
function hanoiT(src, mid, dst, n){
	if(n == 1){
		
		dst.push(src.pop());
		return;
	}

	hanoiT(src, dst, mid, n - 1);
	hanoiT(src, mid, dst, 1);
	hanoiT(mid, src, dst, n - 1);
}