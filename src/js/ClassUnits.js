class ClassUnits {
	constructor() {
		this.arrayUnits = [];
	}

	addUnit(Unit) {
		this.arrayUnits.push(Unit);
	}
	display(context, canvasWidth, canvasHeight) {
		this.arrayUnits.forEach(function(Unit) {
			Unit.display(context);
			Unit.colisionCanvas(canvasWidth, canvasHeight);
			Unit.updatePosition();
		});
	}
};