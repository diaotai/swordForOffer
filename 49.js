/**
 * 问题：把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 * 思路：可以很轻易的看出，当一个数可以不断地被2、3、5 整除直到变成 1 那么它就是一个丑数。但是我们不必要检查所有丑数——因为丑数的生成是有规律可循的
 * 具体来说，我们必然可以找到三个 index，使得该 index 乘以对应比例值 大于当前最大丑数。然后取其中最小一个，并更新 index。
 * 这样我们可以计算出对应 index 的丑数，这个方法本质上是空间换时间
 */

function getUglyNumber_Solution(index) {
	if (index <= 0) {
		return 0;
	}
	let array = [1];
	let nextIndex = 1;
	let index2 = 0,
		index3 = 0,
		index5 = 0;
	while (nextIndex < index) {
		const min = Math.min(
			array[index2] * 2,
			array[index3] * 3,
			array[index5] * 5
		);
		array[nextIndex] = min;
		while (array[index2] * 2 <= min) {
			index2++;
		}
		while (array[index3] * 3 <= min) {
			index3++;
		}
		while (array[index5] * 5 <= min) {
			index5++;
		}
		nextIndex++;
	}
	return array[index - 1];
}
