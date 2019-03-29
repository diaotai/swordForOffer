/**
 * 问题： 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 * 思路： 这道题属于很简单的那一种——用 hash table 计算一下出现次数，然后输出第一个出现次数为 1 的字符即可
 */

function firstNotRepeatingChar(str) {
	const map = {};
	for (let i of str) {
		if (map[i]) {
			map[i] += 1;
		} else {
			map[i] = 1;
		}
	}
	for (let i = 0; i < str.length; i++) {
		if (map[str[i]] === 1) {
			return i;
		}
	}
	return -1;
}
