function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
	let res = [];
	let count = 0;
	while (count < cost_per_mile.length) {
		res.push(
			parseFloat(
				cost_per_minute[count] * ride_time +
					cost_per_mile[count] * ride_distance
			).toFixed(2)
		);
		count++;
	}
	return res;
}

console.log(solution(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
