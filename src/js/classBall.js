class ClassBall {
    constructor(id, player, diametreBall, posX, posY) {
        this.id = id === undefined ? 0 : id;
        this.player = player === undefined ? 0 : player;
        this.diametreBall = diametreBall === undefined ? 20 : diametreBall;
        this.posX = posX === undefined ? 25 : posX + this.diametreBall / 2;
        this.posY = posY === undefined ? 25 : posY + this.diametreBall / 2;
        this.speedX = this.player ? 0 : 10;
        this.speedY = this.player ? 0 : 10;
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

    checkMaxSpeed() {
        if(this.speedX > 5) this.speedX = 5;
        if(this.speedX < -5) this.speedX = -5;
        if(this.speedY > 5) this.speedY = 5;
        if(this.speedY < -5) this.speedY = -5;
    }

    updatePosition() {
        this.checkMaxSpeed();
        this.posX += this.speedX;
        this.posY += this.speedY;
    }

    colidBall(Ennemy) {
        var impactX = false;
        var impactY = false;
        if(this.posX + this.diametreBall / 2 < Ennemy.posX + Ennemy.diametreBall / 2 && this.posX - this.diametreBall / 2 > Ennemy.posX - Ennemy.diametreBall / 2) {
            impactX = true;
            //console.log('in X');
        }
        if(this.posY + this.diametreBall / 2 < Ennemy.posY + Ennemy.diametreBall / 2 && this.posY - this.diametreBall / 2 > Ennemy.posY - this.diametreBall / 2) {
            impactY = true;
            //console.log('in Y');
        }
        if(impactX && impactY) {
            console.log('impact');
            this.impactEffect(Ennemy);
        }
    }

    impactEffect(Ennemy) {
        if (this.diametreBall >= Ennemy.diametreBall) {
            this.diametreBall += 20;
            Ennemy.diametreBall -= 20;

        } else {
            this.diametreBall -= 20;
            Ennemy.diametreBall += 20;
            this.checkDie();
        }
    }

    checkDie() {
        if (this.diametreBall <= 0) {
            this.dead = true;
        } 
    }
}