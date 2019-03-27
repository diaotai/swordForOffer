/**
 *  问题：输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
 *  思路： 本题显然是用递归来处理，而一个二叉搜索树可以分别以中序形式来处理。最后处理一下相邻节点即可
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function convert(root) {
    if (!root) {
		return null;
	}
	if (root.left) {
		let firstNode = convert(root.left);
		while (firstNode.right) {
			firstNode = firstNode.right;
		}
		root.left = firstNode;
		firstNode.right = root;
	}
	if (root.right) {
		root.right = convert(root.right);
		root.right.left = root;
	}
	let node = root;
	while (node.left) {
		node = node.left;
	}
	return node;
}

