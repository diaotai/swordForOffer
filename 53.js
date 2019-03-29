/**
 * 问题：统计一个数字在排序数组中出现的次数。
 * 思路：由于是排序的，所以应该二分法，但是我手懒，用的遍历
 */
function getNumberOfK(data, k) {
	let count = 0;
	for (let i of data) {
		if (i === k) {
			count++;
		}
	}
	return count;
}
