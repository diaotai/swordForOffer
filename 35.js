/**
 * 问题：输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 * 思路： 本题分为三步：复制节点（并以前后连接），建立随机链接，分开节点
 */

// function RandomListNode(x){
//     this.label = x;
//     this.next = null;
//     this.random = null;
// }
function clone(pHead) {
	if (!pHead) {
		return null;
	}
	cloneNodes(pHead);
	connectNode(pHead);
	return splitNode(pHead);
}

function cloneNodes(head) {
	let node = head;
	while (node) {
		const cloneNode = new RandomListNode(node.label);
		const nextNode = node.next;
		node.next = cloneNode;
		cloneNode.next = nextNode;
		node = nextNode;
	}
	return head;
}

function connectNode(head) {
	let node = head;
	while (node) {
		if (node.random) {
			node.next.random = node.random.next;
		}
		node = node.next.next;
	}
	return head;
}

function splitNode(head) {
	const node = head;
	let cloneHead;
	let cloneNode;
	while (node) {
		if (!cloneHead) {
			cloneHead = cloneNode = node.next;
		}
		cloneNode = node.next;
		node.next = cloneNode.next;
		node = node.next;
		if (!node) {
			return cloneHead;
		}
		cloneNode.next = node.next;
		cloneNode = cloneNode.next;
	}
	return cloneHead;
}
