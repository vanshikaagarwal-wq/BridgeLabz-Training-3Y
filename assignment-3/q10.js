
"use strict";

// Nested Hoisting and Closures

function outer() {
    console.log("Outer count before declaration:", count);

    var count = 5;

    function inner() {
        console.log("Inner count before declaration:", count);

        var count = 10;

        console.log("Inner count after declaration:", count);
    }

    inner();

    console.log("Outer count after inner:", count);
}

outer();

// Convert inner function to an arrow function
function outerArrow() {
    var count = 5;

    const innerArrow = () => {
        console.log("Arrow function accesses outer count:", count);
    };

    innerArrow();
}

outerArrow();
