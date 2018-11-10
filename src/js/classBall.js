class ClassBall {
    constructor(diametreBall, posX, posY) {
        this.diametreBall = diametreBall === undefined ? 20 : diametreBall;
        this.posX = posX === undefined ? 15 : posX + this.diametreBall / 2;
        this.posY = posY === undefined ? 15 : posY + this.diametreBall / 2;
        this.speedX = 3;
        this.speedY = 3;
    }
}