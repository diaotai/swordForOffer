/**
 * 题目：用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * 思路：其核心思想就是反反为正
 * 如果arr2没有值，那么应当把arr1所有值放入arr2以颠倒
 */

const arr1 = [], arr2 = [];
function push(node) {
  arr1.push(node);
}
function pop() {
  if (arr2.length === 0) {
    while (arr1.length) {
      arr2.push(arr1.pop());
    }
  }
  if (arr2.length) {
    return arr2.pop();
  }
}
