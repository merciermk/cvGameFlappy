// 200*850
var obstacleImg =[]
obstacleImg[0] = new Image()
obstacleImg[0].src = "./img/obstacles/obstacle0.png"

obstacleImg[1] = new Image()
obstacleImg[1].src = "./img/obstacles/obstacle1.png"

obstacleImg[2] = new Image()
obstacleImg[2].src = "./img/obstacles/obstacle2.png"

var ObstacleFactoryUp = function(){
    this.imgNumber = Math.floor(Math.random()*3)
    console.log(this.imgNumber)
    this.sx = 0;
    this.sy = 0;
    this.swidth = 200;
    this.sheight = 850;
    this.dwidth = 50;
    this.dheight = 212;
    this.dx = 600;
    this.dy = Math.floor(Math.random()*- this.dheight) - 30;
    
    this.draw = function(){
        ctx.drawImage(obstacleImg[this.imgNumber],this.sx,this.sy,this.swidth,this.sheight,this.dx,this.dy,this.dwidth,this.dheight)
    }
    this.frame = () =>{
        this.dx -= 1;
        this.draw()
    }
}

var ObstacleFactoryDown = function(){
    this.imgNumber = Math.floor(Math.random()*3)
    this.sx = 0;
    this.sy = 0;
    this.swidth = 200;
    this.sheight = 850;
    this.dwidth = this.swidth/4;
    this.dheight = this.sheight/4;
    this.dx = 600;
    this.dy = 400 - Math.floor(Math.random() * this.dheight) + 30;
 
    this.draw = function(){
        ctx.drawImage(obstacleImg[this.imgNumber],this.sx,this.sy,this.swidth,this.sheight,this.dx,this.dy,this.dwidth,this.dheight)
    }
    this.frame = () =>{
        this.dx -= 1;
        this.draw()
    }
}

var obstaclesTop = []; 
var obstaclesBottom =[]

var obstaclesCreator = function(){
    //console.log(frame)
    if(frame%50  === 0){
        //console.log("in")
        var random = Math.floor(Math.random()*3)
        if(random === 1){
            obstaclesTop.unshift(new ObstacleFactoryUp)
        }
        if(random === 2){
            obstaclesTop.unshift(new ObstacleFactoryDown)
        }
        if(random === 3){
            obstaclesTop.unshift(new ObstacleFactoryUp)
            obstaclesTop.unshift(new ObstacleFactoryDown)
        }
    }
    for(let i = 0; i < obstaclesTop.length; i++) {
        obstaclesTop[i].frame()
    }

   
}


var collisionTest = function(){
    // obstacles.forEach(() => {
    //     if (blackBird.dx >= obstacles.dx - (blackBird.dWidth) && blackBird.dx <= (obstacles.dx + obstacles.dWidth - 20) &&
    //     blackBird.dy == obstacles.dy - (blackBird.dheight)
    //     ){
    //     console.log("colision")
    // }
    // })


    for(i=0; i < obstaclesTop.length;i++){
        
        if (blackBird.dy > obstaclesTop[i].dy + obstaclesTop[i].dheight
            || blackBird.dx > obstaclesTop[i].dx + obstaclesTop[i].dwidth
            || blackBird.dy < obstaclesTop[i].dy - blackBird.dheight 
            || blackBird.dx < obstaclesTop[i].dx - blackBird.dwidth
            ) {
         // Pas de collision
       }else{
        return true
    }
}
}
