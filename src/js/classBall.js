class ClassBall {
    constructor(diametreBall, posX, posY) {
        this.diametreBall = diametreBall === undefined ? 20 : diametreBall;
        this.posX = posX === undefined ? 15 : posX + this.diametreBall / 2;
        this.posY = posY === undefined ? 15 : posY + this.diametreBall / 2;
        this.speedX = 3;
        this.speedY = 3;
    }

    display(context) {
        context.beginPath();
        context.arc(this.posX, this.posY, this.diametreBall / 2, 0, Math.PI * 2);
        context.fill();
    }

    colisionCanvas(canvasWidth, canvasHeight) {
        if(this.posX + this.diametreBall / 2 >= canvasWidth || this.posX <= 0 + this.diametreBall / 2)//Si on touche le bord gauche ou droit
        {
            this.speedX *= -1;
        }
        if(this.posY + this.diametreBall / 2 >= canvasHeight || this.posY <= 0 + this.diametreBall / 2)//Si on touche le bord gauche ou droit
        {
            this.speedY *= -1;
        }
    }

    updatePosition(){
        this.posX += this.speedX;
        this.posY += this.speedY;
    }
}