// JavaScript code for handling interactivity

// Cart array to store added products
let cart = [];

// Function to add an item to the cart
function addToCart(productId) {
    cart.push(productId);
    console.log("Product added to cart:", productId);
    updateCartSummary();
}

// Function to update the cart summary
function updateCartSummary() {
    const totalItems = cart.length;
    console.log("Cart summary updated. Total items in cart:", totalItems);
    // Additional logic to update the cart display can be added here
}
