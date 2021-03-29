"use strict"

const myCanvas = document.getElementById("myCanvas")
const ctx = myCanvas.getContext('2d')
myCanvas.width = 600
myCanvas.height = 400

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
    if (collisionTest()) {
        crashScore(scoreImg)
        return;
    }
    frame++;
    requestAnimationFrame(animation)
}

// Lancement du menu de départ
addEventListener('load',()=>{
    console.log("%cReady For Flight", "color: red; font-family: Syne Mono; font-size: 20px; font-weight: bolder; text-shadow: #000 1px 1px;");
    menuStart.draw(startImg)
})
