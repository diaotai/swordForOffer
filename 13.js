/**
 * 问题：地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 * 解答： 这一题和上一题一样，都是属于使用深度优先遍历即可解决的问题。只不过在限制条件上有了一些新的区别，注意一下就好
 */

function movingCount(threshold, rows, cols) {
    const visited = [];
    for (let i = 0; i < rows * cols; i++) {
        visited.push(false);
    }
    return movingCountCore(threshold, rows, cols, visited, 0, 0);
}

function movingCountCore(threshold, rows, cols, visited, row, col) {
    if (row < 0 || col < 0 || row >= rows || col >= cols) {
        return 0;
    }
    const index = row * cols + col;
    if (visited[index] || count(row) + count(col) > threshold) {
        return 0;
    }
    visited[index] = true;
    return (
        1 +
        movingCountCore(threshold, rows, cols, visited, row - 1, col) +
        movingCountCore(threshold, rows, cols, visited, row + 1, col) +
        movingCountCore(threshold, rows, cols, visited, row, col + 1) +
        movingCountCore(threshold, rows, cols, visited, row, col - 1)
    );
}

function count(num) {
    let result = 0;
    for (let i of String(num)) {
        result += parseInt(i);
    }
    return result;
}
