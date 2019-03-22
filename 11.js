/**
 * 问题：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，
 * 该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * 解决方案：已排序数组，就算是进行了一次翻转也应该使用二分法。
 * 正常而言，开头的元素应该大于结尾的元素（翻转0个，或大量元素相等都属于特殊情况）
 * 而两段数组又都是递增的，所以我们应该使用二分法和两边比较，尽快找到分界点
 * 由于可能存在翻转  0个的情况，所以我们应该把初始值设为 0，然后在 arr[start] >= arr[end] 的情况下搜索
 * 有一种特殊情况是内部大量相等，当 arr[start] === arr[end] && arr[end] === arr[index] 的时候，
 * 根本无从判断该向左或向右，这种情况下直接搜索全部即可
 */

function minNumberInRotateArray(rotateArray) {
  if (!rotateArray || !rotateArray.length) {
    return 0;
  }
  let start = 0,
    end = rotateArray.length - 1;
  let key = start;
  while (rotateArray[start] >= rotateArray[end]) {
    if (end - start === 1) {
      key = end;
      break;
    }
    if (
      (rotateArray[start] === rotateArray[end] && rotateArray[start]) ||
      rotateArray[key]
    ) {
      return Math.min(...rotateArray.slice(start, end + 1));
    }
    key = Math.floor(start + (end - start) / 2);
    if (rotateArray[key] <= rotateArray[end]) {
      end = key;
    } else if (rotateArray[key] >= rotateArray[start]) {
      start = key;
    }
  }

  return rotateArray[key];
}
