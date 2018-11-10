var Ball = {
    diametreBall: 20,
    posX: 1 + 20 /2,
    posY: 1 + 20 /2,
    speedX: 3,
    speedY: 3,

    init: function (diametreBall, posX, posY) {
        this.diametreBall = diametreBall;
        this.posX = posX + this.diametreBall /2;
        this.posY = posY + this.diametreBall /2;
        this.speedX = 3;
        this.speedY = 3;
    },

    colisionCanvas: function(canvasWidth, canvasHeight) {
        if(this.posX + this.diametreBall / 2 >= canvasWidth || this.posX <= 0 + this.diametreBall / 2)//Si on touche le bord gauche ou droit
        {
            this.speedX *= -1;
        }
        if(this.posY + this.diametreBall / 2 >= canvasHeight || this.posY <= 0 + this.diametreBall / 2)//Si on touche le bord gauche ou droit
        {
            this.speedY *= -1;
        }
    },

    updateBallPosition: function() {
        this.posX += this.speedX;
        this.posY += this.speedY;
    },

    ballDrawing: function(context) {
        context.beginPath();
        context.arc(this.posX, this.posY, this.diametreBall / 2, 0, Math.PI * 2);
        context.fill();
    }
}