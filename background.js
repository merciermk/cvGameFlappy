//1280*400

var bg = new Image();
bg.src = "./img/background/bg2.jpg"

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
var background = []

var countbg = 0

//fonction pour rajouter le background au fur et a mesure de l'avancement du character.

var backgroundInfinity = function(){
    
    //init du premier background
    if(!background[0]){
        background[0] = new BackGround
    }

    // ajout d'un background quand le premier est deja passé de 600px
    if(background[countbg].dx < -600){
        countbg++
        background[countbg] = new BackGround
        // je donne les coord de l'ancien background au nouveau
        background[countbg].dx = background[countbg-1].dx + background[countbg-1].dwidth;
        console.log(i)
    }

    for(let y = 0; y < background.length ; y++){
        background[y].frame()
    }
}







