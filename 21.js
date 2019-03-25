/**
 * 问题：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * 思路： 其实就是类似于快排的解决方法
 */

function reOrderArray(array) {
	if (!array) {
		return null;
	}
	let start = 0;
	let end = array.length - 1;
	while (start < end) {
		while (start < end && array[start] % 2 === 1) {
			start++;
		}
		while (start < end && array[end] % 2 === 0) {
			end--;
		}
		if (start < end) {
			const temp = array[start];
			array[start] = array[end];
			array[end] = temp;
		}
	}
	return array;
}
