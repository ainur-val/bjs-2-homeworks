function parseCount(value) {
	if (Number.isNaN(parseFloat(value))) {
		throw new Error("Невалидное значение");
	}
	return parseFloat(value);
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}


class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}
	get perimeter() {
		return +(this.side1 + this.side2 + this.side3);
	}
	get area() {
		let semiPer = (this.side1 + this.side2 + this.side3) * 0.5;
		let area = Math.sqrt(semiPer * (semiPer - this.side1) * (semiPer - this.side2) * (semiPer - this.side3));
		return +(area.toFixed(3));
	}
	calculatorResult() {
		if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

	}
}

function getTriangle(side1, side2, side3) {
	try {
		return new Triangle(side1, side2, side3);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}