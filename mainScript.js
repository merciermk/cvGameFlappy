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


// keyboard

var keyState = {};

window.addEventListener('keydown', function (e) {
    keyState[e.keyCode] = true;
}, true);

window.addEventListener('keyup', function (e) {
    keyState[e.keyCode] = false;
}, true);

var pressKeyChecker = function () {
    setInterval(() => {
        if (keyState[32]) {
            buttonPress = true;
            flyingY -= gravity
        } else {
            buttonPress = false;
            flyingY += gravity
        }
    }, 50);
}()

