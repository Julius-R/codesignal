/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

function solution(statues) {
	let minNumber;
	let maxNumber;
	let missingNumbers = [];
	statues.sort((a, b) => a - b);
	minNumber = statues[0];
	maxNumber = statues[statues.length - 1];
	for (let i = minNumber; i <= maxNumber; i++) {
		!statues.includes(i) && missingNumbers.push(i);
	}
	return missingNumbers.length;
}

console.log(solution([6, 2, 3, 8]));
