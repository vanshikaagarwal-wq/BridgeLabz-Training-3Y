// Get form elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Regular expressions for validation
const usernamePattern = /^.{5,}$/;
const passwordLengthPattern = /^.{8,}$/;
const uppercasePattern = /[A-Z]/;
const lowercasePattern = /[a-z]/;
const numberPattern = /[0-9]/;
const specialCharacterPattern = /[^A-Za-z0-9]/;

// Validate form when submitted
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const errors = [];

    // Validate username
    if (!usernamePattern.test(username)) {
        errors.push("Username must contain at least 5 characters.");
        usernameInput.style.border = "2px solid red";
    } else {
        usernameInput.style.border = "2px solid green";
    }

    // Validate password length
    if (!passwordLengthPattern.test(password)) {
        errors.push("Password must contain at least 8 characters.");
    }

    // Validate uppercase letter
    if (!uppercasePattern.test(password)) {
        errors.push("Password must contain an uppercase letter.");
    }

    // Validate lowercase letter
    if (!lowercasePattern.test(password)) {
        errors.push("Password must contain a lowercase letter.");
    }

    // Validate number
    if (!numberPattern.test(password)) {
        errors.push("Password must contain a number.");
    }

    // Validate special character
    if (!specialCharacterPattern.test(password)) {
        errors.push("Password must contain a special character.");
    }

    // Update password border
    passwordInput.style.border = errors.some(error =>
        error.startsWith("Password")
    ) ? "2px solid red" : "2px solid green";

    // Display validation result
    if (errors.length === 0) {
        message.textContent = "Login validation successful!";
        message.style.color = "green";
    } else {
        message.innerHTML = errors.join("<br>");
        message.style.color = "red";
    }
});