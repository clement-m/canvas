class ClassBall {
    constructor(id, diametreBall, posX, posY) {
        this.id = id === undefined ? 0 : id;
        this.diametreBall = diametreBall === undefined ? 20 : diametreBall;
        this.posX = posX === undefined ? 25 : posX + this.diametreBall / 2;
        this.posY = posY === undefined ? 25 : posY + this.diametreBall / 2;
        this.speedX = 3;
        this.speedY = 3;
        this.dead = false;
    }

    display(context) {
        if(!this.dead) {
            context.beginPath();
            context.arc(this.posX, this.posY, this.diametreBall / 2, 0, Math.PI * 2);
            context.fill();
        }
    }

    colisionCanvas(canvasWidth, canvasHeight) {
        if(this.posX + this.diametreBall / 2 >= canvasWidth || this.posX <= 0 + this.diametreBall / 2) {
            this.speedX *= -1;
        }
        if(this.posY + this.diametreBall / 2 >= canvasHeight || this.posY <= 0 + this.diametreBall / 2) {
            this.speedY *= -1;
        }
    }

    updatePosition() {
        this.posX += this.speedX;
        this.posY += this.speedY;
    }
}