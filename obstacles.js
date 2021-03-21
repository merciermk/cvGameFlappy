// 200*850
var obstacleImg = []
obstacleImg[0] = new Image()
obstacleImg[0].src = "./img/obstacles/obstacle0.png"

obstacleImg[1] = new Image()
obstacleImg[1].src = "./img/obstacles/obstacle1.png"

obstacleImg[2] = new Image()
obstacleImg[2].src = "./img/obstacles/obstacle2.png"

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
    this.dy = Math.floor(Math.random() * - this.dheight) - 60;

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
    this.dy = 400 - Math.floor(Math.random() * this.dheight) + 60;

    this.draw = function () {
        ctx.drawImage(obstacleImg[this.imgNumber], this.sx, this.sy, this.swidth, this.sheight, this.dx, this.dy, this.dwidth, this.dheight)
    }
    this.frame = () => {
        this.dx -= 1;
        this.draw()
    }
}

var obstaclesTop = [];

//chager nom variable obstoclesTop pour obstacles
var obstaclesCreator = function () {
    //console.log(frame)

    // j'utilise le modulo pour gerer le nombre d'obstacle fait
    if (frame % 40 === 0) {
        //console.log("in")
        var random = Math.floor(Math.random() * 3)
        if (random === 1) {
            obstaclesTop.unshift(new ObstacleFactoryTop)
        }
        if (random === 2) {
            obstaclesTop.unshift(new ObstacleFactoryBottom)
        }
        if (random === 3) {
            obstaclesTop.unshift(new ObstacleFactoryTop)
            obstaclesTop.unshift(new ObstacleFactoryBottom)
        }
    }
    for (let i = 0; i < obstaclesTop.length; i++) {
        obstaclesTop[i].frame()
    }


}


var collisionTest = function () {
    // obstacles.forEach(() => {
    //     if (blackBird.dx >= obstacles.dx - (blackBird.dWidth) && blackBird.dx <= (obstacles.dx + obstacles.dWidth - 20) &&
    //     blackBird.dy == obstacles.dy - (blackBird.dheight)
    //     ){
    //     console.log("colision")
    // }
    // })


    for (i = 0; i < obstaclesTop.length; i++) {

        if (blackBird.dy > obstaclesTop[i].dy + obstaclesTop[i].dheight
            || blackBird.dx > obstaclesTop[i].dx + obstaclesTop[i].dwidth
            || blackBird.dy < obstaclesTop[i].dy - blackBird.dheight
            || blackBird.dx < obstaclesTop[i].dx - blackBird.dwidth
        ) {
            // Pas de collision
        } else {
            return true
        }
    }
}
