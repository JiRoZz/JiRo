document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
  
    function updateCart() {
      cartItems.innerHTML = "";
      let total = 0;
  
      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
      });
  
      totalPrice.textContent = total;
      cartCount.textContent = cart.length;
    }
  
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", function () {
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
        cart.push({ name, price });
        updateCart();
      });
    });
  
    document.getElementById("checkout").addEventListener("click", function () {
      if (cart.length === 0) {
        alert("Your cart is empty!");
      } else {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
      }
    });
  });
  