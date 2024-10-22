import { getCartProductFromLS } from "./getCartProducts";

export const displayCartItems = () => {
  const cartContainer = document.querySelector("#productCartContainer");
  const cartProducts = getCartProductFromLS();

  if (!cartContainer) return; // Exit if not on cart page

  cartContainer.innerHTML = ""; // Clear existing items

  if (cartProducts.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cartProducts.forEach((product) => {
    const productElem = document.createElement("div");
    productElem.classList.add("cart-item");
    productElem.innerHTML = `
      <p>Product ID: ${product.id}</p>
      <p>Quantity: ${product.quantity}</p>
      <p>Price: ₹${product.price}</p>
      <button onclick="removeFromCart(${product.id})">Remove</button>
    `;
    cartContainer.appendChild(productElem);
  });

  // Add total price
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );
  const totalElem = document.createElement("div");
  totalElem.innerHTML = `<strong>Total: ₹${totalPrice}</strong>`;
  cartContainer.appendChild(totalElem);
};
