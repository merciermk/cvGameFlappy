"use strict"

// score et affichage

// creation du score et mise en forme
var screenScore = {
    texte: "score: ",
    font: '15px Syne Mono, monospace',
    dx: 485,
    dy: 395,
    scoreCalc: function () {

        if (frame % 10 == 0) {
            score++
        }
        return score
    },
    draw: function () {
        ctx.font = this.font
        ctx.fillText(this.texte + this.scoreCalc(), this.dx, this.dy)
        ctx.fillStyle = "#ffffff"
    },
}

// Création de l'affichage des Skills en fonction de frame, toutes les 1000 frames (tous les 100 points), un skill va apparaitre en bas
let competences = document.querySelectorAll('svg')
let skillsCount = 0;
var skills = {
    dx: 20,
    dy: 395,
    font: '15px Syne Mono, monospace',
    skillsArr: [
        ['HTML'],
        ['HTML CSS'],
        ['HTML CSS JavaScript'],
        ['HTML CSS JavaScript Angular'],
        ['HTML CSS JavaScript Angular NodeJS'],
    ],
    draw: function(){
        if(score >= 100){
        ctx.font = this.font
        ctx.fillText(this.skillsArr[skillsCount][0], this.dx, this.dy)
        ctx.textAlign = 'left'
        ctx.fillStyle = "#ffffff"
        competences[skillsCount].style.display = 'block';
        if(frame%1000 == 0 && score != 100 && skillsCount < this.skillsArr.length -1 ){
            competences[skillsCount].style.display = 'block';
            skillsCount++;
            console.log(skillsCount)
        };
    };
    },
};


