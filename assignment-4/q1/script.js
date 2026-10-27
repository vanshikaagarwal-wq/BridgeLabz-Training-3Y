// Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to the product price
    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

// Create product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Accessories"),
    new Product(3, "Notebook", 100, "Stationery"),
    new Product(4, "Keyboard", 1200, "Electronics")
];

// Apply 10% discount to the first product
products[0].applyDiscount(10);

// Display all products
console.log("All Products:");
products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products with price greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts priced above ₹1000:");
expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});