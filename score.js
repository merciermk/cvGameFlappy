// ctx.fillText(texte, x, y [, largeurMax]);


// creation du score et mise en forme
var screenScore = {
    texte: "score: ",
    font: '48px serif',
    dx: 0,
    dy: 0,
    scoreCalc: function(){
       
        if(frame%10 == 0){
            score++
        }
        return score
    },
    draw: function(){
        ctx.font = this.font
        ctx.fillText(this.texte + this.scoreCalc(), 10,400)
        ctx.fillStyle = "#00ff00"
    },
}