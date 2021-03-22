"use strict"

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
