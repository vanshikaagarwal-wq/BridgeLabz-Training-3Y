// Shopping Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    // Add an item to the cart
    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate total price of all items
    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }
}

// Create a shopping cart
const cart = new Cart();

// Add items to the cart
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

// Get HTML elements
const itemsContainer = document.getElementById("items");
const couponInput = document.getElementById("coupon");
const applyButton = document.getElementById("applyCoupon");
const message = document.getElementById("message");
const result = document.getElementById("result");

// Coupon format: SAVE20 or DISC10
const couponPattern = /^(SAVE20|DISC10)$/;

// Display cart items and total
function displayCart(discount = 0) {
    itemsContainer.textContent = "";

    cart.items.forEach(item => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
            `${item.name} — ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}`;

        itemsContainer.appendChild(paragraph);
    });

    const total = cart.getTotal();
    const discountAmount = total * discount / 100;
    const finalTotal = total - discountAmount;

    result.textContent =
        `Original Total: ₹${total.toFixed(2)}\n` +
        `Discount: ${discount}%\n` +
        `Discount Amount: ₹${discountAmount.toFixed(2)}\n` +
        `Final Total: ₹${finalTotal.toFixed(2)}`;
}

// Validate coupon and apply discount
applyButton.addEventListener("click", function () {
    const coupon = couponInput.value.trim().toUpperCase();

    if (!couponPattern.test(coupon)) {
        message.textContent =
            "Invalid coupon! Use SAVE20 or DISC10.";
        message.style.color = "red";
        displayCart();
        return;
    }

    let discount = 0;

    if (coupon === "SAVE20") {
        discount = 20;
    } else if (coupon === "DISC10") {
        discount = 10;
    }

    message.textContent = `${coupon} applied successfully!`;
    message.style.color = "green";

    displayCart(discount);
});

// Display cart when the page loads
displayCart();