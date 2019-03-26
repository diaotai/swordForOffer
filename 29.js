/**
 *  问题:输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字.
 *  例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10
 *  思路：首先，不管宽高是否一致，我们都应当注意以下规律——每一圈起点的 横纵坐标 是一致的，此外，当每一圈打印之后，剩余矩阵的横纵范围都减小了2
 * 因此，我们可以看到第一个循环的作用——即为判断是否还有剩下的节点没有被打印
 * 而在每一圈的打印过程中，分为向右、向下、向左、向上四步，每一步都应该有判断条件
 */
function printMatrix(matrix) {
	if (!matrix || !matrix[0]) {
		return;
	}
	const rows = matrix.length;
	const cols = matrix[0].length;
	let start = 0;
	while (rows > start * 2 && cols > start * 2) {
		printMatrixCore(matrix, cols, rows, start);
		start++;
	}
}

function printMatrixCore(matrix, cols, rows, start) {
	const row = rows - 1 - start;
	const col = cols - 1 - start;
	if (start <= col) {
		for (let i = start; i <= col; i++) {
			console.log(matrix[start][i]);
		}
	}
	if (start < row) {
		for (let i = start + 1; i <= row; i++) {
			console.log(matrix[i][col]);
		}
	}
	if (start < col && row > start) {
		for (let i = col - 1; i >= start; i--) {
			console.log(matrix[row][i]);
		}
	}
	if (start < col && start < row) {
		for (let i = row - 1; i > start; i--) {
			console.log(matrix[i][start]);
		}
	}
}

printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])