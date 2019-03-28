/**
 * 问题：输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 * 思路：最暴力的方法就是排序取前 k 个，但是显然这个方法太不靠谱了
 * 另一个思路就是通过类似于快排的方式来找到那几个特定的元素。这个方法是最快的，但是有两个弊端——首先，要求读入全部数据，其次，会修改原数组
 * 而还有一个方法就是使用大小为 k 的最大堆来存放最小的 k 个元素，这种方法略慢，但是可以处理大量的数据
 * 至于下面这个，是我写的一个第三种方法的阉割版（因为我不想再实现一次最大堆了）
 */

function GetLeastNumbers_Solution(input, k) {
	const arr = [];

	for (let i of input) {
		if (arr.length < k) {
			arr.push(i);
		} else {
			arr.sort();
			const max = arr[k - 1];
			if (i < max) {
				arr[k - 1] = i;
			}
		}
		arr.sort();
		return arr;
	}
}
