/**
 * 问题：n 个 骰子投出值 num 的概率是多少
 * 思路：本题的思路是递归求解
*/

function calculateRatioOfN(n) {
    const max = 6;
    const maxScrope = n * max;
    const result = [];
    for (let i = 0; i < maxScrope - n + 1; i++) {
        result.push(0);
    }

    probablity(n, max, result);

    const root = Math.pow(max, n);
    for (let i = n; i <= maxScrope; i++) {
        const ratio = result[i - n] / root;
        console.log(`出现${i}的概率为${ratio}`);
    }
}

function probablity(n, max, arr) {
    for (let i = 1; i <= max; i++) {
        calculateProbablity(n, max, n, i, arr);
    }
}

function calculateProbablity(n, max, current, sum, arr) {
    if (current === 1) {
        arr[sum - n]++; 
    } else {
        for (let i = 1; i <= max; i++) {
            calculateProbablity(n, max, current - 1, sum + i, arr);
        }
    }
}

(function() {
    calculateRatioOfN(6);
})()