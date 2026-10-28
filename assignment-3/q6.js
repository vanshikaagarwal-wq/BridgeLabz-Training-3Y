
"use strict";

// Pyramid Pattern Generator

// Default number of rows
const rows = 5;

console.log("Pyramid Pattern:");

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

// Observe var behavior
console.log("\nUsing var:");

for (var k = 1; k <= 3; k++) {
    console.log("k =", k);
}

console.log("After loop, k =", k);
