/**
 * 问题：输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。在输出用例中，小的先输出
 * 思路：通过从两边向中间靠近，通过单向的收缩可以找到合规的值。当两个差距最大的时候，就是乘积最小
*/

function findNumbersWithSum(array, sum)
{
    if (!array || !array.length) {
        return [];
    }
    let start = 0, end = array.length - 1;
    
    while (start < end) {
        const startValue = array[start];
        const endValue = array[end];
        const sumValue = startValue + endValue;
        if (sumValue === sum) {
            return [startValue, endValue];
        } else if (sumValue < sum) {
            start++;
        } else {
            end--;
        }
    }
    return [];
}