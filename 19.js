/*
 * 问题：请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
 * 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 * 思路：本题的核心在于 * 所在的情况，当出现 * 时，若第一个字符匹配不成功，则忽略 pattern 前两个字符。若匹配成功，则要考虑三种情况
 */
//s, pattern都是字符串
//s, pattern都是字符串
function match(s, pattern) {
	if (s == undefined && pattern == undefined) {
		return true;
	}
	if (s == undefined || pattern == undefined) {
		return false;
	}
	return matchCore(s, pattern);
}

function matchCore(s, pattern) {
	if (s === "" && pattern === "") {
		return true;
	}

	if (pattern[1] === "*") {
		if (s[0] === pattern[0] || (pattern[0] === "." && s.length)) {
			return (
				matchCore(s.slice(1), pattern) ||
				matchCore(s, pattern.slice(2)) ||
				matchCore(s.slice(1), pattern.slice(2))
			);
		}
		return matchCore(s, pattern.slice(2));
	}

	if (s[0] === pattern[0] || (pattern[0] === "." && s.length)) {
		return matchCore(s.slice(1), pattern.slice(1));
	}
	return false;
}
