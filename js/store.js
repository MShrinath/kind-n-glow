/**
 * Kind n Glow - Central Data Store & State Manager
 * Backed by LocalStorage for seamless persistence with NO data loss.
 */

(function () {
  const FREE_SHIPPING_THRESHOLD = 999;
  const STANDARD_SHIPPING = 150;

  // Initialize data from window.KNG_DATA if not already in localStorage
  function initStorage(key, defaultVal) {
    const existing = localStorage.getItem(key);
    if (!existing) {
      localStorage.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    }
    try {
      return JSON.parse(existing);
    } catch (e) {
      localStorage.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    }
  }

  const Store = {
    subscribers: {},

    subscribe(event, callback) {
      if (!this.subscribers[event]) this.subscribers[event] = [];
      this.subscribers[event].push(callback);
    },

    notify(event, payload) {
      if (this.subscribers[event]) {
        this.subscribers[event].forEach((cb) => cb(payload));
      }
      if (this.subscribers['*']) {
        this.subscribers['*'].forEach((cb) => cb(event, payload));
      }
    },

    // --- PRODUCTS ---
    getProducts() {
      const prods = initStorage('kng_products', window.KNG_DATA.products || []);
      return prods;
    },

    getProductById(id) {
      return this.getProducts().find((p) => String(p._id) === String(id) || String(p.id) === String(id));
    },

    saveProduct(product) {
      const list = this.getProducts();
      const idx = list.findIndex((p) => String(p._id) === String(product._id));
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...product, updatedAt: new Date().toISOString() };
      } else {
        product._id = product._id || 'kng-custom-' + Date.now();
        product.createdAt = new Date().toISOString();
        list.unshift(product);
      }
      localStorage.setItem('kng_products', JSON.stringify(list));
      this.notify('products', list);
      return product;
    },

    deleteProduct(id) {
      const list = this.getProducts().filter((p) => String(p._id) !== String(id));
      localStorage.setItem('kng_products', JSON.stringify(list));
      this.notify('products', list);
    },

    // --- CART ---
    getCart() {
      return initStorage('kng_cart', []);
    },

    addToCart(product, quantity = 1) {
      const cart = this.getCart();
      const existing = cart.find((i) => String(i._id) === String(product._id));
      if (existing) {
        existing.orderQuantity = (existing.orderQuantity || 1) + quantity;
      } else {
        cart.push({
          _id: product._id,
          title: product.title,
          price: Number(product.price),
          originalPrice: product.discount && product.discount > 0 ? Math.round(Number(product.price) / (1 - Number(product.discount) / 100)) : null,
          img: product.img,
          category: product.category?.name || product.children || '',
          orderQuantity: quantity,
          quantity: product.quantity || 50,
          status: product.status || 'in-stock',
        });
      }
      localStorage.setItem('kng_cart', JSON.stringify(cart));
      this.notify('cart', cart);
      return cart;
    },

    updateCartQuantity(id, delta) {
      let cart = this.getCart();
      const item = cart.find((i) => String(i._id) === String(id));
      if (item) {
        item.orderQuantity = Math.max(1, (item.orderQuantity || 1) + delta);
        localStorage.setItem('kng_cart', JSON.stringify(cart));
        this.notify('cart', cart);
      }
      return cart;
    },

    removeFromCart(id) {
      const cart = this.getCart().filter((i) => String(i._id) !== String(id));
      localStorage.setItem('kng_cart', JSON.stringify(cart));
      this.notify('cart', cart);
      return cart;
    },

    clearCart() {
      localStorage.setItem('kng_cart', JSON.stringify([]));
      this.notify('cart', []);
    },

    getCartTotals() {
      const cart = this.getCart();
      const count = cart.reduce((sum, i) => sum + (i.orderQuantity || 1), 0);
      const subtotal = cart.reduce((sum, i) => sum + (Number(i.price) * (i.orderQuantity || 1)), 0);
      const shipping = cart.length === 0 ? 0 : (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING);
      const coupon = this.getAppliedCoupon();
      let discount = 0;
      if (coupon && subtotal >= (coupon.minimumAmount || 0)) {
        discount = Math.round((subtotal * coupon.discountPercentage) / 100);
      }
      const total = Math.max(0, subtotal + shipping - discount);
      return {
        count,
        subtotal,
        shipping,
        discount,
        total,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountForFreeShipping: Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal),
        hasFreeShipping: subtotal >= FREE_SHIPPING_THRESHOLD,
      };
    },

    // --- COUPONS ---
    getCoupons() {
      return initStorage('kng_coupons', window.KNG_DATA.coupons || []);
    },

    getAppliedCoupon() {
      const raw = localStorage.getItem('kng_applied_coupon');
      try {
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },

    applyCoupon(code) {
      if (!code) return { success: false, message: 'Please enter a coupon code' };
      const normalized = code.trim().toUpperCase();
      const coupons = this.getCoupons();
      const match = coupons.find((c) => c.couponCode.toUpperCase() === normalized);
      if (!match) {
        return { success: false, message: 'Invalid coupon code' };
      }
      const now = new Date();
      if (match.endTime && new Date(match.endTime) < now) {
        return { success: false, message: 'This coupon has expired' };
      }
      const totals = this.getCartTotals();
      if (match.minimumAmount && totals.subtotal < match.minimumAmount) {
        return {
          success: false,
          message: `Minimum order amount of ₹${match.minimumAmount} required for this coupon`,
        };
      }
      localStorage.setItem('kng_applied_coupon', JSON.stringify(match));
      this.notify('coupon', match);
      this.notify('cart', this.getCart());
      return { success: true, coupon: match, message: `Coupon ${match.couponCode} applied successfully!` };
    },

    removeCoupon() {
      localStorage.removeItem('kng_applied_coupon');
      this.notify('coupon', null);
      this.notify('cart', this.getCart());
    },

    // --- WISHLIST ---
    getWishlist() {
      return initStorage('kng_wishlist', []);
    },

    isInWishlist(id) {
      return this.getWishlist().some((item) => String(item._id) === String(id));
    },

    toggleWishlist(product) {
      let list = this.getWishlist();
      const exists = list.some((i) => String(i._id) === String(product._id));
      if (exists) {
        list = list.filter((i) => String(i._id) !== String(product._id));
      } else {
        list.push({
          _id: product._id,
          title: product.title,
          price: product.price,
          originalPrice: product.discount ? Math.round(Number(product.price) / (1 - Number(product.discount) / 100)) : null,
          img: product.img,
          category: product.category?.name || product.children || '',
        });
      }
      localStorage.setItem('kng_wishlist', JSON.stringify(list));
      this.notify('wishlist', list);
      return !exists;
    },

    removeFromWishlist(id) {
      const list = this.getWishlist().filter((i) => String(i._id) !== String(id));
      localStorage.setItem('kng_wishlist', JSON.stringify(list));
      this.notify('wishlist', list);
      return list;
    },

    // --- COMPARE ---
    getCompare() {
      return initStorage('kng_compare', []);
    },

    isInCompare(id) {
      return this.getCompare().some((item) => String(item._id) === String(id));
    },

    toggleCompare(product) {
      let list = this.getCompare();
      const exists = list.some((i) => String(i._id) === String(product._id));
      if (exists) {
        list = list.filter((i) => String(i._id) !== String(product._id));
      } else {
        if (list.length >= 4) {
          return { success: false, message: 'You can compare maximum 4 products at a time.' };
        }
        list.push(product);
      }
      localStorage.setItem('kng_compare', JSON.stringify(list));
      this.notify('compare', list);
      return { success: true, inCompare: !exists, count: list.length };
    },

    removeFromCompare(id) {
      const list = this.getCompare().filter((i) => String(i._id) !== String(id));
      localStorage.setItem('kng_compare', JSON.stringify(list));
      this.notify('compare', list);
      return list;
    },

    clearCompare() {
      localStorage.setItem('kng_compare', JSON.stringify([]));
      this.notify('compare', []);
    },

    // --- REVIEWS ---
    addReview(productId, review) {
      const products = this.getProducts();
      const product = products.find((p) => String(p._id) === String(productId));
      if (!product) return;
      product.reviews = product.reviews || [];
      const newReview = {
        _id: 'rev-' + Date.now(),
        userId: { name: review.author || 'Kind n Glow Customer' },
        rating: Number(review.rating) || 5,
        comment: review.comment || '',
        createdAt: new Date().toISOString(),
      };
      product.reviews.unshift(newReview);
      product.rating = product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length;
      localStorage.setItem('kng_products', JSON.stringify(products));
      this.notify('products', products);
      return newReview;
    },

    // --- ORDERS ---
    getOrders() {
      return initStorage('kng_orders', window.KNG_DATA.orders || []);
    },

    createOrder(orderData) {
      const orders = this.getOrders();
      const newOrder = {
        _id: 'KNG-' + Math.floor(100000 + Math.random() * 900000),
        invoice: Math.floor(1000 + Math.random() * 9000),
        createdAt: new Date().toISOString(),
        status: 'Confirmed',
        shippingOption: 'standard',
        paymentMethod: orderData.paymentMethod || 'Razorpay',
        ...orderData,
      };
      orders.unshift(newOrder);
      localStorage.setItem('kng_orders', JSON.stringify(orders));
      this.clearCart();
      this.removeCoupon();
      this.notify('orders', orders);
      return newOrder;
    },

    updateOrderStatus(orderId, newStatus) {
      const orders = this.getOrders();
      const order = orders.find((o) => String(o._id) === String(orderId));
      if (order) {
        order.status = newStatus;
        order.updatedAt = new Date().toISOString();
        localStorage.setItem('kng_orders', JSON.stringify(orders));
        this.notify('orders', orders);
      }
      return order;
    },

    // --- USER / AUTH & ADDRESSES ---
    getUser() {
      const defaultUser = {
        _id: 'usr-1',
        name: 'Paul R. Bruns',
        email: 'paul@gmail.com',
        phone: '9876543210',
        addresses: [
          {
            _id: 'addr-1',
            label: 'Home',
            name: 'Paul R. Bruns',
            line1: 'Flat 402, Lotus Greens Apartments',
            line2: 'Poranki Road',
            city: 'Vijayawada',
            district: 'Krishna',
            state: 'Andhra Pradesh',
            zipCode: '521137',
            phone: '9876543210',
            isDefault: true,
          },
        ],
      };
      return initStorage('kng_user', defaultUser);
    },

    setUser(user) {
      localStorage.setItem('kng_user', JSON.stringify(user));
      this.notify('user', user);
    },

    updateUserProfile(profile) {
      const user = this.getUser() || {};
      const updated = { ...user, ...profile };
      this.setUser(updated);
      return updated;
    },

    saveAddress(address) {
      const user = this.getUser();
      user.addresses = user.addresses || [];
      if (address._id) {
        const idx = user.addresses.findIndex((a) => a._id === address._id);
        if (idx >= 0) user.addresses[idx] = address;
      } else {
        address._id = 'addr-' + Date.now();
        if (user.addresses.length === 0) address.isDefault = true;
        user.addresses.push(address);
      }
      this.setUser(user);
      return address;
    },

    deleteAddress(addressId) {
      const user = this.getUser();
      user.addresses = (user.addresses || []).filter((a) => a._id !== addressId);
      this.setUser(user);
    },

    // --- CONTACT MESSAGES ---
    getMessages() {
      return initStorage('kng_messages', [
        {
          _id: 'msg-1',
          name: 'Sunita Rao',
          email: 'sunita@example.com',
          subject: 'Custom batch order for wedding favours',
          message: 'Hello Kind n Glow! Loved your Vitamin C and lip oils. Can I order 50 small custom gift boxes for my sister’s wedding in Vijayawada?',
          createdAt: '2026-03-12T14:20:00.000Z',
        },
      ]);
    },

    addMessage(msg) {
      const messages = this.getMessages();
      const newMsg = {
        _id: 'msg-' + Date.now(),
        ...msg,
        createdAt: new Date().toISOString(),
      };
      messages.unshift(newMsg);
      localStorage.setItem('kng_messages', JSON.stringify(messages));
      this.notify('messages', messages);
      return newMsg;
    },

    // --- THEME ---
    getTheme() {
      return localStorage.getItem('kng_theme') || (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    },

    setTheme(theme) {
      localStorage.setItem('kng_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      this.notify('theme', theme);
    },

    toggleTheme() {
      const next = this.getTheme() === 'dark' ? 'light' : 'dark';
      this.setTheme(next);
      return next;
    },
  };

  // Sync theme immediately on load
  Store.setTheme(Store.getTheme());

  window.KNG_STORE = Store;
})();
