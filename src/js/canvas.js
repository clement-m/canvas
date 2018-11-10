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
    var Ball2 = new ClassBall(40, 20, 65);

    var myInterval = setInterval(animate, 1000/30);
    
    function animate()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // diplay B1 & B2
        Ball1.display(context);
        Ball2.display(context);
        
        // colision canvas and ball B1 & B2
        Ball1.colisionCanvas(canvas.width, canvas.height);
        Ball2.colisionCanvas(canvas.width, canvas.height);

        // deplacement B1 & B2
        Ball1.updatePosition();
        Ball2.updatePosition();
    }
    
}