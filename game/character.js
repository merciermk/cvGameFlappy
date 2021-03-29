"use strict"

//void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);

var character = []
var spriteCount = 0
for (let i = 0; i <= 9; i++) {
    character[i] = new Image()
    character[i].src = './game/img/character/frame-' + i + '.png'
}

// compteur pour l'animation du blackBird
var sprite = function () {
    setInterval(() => {
        if (spriteCount < 9) {
            spriteCount++;
        } else {
            spriteCount = 0;
        }
    }, 70);
}()


// création de l'element principal
var CharacterFactory = function () {
    this.sx = 0;
    this.sy = 0;
    this.swidth = 200;
    this.sheight = 168;
    this.dx = 100;
    this.dy = 30;
    this.dwidth = 60; // je tranforme pour un format carré le sprite
    this.dheight = 60; //

    this.draw = function (dy) {
        ctx.drawImage(character[spriteCount], this.sx, this.sy, this.swidth, this.sheight, this.dx, dy, this.dwidth, this.dheight)
        this.dy = dy
        this.limits(dy)

    }
    // Limite de la bordure du haut
    this.limits = function (dy) {

        if (dy <= 0 && keyState[32] == true ||
            dy <= 0 && keyState[38] == true ||
            dy <= 0 && keyState[90] == true) {
            gravity = 0
        } else {
            gravity = 10
        }
    }
}