/* JavaScript */

/* animacion de productos*/

function animateProduct(element) {
  element.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  element.style.transform = "scale(1.03)";
  element.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.8)";
}

function resetAnimation(element) {
  element.style.transform = "scale(1)";
  element.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
}

/* Modal */

function openModal(title, description) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Almacenar el carrito en localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cartCount').innerText = `${cart.length}`;
}

// Función para vaciar el carrito
function clearCart() {
  cart = []; // Limpia el array
  localStorage.removeItem('cart'); // Elimina el carrito del localStorage
  updateCartCount(); // Actualiza el contador en la interfaz
}

// Mostrar el número de productos al cargar la página
updateCartCount();
