/**
 * 问题：输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 * 思路：经过一次举例，可以很容易的发现后序搜索的最后一个节点是 root 节点， 向前一段是右子树，再向前一段是左子树
 * 又因为这是一个二叉搜索树，所以左子树必然小于根结点，右子树必然大于根结点
 * 因此，我们可以用递归的方式来进行一个检测
 */

function verifySquenceOfBST(sequence) {
	if (!sequence || !sequence.length) {
		return false;
	}
	let i = 0;
	const root = sequence[sequence.length - 1];
	for (; i < sequence.length - 1; i++) {
		if (sequence[i] > root) {
			break;
		}
	}
	for (let j = i; j < sequence.length - 1; j++) {
		if (sequence[j] < root) {
			return false;
		}
	}
	let left = true,
		right = true;
	if (i > 0) {
		left = verifySquenceOfBST(sequence.slice(0, i));
	}
	if (i < sequence.length - 1) {
		right = verifySquenceOfBST(sequence.slice(i, sequence.length - 1));
	}
	return left && right;
}
