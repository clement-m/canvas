class ClassUnits {
	constructor() {
		this.arrayUnits = [];
	}

	addUnit(Unit) {
		this.arrayUnits.push(Unit);
	}
	
	display(context, canvasWidth, canvasHeight) {
		var units = [];
		this.arrayUnits.forEach(function(Unit) {
			Unit.display(context);
			Unit.colisionCanvas(canvasWidth, canvasHeight);
			Unit.updatePosition();
			units.push(Unit);
		});

		this.arrayUnits.forEach(function(Unit) {
			units.forEach(function(Ennemy) {
				if(!Unit.dead && !Ennemy.dead && Unit.id !== Ennemy.id) {
					Unit.colidBall(Ennemy);
				}
			});
		});
	}

	die() {
		this.arrayUnits.forEach(function(item, index, object) {
			if(item.dead) {
				object.splice(index, 1);
			}
		});
	}
};