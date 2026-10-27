// Create the initial user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Get form elements
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");

// Display the user object in the webpage
function displayUser() {
    output.textContent = JSON.stringify(user, null, 2);
}

// Fill the form with existing user details
nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;

// Display initial details
displayUser();

// Update the object when the form is submitted
userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim();
    user.age = Number(ageInput.value);

    displayUser();

    alert("User details updated successfully!");
});