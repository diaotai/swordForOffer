/**
 *  问题: 输入一个链表，输出该链表中倒数第k个结点。
 *  思路： 其实这道题就是标准的双指针，只不过要注意很多细节（链表为空， k 为 0 ，以及链表长度小于 k 等）
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function findKthToTail(head, k) {
	if (k === 0 || !head) {
		return null;
	}
	let firstNode = head;
	let secondNode = head;
	for (let i = 0; i < k - 1; i++) {
		if (firstNode.next) {
			firstNode = firstNode.next;
		} else {
			return null;
		}
	}
	while (firstNode.next) {
		firstNode = firstNode.next;
		secondNode = secondNode.next;
	}
	return secondNode;
}
