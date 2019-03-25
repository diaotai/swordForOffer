/**
 * 问题：在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 * 思路：在处理链表删除时，应该着重考虑第一个需要删除、最后一个需要删除、所有的都需要删除的情况
 * 而在本题中，因为要删干净所有重复的值，所以需要一个变量来记录上一个非重复节点，也需要一套机制来很好的鉴别当前节点是否为重复节点
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
	if (!pHead) {
		return null;
	}
	let preNode = null;
	let node = pHead;
	let isDeleted = false;
	while (node) {
        // 判断当前节点是否为重复节点
		if (node.next && node.val === node.next.val) {
			isDeleted = true;
		}

		if (isDeleted) {
			// 处理最后一个是重复的情况
			if (!node.next) {
				if (preNode) {
					preNode.next = null;
				}
				// 处理从头到尾都是重复的情况
				else {
					return null;
				}
			} else if (node.next.val !== node.val) {
				// 处理开头第一个是重复的情况
				if (pHead.val === node.val) {
					pHead = node.next;
				}
				isDeleted = false;
			}
		} else {
			if (preNode) {
				preNode.next = node;
			}
			preNode = node;
		}

		node = node.next;
	}
	return pHead;
}
