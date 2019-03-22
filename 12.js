/**
 * 问题: 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。 
 * 例如 a b c e s f c s a d e e 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，
 * 但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 * 
 * 思路: 这道题是标准的回溯法，回溯法基本的思路和二叉树的深度优先遍历几乎完全一致
 * 只要做好边界值控制即可
*/

function hasPath(matrix, rows, cols, path){
    if (!matrix || !matrix[0]) {
        return false;
    }
    const visited = [];
    const pathLength = 0;
    for (let i = 0; i < rows; i++) {
        const arr = [];
        for (let j = 0; j < cols; j++) {
            arr.push(false);
        }
        visited.push(arr);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (hasPathCore(matrix, rows, cols, path, i, j, pathLength, visited)) {
                return true;
            }
        }
    }
    return false;
}
        
function hasPathCore(matrix, rows, cols, path, row, col, pathLength, visited) {
    if (col < 0 || col >= cols || row < 0 || row >= rows || visited[row][col]) {
        return false;
    }
    let result = false;
    if (path[pathLength] === matrix[row * cols + col]) {
        if (pathLength === path.length - 1) {
            return true;
        }
        visited[row][col] = true;
        result = hasPathCore(matrix, rows, cols, path, row + 1, col, pathLength + 1, visited) ||
            hasPathCore(matrix, rows, cols, path, row - 1, col, pathLength + 1, visited) ||  
            hasPathCore(matrix, rows, cols, path, row, col + 1, pathLength + 1, visited) || 
            hasPathCore(matrix, rows, cols, path, row, col - 1, pathLength + 1, visited);
    }
    if (result === false) {
        visited[row][col] = false;
    }
    return result;
}

