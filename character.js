"use strict"

//void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);

var character =[]
var spriteCount = 0
for(let i = 0; i <= 9; i++){
    character[i] = new Image()
    character[i].src = './img/character/frame-'+ i +'.png'
}
// var character = new Image()
// character.src = './img/character/character.png'

var sprite = function(){
    setInterval(() => {
        if(spriteCount < 9){
            spriteCount++;
        }else{
            spriteCount=0;
        } 
    }, 200);
      
   
   
}()

var CharacterFactory = function () {
    this.sx = 0;
    this.sy = 0;
    this.swidth = character[spriteCount].width;
    this.sheight = character[spriteCount].height;
    this.dx = 100;
    this.dy = 30;
    this.dwidth = character[spriteCount].width /15;
    this.dheight = character[spriteCount].height/15;
  
    this.draw = function (dy) {
        ctx.drawImage(character[spriteCount], this.sx, this.sy, this.swidth, this.sheight, this.dx, dy, this.dwidth, this.dheight)
        this.dy = dy
        this.limits(dy)
     
    }
    this.limits = function (dy) {
       
        if (dy <= 0) {

            gravity = 0

            //console.log('in')
        } if (dy <= 0 && keyState[32] == false) {
            gravity = 10
        }
        //console.log(dy)
        //console.log(gravity)
    }
}


