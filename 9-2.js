/**
 * 用两个队列来模拟栈，但是这个做法非常的耗性能
 * 解法：就是每次pop只剩下一个，剩下的都到另一个队列
 */

 const queue1 = [], queue2 = [];

 function push(val) {
     queue1.push(val);
 }

 function pop() {
     while(queue1.length > 1) {
         queue2.push(queue1.shift());
     }
     const result = queue1.shift();
     const temp = queue1;
     queue1 = queue2;
     queue2 = temp;
     return result;
 }