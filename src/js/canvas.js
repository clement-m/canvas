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
    var diametreBalle2 = 20;
    var posX2 = 100 + diametreBalle2 / 2;
    var posY2 = 15 + diametreBalle2 / 2;
    var vitesseX2 = 3;
    var vitesseY2 = 3;
    
    var myInterval = setInterval(animate, 1000 / 30);
    
    function animate()
    {
        // on efface tout avant de redessiner par dessus
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        //Tracé de la balle
        context.beginPath();
        context.arc(posX, posY, diametreBalle / 2, 0, Math.PI * 2);
        context.arc(posX2, posY2, diametreBalle2 / 2, 0, Math.PI * 2);
        context.fill();
        
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
        
        // DEPLACEMENT B1
        posX += vitesseX;
        posY += vitesseY;

        // DEPLACEMENT B2
        posX2 += vitesseX2;
        posY2 += vitesseY2;
    }
    
}