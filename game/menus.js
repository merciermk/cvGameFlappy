//Gestion des menus de fin et de début

//var startImg = document.querySelector('.start')
var playBtn = document.querySelector('.playBtn')
var startImg = new Image
startImg.src = "./game/img/menu/start2.png"



var menuStart = {
    dx: 0,
    dy: 0,
    width: 600,
    height: 400,
    draw: function () {
        ctx.drawImage(startImg, 0, 0, 600, 400)
    },
}


var gameRestart = function () {
    background = []
    obstacles = []
    countbg = 0
    countGround = 0
    ground = []
    score = 0;
    gravity = 10;
    elevation = 6
    frame = 1

    flyingY = 40;

}

