// 200*850

var obstacleImg = new Image()
obstacleImg.src = "./img/obstacles/obstacle1.png"


var ObstacleFactory = function(){
    this.sx = 0;
    this.sy = 0;
    this.swidth = 200;
    this.sheight = 850;
    this.dx = 600;
    this.dy = 0;
    this.dwidth = this.swidth/5;
    this.dheight = this.sheight/5;
    this.draw = function(){
        ctx.drawImage(obstacleImg,this.sx,this.sy,this.swidth,this.sheight,this.dx,this.dy,this.dwidth,this.dheight)
    }
    this.frame = () =>{
        this.dx -= 1;
        this.draw()
    }
}

var obstacles = [];

var obstaclesCreator = function(){
    console.log(frame)
    if(frame%200  === 0){
        console.log("in")
        obstacles.unshift(new ObstacleFactory)
    }
    for(let i = 0; i < obstacles.length; i++) {
        obstacles[i].frame()
    }
   
}