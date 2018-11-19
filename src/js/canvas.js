window.onload = function()
{
    // LOAD UNIT
    var Units =  new ClassUnits();

    // add a ennemy ball
    //Units.addUnit(new ClassBall());

    //var Player = new ClassBall(1, 1, 120, 600, 600);
    //Units.addUnit(Player);

    var elements = document.querySelectorAll('[id^=id]');
    var Player;
    elements.forEach(function(element) {
        var id = element.id.substr(2);
        var posX = parseInt(document.getElementById('posX' + id).value);
        var posY = parseInt(document.getElementById('posY' + id).value);
        var PlayerMulti1 = new ClassBall(id, 1, 120, posX, posY);
        Player = PlayerMulti1;
        Units.addUnit(PlayerMulti1);
    });




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

    function updatePositionBdd() {
        $.ajax({
            url: "controllers/updatePosition.php",
            cache: false,
            type: "POST",
            data: 'id=' + Player.id + '&posX=' + Player.posX + '&posY=' + Player.posY,
            success: function(html){
                $("#datacontainer").append("");
                $("#datacontainer").append(html);
            }
        });
    }



    // INIT GAME
    var myInterval = setInterval(animate, 1000 / 30);

    var ticAjax = 0;
    function animate() {
        ticAjax++;
        if(ticAjax > 50) {
            updatePositionBdd();
        }


        context.clearRect(0, 0, canvas.width, canvas.height);
        Units.display(context, canvas.width, canvas.height);
        Units.die();
    }
    
}