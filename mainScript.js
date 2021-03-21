var myCanvas = document.getElementById("myCanvas")
var ctx = myCanvas.getContext('2d')
myCanvas.width = 600
myCanvas.height = 400

var buttonPress = false
var score = 0;
var gravity = 10;
var elevation = 6
var frame = 1

var flyingY = 40;

var blackBird = new CharacterFactory(flyingY);



// Animation area 

var animation = function () {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
    backgroundInfinity()
    blackBird.draw(flyingY)
    blackBird.limits(flyingY)
    obstaclesCreator()
    if (collisionTest()) return

    frame++

    requestAnimationFrame(animation)
}
animation()



