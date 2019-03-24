/**
 * 问题：给定长度为 n 的绳子，至少剪一刀，且绳子长度必须为整数，要求所有绳子的长度之积最大
 * 本题给了两种解法，一种是动态规划法，从底层算起
 * 另一种贪婪算法，指的是当长度大于 5 时，都切成长度为 3 的片段。如果是 4 ，则切成两端乘积为 4 ，长度为 3 则是 2
*/

function maxLength(length) {
    if (length < 2) {
        return 0;
    } 
    if (length === 2) {
        return 1;
    }
    if (length === 3) {
        return 2;
    }
    if (length === 4) {
        return 4;
    }
    // 绳子长度为 1 和切割后为 1 不是一个性质的事情(以下的数组分别对应长度为 0，1，2，3 的情况)
    const product = [0, 1, 2, 3];
    for (let i = 4; i <= length; i++) {
        let max = 0;
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            if (product[j] * product[i - j] > max) {
                max = product[j] * product[i - j];
            }
        }
        product[i] = max;
    }

    return product[length - 1];
}