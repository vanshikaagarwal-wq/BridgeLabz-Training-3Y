"use strict";

// Employee data
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    // Process each employee
    for (const employee of employees) {

        // Validate required properties
        if (
            !employee.name ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee information.");
        }

        // Convert salary and years to numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Check numeric values
        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error(`Invalid salary or years for ${employee.name}.`);
        }

        // Calculate bonus
        const bonus = years > 3
            ? salary * 0.10
            : salary * 0.05;

        const totalSalary = salary + bonus;

        // Display formatted employee details
        console.log(`Employee: ${employee.name}`);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: ₹${bonus.toFixed(2)}`);
        console.log(`Salary with Bonus: ₹${totalSalary.toFixed(2)}`);
        console.log("-----------------------------");
    }
} catch (error) {
    console.log("Error:", error.message);
}