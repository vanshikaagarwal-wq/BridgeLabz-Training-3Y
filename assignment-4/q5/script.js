// Get form elements
const bookingForm = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const seatsInput = document.getElementById("seats");
const message = document.getElementById("message");

// Regular expressions for validation
const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Handle form submission
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const seats = Number(seatsInput.value);

    const errors = [];

    // Validate name
    if (!namePattern.test(name)) {
        errors.push("Name must contain alphabets only.");
        nameInput.style.border = "2px solid red";
    } else {
        nameInput.style.border = "2px solid green";
    }

    // Validate email
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
        emailInput.style.border = "2px solid red";
    } else {
        emailInput.style.border = "2px solid green";
    }

    // Validate seat count
    if (
        seatsInput.value.trim() === "" ||
        !Number.isInteger(seats) ||
        seats < 1 ||
        seats > 10
    ) {
        errors.push("Seats must be a number between 1 and 10.");
        seatsInput.style.border = "2px solid red";
    } else {
        seatsInput.style.border = "2px solid green";
    }

    const ticket = document.getElementById("ticket");

    if (errors.length > 0) {
        message.textContent = errors.join(" ");
        message.style.color = "red";
        ticket.hidden = true;
        return;
    }

    // Store validated booking information in an object
    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    // Display ticket details
    message.textContent = "";
    ticket.hidden = false;

    document.getElementById("ticketDetails").textContent =
        `Name: ${booking.name}\n` +
        `Email: ${booking.email}\n` +
        `Seats: ${booking.seats}`;

    document.getElementById("ticketDetails").style.whiteSpace = "pre-line";
});