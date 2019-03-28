/**
 * 问题：在012345678910 。。。 中找到第 n 位数的值
 * 思路： 与其强行暴力求解，不如先判断当前位数所在的是几位数，然后具体进行相应的计算
 */

function findNumberAtN(n) {
    if (n < 0) {
        return -1;
    }
    let digit = 1;
    while (n > numbersOfDigit(digit)) {
        n -= numbersOfDigit(digit) * digit;
        digit ++;
    }
    return getTheNumber(n, digit);
}

function getTheNumber(index, digit) {
    const val = Math.floor(index / digit);
    const n = index % digit;
    const num = beginNumber(digit) + val;
    return (new String(num))[n];
}

function numbersOfDigit(digit) {
    if (digit === 1) {
        return 10;
    }
    return 9 * Math.pow(10, digit - 1);
}

function beginNumber(digit) {
    if (digit === 1) {
        return 0;
    }
    return Math.pow(10, digit - 1);
}

(function() {
    console.log(findNumberAtN(5),5);
    console.log(findNumberAtN(13),1);
    console.log(findNumberAtN(1001),7);
})()