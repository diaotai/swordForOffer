/**
 * 问题：寻找一个字符串里不具有重复字符的最长子字符串的长度
 * 思路： 依旧是动态规划，后边的值是必然依靠前面的值的。所以我们从前向后算，当遇到出现过的字母，需要考察一下是否出现在目前的最长序列中
*/ 
function findLongestSubStringLength(string) {
    if (!string) {
        return 0;
    }
    let currentLength = 0;
    let maxLength = 0;
    const lastAppearPositions = [];
    for (let i = 0; i < 26; i++) {
        lastAppearPositions.push(-1);
    }
    for (let i = 0; i < string.length; i++) {
        const charCode = string.charCodeAt(i) - 97;
        const prevIndex = lastAppearPositions[charCode];
        if (prevIndex < 0 || i - prevIndex > currentLength) { 
            currentLength += 1;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
            currentLength = i - prevIndex;
        }
        lastAppearPositions[charCode] = i;
    }
    return maxLength;
}

(function () {
    console.log(findLongestSubStringLength('arabcacfr'));
})()