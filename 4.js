/**
 * 题目:在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * 解法：最暴力的方法是进行遍历，但是显然，这对于已经排序好的数组而言实在是太浪费了
 * 然而对于排序数组最有效的二分法也是有问题的，因为当不相等时，需要处理的范围是多个。
 * 因此希望能保证当不相等时，所需要处理的范围是确定的，所以我们选择最右上角为标尺。若该值比目标值小，则这一行作废，若更大，则这一列作废
 */

function find(target, array) {

    if (!array || !array[0]) {
        return false;
    }
    const rows = array.length;
    const columns = array[0].length;
    let row = 0;
    let column = columns - 1;
    while (row < rows && column >= 0) {
        const value = array[row][column];
        if (value === target) {
            return true;
        } else if (value < target) {
            row++;
        } else {
            column--;
        }
    }
  return false;
}
