/*
Given an array of integers, find the pair of adjacent elements 
that has the largest product and return that product
*/

function solution(inputArray) {
	let highestProduct = Number.NEGATIVE_INFINITY;
	for (let i = 0; i < inputArray.length - 1; i++) {
		let product = inputArray[i] * inputArray[i + 1];
		console.log(product);
		highestProduct = highestProduct >= product ? highestProduct : product;
	}
	return highestProduct;
}

console.log(solution([3, 6, -2, -5, 7, 3]));
console.log(solution([-23, 4, -3, 8, -12]));
