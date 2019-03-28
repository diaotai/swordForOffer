/**
 * 问题： 我们把 a-0，。。。 进行一个数字和字母的一一对应的关系，在这种情况下，一个数字串会有多种翻译方法，那么求一个数字串的算法
 * 思路： 我最初的思路是回溯法，实际上也可行。但是这样会有大量的子任务计算，为了解决这个问题，最好从后向前，依次解决。
*/

function translateNumberToString(num) {
    if (num < 0) {
        return null;
    }
    const str = new String(num);
    const counts = [];
    for (let i = 0; i < str.length; i++) {
        counts.push(0);
    }
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        count = 0;
        // 处理最后一个字符和其它
        if (i < str.length - 1) {
            count = counts[i + 1];
        } else {
            count = 1;
        }
        if (i < str.length - 1) {
            const val = parseInt(str[i] + str[i + 1]);
            // 只要两个数字可以组成新的一个字符，就是可以做出一种新的合并
            if (val >= 0 && val <= 25) {
                if (i < str.length - 2) {
                    count += counts[i + 2];
                } else {
                    count += 1;
                }
            }
        }
        counts[i] = count;
    }
    return counts[0];
}

(function() {
    console.log(translateNumberToString(12258) === 5);
})()