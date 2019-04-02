/**
 * 问题： 汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。
 * 对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
 * 思路： 本题类似于之前数组的左旋，稍微动一下顺序即可
 */
function leftRotateString(str, n) {
	if (!str || n < 0) {
		return '';
	}
	const arr = str.split('');
	reverse(arr, 0, n - 1);
	reverse(arr, n, arr.length - 1);
	reverse(arr, 0, arr.length - 1);
	return arr.join('');
}

function reverse(arr, start, end) {
	while (start < end) {
		const temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
	return arr;
}
