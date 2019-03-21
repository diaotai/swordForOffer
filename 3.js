/**
 *   在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。
 *   也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 
 *   例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
*/

/**
 * 这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
 * 函数返回True/False
 * @param {*} numbers 输入数组
 * @param {*} duplication 用于存放返回值的地方
 */
function duplicate(numbers, duplication)
{
    if(!numbers) {
        return false;
    }
    
    // 检查数据是否合法
    const n = numbers.length;
    for (let i = 0; i < n; i++) {
        if (numbers[i] >= n || numbers[i] < 0) {
            return false;
        }
    }
    for (let i = 0; i < n; i++) {
        while(i !== numbers[i]) {
            const index = numbers[i];
            
            // 如果已经在特定位置存在该数字了，那么说明又出现了一次
            if (numbers[index] === index) {
                duplication[0] = index;
                return true;
            }
            
            // 否则将数字放在该放的位置上
            numbers[i] = numbers[index];
            numbers[index] = index;
        }
      
        
    }
    return false;
}