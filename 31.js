/**
 * 问题：输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 * （注意：这两个序列的长度是相等的）
 * 思路： 本题就是单纯的用 stack 进行一个模拟即可，此外应当对不合法的输入进行一些处理
 * PS： 检查逻辑的时候小心再小心，这次把 while 写成 if 过不了搞得我百思不得其解
 */

function isPopOrder(pushV, popV) {
	if (!pushV && !popV) {
		return true;
	}
	if (!pushV || !popV || pushV.length !== popV.length) {
		return false;
	}
	const stack = [];
	let current = 0;
	for (let i of popV) {
		const index = pushV.indexOf(i);
		while (index >= current) {
			stack.push(pushV[current++]);
		}
		if (i !== stack.pop()) {
			return false;
		}
	}
	return true;
}
