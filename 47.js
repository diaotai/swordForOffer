/**
 * 问题：一个矩阵中每个点都有对应值，从左上角开始每一步只能向右或者向下，请问到右下角值最大的地方
 * 思路： 我的第一反应就是用递归推下去，简单明了暴力。但是这样显然效率不够高，改为用动态规划法
*/

function getMaxValueInMatrix(values) {
    if(!values || !values[0]) {
        return null;
    }
    const rows = values.length;
    const cols = value[0].length;
    const maxValues = [];
    for (let i = 0; i < rows; i++) {
        const arr = [];
        for (let j = 0; j < cols; j++) {
            arr.push(0);
        }
        maxValues.push(arr);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const up = i > 0 ? maxValues[i - 1][j] : 0;
            const left = j > 0 ? maxValues[i][j - 1] : 0;
            maxValues[i][j] = Math.max(up, left) + values[i][j];
        }
    }
    return values[rows - 1][cols - 1];
}