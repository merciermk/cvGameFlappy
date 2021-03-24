"use strict"

// Mes obstacles
var obstacleImg = []
obstacleImg[0] = new Image()
obstacleImg[0].src = "./game/img/obstacles/obstacle0.png"

obstacleImg[1] = new Image()
obstacleImg[1].src = "./game/img/obstacles/obstacle1.png"

obstacleImg[2] = new Image()
obstacleImg[2].src = "./game/img/obstacles/obstacle2.png"


var ObstacleFactoryTop = function () {
    this.imgNumber = Math.floor(Math.random() * 3)
    console.log(this.imgNumber)
    this.sx = 0;
    this.sy = 0;
    this.swidth = 200;
    this.sheight = 850;
    this.dwidth = this.swidth / 4;
    this.dheight = this.sheight / 4;
    this.dx = 600;
    this.dy = Math.floor(Math.random() * - this.dheight) - 80; // randomisation de la taille -80 pour s'assurer que la mouche ai toujours un espace

    this.draw = function () {
        ctx.drawImage(obstacleImg[this.imgNumber], this.sx, this.sy, this.swidth, this.sheight, this.dx, this.dy, this.dwidth, this.dheight)
    }
    this.frame = () => {
        this.dx -= 1;
        this.draw()
    }
}

var ObstacleFactoryBottom = function () {
    this.imgNumber = Math.floor(Math.random() * 3)
    this.sx = 0;
    this.sy = 0;
    this.swidth = 200;
    this.sheight = 850;
    this.dwidth = this.swidth / 4;
    this.dheight = this.sheight / 4;
    this.dx = 600;
    this.dy = 400 - Math.floor(Math.random() * this.dheight) + 30;

    this.draw = function () {
        ctx.drawImage(obstacleImg[this.imgNumber], this.sx, this.sy, this.swidth, this.sheight, this.dx, this.dy, this.dwidth, this.dheight)
    }
    this.frame = () => {
        this.dx -= 1;
        this.draw()
    }
}

var obstacles = [];

// Création des obstacles au fur et a mesure en randomisant la forme et la taille
var obstaclesCreator = function () {
    //console.log(frame)

    // j'utilise le modulo pour gerer le nombre d'obstacle fait
    if (frame % 40 === 0) {
        //console.log("in")
        let random = Math.floor(Math.random() * 3)
        if (random === 1) {
            obstacles.unshift(new ObstacleFactoryTop)
        }
        if (random === 2) {
            obstacles.unshift(new ObstacleFactoryBottom)
        }
        if (random === 3) {
            obstacles.unshift(new ObstacleFactoryTop)
            obstacles.unshift(new ObstacleFactoryBottom)
        }
    }
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].frame()                                //J'avance de 1px tous les elements
    }


}


// Mon test de collision, ou plutôt mon test de non collision
var collisionTest = function () {

    for (let i = 0; i < obstacles.length; i++) {

        for (i = 0; i < obstacles.length; i++) {
            // 350 est la hauteur que je voulais pour que la mouche passe dans l'herbe
            if (blackBird.dy > obstacles[i].dy + obstacles[i].dheight && blackBird.dy < 350
                || blackBird.dx > obstacles[i].dx + obstacles[i].dwidth && blackBird.dy < 350
                || blackBird.dy < obstacles[i].dy - blackBird.dheight && blackBird.dy < 350
                || blackBird.dx < obstacles[i].dx - blackBird.dwidth && blackBird.dy < 350

            ) {
                // Pas de collision
            } else {
                return true // colision
            }
        }
    }
}
