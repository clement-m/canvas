window.onload = function()
{

    function loadDoc() {                                              // déclaration de la fonction loadDoc
        var xhttp = new XMLHttpRequest();                  // on créer un objet xmlhttprequest
        xhttp.onreadystatechange = function() {            // quand son état a changé qu’il est reçu on lance la fonction
            if (this.readyState == 4 && this.status == 200) {  // si le ready stat = 4 et le status = 200 (pas 404)
                document.getElementById("demo").innerHTML = this.responseText;  
            }
        };
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();
    }

      loadDoc();
    // LOAD UNIT
    var Units =  new ClassUnits();
    Units.addUnit(new ClassBall());
    var Player = new ClassBall(1, 1, 120, 30, 65);
    Units.addUnit(Player);

    // SET KeyBoad
    window.addEventListener("keydown", onKeyDown, false);

    function onKeyDown(event) {
        var key = event.key;
        switch (key) {
            case "z": //d
                Player.speedY--;
                console.log(Player.speedY);
                break;
            case "q": //s
                Player.speedX--;
                console.log(Player.speedX);
                break;
            case "s": //a
                Player.speedY++;
                console.log(Player.speedY);
                break;
            case "d": //w
                Player.speedX++;
                console.log(Player.speedX);
                break;
        }
    }

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
        Units.die();
    }
    
}