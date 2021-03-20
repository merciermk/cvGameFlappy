//void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);

var character = new Image()
character.src = './img/character/character.png'


var CharacterFactory = function(dy){
    this.sx = 0;
    this.sy = 0;
    this.swidth = 50;
    this.sheight = 43;
    this.dx = 10;
    this.dy = dy;
    this.dwidth = 50;
    this.dheight = 43;
    this.draw = function(dy){
        ctx.drawImage(character,this.sx,this.sy,this.swidth,this.sheight,this.dx,dy,this.dwidth,this.dheight)
    }
    this.limits = function(dy){
        if(dy + this.dheight >= myCanvas.height){
            dy = dy + this.dheight;
            gravity = 0;
            //console.log(dy)
        }
        if(dy <= 0){
          
            gravity = 0
           
            //console.log('in')
        }if(dy <= 0 && keyState[32] == false){
            gravity = 3
        }
        //console.log(dy)
        //console.log(gravity)
    }
}

