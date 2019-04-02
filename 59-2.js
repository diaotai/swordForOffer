/**
 * 问题：小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
 * 但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
 * 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
 * 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
 * 输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
 * 思路： 本题接上一题，不过 big 不能是 mid，否则这样无法有效缩放，而应该分别是 1 和 2
 */

function findContinuousSequence(sum) {
	const result = [];

	if (sum < 0) {
		return [];
	}

	let start = 1,
		end = 2,
		mid = Math.ceil(sum / 2);
	while (start < mid) {
		const value = sumFromAToB(start, end);
		if (value === sum) {
			result.push(generateFromAToB(start, end));
			start++;
			end++;
		} else if (value > sum) {
			start++;
		} else {
			end++;
		}
	}

	return result.sort((a, b) => {
		return a[0] - b[0] > 0;
	});
}

function sumFromAToB(a, b) {
	let sum = 0;
	for (let i = a; i <= b; i++) {
		sum += i;
	}
	return sum;
}

function generateFromAToB(a, b) {
	const arr = [];
	for (let i = a; i <= b; i++) {
		arr.push(i);
	}
	return arr;
}
