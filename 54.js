/**
 * 问题：寻找二叉搜索树中第 k 个节点
 * 思路： 本质上就是中序搜索，来寻找指定位数的值
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function kthNode(pRoot, k) {
	if (!pRoot) {
		return null;
	}
	return kthNodeCore(pRoot, [k]);
}

function kthNodeCore(pRoot, arr) {
	let result = null;
	if (pRoot.left) {
		result = kthNodeCore(pRoot.left, arr);
	}
	if (!result) {
		if (arr[0] === 1) {
			return pRoot;
		}
		arr[0] = arr[0] - 1;
	}
	if (!result && pRoot.right) {
		result = kthNodeCore(pRoot.right, arr);
	}
	return result;
}
