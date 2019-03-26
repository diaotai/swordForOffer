/**
 *  问题：从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 *  思路： 注意一下打印的顺序，就会很轻易的看明白这是一个先进先出的队列，因为无需分行，所以只用一个队列即可
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function printFromTopToBottom(root) {
	if (!root) {
		return null;
	}
	const result = [];
	const queue = [root];
	while (queue.length) {
		const node = queue.shift();
		result.push(node.val);
		if (node.left) {
			queue.push(node.left);
		}
		if (node.right) {
			queue.push(node.right);
		}
	}
    return result;
}
