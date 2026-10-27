
 // Library Management System using Classes and Objects

// Create the Book class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue a book if it is available
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return `${this.title} has been issued successfully.`;
        }

        return `${this.title} is already issued.`;
    }

    // Return an issued book
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            return `${this.title} has been returned successfully.`;
        }

        return `${this.title} was not issued.`;
    }
}

// Create an array of book objects
const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN102"),
    new Book("Harry Potter", "J. K. Rowling", "ISBN103", true),
    new Book("Atomic Habits", "James Clear", "ISBN104")
];

// Display available books on the webpage
function displayAvailableBooks() {
    const output = document.getElementById("output");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        output.textContent = "No books are currently available.";
        return;
    }

    output.textContent = availableBooks
        .map(book =>
            `Title: ${book.title}\nAuthor: ${book.author}\nISBN: ${book.ISBN}`
        )
        .join("\n\n");
}

// Issue a book by searching its ISBN
function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn.trim());

    if (book) {
        alert(book.issueBook());
        displayAvailableBooks();
    } else {
        alert("Book not found. Please check the ISBN.");
    }
}

// Return a book by searching its ISBN
function returnBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn.trim());

    if (book) {
        alert(book.returnBook());
        displayAvailableBooks();
    } else {
        alert("Book not found. Please check the ISBN.");
    }
}

// Show available books when the page loads
document.addEventListener("DOMContentLoaded", displayAvailableBooks);
