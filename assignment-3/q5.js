
"use strict";

// Hoisting Lab

// Fixed version: variables are declared before use
var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow function version
const announceArrow = () => {
    console.log("Game started using arrow function");
};

announceArrow();
