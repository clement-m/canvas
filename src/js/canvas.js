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

    var Ball1 = new ClassBall();

    var myInterval = setInterval(animate, 1000/30);
    
    function animate()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);

        //Tracé de la balle
        context.beginPath();
        context.arc(Ball1.posX, Ball1.posY, Ball1.diametreBall / 2, 0, Math.PI * 2);
        context.fill();
        
        //On va vérifier si la balle à toucher l'un des bords du canvas.
        if(Ball1.posX + Ball1.diametreBall / 2 >= canvas.width || Ball1.posX <= 0 + Ball1.diametreBall / 2)//Si on touche le bord gauche ou droit
        {
            Ball1.speedX *= -1;//On inverse la vitesse de déplacement sur l'axe horizontal.
        }

        if(Ball1.posY + Ball1.diametreBall / 2 >= canvas.height || Ball1.posY <= 0 + Ball1.diametreBall / 2)//Si on touche le bord du bas ou du haut
        {
            Ball1.speedY *= -1;//On inverse la vitesse de déplacement sur l'axe vertical.
        }
        
        //On additionne les vitesses de déplacement avec les positions
        Ball1.posX += Ball1.speedX;
        Ball1.posY += Ball1.speedY;
    }
    
}