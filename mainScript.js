var myCanvas = document.getElementById("myCanvas")
var ctx = myCanvas.getContext('2d')
myCanvas.width = 600
myCanvas.height = 400

var buttonPress = false
var score = 0;
var gravity = 3;
var elevation = 3
var frame = 1

var flyingY = 10;

var blackBird = new CharacterFactory(flyingY);
var obstacle1 = new ObstacleFactory()

// Animation area 

var animation = function(){
    ctx.clearRect(0,0, myCanvas.width,myCanvas.height)
    blackBird.draw(flyingY)
    blackBird.limits(flyingY)
    obstaclesCreator()
    frame++

    requestAnimationFrame(animation)
}
animation()


// keyboard

var keyState = {};

window.addEventListener('keydown', function (e) {
    keyState[e.keyCode] = true;
}, true);

window.addEventListener('keyup', function (e) {
    keyState[e.keyCode] = false;
}, true);

var pressKeyChecker = function(){
    setInterval(() => {
        if(keyState[32]){
            buttonPress = true;
            flyingY -= gravity
        }else{
            buttonPress = false;
            flyingY += gravity
        }
    },50);
}()

