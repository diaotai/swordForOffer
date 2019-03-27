/**
 * 问题： 请实现两个函数，分别用来序列化和反序列化二叉树。
 * 思路： 本问题并不困难，依旧是采用递归的思路，此外，空输入应该专门处理
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function serialize(pRoot) {
	if (!pRoot) {
		return "";
	}
	const result = [];
	serializeCore(pRoot, result);
	return result.join(",");
}

function serializeCore(root, result) {
	if (!root) {
		result.push("$");
		return;
	} else {
		result.push(root.val);
	}
	serializeCore(root.left, result);
	serializeCore(root.right, result);
}

function deserialize(s) {
	if (!s) {
		return;
    }
    // 不要问我为什么这么写，我不会告诉你是因为牛客网的字符串不能调用 split 方法
	const arr = new String(s).split(",");
	return deserializeCore(arr);
}

function deserializeCore(arr) {
	if (!arr.length) {
		return;
	}

	const val = arr.shift();
	if (val === "$") {
		return null;
	}
	const node = new TreeNode(val);
	node.left = deserializeCore(arr);
	node.right = deserializeCore(arr);
	return node;
}
