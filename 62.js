/**
 * 问题：长度为 n， 每隔 m 个就干掉一个，最后剩下的是谁
 * 思路：一种使用链表环来解决
 * 更高级的方法是用以下方法，没看懂
 */

function lastRemaining_Solution(n, m) {
	if (m < 1 || n < 1) {
		return -1;
	}
	let last = 0;
	for (let i = 2; i <= n; i++) {
		last = (last + m) % i;
	}
	return last;
}
