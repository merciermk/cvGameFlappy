//1280*400

var bg = new Image();
bg.src = "./img/background/bg2.jpg"

var BackGround = function(){
    
    this.sx = 0;
    this.sy = 0;
    this.swidth = 1280;
    this.sheight = 400;
    this.dwidth = 1280
    this.dheight = 400
    this.dx = 0;
    this.dy = 0;
    
    this.draw = function(){
        ctx.drawImage(bg,this.sx,this.sy,this.swidth,this.sheight,this.dx,this.dy,this.dwidth,this.dheight)
    }
    this.frame = () =>{
        this.dx -= 0.2;
        this.draw()
    }
}





