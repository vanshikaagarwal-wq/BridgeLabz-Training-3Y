// Get form elements
const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Regular expressions for validation
const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{10}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

// Validate a single field and update its border
function validateField(input, pattern, errorMessage) {
    if (pattern.test(input.value.trim())) {
        input.style.borderColor = "green";
        return "";
    } else {
        input.style.borderColor = "red";
        return errorMessage;
    }
}

// Validate all fields when the form is submitted
studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const errors = [];

    const nameError = validateField(
        nameInput, namePattern, "Name must contain only alphabets."
    );

    const emailError = validateField(
        emailInput, emailPattern, "Enter a valid email address."
    );

    const phoneError = validateField(
        phoneInput, phonePattern, "Phone number must contain exactly 10 digits."
    );

    const passwordError = validateField(
        passwordInput,
        passwordPattern,
        "Password must contain an uppercase letter, a number and a special character."
    );

    if (nameError) errors.push(nameError);
    if (emailError) errors.push(emailError);
    if (phoneError) errors.push(phoneError);
    if (passwordError) errors.push(passwordError);

    if (errors.length === 0) {
        message.textContent = "Registration successful!";
        message.style.color = "green";
    } else {
        message.innerHTML = errors.join("<br>");
        message.style.color = "red";
    }
});