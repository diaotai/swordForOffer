/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 * 本题有两个思路，第一个是我自己基于有向图可达点所思考的，即给每个节点一个标志位，用于标识该点是否被访问过。当该点第二次被访问过时，即为入口（不过这个思路很不好，因为会改变输入数据）
 * 另一个思路是标准思路，分为以下几点：
 * 1.用两个指针，一个一次走一步，一个一次走两步，当走两步的追上走一步的时候，则说明存在环，且该点在环中
 * 2.统计以下环中节点的数量
 * 3.从头节点开始，先走 n（n 为环中的节点数）步，然后第二个指针 和 第一个指针同步走，直到两节点相遇
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function findEntryNodeOfLoop(pHead) {
	if (!pHead) {
		return null;
	}
	while (pHead) {
		if (pHead.visited) {
			return pHead;
		}
		pHead.visited = true;
		pHead = pHead.next;
	}
	return null;
}
