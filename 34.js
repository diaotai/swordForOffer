/**
 * 问题：输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
 * 思路： 由于要优先计算根结点，所以必然是前序遍历。此外，在计算过程中所使用的递归可以使用 栈 来处理
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function findPath(root, expectNumber) {
	if (!root) {
		return [];
	}
	const result = [];
	const stack = [];
	findPathCore(root, expectNumber, stack, 0, result);
	return result.sort((arr1, arr2) => {
		return arr1.length > arr.length;
	});
}

function findPathCore(root, expectNumber, path, currentNumber, result) {
	path.push(root.val);
	currentNumber += root.val;
	const isLeaf = !root.left && !root.right;
	if (isLeaf && currentNumber === expectNumber) {
		result.push([...path]);
	}
	if (root.left) {
		findPathCore(root.left, expectNumber, path, currentNumber, result);
	}
	if (root.right) {
		findPathCore(root.right, expectNumber, path, currentNumber, result);
	}
	path.pop();
}
