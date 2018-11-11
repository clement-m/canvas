window.onload = function()
{
    // LOAD UNIT
    var Player = new ClassBall(1, 120, 30, 65);
    var Units =  new ClassUnits();
    Units.addUnit(Player);
    Units.addUnit(new ClassBall());

    // INIT CANVAS
    var canvas = document.getElementById("canvas");
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }
    
    var context = canvas.getContext("2d");
    if(!context) {
        alert("Impossible de récupérer le context");
        return;
    }

    // INIT GAME
    var myInterval = setInterval(animate, 1000 / 30);
    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        Units.display(context, canvas.width, canvas.height);
    }
    
}