/**
 * 题目：操作给定的二叉树，将其变换为源二叉树的镜像。
 * 二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
        11 9 7  5
    思路： 就是交换非叶节点的左右子树
*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function mirror(root) {
	if (!root) {
		return null;
	}
	if (!root.left && !root.right) {
		return null;
	}
	const temp = root.left;
	root.left = root.right;
	root.right = temp;
	if (root.left) {
		mirror(root.left);
	}
	if (root.right) {
		mirror(root.right);
	}
}
