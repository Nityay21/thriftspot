import { addToCart } from "./addToCart.js";
import { getCartProductFromLS } from "./getCartProducts.js";

// Load cart products on page load
document.addEventListener("DOMContentLoaded", () => {
  getCartProductFromLS();
});

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    const id = card.id.replace("card", "");
    const stock = parseInt(card.querySelector(".productStock").textContent);
    addToCart(event, id, stock);
  });
});
