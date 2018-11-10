var Ball = {
    diametreBall: 20,
    posX: 1 + 20 /2,
    posY: 1 + 20 /2,
    speedX: 3,
    speedY: 3,

    init: function () {
        this.diametreBall = 20;
        this.posX = 20 + this.diametreBall /2;
        this.posY = 65 + this.diametreBall /2;
        this.speedX = 3;
        this.speedY = 3;
    },

    colisionCanvas: function() {
        if(Ball1.posX + Ball1.diametreBall / 2 >= canvas.width || Ball1.posX <= 0 + Ball1.diametreBall / 2)//Si on touche le bord gauche ou droit
        {
            Ball1.speedX *= -1;//On inverse la vitesse de déplacement sur l'axe horizontal.
        }
    },

    move: function () {
        // nothing yet
    }
}