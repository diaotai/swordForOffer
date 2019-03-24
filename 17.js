/**
 *  问题：输入一个数字 n，打印从 1 到最大的 n 位数之间的值
 *  解答： 这道题最大的核心问题在于大数上——当数值超过了数字可以表示的范围时，应当如何处理，标准解答是字符串
*/

function printNumberToN(n) {
    let strArray = [];
    for(let i = 0; i < n; i++) {
        strArray.push('0');
    }
    while (!increseNumber(strArray)) {
        printNumber(strArray);
    }
}

function increseNumber(arr) {
    let isOverflow = false;
    let takeOverValue = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        let val = arr[i].charCodeAt(0) - '0'.charCodeAt(0) + takeOverValue;
        if (i === arr.length - 1) {
            val ++;
        }
        if (val >= 10) {
            // 处理越界的情况
            if (i === 0) {
                isOverflow = true;
                break;
            }
            takeOverValue = 1;
        } else {
            takeOverValue = 0;
        }
        arr[i] = (val % 10).toString();
    }
    return isOverflow;
}

function printNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0') {
            console.log(str.slice(i).join(''));
            break;
        }
    }
}

(function() {
    printNumberToN(3)
})()