window.onload = function()
{
    var canvas = document.getElementById("canvas");
    if(!canvas)
    {
        alert("Impossible de récupérer le canvas");
        return;
    }
    
    var context = canvas.getContext("2d");
    if(!context)
    {
        alert("Impossible de récupérer le context");
        return;
    }

    // ball 1
    var diametreBalle = 20;
    var posX = 1 + diametreBalle / 2;
    var posY = 1 + diametreBalle / 2;
    var vitesseX = 3;
    var vitesseY = 3;

    // ball 2
    var diametreBalle2 = 40;
    var posX2 = 100 + diametreBalle2 / 2;
    var posY2 = 15 + diametreBalle2 / 2;
    var vitesseX2 = 3;
    var vitesseY2 = 3;
    
    var myInterval = setInterval(animate, 1000 / 30);

    function collisionBallCanvas(pos, vitesse, diametreBalle, canvas) {
        if(pos + diametreBalle / 2 >= canvas || pos <= 0 + diametreBalle / 2)//Si on touche le bord gauche ou droit
        {
            vitesse *= -1;//On inverse la vitesse de déplacement sur l'axe horizontal.
        }
        return vitesse;
    }

    function updateBallPosition(pos, vitesse) {
        pos += vitesse;
        return pos;
    }
    
    function animate()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        context.beginPath();
        context.arc(posX, posY, diametreBalle / 2, 0, Math.PI * 2);
        context.arc(posX2, posY2, diametreBalle2 / 2, 0, Math.PI * 2);
        context.fill();
        
        // on gère les colisions des deux balles
        vitesseX = collisionBallCanvas(posX, vitesseX, diametreBalle, canvas.width);
        vitesseY = collisionBallCanvas(posY, vitesseY, diametreBalle, canvas.height);

        vitesseX2 = collisionBallCanvas(posX2, vitesseX2, diametreBalle2, canvas.width);
        vitesseY2 = collisionBallCanvas(posY2, vitesseY2, diametreBalle2, canvas.height);

        // on change les positions des deux balles
        posX = updateBallPosition(posX, vitesseX);
        posY = updateBallPosition(posY, vitesseY);
        
        posX2 = updateBallPosition(posX2, vitesseX2);
        posY2 = updateBallPosition(posY2, vitesseY2);

        /*
        // COLLISION B1
        if(posX + diametreBalle / 2 >= canvas.width || posX <= 0 + diametreBalle / 2)//Si on touche le bord gauche ou droit
        {
            vitesseX *= -1;//On inverse la vitesse de déplacement sur l'axe horizontal.
        }

        if(posY + diametreBalle / 2 >= canvas.height || posY <= 0 + diametreBalle / 2)//Si on touche le bord du bas ou du haut
        {
            vitesseY *= -1;//On inverse la vitesse de déplacement sur l'axe vertical.
        }

        // COLLISION B2
        if(posX2 + diametreBalle2 / 2 >= canvas.width || posX2 <= 0 + diametreBalle2 / 2)//Si on touche le bord gauche ou droit
        {
            vitesseX2 *= -1;//On inverse la vitesse de déplacement sur l'axe horizontal.
        }

        if(posY2 + diametreBalle2 / 2 >= canvas.height || posY2 <= 0 + diametreBalle2 / 2)//Si on touche le bord du bas ou du haut
        {
            vitesseY2 *= -1;//On inverse la vitesse de déplacement sur l'axe vertical.
        }
        */


        /*
        // DEPLACEMENT B1
        posX += vitesseX;
        posY += vitesseY;

        // DEPLACEMENT B2
        posX2 += vitesseX2;
        posY2 += vitesseY2;
        */
    }
    
}