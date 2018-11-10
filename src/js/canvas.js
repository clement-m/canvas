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

    var Units =  new ClassUnits();

    Units.addUnit(new ClassBall());
    Units.addUnit(new ClassBall(40, 20, 65));

    var myInterval = setInterval(animate, 1000 / 30);
    
    function animate()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);

        Units.display(context, canvas.width, canvas.height);
    }
    
}