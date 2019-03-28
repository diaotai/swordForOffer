/**
 * 问题： 给一个数组，返回它的最大连续子序列的和
 * 思路： 1.最暴力的方法是穷举，但显然不靠谱
 *       2. 一个思路是当前面的和为负数的时候，就舍弃，只要正数
 *       3. 动态规划，f(i) 代表着 以 i 为截止点的最大值
 */

function FindGreatestSumOfSubArray(array) {
	if (!array) {
		return 0;
	}
	let max = Number.MIN_SAFE_INTEGER;
	let sum = 0;
	for (let i of array) {
		if (sum < 0) {
			sum = 0;
		}
		sum += i;
		if (sum > max) {
			max = sum;
		}
	}
	return max;
}
