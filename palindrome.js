// Given the string, check if it is a palindrome.

function solution(inputString) {
	let string = inputString.toLowerCase();
	let reversed = string.split("").reverse().join("");
	return string === reversed;
}

console.log(solution("aabaa"));
