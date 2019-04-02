/**
 * 问题：股票的最大利润，已知股票价格依次存在数组中，当我们只进行一次买卖的时候，最大利润是多少
 * 思路：核心在于算一次最大差值，且最大值要在最小值之后
*/

function maxStockIncome(arr) {
    if (!arr || arr.length < 2) {
        return -1;
    }
    let min = Number.MAX_SAFE_INTEGER;
    let maxInCome = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < min) {
            min = arr[i - 1];
        }
        if (arr[i] - min > maxInCome) {
            maxInCome = arr[i] - min;
        }
    }
    return maxInCome;
}

(function() {
    console.log(maxStockIncome([9, 11, 8, 5, 7, 12, 16, 14]))
})()