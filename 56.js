/**
 * 问题：一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
 * 思路：如果是一个数组中有一个只出现一次的数，其它的都出现两次，那么直接异或，剩下的就是那个单独出现一次的
 * 以此类推，当一个数组中出现两个的时候，那么我们求异或就可以会得到这两个值的异或，而当二进制某一位为1的时候，必然是两个数该位一个为 1，一个为 0
 * 那么我们可以以这一位是否为 1 而分成两个数组，然后分别异或即可
*/

function findNumsAppearOnce(array)
{
    if (!array || !array.length) {
        return [];
    }
    let value = array[0];
    let num1, num2;
    for (let i = 1; i < array.length; i++) {
        value ^=  array[i];
    }
    const index = findLastBitIndex(value);
    for (let num of array) {
        if (isBitOne(num, index)) {
            if (!num1) {
                num1 = num;
            } else {
                num1 ^= num;
            }
        } else {
            if (!num2) {
                num2 = num;
            } else {
                num2 ^= num;
            }
        }
    }
    return [num1, num2];
}

function isBitOne(num, index) {
    num = num >> index
    return (num & 1) === 1;
}

function findLastBitIndex(num) {
    let count = 0;
    while (!(num & 1) && count < 8) {
        count++;
        num = num >> 1;
    }
    return count;
}