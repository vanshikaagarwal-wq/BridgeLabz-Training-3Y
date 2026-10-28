
"use strict";

// JSON Audit

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

rawData.forEach((item, index) => {
    const lineNumber = index + 1;

    try {
        const record = JSON.parse(item);

        // Check required fields
        if (record.user === undefined || record.age === undefined) {
            throw new Error("Missing required user or age field");
        }

        // Convert age to a number
        const age = Number(record.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age value");
        }

        // Store cleaned record
        cleanData.push({
            user: record.user,
            age: age
        });

    } catch (error) {
        errors.push({
            line: lineNumber,
            message: error.message
        });
    }
});

console.log("Clean Data:");
console.log(cleanData);

console.log("\nErrors Found:");
console.log(errors);

console.log("\nClean Records Count:", cleanData.length);
console.log("Error Count:", errors.length);

// Bonus: Find users under 18
const under18 = cleanData.filter(record => record.age < 18);

console.log("\nUsers Under 18:");
console.log(under18);
