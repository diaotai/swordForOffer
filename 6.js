/**
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList(原题是打印)。
 * 最笨的方法就是不停地一次一次遍历，或者修改指针走向，但这显然是扯淡
 * 由于只需要颠倒一下顺序，我们首先就想到了栈
 * 此外递归的本质就是一个栈，所以我们也可以用递归来做
 * 但是为了避免爆栈，所以还是选择了使用栈而不是递归
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  const result = [];
  while (head) {
    result.unshift(head.val);
    head = head.next;
  }
  return result;
}
