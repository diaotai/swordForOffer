/**
 * 问题： 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 * 解答： 这道题本身简单的要死，但是我们需要考虑不同的情况
 * 比如，当指数是负数的时候，再比如，当底数为0 且指数为负数的时候，都是应当考虑的
 * 另外，再处理计算的时候，应该考虑以下运行的效率，比如可以用二分法来加速计算，用二进制计算代替传统计算
 */

function power(base, exponent) {
    if (base === 0 && exponent < 0) {
        throw new Error("wrong");
    }
    if (exponent < 0) {
        return 1 / powerCore(base, Math.abs(exponent));
    } else {
        return powerCore(base, exponent);
    }
}

function powerCore(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    let result = 1;
    if (exponent >> 1) {
        const half = powerCore(base, exponent >> 1);
        result = half * half;
    }
    if (exponent & 1) {
        result *= base;
    }
    return result;
}
