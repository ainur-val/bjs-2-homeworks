function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	if (arr.length !== 1) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= arr[i + 1] && arr[i + 1] !== undefined) {
				max = arr[i];
				sum += arr[i];
			} else if (arr[i] <= arr[i + 1] && arr[i + 1] !== undefined) {
				min = arr[i];
				sum += arr[i];
			} else if (arr[i + 1] == undefined && arr[i] >= max) {
				max = arr[i];
				sum += arr[i];
			} else if (arr[i + 1] == undefined && arr[i] <= min) {
				min = arr[i];
				sum += arr[i];
			} else {
				sum += arr[i];
			}
		}
	} else {
		min = arr[0];
		max = arr[0];
		sum = arr[0];
	}
	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let max;
	let min;
	if (arr.length !== 0) {
		max = Math.max(...arr);
		min = Math.min(...arr);
	} else {
		max = 0;
		min = 0;
	}
	return max - min;
}


function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let counter = 0;
	if (arr.length !== 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
				counter++;
			}
		}
	} else {
		sumEvenElement = 0;
		counter = 1;
	}
	return sumEvenElement / counter;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let res;

	if (arrOfArr.length === 0) return 0;

	for (let i = 0; i < arrOfArr.length; i++) {
		res = func(...arrOfArr[i]);
		if (res > maxWorkerResult) maxWorkerResult = res;
	}

	return maxWorkerResult;
}