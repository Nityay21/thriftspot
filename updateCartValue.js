export const updateCartValue = (cartProducts) => {
  const cartValue = document.querySelector("#cartValue");
  if (cartValue) {
    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cartProducts.length}`;
  }
};
