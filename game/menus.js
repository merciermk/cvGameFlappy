//Gestion des menus de fin et de début

//var startImg = document.querySelector('.start')
var playBtn = document.querySelector('.playBtn') //Bouton play pour les menus

var startImg = new Image
startImg.src = "./game/img/menu/start2.png"

var scoreImg = new Image
scoreImg.src = "./game/img/menu/score.png"

// Objet pour afficher le menu, je change l'image suivant les menus affichés
var menuStart = {
    dx: 0,
    dy: 0,
    width: 600,
    height: 400,
    draw: function (image) {
        ctx.drawImage(image, this.dx, this.dy, this.width, this.height);
    },
}


// RAZ des infos de la précédente parti
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
    skillsCount = 0
    if (menuStart) {
        delete menuStart.draw(startImg)
    }
    playBtn.style.display = 'none';
}

window.onload = () => { menuStart.draw(startImg) }

playBtn.onclick = () => {
    console.log("click")

    gameRestart()
    animation()
}



// Menu Score

//affichage du score

menuScore = new Object(menuStart);
menuScore.drawScore = function (image) {
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
    ctx.drawImage(image, this.dx, this.dy, this.width, this.height);
    ctx.font = '20px Syne Mono';
    ctx.textAlign = 'center'
    if (score >= 500) {
        ctx.fillText('BRAVO !', 300, 200);
        ctx.fillText('Votre score est de ' + score, 300, 230);
        ctx.fillText('Vous avez tous les skills', 300, 270);

    } else {
        ctx.fillText('Votre score est de ' + score, 300, 200);
        ctx.fillText('Vous avez ' + Math.floor(score / 100) + ' skills sur 5', 300, 230);
        ctx.fillText('On recommence?', 300, 270);

    }
}
var crashScore = function () {
    menuScore.drawScore(scoreImg)
    playBtn.style.display = 'inline';
}
