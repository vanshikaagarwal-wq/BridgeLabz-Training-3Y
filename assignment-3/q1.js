"use strict";

// Mixed API data
const apiData = [
    "25",
    "true",
    "false",
    "NaN",
    "                     ",
    "100px",
    "3.14",
    null,
    undefined
];

// Arrays to store valid and invalid numeric values
const validNumbers = [];
const invalidNumbers = [];

// Process each API value
for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);

    // Check whether the number conversion is valid
    if (
        value !== null &&
        value !== undefined &&
        String(value).trim() !== "" &&
        !Number.isNaN(numberValue)
    ) {
        validNumbers.push(numberValue);
    } else {
        invalidNumbers.push(value);
    }

    // Print conversion details
    console.log(`Original Value: ${String(value)}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${Boolean(value)}`);
    console.log(`String: ${String(value)}`);
    console.log("------------------------------");
}

// Print final report
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);