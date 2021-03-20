// 200*850
var obstacleImg =[]
obstacleImg[0] = new Image()
obstacleImg[0].src = "./img/obstacles/obstacle1.png"

obstacleImg[1] = new Image()
obstacleImg[1].src = "./img/obstacles/obstacle2.png"

obstacleImg[2] = new Image()
obstacleImg[2].src = "./img/obstacles/obstacle1.png"

var ObstacleFactoryUp = function(){
    this.imgNumber = Math.floor(Math.random()*2)
    this.sx = 0;
    this.sy = 0;
    this.swidth = 200;
    this.sheight = 850;
    this.dwidth = this.swidth/4;
    this.dheight = this.sheight/4;
    this.dx = 600;
    this.dy = Math.floor(Math.random()*- this.dheight);
    
    this.draw = function(){
        ctx.drawImage(obstacleImg[this.imgNumber],this.sx,this.sy,this.swidth,this.sheight,this.dx,this.dy,this.dwidth,this.dheight)
    }
    this.frame = () =>{
        this.dx -= 1;
        this.draw()
    }
}

var ObstacleFactoryDown = function(){
    this.imgNumber = Math.floor(Math.random()*2)
    this.sx = 0;
    this.sy = 0;
    this.swidth = 200;
    this.sheight = 850;
    this.dwidth = this.swidth/4;
    this.dheight = this.sheight/4;
    this.dx = 600;
    this.dy = 400 - Math.floor(Math.random() * this.dheight) + 15;
 
    this.draw = function(){
        ctx.drawImage(obstacleImg[this.imgNumber],this.sx,this.sy,this.swidth,this.sheight,this.dx,this.dy,this.dwidth,this.dheight)
    }
    this.frame = () =>{
        this.dx -= 1;
        this.draw()
    }
}

var obstacles = [];

var obstaclesCreator = function(){
    console.log(frame)
    if(frame%50  === 0){
        console.log("in")
        var random = Math.floor(Math.random()*3)
        if(random === 1){
            obstacles.unshift(new ObstacleFactoryUp)
        }
        if(random === 2){
            obstacles.unshift(new ObstacleFactoryDown)
        }
        if(random === 3){
            obstacles.unshift(new ObstacleFactoryUp)
            obstacles.unshift(new ObstacleFactoryDown)
        }
    }
    for(let i = 0; i < obstacles.length; i++) {
        obstacles[i].frame()
    }

   
}