/**
 * 问题：定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 * 思路：我最初以为调用 min 时应当出栈，但实际上并不用。而题目要求这些操作的时间复杂度应该为 O(1),那么只记录最小值，出栈后再计算新的最小值显然是不可行的
 * 那么剩下的方法只能是空间换时间，用新的栈来记录最小值的情况了
 */

const mainStack = [];
const supportStack = [];
function push(node) {
	mainStack.push(node);
	if (!supportStack.length || node < supportStack[supportStack.length - 1]) {
		supportStack.push(node);
	} else {
		supportStack.push(supportStack[supportStack.length - 1]);
	}
}
function pop() {
	supportStack.pop();
	return mainStack.pop();
}
function top() {
	return mainStack[mainStack.length - 1];
}
function min() {
	return supportStack[supportStack.length - 1];
}
