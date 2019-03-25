/**
 * 问题：输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 * 思路：树是链表的升级版，这道题依旧是使用递归来解决，在两个类型的比较中都是如此
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function hasSubtree(pRoot1, pRoot2) {
	if (!pRoot1 || !pRoot2) {
		return false;
	}
	return (
		hasSubtreeCore(pRoot1, pRoot2) ||
		hasSubtree(pRoot1.left, pRoot2) ||
		hasSubtree(pRoot1.right, pRoot2)
	);
}

function hasSubtreeCore(pRoot1, pRoot2) {
	if (!pRoot2) {
		return true;
	}
	if (!pRoot1) {
		return false;
	}
	if (pRoot1.val !== pRoot2.val) {
		return false;
	}
	return (
		hasSubtreeCore(pRoot1.left, pRoot2.left) &&
		hasSubtreeCore(pRoot1.right, pRoot2.right)
	);
}
