var myCanvas = document.getElementById("myCanvas")
var ctx = myCanvas.getContext('2d')
myCanvas.width = 600
myCanvas.height = 400

// Keyboard
var buttonPress = false


var score = 0;
var gravity = 10;
var elevation = 6
var frame = 1

var flyingY = 40;
var blackBird = new CharacterFactory(flyingY);

// variable pour le background et ground
var background = []
var countbg = 0
var countGround = 0
var ground = []



// Animation area 

var animation = function () {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
    backgroundInfinity()
    blackBird.draw(flyingY)
    obstaclesCreator()
   
    groundInfinity()
    screenScore.draw()
    skills.draw()
    if (collisionTest()){
        return;
   }
    frame++;
    requestAnimationFrame(animation)
}
animation()



