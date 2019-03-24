/**
 * 问题：输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 * 在处理的时候，应当注意负数，此外, >> 要比 / 2快得多
 * 此外，将 n & (n - 1) 可以干掉二进制中 一位 1
 */

function numberOf1(n) {
    let count = 0;
    while (n) {
        count++;
        n = n & (n - 1);
    }
    return count;
}
