/**
 *  问题：输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 *  思路： 本问题的解决思路是将问题化为小的子问题——先将所有位置放在头部，然后递归处理后边的
 */

function permutation(str) {
	if (!str) {
		return null;
	}
	const arr = new String(str).split("");
	permutationCore(arr, 0);
}

function permutationCore(arr, beginIndex) {
	if (beginIndex === arr.length) {
		console.log(arr.join(""));
	}
	for (let i = beginIndex + 1; i < arr.length; i++) {
		const temp = arr[i];
		arr[i] = arr[beginIndex];
		arr[beginIndex] = temp;

		permutationCore(arr, beginIndex + 1);

		arr[beginIndex] = arr[i];
		arr[i] = temp;
	}
}
