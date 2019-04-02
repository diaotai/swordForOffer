/**
 * 问题： 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}；
 * 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 * 思路：使用一个数组来记录当前的最大值，并在新值到来的时候清空比它小的以及不再在 滑动窗口 内的值
 */

function maxInWindows(num, size) {
	const result = [];
	if (num && num.length >= size && size >= 1) {
		const index = [];
		// 初始化 index数组
		for (let i = 0; i < size; i++) {
			while (index.length && num[i] > num[index[index.length - 1]]) {
				index.pop();
			}
			index.push(i);
		}

		for (let i = size; i < num.length; i++) {
			result.push(num[index[0]]);
			while (index.length && num[i] > num[index[index.length - 1]]) {
				index.pop();
			}
			if (index.length && i - index[0] >= size) {
				index.shift();
			}
			index.push(i);
		}
		result.push(num[index[0]]);
	}
	return result;
}
