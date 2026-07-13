// Cart functionality for Strait Pristine
const CART_KEY = "strait_pristine_cart";

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch(e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, size, quantity) {
    const cart = getCart();
    const existing = cart.find(item => item.productId === productId && item.size === size);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ productId, size, quantity });
    }
    saveCart(cart);
    showAddedToast();
}

function updateCartItem(index, quantity) {
    const cart = getCart();
    if (quantity <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = quantity;
    }
    saveCart(cart);
    return cart;
}

function removeCartItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    return cart;
}

function getCartTotal() {
    const cart = getCart();
    let subtotal = 0;
    cart.forEach(item => {
        const product = typeof PRODUCTS !== "undefined" ? getProductById(item.productId) : null;
        if (product) {
            const price = product.salePrice || product.price;
            subtotal += price * item.quantity;
        }
    });
    return subtotal;
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBadge() {
    const count = getCartCount();
    const badges = document.querySelectorAll(".cart-badge");
    badges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? "flex" : "none";
    });
}

function showAddedToast() {
    let toast = document.getElementById("cart-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "cart-toast";
        toast.innerHTML = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><path d=\"M3 6h18\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></svg> Item added to cart";
        document.body.appendChild(toast);
    }
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

document.addEventListener("DOMContentLoaded", function() {
    updateCartBadge();
});
