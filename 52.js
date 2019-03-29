/**
 * 问题： 输入两个链表，找出它们的第一个公共结点。
 * 思路： 最后一个节点必然是一致的，我们可以倒着来，所以可以用栈来解决。
 * 另一个方法是拿到长度，长的那个先走几步，然后同步走，找到相同的即可
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function findFirstCommonNode(pHead1, pHead2) {
	if (!pHead1 || !pHead2) {
		return null;
	}
	let shortLinkedList = pHead1;
	let longLinkedList = pHead2;
	let length1 = getLength(pHead1);
	let length2 = getLength(pHead2);

	if (length1 > length2) {
		shortLinkedList = pHead2;
		longLinkedList = pHead1;
	}
	let shortNode = shortLinkedList;
	let longNode = longLinkedList;
	for (let i = 0; i < Math.abs(length1 - length2); i++) {
		longNode = longNode.next;
	}
	while (shortNode && longNode) {
		if (longNode === shortNode) {
			return longNode;
		}
		longNode = longNode.next;
		shortNode = shortNode.next;
	}
	return null;
}

function getLength(head) {
	let count = 0;
	while (head) {
		count++;
		head = head.next;
	}
	return count;
}
