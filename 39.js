/**
 * 问题：数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 * 思路：可以通过类似于快排的方法完成查找，也可以通过一次遍历来解决。不过，需要注意输入的数据并不合法的情况
 */

function moreThanHalfNum_Solution(numbers) {
	if (!numbers) {
		return null;
	}
	let num;
	let count = 0;
	for (let i of numbers) {
		if (count === 0) {
			count = 1;
			num = i;
		} else if (num === i) {
			count++;
		} else {
			count--;
		}
	}
	count = 0;
	for (let i of numbers) {
		if (num === i) {
			count++;
		}
	}
	if (count <= numbers.length / 2) {
		return 0;
	}
	return num;
}
