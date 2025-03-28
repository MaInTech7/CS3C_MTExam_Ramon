function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;
    const cartItems = {}; // Object to track product quantities

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));

            // Update quantity or add new product
            if (cartItems[productName]) {
                cartItems[productName].quantity += 1;
            } else {
                cartItems[productName] = { price: productPrice, quantity: 1 };
            }

            // Update cart list
            cartList.innerHTML = ""; // Clear the list
            for (const [name, item] of Object.entries(cartItems)) {
                const listItem = document.createElement("li");
                listItem.textContent = `${name} - Qty: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
                cartList.appendChild(listItem);
            }

            // Update total price
            totalPrice += productPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});