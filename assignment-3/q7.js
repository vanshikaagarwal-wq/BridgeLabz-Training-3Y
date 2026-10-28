
"use strict";

// Smart Calculator

const num1 = 25;
const num2 = 0;

const operations = ["add", "divide", "power", "root", "subtract"];

function calculate(operation, a, b) {
    try {
        switch (operation) {
            case "add":
                return a + b;

            case "divide":
                if (b === 0) {
                    throw new Error("Cannot divide by zero");
                }
                return a / b;

            case "power":
                return a ** b;

            case "root":
                if (a < 0) {
                    throw new Error("Cannot find square root of a negative number");
                }
                return Math.sqrt(a);

            case "subtract":
                return a - b;

            default:
                throw new Error("InvalidOperationError: Unknown operation");
        }
    } catch (error) {
        return error.message;
    }
}

for (const operation of operations) {
    const result = calculate(operation, num1, num2);
    console.log(`${operation}: ${result}`);
}
