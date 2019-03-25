/**
 * 问题：输入一个链表，反转链表后，输出新链表的表头。
 * 思路：该题需要三个指针——当前值，上一个节点，下一个节点，然后依次处理即可（要注意空链表以及链表断裂问题）
 * 最好能提前准备好测试用例来对代码进行测试
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function reverseList(pHead) {
	if (!pHead) {
		return null;
	}
	let node = pHead;
	let prevNode = null;
	let result = null;
	while (node) {
		const nextNode = node.next;
		if (!nextNode) {
			result = node;
		}
		node.next = prevNode;
		prevNode = node;
		node = nextNode;
	}
	return result;
}
