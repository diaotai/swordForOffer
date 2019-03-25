/**
 * 问题：请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 * 思路： 本题接上题，本质上依旧是一个检查对称的节点的思路，此外，处理二叉树用递归是极好的
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
	return isSymmtericalCore(pRoot, pRoot);
}

function isSymmtericalCore(root1, root2) {
	if (!root1 && !root2) {
		return true;
	}
	if (!root1 || !root2) {
		return false;
	}
	if (root1.val !== root2.val) {
		return false;
	}
	return (
		isSymmtericalCore(root1.left, root2.right) &&
		isSymmtericalCore(root1.right, root2.left)
	);
}
