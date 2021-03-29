"use strict"

var bg = new Image();
bg.src = "./game/img/background/bg2.png"

var groundImg = new Image();
groundImg.src = "./game/img/background/front4.png"


var BackGround = function () {

    this.sx = 0;
    this.sy = 0;
    this.swidth = 1280;
    this.sheight = 400;

    this.dwidth = 1280
    this.dheight = 400
    this.dx = 0;
    this.dy = 0;

    this.draw = function () {
        ctx.drawImage(bg, this.sx, this.sy, this.swidth, this.sheight, this.dx, this.dy, this.dwidth, this.dheight)
    }
    this.frame = () => {
        this.dx -= 0.2;
        this.draw()
    }
}

var Ground = function () {

    this.sx = 0;
    this.sy = 0;
    this.swidth = 1280;
    this.sheight = 400;

    this.dwidth = 1280;
    this.dheight = 400
    this.dx = 0;
    this.dy = 0;

    this.draw = function () {
        ctx.drawImage(groundImg, this.sx, this.sy, this.swidth, this.sheight, this.dx, this.dy, this.dwidth, this.dheight)
    }
    this.frame = () => {
        this.dx -= 2;
        this.draw()
    }
}

//fonction pour rajouter le background au fur et à mesure de l'avancement du character.

var backgroundInfinity = function () {

    //init du premier background
    if (!background[0]) {
        background[0] = new BackGround
    }

    // ajout d'un background quand le premier est deja passé de 600px
    if (background[countbg].dx < -600) {
        countbg++
        background[countbg] = new BackGround
        // je donne les coord de l'ancien background au nouveau
        background[countbg].dx = background[countbg - 1].dx + background[countbg - 1].dwidth - 1;
    }

    for (let y = 0; y < background.length; y++) {
        background[y].frame()
    }
}

// ajout à la suite du background
var groundInfinity = function () {

    //init du premier ground
    if (!ground[0]) {
        ground[0] = new Ground
    }

    // ajout d'un ground quand le premier est deja passé de 600px
    if (ground[countGround].dx < -600) {
        countGround++
        ground[countGround] = new Ground
        // je donne les coord de l'ancien ground au nouveau
        ground[countGround].dx = ground[countGround - 1].dx - 2 + ground[countGround - 1].dwidth;
    }

    for (let x = 0; x < ground.length; x++) {
        ground[x].frame()
    }
}





