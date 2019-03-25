/**
 * 问题： 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 * 思路： 本题的思路在于递归处理节点。另外应当注意当节点为空的情况的处理
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function merge(pHead1, pHead2) {
	if (!pHead1) {
		return pHead2;
	}
	if (!pHead2) {
		return pHead1;
	}
	let node = null;
	if (pHead1.val < pHead2.val) {
		node = pHead1;
		node.next = merge(pHead1.next, pHead2);
	} else {
		node = pHead2;
		node.next = merge(pHead1, pHead2.next);
	}

	return node;
}
