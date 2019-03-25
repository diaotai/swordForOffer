/**
 * 问题：请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
 * 注意点： E 的左右都必须有数字，右边必须是整数
 */

//s字符串
function isNumeric(s) {
	if (!s) {
		return false;
	}
	const numbers = s.split(/e/gi);
	if (numbers.length > 2) {
		return false;
	}
	if (numbers.length === 2) {
		return isFloat(numbers[0]) && numbers[1] !== "+" && isInt(numbers[1]);
	} else {
		return isFloat(s);
	}
}

function isFloat(num) {
	if (!num.length) {
		return false;
	}
	if (num[0] === "+" || num[0] === "-") {
		num = num.slice(1);
	}
	let count = 0;
	for (let i of num) {
		if (i === ".") {
			count++;
		} else if (i < "0" || i > "9") {
			return false;
		}
	}
	return count < 2;
}

function isInt(num) {
	if (!num.length) {
		return false;
	}
	if (num[0] === "+" || num[0] === "-") {
		num = num.slice(1);
	}
	for (let i of num) {
		if (i < "0" || i > "9") {
			return false;
		}
	}
	return true;
}
