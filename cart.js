// ========================================
// STRAIT PRISTINE - Shopping Cart
// ========================================

class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('sp_cart') || '[]');
    this.listeners = [];
  }

  addItem(product, size, qty = 1) {
    const key = `${product.id}_${size}`;
    const existing = this.items.find(i => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({
        key,
        id: product.id,
        name: product.name,
        price: product.salePrice || product.price,
        originalPrice: product.price,
        image: product.images[0],
        size,
        qty,
        category: product.category
      });
    }
    this.save();
    this.notify();
  }

  removeItem(key) {
    this.items = this.items.filter(i => i.key !== key);
    this.save();
    this.notify();
  }

  updateQty(key, qty) {
    const item = this.items.find(i => i.key === key);
    if (item) {
      if (qty <= 0) {
        this.removeItem(key);
      } else {
        item.qty = qty;
        this.save();
        this.notify();
      }
    }
  }

  clear() {
    this.items = [];
    this.save();
    this.notify();
  }

  getSubtotal() {
    return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  }

  getTotalItems() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  }

  getSavings() {
    return this.items.reduce((sum, i) => sum + ((i.originalPrice - i.price) * i.qty), 0);
  }

  save() {
    localStorage.setItem('sp_cart', JSON.stringify(this.items));
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  notify() {
    this.listeners.forEach(fn => fn());
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  }
}

const cart = new ShoppingCart();

// Notify on load
cart.notify();
