"use strict";

// Transaction data
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store valid and invalid transactions
const validTransactions = [];
const invalidTransactions = [];

// Custom error class
class TransactionError extends Error {
    constructor(message, type) {
        super(message);
        this.name = "TransactionError";
        this.type = type;
    }
}

// Validate each transaction
for (const transaction of transactions) {
    try {
        // Check for null entry
        if (transaction === null) {
            throw new TransactionError(
                "Transaction entry is null.",
                "Null Entry"
            );
        }

        // Check for missing ID or amount
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new TransactionError(
                "Transaction ID or amount is missing.",
                "Missing Data"
            );
        }

        // Check for negative amount
        if (transaction.amount < 0) {
            throw new TransactionError(
                "Transaction amount cannot be negative.",
                "Negative Amount"
            );
        }

        // Transaction is valid
        validTransactions.push(transaction);

        console.log(
            `Transaction ${transaction.id} is valid.`
        );

    } catch (error) {
        // Store error details
        invalidTransactions.push({
            transaction: transaction,
            errorType: error.type || "Unknown Error",
            message: error.message
        });

        console.log(
            `Invalid Transaction: ${error.message}`
        );
    }
}

// Final report
console.log("\n--- Transaction Report ---");

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);

console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);

// Debugging observation:
// Set a breakpoint inside the for loop in VS Code
// and inspect transaction, validTransactions, and invalidTransactions.