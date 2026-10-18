/**
 * Kind n Glow - Main Application Engine
 * Vanilla JavaScript Single Page Application
 * Responsive, fast, zero-dependency e-commerce experience.
 */

(function () {
  const store = window.KNG_STORE;
  const data = window.KNG_DATA;

  // SVG Icons library (Lucide-inspired)
  const ICONS = {
    leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    shoppingBag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
    minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
    zap: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
    droplets: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>`,
    tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7" cy="7" r=".5" fill="currentColor"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
    list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`
  };

  function getIcon(name, size = 18, className = '') {
    const raw = ICONS[name] || ICONS.sparkles;
    return raw.replace('<svg', `<svg width="${size}" height="${size}" class="${className}" style="display:inline-block;vertical-align:middle;"`);
  }

  // Toast Notification System
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const iconSvg = type === 'success' ? getIcon('check', 18, 'text-primary') : getIcon('x', 18, 'text-accent');
    toast.innerHTML = `<span>${iconSvg}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
  window.showToast = showToast;

  // Header and Badges update
  function updateHeaderState() {
    const cartTotals = store.getCartTotals();
    const cartBadge = document.getElementById('header-cart-badge');
    if (cartBadge) {
      cartBadge.textContent = cartTotals.count;
      cartBadge.style.display = cartTotals.count > 0 ? 'flex' : 'none';
    }

    const wishlist = store.getWishlist();
    const wishlistBadge = document.getElementById('header-wishlist-badge');
    if (wishlistBadge) {
      wishlistBadge.textContent = wishlist.length;
      wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }

    const theme = store.getTheme();
    const themeBtn = document.getElementById('header-theme-toggle');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? getIcon('sun', 20) : getIcon('moon', 20);
    }

    const logoImg = document.getElementById('site-logo-img');
    if (logoImg) {
      logoImg.src = theme === 'dark' ? 'assets/logos/kng_white.svg' : 'assets/logos/kng.svg';
    }

    // Floating Compare FAB on shop route
    const hash = window.location.hash || '#home';
    const compareList = store.getCompare();
    let fab = document.getElementById('compare-fab');
    if (hash.startsWith('#shop') && compareList.length >= 2) {
      if (!fab) {
        fab = document.createElement('button');
        fab.id = 'compare-fab';
        fab.className = 'compare-fab';
        fab.setAttribute('aria-label', 'Compare products');
        fab.onclick = () => window.location.hash = '#compare';
        document.body.appendChild(fab);
      }
      fab.innerHTML = `${getIcon('scale', 24)}<span class="badge-pill">${compareList.length}</span>`;
      fab.style.display = 'flex';
    } else if (fab) {
      fab.style.display = 'none';
    }
  }

  // Cart Drawer
  function openCartDrawer() {
    renderCartDrawer();
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.add('open');
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.remove('open');
  }

  function renderCartDrawer() {
    const cart = store.getCart();
    const totals = store.getCartTotals();
    const container = document.getElementById('cart-drawer-content');
    if (!container) return;

    const progressPct = Math.min(100, Math.round((totals.subtotal / totals.freeShippingThreshold) * 100));

    container.innerHTML = `
      <div class="cart-drawer-header">
        <h3 style="font-family:var(--font-sans);font-size:1.15rem;font-weight:600;display:flex;align-items:center;gap:0.5rem;">
          ${getIcon('shoppingBag', 20, 'text-primary')} Your Cart (${totals.count})
        </h3>
        <button id="cart-drawer-close-btn" class="modal-close-btn" aria-label="Close cart">${getIcon('x', 18)}</button>
      </div>

      <div class="cart-free-shipping">
        <div style="font-size:0.8125rem;font-weight:500;display:flex;justify-content:space-between;">
          <span>${totals.hasFreeShipping ? '🎉 Free shipping unlocked!' : `Add ₹${totals.amountForFreeShipping.toLocaleString('en-IN')} more for free delivery`}</span>
          <span>${progressPct}%</span>
        </div>
        <div class="free-ship-track">
          <div class="free-ship-bar" style="width:${progressPct}%;"></div>
        </div>
      </div>

      <div class="cart-items-scroll">
        ${cart.length === 0 ? `
          <div style="text-align:center;padding:3rem 1rem;">
            <div style="font-size:2.5rem;color:var(--kind-taupe-300);margin-bottom:1rem;">${getIcon('shoppingBag', 48)}</div>
            <p style="font-size:1rem;color:var(--color-text-secondary);margin-bottom:1.5rem;">Your cart is currently empty</p>
            <a href="#shop" class="btn btn-primary" onclick="window.KNG_APP.closeCartDrawer()">Explore Routine</a>
          </div>
        ` : cart.map((item) => `
          <div class="cart-item-row" data-id="${item._id}">
            <img src="${item.img}" alt="${item.title}" class="cart-item-img" onerror="this.src='https://picsum.photos/seed/kng-fallback/200/200'">
            <div class="cart-item-info">
              <a href="#product/${item._id}" class="cart-item-title" onclick="window.KNG_APP.closeCartDrawer()">${item.title}</a>
              <div class="cart-item-price">₹${Number(item.price).toLocaleString('en-IN')} × ${item.orderQuantity}</div>
              <div style="display:flex;align-items:center;gap:0.75rem;margin-top:0.4rem;">
                <div class="qty-counter" style="margin-bottom:0;transform:scale(0.85);transform-origin:left;">
                  <button class="qty-btn" onclick="window.KNG_STORE.updateCartQuantity('${item._id}', -1)">-</button>
                  <span class="qty-val">${item.orderQuantity}</span>
                  <button class="qty-btn" onclick="window.KNG_STORE.updateCartQuantity('${item._id}', 1)">+</button>
                </div>
                <button style="color:var(--color-accent);font-size:0.8125rem;cursor:pointer;" onclick="window.KNG_STORE.removeFromCart('${item._id}')">Remove</button>
              </div>
            </div>
            <div style="font-weight:700;font-size:0.9375rem;color:var(--color-text-primary);">
              ₹${(Number(item.price) * item.orderQuantity).toLocaleString('en-IN')}
            </div>
          </div>
        `).join('')}
      </div>

      ${cart.length > 0 ? `
        <div class="cart-drawer-footer">
          <div class="summary-row">
            <span style="color:var(--color-text-secondary);">Subtotal</span>
            <span style="font-weight:600;">₹${totals.subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div class="summary-row">
            <span style="color:var(--color-text-secondary);">Shipping</span>
            <span style="font-weight:600;color:${totals.shipping === 0 ? 'var(--color-primary)' : 'inherit'};">
              ${totals.shipping === 0 ? 'FREE' : '₹' + totals.shipping}
            </span>
          </div>
          ${totals.discount > 0 ? `
            <div class="summary-row" style="color:var(--color-primary);">
              <span>Coupon Savings</span>
              <span>-₹${totals.discount.toLocaleString('en-IN')}</span>
            </div>
          ` : ''}
          <div class="summary-row total">
            <span>Estimated Total</span>
            <span style="color:var(--color-primary);">₹${totals.total.toLocaleString('en-IN')}</span>
          </div>
          <div style="margin-top:1.25rem;display:flex;flex-direction:column;gap:0.6rem;">
            <a href="#checkout" class="btn btn-primary" style="width:100%;" onclick="window.KNG_APP.closeCartDrawer()">Proceed to Checkout</a>
            <a href="#cart" class="btn btn-outline btn-sm" style="width:100%;" onclick="window.KNG_APP.closeCartDrawer()">View Full Bag</a>
          </div>
        </div>
      ` : ''}
    `;

    const closeBtn = document.getElementById('cart-drawer-close-btn');
    if (closeBtn) closeBtn.onclick = closeCartDrawer;
  }

  // --- RENDER PAGES ---

  // 1. HOME VIEW
  function renderHomeView() {
    const products = store.getProducts();
    const featuredCollection = products.filter((p) => p.featured || p._id.startsWith('kng-')).slice(0, 8);
    const testimonials = data.testimonials || [];
    const stats = data.stats || [];
    const pillars = data.pillars || [];
    const manifesto = data.manifesto || [];

    return `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-copy">
              <div class="hero-pill">
                <span class="pulse-dot"></span>
                <span>New Collection: Botanical Radiance</span>
              </div>
              <h1 class="hero-title">
                Glow Gently.<br><span>Care Kindly.</span>
              </h1>
              <p class="hero-desc">
                Experience pure botanical self-care handcrafted in small batches — gentle formulas, powerful results, zero harsh chemicals.
              </p>
              <div class="hero-buttons">
                <a href="#shop" class="btn btn-primary btn-lg">Explore Routine ${getIcon('arrowRight', 18)}</a>
                <a href="#story" class="btn btn-outline btn-lg">Our Philosophy</a>
              </div>
              <div class="hero-features">
                <div class="hero-feat-item">
                  <h4>100% Pure & Organic</h4>
                  <p>Hand-selected botanical extracts</p>
                </div>
                <div class="hero-feat-item">
                  <h4>Handmade in Small Batches</h4>
                  <p>Freshly formulated in Poranki</p>
                </div>
                <div class="hero-feat-item">
                  <h4>Cruelty-Free</h4>
                  <p>Gentle on the most sensitive skin</p>
                </div>
              </div>
            </div>

            <div class="hero-visual">
              <div class="hero-main-img-card">
                <img src="https://picsum.photos/seed/kng-hero-1/800/1000" alt="Kind n Glow Botanical Care" fetchpriority="high">
                <div class="hero-img-overlay">
                  <h3>Made by us, for your skin</h3>
                  <p>Small batches · Honest ingredients</p>
                </div>
              </div>
              <div class="float-card-prod">
                <img src="https://picsum.photos/seed/kng-hero-2/300/300" alt="Vitamin C Serum" style="border-radius:var(--radius-brand);margin-bottom:0.4rem;">
                <p style="font-size:0.75rem;font-weight:600;">Vitamin C Serum</p>
                <p style="font-size:0.75rem;color:var(--color-primary);font-weight:700;">₹199</p>
              </div>
              <div class="float-card-rating">
                <div style="display:flex;gap:2px;color:var(--color-secondary-dark);font-size:0.875rem;margin-bottom:0.25rem;">
                  ${getIcon('star', 14)}${getIcon('star', 14)}${getIcon('star', 14)}${getIcon('star', 14)}${getIcon('star', 14)}
                </div>
                <p style="font-size:0.75rem;font-weight:600;white-space:nowrap;">Loved for gentle results</p>
              </div>
              <div class="float-card-badge">
                ${getIcon('sparkles', 14)} Cruelty-Free
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Brand Pillars Section -->
      <section class="section" style="background-color:var(--color-surface);">
        <div class="container">
          <div class="section-title-wrap">
            <p class="section-eyebrow">Our Promise</p>
            <h2 class="section-title">The Four Pillars of Kind n Glow</h2>
            <p class="section-desc">Guided by four core beliefs that make our skincare and rituals deeply nourishing.</p>
          </div>
          <div class="pillars-grid">
            ${pillars.map((p) => `
              <div class="pillar-card" style="background-color:${p.bgColor || 'var(--kind-sage-50)'};border-color:var(--color-border);">
                <div class="pillar-icon-box" style="background-color:var(--color-surface);color:${p.color || 'var(--color-primary)'};">
                  ${getIcon(p.icon.toLowerCase(), 24)}
                </div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Category Spotlight -->
      <section class="section" style="background-color:var(--color-background);">
        <div class="container">
          <div class="section-title-wrap">
            <p class="section-eyebrow">Find Your Ritual</p>
            <h2 class="section-title">Shop by Category</h2>
            <p class="section-desc">Four focused collections — one simple routine for healthy, glowing skin.</p>
          </div>
          <div class="categories-grid">
            <a href="#shop?category=facialcare" class="category-tile">
              <img src="https://picsum.photos/seed/kng-cat-facial/600/800" alt="Facial Care" loading="lazy">
              <div class="category-tile-overlay">
                <div class="category-tile-icon">${getIcon('leaf', 20)}</div>
                <h3>Facial Care</h3>
                <p>Serums, Gels, Toners &amp; Mists</p>
              </div>
            </a>
            <a href="#shop?category=discoverskincare" class="category-tile">
              <img src="https://picsum.photos/seed/kng-cat-skincare/600/800" alt="Discover Skincare" loading="lazy">
              <div class="category-tile-overlay">
                <div class="category-tile-icon">${getIcon('droplets', 20)}</div>
                <h3>Discover Skincare</h3>
                <p>Rose Waters, Face Washes, Setting Powders</p>
              </div>
            </a>
            <a href="#shop?category=awesomelipcare" class="category-tile">
              <img src="https://picsum.photos/seed/kng-cat-lip/600/800" alt="Awesome Lip Care" loading="lazy">
              <div class="category-tile-overlay">
                <div class="category-tile-icon">${getIcon('sparkles', 20)}</div>
                <h3>Awesome Lip Care</h3>
                <p>Balms, Tinted Lip Oils, Scrubs &amp; Matte</p>
              </div>
            </a>
            <a href="#shop?category=beautyofskin" class="category-tile">
              <img src="https://picsum.photos/seed/kng-cat-beauty/600/800" alt="Beauty of Skin" loading="lazy">
              <div class="category-tile-overlay">
                <div class="category-tile-icon">${getIcon('heart', 20)}</div>
                <h3>Beauty of Skin</h3>
                <p>Niacinamide, Night Oils, Blush &amp; Serums</p>
              </div>
            </a>
          </div>
          <div style="text-align:center;margin-top:3rem;">
            <a href="#shop" class="btn btn-outline">${getIcon('sparkles', 18)} View Complete Catalog</a>
          </div>
        </div>
      </section>

      <!-- Handcrafted Collection Showcase -->
      <section class="section" style="background-color:var(--color-surface);">
        <div class="container">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:3rem;flex-wrap:wrap;gap:1rem;">
            <div>
              <p class="section-eyebrow">Handcrafted by Us</p>
              <h2 class="section-title" style="margin-bottom:0.5rem;">The Kind n Glow Collection</h2>
              <p class="section-desc">Freshly formulated small batches made with honest botanical ingredients.</p>
            </div>
            <a href="#shop" class="btn btn-ghost" style="color:var(--color-primary);font-weight:600;">Explore All ${getIcon('arrowRight', 16)}</a>
          </div>

          <div class="products-grid">
            ${featuredCollection.map((product) => renderProductCard(product)).join('')}
          </div>
        </div>
      </section>

      <!-- Manifesto Section -->
      <section class="section manifesto-section">
        <div class="container">
          <div class="section-title-wrap">
            <p class="section-eyebrow">Why We Do What We Do</p>
            <h2 class="section-title">The Kind n Glow Manifesto</h2>
            <p class="section-desc">Care that feels good. Glow that feels natural.</p>
          </div>
          <div class="manifesto-points">
            ${manifesto.map((m, i) => `
              <div class="manifesto-card">
                <div class="manifesto-icon">
                  ${i === 0 ? getIcon('leaf', 24) : i === 1 ? getIcon('heart', 24) : getIcon('sparkles', 24)}
                </div>
                <div>
                  <h3>${m.title}</h3>
                  <p style="color:var(--color-text-secondary);line-height:1.7;">${m.text}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="manifesto-sign">
            <p class="with-kind">With kindness,</p>
            <p class="team-name">The Kind n Glow Family</p>
          </div>
        </div>
      </section>

      <!-- Testimonials & Community Stats -->
      <section class="section testimonials-section">
        <div class="container">
          <div class="section-title-wrap">
            <p class="section-eyebrow">Real Community Results</p>
            <h2 class="section-title">Loved by Thousands</h2>
            <p class="section-desc">Gentle results from real people who made the switch to clean small-batch care.</p>
          </div>

          <div id="home-testimonial-box" class="testimonial-card-single">
            ${renderTestimonialItem(testimonials[0] || {})}
          </div>

          <div class="testimonial-nav">
            ${testimonials.map((t, idx) => `
              <button class="carousel-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}" onclick="window.KNG_APP.switchTestimonial(${idx})" aria-label="Testimonial ${idx + 1}"></button>
            `).join('')}
          </div>

          <div class="stats-grid">
            ${stats.map((s) => `
              <div>
                <div class="stat-number">${s.number}</div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderTestimonialItem(t) {
    return `
      <div class="testimonial-stars">
        ${getIcon('star', 18)}${getIcon('star', 18)}${getIcon('star', 18)}${getIcon('star', 18)}${t.rating === 5 ? getIcon('star', 18) : ''}
      </div>
      <p class="testimonial-quote">"${t.text}"</p>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" onerror="this.src='https://picsum.photos/seed/kng-user/100/100'">
        <div class="testimonial-info">
          <h4>${t.name}</h4>
          <p>${t.location} · <span style="color:var(--color-primary);font-weight:600;">Verified Purchaser</span></p>
          <p style="font-size:0.75rem;margin-top:2px;">Reviewed: <em>${t.product}</em></p>
        </div>
      </div>
    `;
  }

  function switchTestimonial(idx) {
    const list = data.testimonials || [];
    const t = list[idx];
    if (!t) return;
    const box = document.getElementById('home-testimonial-box');
    if (box) box.innerHTML = renderTestimonialItem(t);
    document.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }

  // 2. PRODUCT CARD COMPONENT
  function renderProductCard(p, variant = 'grid') {
    const originalPrice = p.discount && p.discount > 0 ? Math.round(Number(p.price) / (1 - Number(p.discount) / 100)) : null;
    const discountPct = p.discount ? Math.round(Number(p.discount)) : 0;
    const isOutOfStock = p.status === 'out-of-stock' || Number(p.quantity) <= 0;
    const wishlisted = store.isInWishlist(p._id);
    const compared = store.isInCompare(p._id);

    if (variant === 'list') {
      return `
        <article class="product-card product-card-list">
          <div class="product-card-thumb">
            <a href="#product/${p._id}">
              <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='https://picsum.photos/seed/kng-fallback/600/600'">
            </a>
            <div class="product-card-badge-stack">
              ${p.featured ? '<span class="badge badge-primary">Handmade</span>' : ''}
              ${discountPct > 0 ? `<span class="badge badge-accent">-${discountPct}%</span>` : ''}
            </div>
          </div>
          <div class="product-card-body">
            <span class="product-card-cat">${p.category?.name || p.parent || p.children || 'Skincare'}</span>
            <a href="#product/${p._id}" class="product-card-title">${p.title}</a>
            <div class="product-card-rating">
              <span class="stars-row">${getIcon('star', 12)}${getIcon('star', 12)}${getIcon('star', 12)}${getIcon('star', 12)}${getIcon('star', 12)}</span>
              <span>(${p.reviews?.length || 1})</span>
            </div>
            <p style="font-size:0.875rem;color:var(--color-text-secondary);margin-bottom:1rem;line-clamp:2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
              ${p.description || 'Gentle botanical ingredients formulated for everyday glow.'}
            </p>
            <div class="product-card-footer">
              <div class="product-price-box">
                <span class="product-price">₹${Number(p.price).toLocaleString('en-IN')}</span>
                ${originalPrice ? `<span class="product-old-price">₹${originalPrice.toLocaleString('en-IN')}</span>` : ''}
              </div>
              <div style="display:flex;gap:0.5rem;align-items:center;">
                <button class="btn btn-primary btn-sm" onclick="window.KNG_APP.quickAddToCart('${p._id}', event)" ${isOutOfStock ? 'disabled' : ''}>
                  ${getIcon('shoppingBag', 16)} ${isOutOfStock ? 'Sold Out' : 'Add to Cart'}
                </button>
                <button class="action-btn ${compared ? 'text-accent' : ''}" onclick="window.KNG_APP.toggleCompareProduct('${p._id}', event)" aria-label="Compare">
                  ${getIcon('scale', 18)}
                </button>
                <button class="action-btn ${wishlisted ? 'text-accent' : ''}" onclick="window.KNG_APP.toggleWishlistProduct('${p._id}', event)" aria-label="Wishlist">
                  ${getIcon('heart', 18)}
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    return `
      <article class="product-card">
        <div class="product-card-thumb">
          <a href="#product/${p._id}">
            <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='https://picsum.photos/seed/kng-fallback/600/600'">
          </a>
          <div class="product-card-badge-stack">
            ${p.featured ? '<span class="badge badge-primary">Handmade</span>' : ''}
            ${discountPct > 0 ? `<span class="badge badge-accent">-${discountPct}%</span>` : ''}
          </div>
          <button class="product-wishlist-btn ${wishlisted ? 'active' : ''}" onclick="window.KNG_APP.toggleWishlistProduct('${p._id}', event)" aria-label="Add to wishlist">
            ${getIcon('heart', 16, wishlisted ? 'fill-current' : '')}
          </button>
          <div class="product-card-quick-bar">
            <button class="quick-bar-btn" onclick="window.KNG_APP.quickAddToCart('${p._id}', event)" ${isOutOfStock ? 'disabled' : ''}>
              ${getIcon('shoppingBag', 16)} ${isOutOfStock ? 'Sold Out' : 'Quick Add'}
            </button>
            <button class="quick-bar-compare ${compared ? 'active' : ''}" onclick="window.KNG_APP.toggleCompareProduct('${p._id}', event)" aria-label="Compare">
              ${getIcon('scale', 16)}
            </button>
          </div>
        </div>
        <div class="product-card-body">
          <span class="product-card-cat">${p.category?.name || p.parent || p.children || 'Skincare'}</span>
          <a href="#product/${p._id}" class="product-card-title">${p.title}</a>
          <div class="product-card-rating">
            <span class="stars-row">${getIcon('star', 12)}${getIcon('star', 12)}${getIcon('star', 12)}${getIcon('star', 12)}${getIcon('star', 12)}</span>
            <span>(${p.reviews?.length || 1})</span>
          </div>
          <div class="product-card-footer">
            <div class="product-price-box">
              <span class="product-price">₹${Number(p.price).toLocaleString('en-IN')}</span>
              ${originalPrice ? `<span class="product-old-price">₹${originalPrice.toLocaleString('en-IN')}</span>` : ''}
            </div>
            <button class="product-add-cart-circle" onclick="window.KNG_APP.quickAddToCart('${p._id}', event)" ${isOutOfStock ? 'disabled' : ''} aria-label="Add to cart">
              ${getIcon('shoppingBag', 16)}
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // Quick Action Helpers
  function quickAddToCart(productId, event) {
    if (event) event.stopPropagation();
    const product = store.getProductById(productId);
    if (!product) return;
    store.addToCart(product, 1);
    showToast(`Added ${product.title} to your bag!`);
    openCartDrawer();
  }

  function toggleWishlistProduct(productId, event) {
    if (event) event.stopPropagation();
    const product = store.getProductById(productId);
    if (!product) return;
    const added = store.toggleWishlist(product);
    showToast(added ? `Saved ${product.title} to Wishlist` : `Removed from Wishlist`);
    updateHeaderState();
  }

  function toggleCompareProduct(productId, event) {
    if (event) event.stopPropagation();
    const product = store.getProductById(productId);
    if (!product) return;
    const res = store.toggleCompare(product);
    if (!res.success) {
      showToast(res.message, 'error');
    } else {
      showToast(res.inCompare ? `Added to Compare (${res.count}/4)` : `Removed from Compare`);
    }
    updateHeaderState();
  }

  // 3. SHOP PAGE VIEW
  function renderShopView(params = {}) {
    const allProducts = store.getProducts();
    const activeCategory = (params.category || 'all').toLowerCase();
    const activeSort = params.sort || 'featured';
    const minRating = Number(params.rating || 0);
    const maxPrice = Number(params.maxPrice || 5000);
    const inStockOnly = params.inStock === 'true';
    const viewMode = params.view || 'grid';
    const searchQuery = (params.search || '').trim().toLowerCase();

    let filtered = allProducts.filter((p) => {
      // Category filter
      if (activeCategory !== 'all') {
        const catName = (p.category?.name || p.parent || p.children || p.productType || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const target = activeCategory.replace(/[^a-z0-9]/g, '');
        if (!catName.includes(target) && !p.productType?.toLowerCase().includes(target)) return false;
      }
      // Price filter
      if (Number(p.price) > maxPrice) return false;
      // In-stock filter
      if (inStockOnly && (p.status === 'out-of-stock' || Number(p.quantity) <= 0)) return false;
      // Rating filter
      if (minRating > 0 && (p.rating || 4.5) < minRating) return false;
      // Search
      if (searchQuery) {
        const matchTitle = p.title?.toLowerCase().includes(searchQuery);
        const matchDesc = p.description?.toLowerCase().includes(searchQuery);
        const matchTag = p.tags?.some((t) => String(t).toLowerCase().includes(searchQuery));
        if (!matchTitle && !matchDesc && !matchTag) return false;
      }
      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      if (activeSort === 'price-asc') return Number(a.price) - Number(b.price);
      if (activeSort === 'price-desc') return Number(b.price) - Number(a.price);
      if (activeSort === 'rating') return (b.rating || 4.5) - (a.rating || 4.5);
      if (activeSort === 'newest') return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });

    const categoriesList = [
      { id: 'all', label: 'All Products' },
      { id: 'facialcare', label: 'Facial Care' },
      { id: 'discoverskincare', label: 'Discover Skincare' },
      { id: 'awesomelipcare', label: 'Awesome Lip Care' },
      { id: 'beautyofskin', label: 'Beauty of Skin' },
      { id: 'beauty', label: 'Beauty Collection' },
      { id: 'skincare', label: 'Skincare Essentials' },
      { id: 'electronics', label: 'Accessories & Devices' },
      { id: 'jewelry', label: 'Jewelry' },
    ];

    return `
      <div class="container" style="padding-top:2.5rem;padding-bottom:4rem;">
        <div style="text-align:center;max-width:38rem;margin:0 auto 2.5rem;">
          <p class="section-eyebrow">The Complete Collection</p>
          <h1 style="font-size:2.5rem;margin-bottom:0.75rem;">Shop All Products</h1>
          <p style="color:var(--color-text-secondary);">Pure botanical skincare &amp; handcrafted routines created in small batches.</p>
        </div>

        <div class="shop-layout">
          <!-- Sidebar -->
          <aside class="shop-sidebar">
            <div class="card" style="padding:1.5rem;">
              <!-- Categories -->
              <div class="filter-group">
                <h4 class="filter-title">Category</h4>
                <ul class="filter-options-list">
                  ${categoriesList.map((cat) => `
                    <li>
                      <label class="filter-label-row">
                        <span>
                          <input type="radio" name="shop-category" value="${cat.id}" ${activeCategory === cat.id ? 'checked' : ''} onchange="window.KNG_APP.updateShopFilter('category', '${cat.id}')">
                          ${cat.label}
                        </span>
                      </label>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Price Slider -->
              <div class="filter-group">
                <h4 class="filter-title">Max Price: ₹${maxPrice}</h4>
                <input type="range" min="50" max="5000" step="50" value="${maxPrice}" style="width:100%;accent-color:var(--color-primary);" oninput="window.KNG_APP.updateShopFilter('maxPrice', this.value)">
                <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--color-text-muted);margin-top:0.3rem;">
                  <span>₹50</span><span>₹5,000</span>
                </div>
              </div>

              <!-- In stock toggle -->
              <div class="filter-group">
                <h4 class="filter-title">Availability</h4>
                <label style="display:flex;align-items:center;gap:0.6rem;font-size:0.875rem;cursor:pointer;">
                  <input type="checkbox" ${inStockOnly ? 'checked' : ''} onchange="window.KNG_APP.updateShopFilter('inStock', this.checked)">
                  In-Stock Only
                </label>
              </div>

              <!-- Rating filter -->
              <div class="filter-group" style="border-bottom:none;margin-bottom:0;padding-bottom:0;">
                <h4 class="filter-title">Rating</h4>
                <ul class="filter-options-list">
                  <li><label class="filter-label-row"><input type="radio" name="shop-rating" value="0" ${minRating === 0 ? 'checked' : ''} onchange="window.KNG_APP.updateShopFilter('rating', 0)"> All Ratings</label></li>
                  <li><label class="filter-label-row"><input type="radio" name="shop-rating" value="4" ${minRating === 4 ? 'checked' : ''} onchange="window.KNG_APP.updateShopFilter('rating', 4)"> 4★ &amp; above</label></li>
                  <li><label class="filter-label-row"><input type="radio" name="shop-rating" value="4.5" ${minRating === 4.5 ? 'checked' : ''} onchange="window.KNG_APP.updateShopFilter('rating', 4.5)"> 4.5★ &amp; above</label></li>
                </ul>
              </div>

              <div style="margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid var(--color-border);">
                <button class="btn btn-outline btn-sm" style="width:100%;" onclick="window.location.hash='#shop'">Reset Filters</button>
              </div>
            </div>
          </aside>

          <!-- Main catalog -->
          <div>
            <div class="shop-toolbar">
              <div class="shop-count">
                Showing <strong>${filtered.length}</strong> of ${allProducts.length} items
                ${searchQuery ? ` for "<em>${searchQuery}</em>"` : ''}
              </div>
              <div class="shop-controls">
                <label style="font-size:0.875rem;color:var(--color-text-muted);">Sort:</label>
                <select class="shop-select" onchange="window.KNG_APP.updateShopFilter('sort', this.value)">
                  <option value="featured" ${activeSort === 'featured' ? 'selected' : ''}>Featured</option>
                  <option value="newest" ${activeSort === 'newest' ? 'selected' : ''}>Newest</option>
                  <option value="price-asc" ${activeSort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
                  <option value="price-desc" ${activeSort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
                  <option value="rating" ${activeSort === 'rating' ? 'selected' : ''}>Top Rated</option>
                </select>

                <div style="display:flex;border:1px solid var(--color-border);border-radius:var(--radius-brand);overflow:hidden;">
                  <button class="action-btn" style="border-radius:0;${viewMode === 'grid' ? 'background:var(--color-primary);color:#fff;' : ''}" onclick="window.KNG_APP.updateShopFilter('view', 'grid')" aria-label="Grid view">
                    ${getIcon('grid', 16)}
                  </button>
                  <button class="action-btn" style="border-radius:0;${viewMode === 'list' ? 'background:var(--color-primary);color:#fff;' : ''}" onclick="window.KNG_APP.updateShopFilter('view', 'list')" aria-label="List view">
                    ${getIcon('list', 16)}
                  </button>
                </div>
              </div>
            </div>

            ${filtered.length === 0 ? `
              <div class="card" style="text-align:center;padding:4rem 2rem;">
                <div style="font-size:2.5rem;color:var(--kind-taupe-300);margin-bottom:1rem;">${getIcon('filter', 48)}</div>
                <h3 style="font-size:1.35rem;margin-bottom:0.5rem;">No products match your filters</h3>
                <p style="color:var(--color-text-secondary);margin-bottom:1.5rem;">Try adjusting the price range or select a different category.</p>
                <button class="btn btn-primary" onclick="window.location.hash='#shop'">Clear All Filters</button>
              </div>
            ` : `
              <div class="${viewMode === 'grid' ? 'products-grid' : 'products-list'}">
                ${filtered.map((p) => renderProductCard(p, viewMode)).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  }

  function updateShopFilter(key, val) {
    const hash = window.location.hash;
    const parts = hash.split('?');
    const params = new URLSearchParams(parts[1] || '');
    params.set(key, val);
    window.location.hash = '#shop?' + params.toString();
  }

  // 4. PRODUCT DETAIL VIEW (PDP)
  function renderProductDetailView(id) {
    const p = store.getProductById(id);
    if (!p) {
      return `
        <div class="container" style="padding:6rem 1rem;text-align:center;">
          <h2 style="font-size:2rem;margin-bottom:1rem;">Product Not Found</h2>
          <p style="color:var(--color-text-secondary);margin-bottom:2rem;">The product you are looking for may have been retired or moved.</p>
          <a href="#shop" class="btn btn-primary">Browse All Products</a>
        </div>
      `;
    }

    const images = (p.imageURLs && p.imageURLs.length > 0)
      ? p.imageURLs.map((u) => u.img)
      : [p.img];

    const originalPrice = p.discount && p.discount > 0 ? Math.round(Number(p.price) / (1 - Number(p.discount) / 100)) : null;
    const discountPct = p.discount ? Math.round(Number(p.discount)) : 0;
    const isOutOfStock = p.status === 'out-of-stock' || Number(p.quantity) <= 0;
    const isLowStock = !isOutOfStock && Number(p.quantity) <= 10;
    const wishlisted = store.isInWishlist(p._id);

    // Reviews summary
    const reviews = p.reviews || [];
    const avgRating = reviews.length > 0 ? (reviews.reduce((s, r) => s + Number(r.rating || 5), 0) / reviews.length) : 4.8;
    const ratingDist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((r) => {
      const v = Math.round(Number(r.rating || 5));
      if (ratingDist[v] !== undefined) ratingDist[v]++;
    });

    const related = store.getProducts().filter((item) => String(item._id) !== String(p._id) && (item.category?.name === p.category?.name || item.productType === p.productType)).slice(0, 4);

    return `
      <div class="container" style="padding-top:2rem;padding-bottom:5rem;">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a href="#home">Home</a> /
          <a href="#shop">Shop</a> /
          <a href="#shop?category=${encodeURIComponent((p.category?.name || 'beauty').toLowerCase())}">${p.category?.name || p.children || 'Botanical'}</a> /
          <span style="color:var(--color-text-primary);font-weight:500;">${p.title}</span>
        </nav>

        <div class="pdp-grid">
          <!-- Gallery -->
          <div class="pdp-gallery">
            <div class="pdp-main-image" onclick="window.KNG_APP.openImageZoom('${images[0]}')">
              <img id="pdp-main-img" src="${images[0]}" alt="${p.title}" onerror="this.src='https://picsum.photos/seed/kng-fallback/800/1000'">
              ${p.featured ? '<span class="badge badge-primary" style="position:absolute;top:1rem;left:1rem;">Handmade</span>' : ''}
              ${discountPct > 0 ? `<span class="badge badge-accent" style="position:absolute;top:1rem;right:1rem;">-${discountPct}%</span>` : ''}
            </div>
            ${images.length > 1 ? `
              <div class="pdp-thumbs">
                ${images.map((img, i) => `
                  <div class="pdp-thumb ${i === 0 ? 'active' : ''}" onclick="window.KNG_APP.switchPdpImage('${img}', this)">
                    <img src="${img}" alt="Thumbnail ${i + 1}" onerror="this.src='https://picsum.photos/seed/kng-fallback/100/100'">
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Product Details -->
          <div class="pdp-info">
            <p style="font-size:0.8125rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">
              ${p.category?.name || p.children || 'Handcrafted Routine'}
            </p>
            <h1>${p.title}</h1>

            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
              <div style="display:inline-flex;gap:2px;color:var(--color-secondary-dark);font-size:0.9rem;">
                ${getIcon('star', 16)}${getIcon('star', 16)}${getIcon('star', 16)}${getIcon('star', 16)}${getIcon('star', 16)}
              </div>
              <span style="font-weight:600;font-size:0.9375rem;">${avgRating.toFixed(1)}</span>
              <a href="#reviews-anchor" style="font-size:0.875rem;color:var(--color-primary);text-decoration:underline;">(${reviews.length} Customer Reviews)</a>
            </div>

            <div class="pdp-price-row">
              <span class="pdp-price">₹${Number(p.price).toLocaleString('en-IN')}</span>
              ${originalPrice ? `
                <span class="pdp-old-price">₹${originalPrice.toLocaleString('en-IN')}</span>
                <span class="badge badge-accent">Save ${discountPct}%</span>
              ` : ''}
            </div>

            <div class="pdp-stock-status ${isOutOfStock ? 'out-of-stock' : isLowStock ? 'low-stock' : 'in-stock'}">
              ${isOutOfStock ? `${getIcon('x', 16)} Out of Stock` : isLowStock ? `${getIcon('zap', 16)} Only ${p.quantity} left in small batch stock!` : `${getIcon('check', 16)} In Stock &amp; Freshly Bottled`}
            </div>

            <div class="pdp-trust-box">
              <div class="pdp-trust-item">
                <span style="color:var(--color-primary);">${getIcon('truck', 18)}</span>
                <span>Free shipping on all orders over ₹999</span>
              </div>
              <div class="pdp-trust-item">
                <span style="color:var(--color-primary);">${getIcon('shield', 18)}</span>
                <span>Pure, chemical-free ingredients · 100% cruelty free</span>
              </div>
            </div>

            <p style="color:var(--color-text-secondary);font-size:1rem;line-height:1.7;margin-bottom:1.75rem;">
              ${p.description || 'Gentle botanical skincare handcrafted in small batches. Deeply hydrates and nurtures skin without harsh synthetics or filler ingredients.'}
            </p>

            <!-- Quantity & Actions -->
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap;">
              <div>
                <span style="display:block;font-size:0.75rem;font-weight:600;color:var(--color-primary);margin-bottom:0.3rem;">Quantity</span>
                <div class="qty-counter" style="margin-bottom:0;">
                  <button class="qty-btn" onclick="window.KNG_APP.changePdpQty(-1)">-</button>
                  <span id="pdp-qty-val" class="qty-val">1</span>
                  <button class="qty-btn" onclick="window.KNG_APP.changePdpQty(1)">+</button>
                </div>
              </div>
            </div>

            <div class="pdp-actions">
              <button class="btn btn-primary btn-lg" onclick="window.KNG_APP.addPdpToCart('${p._id}', false)" ${isOutOfStock ? 'disabled' : ''}>
                ${getIcon('shoppingBag', 20)} ${isOutOfStock ? 'Sold Out' : 'Add to Bag'}
              </button>
              <button class="btn btn-secondary btn-lg" onclick="window.KNG_APP.addPdpToCart('${p._id}', true)" ${isOutOfStock ? 'disabled' : ''}>
                ${getIcon('zap', 20)} Buy Now
              </button>
            </div>

            <div style="display:flex;gap:1.5rem;border-top:1px solid var(--color-border);padding-top:1.25rem;margin-bottom:2rem;">
              <button class="btn btn-ghost btn-sm" onclick="window.KNG_APP.toggleWishlistProduct('${p._id}', event)" style="color:${wishlisted ? 'var(--color-accent)' : 'inherit'};">
                ${getIcon('heart', 16)} ${wishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
              </button>
              <button class="btn btn-ghost btn-sm" onclick="window.KNG_APP.shareProduct('${p.title}')">
                ${getIcon('share', 16)} Share Product
              </button>
              <button class="btn btn-ghost btn-sm" onclick="window.KNG_APP.toggleCompareProduct('${p._id}', event)">
                ${getIcon('scale', 16)} Compare
              </button>
            </div>

            <!-- Details Accordion -->
            <div class="accordion-item">
              <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                <span>Key Ingredients &amp; Botanicals</span>
                <span>+</span>
              </div>
              <div class="accordion-body">
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
                  ${(p.tags || ['Botanical Oils', 'Vitamin Extract', 'Natural Glycerin']).map((t) => `<span class="badge badge-primary">${t}</span>`).join('')}
                </div>
                <p>All ingredients are ethically and sustainably sourced, free from synthetic preservatives, phthalates, parabens, and sulfates.</p>
              </div>
            </div>

            <div class="accordion-item">
              <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                <span>How to Use / Ritual</span>
                <span>+</span>
              </div>
              <div class="accordion-body">
                <p>Apply 2–3 drops or a dime-sized amount to cleansed skin morning and evening. Gently press into face, neck, and décolletage with upward strokes until fully absorbed.</p>
              </div>
            </div>

            <div class="accordion-item">
              <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                <span>Product Specifications</span>
                <span>+</span>
              </div>
              <div class="accordion-body">
                <table style="width:100%;font-size:0.875rem;border-collapse:collapse;">
                  <tr style="border-bottom:1px solid var(--color-border);"><td style="padding:0.4rem 0;font-weight:600;">SKU</td><td style="text-align:right;">${p.sku || 'KNG-BOTANICAL'}</td></tr>
                  <tr style="border-bottom:1px solid var(--color-border);"><td style="padding:0.4rem 0;font-weight:600;">Unit</td><td style="text-align:right;">${p.unit || '1 pcs'}</td></tr>
                  <tr style="border-bottom:1px solid var(--color-border);"><td style="padding:0.4rem 0;font-weight:600;">Origin</td><td style="text-align:right;">Handcrafted in Poranki, Vijayawada</td></tr>
                  <tr><td style="padding:0.4rem 0;font-weight:600;">Brand</td><td style="text-align:right;">${p.brand?.name || 'Kind n Glow'}</td></tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Reviews & Ratings Block -->
        <div id="reviews-anchor" style="margin-top:5rem;padding-top:3rem;border-top:1px solid var(--color-border);">
          <div class="section-title-wrap" style="text-align:left;margin-left:0;margin-bottom:2.5rem;">
            <p class="section-eyebrow">Customer Voices</p>
            <h2 class="section-title">Ratings &amp; Reviews</h2>
          </div>

          <div style="display:grid;grid-template-columns:1fr;gap:2rem;">
            <div style="display:grid;grid-template-columns:1fr;gap:2rem;">
              <div class="card ratings-summary-card">
                <div class="rating-big-number">${avgRating.toFixed(1)}</div>
                <div style="display:inline-flex;gap:2px;color:var(--color-secondary-dark);font-size:1.15rem;margin:0.5rem 0;">
                  ${getIcon('star', 20)}${getIcon('star', 20)}${getIcon('star', 20)}${getIcon('star', 20)}${getIcon('star', 20)}
                </div>
                <p style="font-size:0.875rem;color:var(--color-text-muted);">${reviews.length} verified ratings</p>
                <div style="margin-top:1.5rem;text-align:left;">
                  ${[5, 4, 3, 2, 1].map((star) => {
                    const count = ratingDist[star] || 0;
                    const pct = reviews.length > 0 ? Math.round((count / reviews.length) * 100) : 0;
                    return `
                      <div class="rating-bar-row">
                        <span style="width:2rem;">${star}★</span>
                        <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%;"></div></div>
                        <span style="width:2rem;text-align:right;color:var(--color-text-muted);">${count}</span>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Write a review form -->
              <div class="card" style="padding:2rem;">
                <h3 style="font-size:1.25rem;margin-bottom:1rem;">Share Your Experience</h3>
                <form id="write-review-form" onsubmit="window.KNG_APP.submitProductReview('${p._id}', event)">
                  <div class="input-group">
                    <label class="input-label">Your Name</label>
                    <input type="text" id="review-author" class="input-control" placeholder="e.g. Priya" required>
                  </div>
                  <div class="input-group">
                    <label class="input-label">Star Rating</label>
                    <select id="review-rating" class="input-control">
                      <option value="5">⭐⭐⭐⭐⭐ (5 - Outstanding)</option>
                      <option value="4">⭐⭐⭐⭐ (4 - Very Good)</option>
                      <option value="3">⭐⭐⭐ (3 - Average)</option>
                      <option value="2">⭐⭐ (2 - Below Expectations)</option>
                      <option value="1">⭐ (1 - Disappointed)</option>
                    </select>
                  </div>
                  <div class="input-group">
                    <label class="input-label">Review Comment</label>
                    <textarea id="review-comment" class="input-control" rows="3" placeholder="Tell us how the texture, aroma, and results felt on your skin..." required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary btn-sm">Submit Review</button>
                </form>
              </div>
            </div>

            <!-- Existing reviews list -->
            <div style="display:flex;flex-direction:column;gap:1rem;margin-top:2rem;">
              ${reviews.length === 0 ? '<p style="color:var(--color-text-muted);">No reviews written yet. Be the first to share your experience!</p>' : reviews.map((r) => `
                <div class="card" style="padding:1.5rem;">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                    <div>
                      <strong style="color:var(--color-text-primary);">${r.userId?.name || 'Kind n Glow Customer'}</strong>
                      <span class="badge badge-primary" style="margin-left:0.5rem;font-size:0.7rem;">Verified Buyer</span>
                    </div>
                    <div style="color:var(--color-secondary-dark);display:flex;gap:2px;">
                      ${Array.from({ length: Number(r.rating) || 5 }).map(() => getIcon('star', 14)).join('')}
                    </div>
                  </div>
                  <p style="color:var(--color-text-secondary);font-size:0.9375rem;">${r.comment}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Related Products -->
        ${related.length > 0 ? `
          <div style="margin-top:5rem;">
            <div class="section-title-wrap" style="text-align:left;margin-left:0;margin-bottom:2rem;">
              <p class="section-eyebrow">Complementary Care</p>
              <h2 class="section-title" style="font-size:1.75rem;">You May Also Love</h2>
            </div>
            <div class="products-grid">
              ${related.map((item) => renderProductCard(item)).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  function switchPdpImage(src, thumbEl) {
    const main = document.getElementById('pdp-main-img');
    if (main) main.src = src;
    document.querySelectorAll('.pdp-thumb').forEach((el) => el.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
  }

  function changePdpQty(delta) {
    const el = document.getElementById('pdp-qty-val');
    if (!el) return;
    let val = parseInt(el.textContent, 10) || 1;
    val = Math.max(1, val + delta);
    el.textContent = val;
  }

  function addPdpToCart(productId, buyNow = false) {
    const product = store.getProductById(productId);
    if (!product) return;
    const qtyEl = document.getElementById('pdp-qty-val');
    const qty = qtyEl ? (parseInt(qtyEl.textContent, 10) || 1) : 1;
    store.addToCart(product, qty);
    showToast(`Added ${qty} × ${product.title} to your bag`);
    if (buyNow) {
      window.location.hash = '#checkout';
    } else {
      openCartDrawer();
    }
  }

  function submitProductReview(productId, event) {
    event.preventDefault();
    const author = document.getElementById('review-author')?.value.trim();
    const rating = document.getElementById('review-rating')?.value;
    const comment = document.getElementById('review-comment')?.value.trim();
    if (!author || !comment) return;
    store.addReview(productId, { author, rating, comment });
    showToast('Thank you! Your review has been posted.');
    renderApp();
  }

  function shareProduct(title) {
    if (navigator.share) {
      navigator.share({ title: title, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Product link copied to clipboard!');
      });
    }
  }

  function openImageZoom(imgSrc) {
    let modal = document.getElementById('image-zoom-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'image-zoom-modal';
      modal.className = 'modal-backdrop';
      modal.innerHTML = `
        <div style="position:relative;max-width:90vw;max-height:90vh;">
          <button class="modal-close-btn" style="position:absolute;top:-1rem;right:-1rem;" onclick="this.closest('.modal-backdrop').classList.remove('open')">${getIcon('x', 20)}</button>
          <img id="image-zoom-img" src="" alt="Zoom" style="max-width:100%;max-height:85vh;border-radius:var(--radius-lg);box-shadow:var(--shadow-strong);object-fit:contain;">
        </div>
      `;
      document.body.appendChild(modal);
      modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('open'); };
    }
    const imgEl = document.getElementById('image-zoom-img');
    if (imgEl) imgEl.src = imgSrc;
    modal.classList.add('open');
  }

  // 5. CART FULL PAGE VIEW
  function renderCartView() {
    const cart = store.getCart();
    const totals = store.getCartTotals();
    const progressPct = Math.min(100, Math.round((totals.subtotal / totals.freeShippingThreshold) * 100));

    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="text-align:center;max-width:36rem;margin:0 auto 3rem;">
          <h1 style="font-size:2.5rem;margin-bottom:0.5rem;">Shopping Bag</h1>
          <p style="color:var(--color-text-secondary);">Review your selected botanical items before checking out.</p>
        </div>

        ${cart.length === 0 ? `
          <div class="card" style="text-align:center;padding:4rem 2rem;max-width:36rem;margin:0 auto;">
            <div style="font-size:3rem;color:var(--kind-taupe-300);margin-bottom:1rem;">${getIcon('shoppingBag', 54)}</div>
            <h3 style="font-size:1.5rem;margin-bottom:0.5rem;">Your bag is empty</h3>
            <p style="color:var(--color-text-secondary);margin-bottom:2rem;">Looks like you haven't added anything yet. Discover our fresh small batches!</p>
            <a href="#shop" class="btn btn-primary">Browse All Products</a>
          </div>
        ` : `
          <div style="max-width:54rem;margin:0 auto 2rem;" class="card cart-free-shipping">
            <div style="display:flex;justify-content:space-between;font-weight:600;font-size:0.875rem;">
              <span>${totals.hasFreeShipping ? '🎉 You have qualified for FREE delivery anywhere in India!' : `Add ₹${totals.amountForFreeShipping.toLocaleString('en-IN')} more to get FREE Shipping`}</span>
              <span>${progressPct}%</span>
            </div>
            <div class="free-ship-track"><div class="free-ship-bar" style="width:${progressPct}%;"></div></div>
          </div>

          <div style="display:grid;grid-template-columns:1fr;gap:2.5rem;max-width:54rem;margin:0 auto;">
            <div class="card" style="padding:1.5rem;">
              ${cart.map((item) => `
                <div class="cart-item-row" style="padding:1rem 0;">
                  <img src="${item.img}" alt="${item.title}" class="cart-item-img" onerror="this.src='https://picsum.photos/seed/kng-fallback/200/200'">
                  <div class="cart-item-info">
                    <a href="#product/${item._id}" class="cart-item-title" style="font-size:1rem;">${item.title}</a>
                    <div style="color:var(--color-text-muted);font-size:0.875rem;">₹${Number(item.price).toLocaleString('en-IN')} each</div>
                    <div style="display:flex;align-items:center;gap:1rem;margin-top:0.6rem;">
                      <div class="qty-counter" style="margin-bottom:0;">
                        <button class="qty-btn" onclick="window.KNG_STORE.updateCartQuantity('${item._id}', -1)">-</button>
                        <span class="qty-val">${item.orderQuantity}</span>
                        <button class="qty-btn" onclick="window.KNG_STORE.updateCartQuantity('${item._id}', 1)">+</button>
                      </div>
                      <button style="color:var(--color-accent);font-size:0.875rem;cursor:pointer;" onclick="window.KNG_STORE.removeFromCart('${item._id}')">Remove</button>
                    </div>
                  </div>
                  <div style="font-weight:700;font-size:1.15rem;color:var(--color-text-primary);">
                    ₹${(Number(item.price) * item.orderQuantity).toLocaleString('en-IN')}
                  </div>
                </div>
              `).join('')}

              <div style="display:flex;justify-content:space-between;margin-top:1.5rem;">
                <button class="btn btn-ghost btn-sm" onclick="window.KNG_STORE.clearCart()">Clear Bag</button>
                <a href="#shop" class="btn btn-outline btn-sm">Continue Shopping</a>
              </div>
            </div>

            <!-- Order Summary Card -->
            <div class="card" style="padding:2rem;">
              <h3 style="font-size:1.25rem;margin-bottom:1.25rem;">Order Summary</h3>
              <div class="summary-row"><span>Subtotal</span><span>₹${totals.subtotal.toLocaleString('en-IN')}</span></div>
              <div class="summary-row">
                <span>Shipping</span>
                <span style="color:${totals.shipping === 0 ? 'var(--color-primary)' : 'inherit'};font-weight:600;">
                  ${totals.shipping === 0 ? 'FREE' : '₹' + totals.shipping}
                </span>
              </div>
              ${totals.discount > 0 ? `
                <div class="summary-row" style="color:var(--color-primary);">
                  <span>Coupon Discount</span>
                  <span>-₹${totals.discount.toLocaleString('en-IN')}</span>
                </div>
              ` : ''}
              <div class="summary-row total">
                <span>Total Amount</span>
                <span style="color:var(--color-primary);">₹${totals.total.toLocaleString('en-IN')}</span>
              </div>
              <div style="margin-top:1.5rem;">
                <a href="#checkout" class="btn btn-primary btn-lg" style="width:100%;">Proceed to Secure Checkout</a>
              </div>
            </div>
          </div>
        `}
      </div>
    `;
  }

  // 6. CHECKOUT VIEW & RAZORPAY SIMULATION
  function renderCheckoutView() {
    const cart = store.getCart();
    if (cart.length === 0) {
      return `
        <div class="container" style="padding:6rem 1rem;text-align:center;">
          <h2 style="font-size:2rem;margin-bottom:1rem;">Your bag is empty</h2>
          <p style="color:var(--color-text-secondary);margin-bottom:2rem;">Add items to your cart before proceeding to checkout.</p>
          <a href="#shop" class="btn btn-primary">Go to Shop</a>
        </div>
      `;
    }

    const totals = store.getCartTotals();
    const user = store.getUser();
    const defaultAddress = user?.addresses?.[0] || {};
    const appliedCoupon = store.getAppliedCoupon();
    const states = data.indianStates || [];

    return `
      <div class="container" style="padding-top:2.5rem;padding-bottom:5rem;">
        <h1 style="font-size:2.25rem;margin-bottom:0.5rem;text-align:center;">Secure Checkout</h1>
        <p style="text-align:center;color:var(--color-text-secondary);margin-bottom:2.5rem;">Fast delivery across India · 100% encrypted &amp; verified.</p>

        <div style="display:grid;grid-template-columns:1fr;gap:2.5rem;max-width:64rem;margin:0 auto;" class="checkout-grid">
          <!-- Shipping Details Form -->
          <div>
            <div class="card" style="padding:2rem;margin-bottom:2rem;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
                <h3 style="font-size:1.35rem;">Shipping Address</h3>
                ${user?.addresses?.length > 0 ? `
                  <span class="badge badge-primary">Saved Address Available</span>
                ` : ''}
              </div>

              <form id="checkout-form" onsubmit="window.KNG_APP.processCheckout(event)">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                  <div class="input-group">
                    <label class="input-label">First Name *</label>
                    <input type="text" id="ship-fname" class="input-control" value="${user?.name ? user.name.split(' ')[0] : ''}" required>
                  </div>
                  <div class="input-group">
                    <label class="input-label">Last Name *</label>
                    <input type="text" id="ship-lname" class="input-control" value="${user?.name ? user.name.split(' ').slice(1).join(' ') : ''}" required>
                  </div>
                </div>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                  <div class="input-group">
                    <label class="input-label">Email Address *</label>
                    <input type="email" id="ship-email" class="input-control" value="${user?.email || ''}" required>
                  </div>
                  <div class="input-group">
                    <label class="input-label">Mobile Phone (10 digits) *</label>
                    <input type="tel" id="ship-phone" class="input-control" value="${user?.phone || defaultAddress.phone || ''}" placeholder="9876543210" pattern="[0-9]{10}" required>
                  </div>
                </div>

                <div class="input-group">
                  <label class="input-label">Street Address / House No. *</label>
                  <input type="text" id="ship-address" class="input-control" value="${defaultAddress.line1 || ''}" placeholder="Flat 402, Lotus Greens, Main Road" required>
                </div>

                <div class="input-group">
                  <label class="input-label">Landmark (Optional)</label>
                  <input type="text" id="ship-landmark" class="input-control" value="${defaultAddress.landmark || ''}" placeholder="Near Apollo Pharmacy">
                </div>

                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
                  <div class="input-group">
                    <label class="input-label">PIN Code *</label>
                    <input type="text" id="ship-pin" class="input-control" value="${defaultAddress.zipCode || ''}" placeholder="6 digits" maxlength="6" oninput="window.KNG_APP.lookupPinCode(this.value)" required>
                    <div id="pin-feedback" class="input-hint">Enter 6-digit Indian PIN</div>
                  </div>
                  <div class="input-group">
                    <label class="input-label">City *</label>
                    <input type="text" id="ship-city" class="input-control" value="${defaultAddress.city || ''}" placeholder="e.g. Vijayawada" required>
                  </div>
                  <div class="input-group">
                    <label class="input-label">District *</label>
                    <input type="text" id="ship-district" class="input-control" value="${defaultAddress.district || ''}" placeholder="e.g. Krishna" required>
                  </div>
                </div>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                  <div class="input-group">
                    <label class="input-label">State *</label>
                    <select id="ship-state" class="input-control" required>
                      <option value="">Select State</option>
                      ${states.map((s) => `<option value="${s}" ${defaultAddress.state === s ? 'selected' : ''}>${s}</option>`).join('')}
                    </select>
                  </div>
                  <div class="input-group">
                    <label class="input-label">Country</label>
                    <input type="text" class="input-control" value="India" disabled>
                  </div>
                </div>

                <!-- Payment Method Selection -->
                <div style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--color-border);">
                  <h3 style="font-size:1.25rem;margin-bottom:1rem;">Payment Method</h3>
                  <div style="display:flex;flex-direction:column;gap:0.75rem;">
                    <label class="card" style="display:flex;align-items:center;gap:1rem;padding:1rem;cursor:pointer;border-color:var(--color-primary);">
                      <input type="radio" name="paymentMethod" value="Razorpay" checked>
                      <img src="assets/logos/Razorpay/Razorpay_blue.svg" alt="Razorpay" style="height:1.75rem;width:auto;" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg'">
                      <div style="flex:1;">
                        <strong style="color:var(--color-text-primary);">Razorpay Secure</strong>
                        <p style="font-size:0.75rem;color:var(--color-text-muted);">UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, NetBanking</p>
                      </div>
                    </label>

                    <label class="card" style="display:flex;align-items:center;gap:1rem;padding:1rem;cursor:pointer;">
                      <input type="radio" name="paymentMethod" value="COD">
                      <div style="font-size:1.5rem;">💵</div>
                      <div style="flex:1;">
                        <strong style="color:var(--color-text-primary);">Cash on Delivery (COD)</strong>
                        <p style="font-size:0.75rem;color:var(--color-text-muted);">Pay cash or UPI upon package doorstep arrival</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div style="margin-top:2rem;">
                  <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">
                    Pay &amp; Place Order (₹${totals.total.toLocaleString('en-IN')})
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Order Summary Sidebar -->
          <div>
            <div class="card" style="padding:2rem;">
              <h3 style="font-size:1.25rem;margin-bottom:1.25rem;">Items in Your Order (${totals.count})</h3>
              <div style="max-height:18rem;overflow-y:auto;padding-right:0.5rem;margin-bottom:1.5rem;">
                ${cart.map((item) => `
                  <div style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem 0;border-bottom:1px solid var(--color-border);">
                    <img src="${item.img}" alt="${item.title}" style="width:3.25rem;height:3.25rem;border-radius:var(--radius-brand);object-fit:cover;" onerror="this.src='https://picsum.photos/seed/kng-fallback/100/100'">
                    <div style="flex:1;min-width:0;">
                      <p style="font-size:0.875rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.title}</p>
                      <p style="font-size:0.75rem;color:var(--color-text-muted);">Qty: ${item.orderQuantity}</p>
                    </div>
                    <div style="font-weight:600;font-size:0.875rem;">₹${(Number(item.price) * item.orderQuantity).toLocaleString('en-IN')}</div>
                  </div>
                `).join('')}
              </div>

              <!-- Coupon Code Box -->
              <div style="margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--color-border);">
                <label class="input-label">Have a Promo Coupon?</label>
                ${appliedCoupon ? `
                  <div style="display:flex;align-items:center;justify-content:space-between;padding:0.75rem;background-color:rgba(93,130,93,0.12);border-radius:var(--radius-brand);border:1px dashed var(--color-primary);">
                    <div>
                      <strong style="color:var(--color-primary);">${appliedCoupon.couponCode}</strong>
                      <span style="font-size:0.75rem;margin-left:0.5rem;">(${appliedCoupon.discountPercentage}% off applied)</span>
                    </div>
                    <button style="color:var(--color-accent);font-size:0.8125rem;cursor:pointer;" onclick="window.KNG_STORE.removeCoupon()">Remove</button>
                  </div>
                ` : `
                  <div style="display:flex;gap:0.5rem;">
                    <input type="text" id="checkout-coupon-code" class="input-control" placeholder="e.g. GLOW10, KIND20" style="text-transform:uppercase;">
                    <button class="btn btn-outline btn-sm" onclick="window.KNG_APP.applyCheckoutCoupon()">Apply</button>
                  </div>
                `}
              </div>

              <!-- Price Breakdown -->
              <div class="summary-row"><span>Items Subtotal</span><span>₹${totals.subtotal.toLocaleString('en-IN')}</span></div>
              <div class="summary-row">
                <span>Estimated Shipping</span>
                <span style="color:${totals.shipping === 0 ? 'var(--color-primary)' : 'inherit'};font-weight:600;">
                  ${totals.shipping === 0 ? 'FREE' : '₹' + totals.shipping}
                </span>
              </div>
              ${totals.discount > 0 ? `
                <div class="summary-row" style="color:var(--color-primary);">
                  <span>Coupon Discount</span>
                  <span>-₹${totals.discount.toLocaleString('en-IN')}</span>
                </div>
              ` : ''}
              <div class="summary-row total">
                <span>Grand Total</span>
                <span style="color:var(--color-primary);">₹${totals.total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function lookupPinCode(digits) {
    const feedback = document.getElementById('pin-feedback');
    const cityInput = document.getElementById('ship-city');
    const districtInput = document.getElementById('ship-district');
    const stateInput = document.getElementById('ship-state');

    if (!digits || digits.length !== 6) {
      if (feedback) feedback.textContent = 'Enter 6-digit Indian PIN';
      return;
    }

    const dict = data.pincodeLookup || {};
    const match = dict[digits];
    if (match) {
      if (cityInput) cityInput.value = match.city;
      if (districtInput) districtInput.value = match.district;
      if (stateInput) stateInput.value = match.state;
      if (feedback) feedback.innerHTML = `<span style="color:var(--color-primary);">✓ ${match.place ? match.place + ', ' : ''}${match.city}, ${match.state}</span>`;
    } else {
      // General heuristic lookup or default to AP/Telangana if 52xxxx or 50xxxx
      if (digits.startsWith('52')) {
        if (cityInput) cityInput.value = 'Vijayawada';
        if (districtInput) districtInput.value = 'Krishna';
        if (stateInput) stateInput.value = 'Andhra Pradesh';
      }
      if (feedback) feedback.textContent = 'PIN verified';
    }
  }

  function applyCheckoutCoupon() {
    const code = document.getElementById('checkout-coupon-code')?.value;
    const res = store.applyCoupon(code);
    if (res.success) {
      showToast(res.message);
    } else {
      showToast(res.message, 'error');
    }
    renderApp();
  }

  function processCheckout(event) {
    event.preventDefault();
    const fname = document.getElementById('ship-fname')?.value.trim();
    const lname = document.getElementById('ship-lname')?.value.trim();
    const email = document.getElementById('ship-email')?.value.trim();
    const phone = document.getElementById('ship-phone')?.value.trim();
    const address = document.getElementById('ship-address')?.value.trim();
    const landmark = document.getElementById('ship-landmark')?.value.trim();
    const city = document.getElementById('ship-city')?.value.trim();
    const district = document.getElementById('ship-district')?.value.trim();
    const state = document.getElementById('ship-state')?.value;
    const pin = document.getElementById('ship-pin')?.value.trim();
    const paymentMethodEl = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'Razorpay';

    if (!fname || !lname || !email || !phone || !address || !city || !state || !pin) {
      showToast('Please fill all required shipping fields', 'error');
      return;
    }

    const totals = store.getCartTotals();
    const cart = store.getCart();

    const orderData = {
      name: `${fname} ${lname}`,
      email,
      contact: phone,
      address,
      landmark,
      city,
      district,
      state,
      zipCode: pin,
      country: 'India',
      subTotal: totals.subtotal,
      shippingCost: totals.shipping,
      discount: totals.discount,
      totalAmount: totals.total,
      paymentMethod,
      cart: [...cart],
    };

    if (paymentMethod === 'Razorpay') {
      // Simulate Razorpay Gateway Modal
      openRazorpaySimulationModal(orderData);
    } else {
      // COD Order direct placement
      const order = store.createOrder(orderData);
      showToast('Order placed successfully via Cash on Delivery!');
      window.location.hash = '#order/' + order._id;
    }
  }

  function openRazorpaySimulationModal(orderData) {
    let modal = document.getElementById('razorpay-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'razorpay-modal';
      modal.className = 'modal-backdrop';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-dialog" style="max-width:28rem;padding:0;overflow:hidden;border:none;">
        <div style="background-color:#0c2340;color:#fff;padding:1.5rem;position:relative;">
          <img src="assets/logos/Razorpay/Razorpay_white.svg" alt="Razorpay" style="height:1.5rem;margin-bottom:0.75rem;" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg'">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;">
            <div>
              <p style="font-size:0.8125rem;opacity:0.8;">Kind n Glow Official Store</p>
              <h3 style="font-size:1.5rem;color:#fff;">₹${orderData.totalAmount.toLocaleString('en-IN')}</h3>
            </div>
            <span style="font-size:0.75rem;padding:0.25rem 0.6rem;background:rgba(255,255,255,0.15);border-radius:4px;">Test Mode</span>
          </div>
          <button class="modal-close-btn" style="position:absolute;top:1rem;right:1rem;background:transparent;color:#fff;" onclick="document.getElementById('razorpay-modal').classList.remove('open')">${getIcon('x', 18)}</button>
        </div>

        <div style="padding:1.5rem;background:#ffffff;color:#222;">
          <p style="font-size:0.8125rem;font-weight:600;margin-bottom:0.75rem;color:#555;">CHOOSE PAYMENT OPTION</p>
          <div style="display:flex;flex-direction:column;gap:0.75rem;">
            <button class="card" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;cursor:pointer;border-color:#e0e0e0;text-align:left;" onclick="window.KNG_APP.confirmRazorpayPayment('UPI')">
              <span style="font-size:1.5rem;">📱</span>
              <div>
                <strong>UPI - Google Pay / PhonePe / Paytm</strong>
                <p style="font-size:0.75rem;color:#666;">Instant approval via UPI app or ID</p>
              </div>
            </button>
            <button class="card" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;cursor:pointer;border-color:#e0e0e0;text-align:left;" onclick="window.KNG_APP.confirmRazorpayPayment('Cards')">
              <span style="font-size:1.5rem;">💳</span>
              <div>
                <strong>Credit / Debit Card</strong>
                <p style="font-size:0.75rem;color:#666;">Visa, MasterCard, RuPay, Amex</p>
              </div>
            </button>
            <button class="card" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;cursor:pointer;border-color:#e0e0e0;text-align:left;" onclick="window.KNG_APP.confirmRazorpayPayment('NetBanking')">
              <span style="font-size:1.5rem;">🏛️</span>
              <div>
                <strong>Net Banking</strong>
                <p style="font-size:0.75rem;color:#666;">All Indian Banks Supported</p>
              </div>
            </button>
          </div>

          <div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid #eee;display:flex;align-items:center;justify-content:center;gap:0.4rem;font-size:0.75rem;color:#777;">
            <span>${getIcon('shield', 14)}</span> 128-bit SSL Encrypted Payment by Razorpay
          </div>
        </div>
      </div>
    `;

    window._pendingOrderData = orderData;
    modal.classList.add('open');
  }

  function confirmRazorpayPayment(method) {
    const modal = document.getElementById('razorpay-modal');
    if (modal) modal.classList.remove('open');
    const orderData = window._pendingOrderData;
    if (!orderData) return;
    orderData.paymentMethod = `Razorpay (${method})`;
    orderData.paymentId = 'pay_' + Math.random().toString(36).substring(2, 12);
    const order = store.createOrder(orderData);
    showToast(`Payment successful via ${method}! Order confirmed.`);
    window.location.hash = '#order/' + order._id;
  }

  // 7. ORDER RECEIPT & INVOICE VIEW
  function renderOrderReceiptView(orderId) {
    const orders = store.getOrders();
    const order = orders.find((o) => String(o._id) === String(orderId)) || orders[0];
    if (!order) {
      return `
        <div class="container" style="padding:6rem 1rem;text-align:center;">
          <h2>No Order Found</h2>
          <a href="#shop" class="btn btn-primary" style="margin-top:1.5rem;">Shop More</a>
        </div>
      `;
    }

    const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="text-align:center;max-width:36rem;margin:0 auto 2rem;">
          <div style="width:4rem;height:4rem;border-radius:50%;background:rgba(93,130,93,0.15);color:var(--color-primary);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:1.75rem;">
            ${getIcon('check', 32)}
          </div>
          <h1 style="font-size:2.25rem;margin-bottom:0.5rem;">Order Confirmed!</h1>
          <p style="color:var(--color-text-secondary);">Thank you for choosing Kind n Glow. Your fresh small-batch order is being prepared.</p>
        </div>

        <div style="text-align:center;margin-bottom:2rem;">
          <button class="btn btn-primary btn-sm" onclick="window.print()">${getIcon('share', 16)} Print Invoice / Receipt</button>
          <a href="#shop" class="btn btn-outline btn-sm" style="margin-left:0.5rem;">Continue Shopping</a>
        </div>

        <!-- Printable Bill -->
        <div id="printable-invoice" class="invoice-sheet">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid var(--color-primary);padding-bottom:1.5rem;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
            <div>
              <img src="assets/logos/kng.svg" alt="Kind n Glow" style="height:2.5rem;width:auto;margin-bottom:0.5rem;" onerror="this.src='https://picsum.photos/seed/kng-logo/200/60'">
              <p style="font-size:0.8125rem;color:var(--color-text-secondary);">Poranki, Vijayawada, Andhra Pradesh - 521137</p>
              <p style="font-size:0.8125rem;color:var(--color-text-secondary);">kindnglow9@gmail.com · +91 83329 48310</p>
            </div>
            <div style="text-align:right;">
              <h2 style="font-family:var(--font-sans);font-size:1.35rem;font-weight:700;color:var(--color-primary);">TAX INVOICE</h2>
              <p style="font-size:0.875rem;"><strong>Order ID:</strong> ${order._id}</p>
              <p style="font-size:0.875rem;"><strong>Invoice #:</strong> ${order.invoice || 'INV-1001'}</p>
              <p style="font-size:0.875rem;"><strong>Date:</strong> ${orderDate}</p>
              <p style="font-size:0.875rem;"><strong>Status:</strong> <span class="badge badge-primary">${order.status}</span></p>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:2rem;font-size:0.875rem;">
            <div>
              <strong style="display:block;margin-bottom:0.35rem;color:var(--color-text-primary);">BILLED &amp; SHIPPED TO:</strong>
              <p>${order.name}</p>
              <p>${order.address}</p>
              ${order.landmark ? `<p>Landmark: ${order.landmark}</p>` : ''}
              <p>${order.city}, ${order.district || ''} - ${order.zipCode}</p>
              <p>${order.state}, ${order.country || 'India'}</p>
              <p>Phone: ${order.contact}</p>
            </div>
            <div style="text-align:right;">
              <strong style="display:block;margin-bottom:0.35rem;color:var(--color-text-primary);">PAYMENT DETAILS:</strong>
              <p>Payment Method: <strong>${order.paymentMethod || 'Razorpay'}</strong></p>
              ${order.paymentId ? `<p>Transaction ID: ${order.paymentId}</p>` : ''}
              <p>Payment Status: <strong style="color:var(--color-primary);">Completed</strong></p>
            </div>
          </div>

          <!-- Items Table -->
          <table style="width:100%;border-collapse:collapse;margin-bottom:1.5rem;font-size:0.875rem;">
            <thead>
              <tr style="background:rgba(93,130,93,0.1);border-top:1px solid var(--color-border);border-bottom:1px solid var(--color-border);">
                <th style="padding:0.75rem;text-align:left;">Item Description</th>
                <th style="padding:0.75rem;text-align:center;">Unit Price</th>
                <th style="padding:0.75rem;text-align:center;">Qty</th>
                <th style="padding:0.75rem;text-align:right;">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${(order.cart || []).map((item) => `
                <tr style="border-bottom:1px solid var(--color-border);">
                  <td style="padding:0.75rem;">
                    <strong>${item.title}</strong>
                    <div style="font-size:0.75rem;color:var(--color-text-muted);">${item.category || item.children || ''}</div>
                  </td>
                  <td style="padding:0.75rem;text-align:center;">₹${Number(item.price).toLocaleString('en-IN')}</td>
                  <td style="padding:0.75rem;text-align:center;">${item.orderQuantity || 1}</td>
                  <td style="padding:0.75rem;text-align:right;font-weight:600;">₹${(Number(item.price) * (item.orderQuantity || 1)).toLocaleString('en-IN')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div style="margin-left:auto;max-width:18rem;font-size:0.9rem;">
            <div class="summary-row"><span>Items Subtotal:</span><span>₹${Number(order.subTotal).toLocaleString('en-IN')}</span></div>
            <div class="summary-row"><span>Delivery:</span><span>${order.shippingCost === 0 ? 'FREE' : '₹' + order.shippingCost}</span></div>
            ${order.discount > 0 ? `<div class="summary-row" style="color:var(--color-primary);"><span>Discount:</span><span>-₹${Number(order.discount).toLocaleString('en-IN')}</span></div>` : ''}
            <div class="summary-row total"><span>Total Amount Paid:</span><span>₹${Number(order.totalAmount).toLocaleString('en-IN')}</span></div>
          </div>

          <div style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--color-border);text-align:center;font-size:0.8125rem;color:var(--color-text-muted);">
            <p>Thank you for supporting handcrafted small-batch skincare.</p>
            <p>For any questions regarding this order, WhatsApp or call us at <strong>+91 83329 48310</strong> or email <strong>kindnglow9@gmail.com</strong>.</p>
          </div>
        </div>
      </div>
    `;
  }

  // 8. WISHLIST VIEW
  function renderWishlistView() {
    const list = store.getWishlist();
    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="text-align:center;max-width:36rem;margin:0 auto 3rem;">
          <h1 style="font-size:2.5rem;margin-bottom:0.5rem;">Your Wishlist</h1>
          <p style="color:var(--color-text-secondary);">Your saved essentials, ready for your next gentle routine.</p>
        </div>

        ${list.length === 0 ? `
          <div class="card" style="text-align:center;padding:4rem 2rem;max-width:36rem;margin:0 auto;">
            <div style="font-size:3rem;color:var(--kind-taupe-300);margin-bottom:1rem;">${getIcon('heart', 54)}</div>
            <h3 style="font-size:1.35rem;margin-bottom:0.5rem;">No saved items</h3>
            <p style="color:var(--color-text-secondary);margin-bottom:1.5rem;">Tap the heart on any product to save it to your wishlist.</p>
            <a href="#shop" class="btn btn-primary">Browse All Products</a>
          </div>
        ` : `
          <div style="display:grid;grid-template-columns:1fr;gap:1.25rem;max-width:54rem;margin:0 auto;">
            ${list.map((item) => `
              <div class="card" style="display:flex;align-items:center;gap:1.25rem;padding:1.25rem;flex-wrap:wrap;">
                <img src="${item.img}" alt="${item.title}" style="width:5rem;height:5rem;border-radius:var(--radius-brand);object-fit:cover;" onerror="this.src='https://picsum.photos/seed/kng-fallback/150/150'">
                <div style="flex:1;min-width:14rem;">
                  <span style="font-size:0.75rem;color:var(--color-primary);font-weight:600;">${item.category || 'Skincare'}</span>
                  <a href="#product/${item._id}" style="display:block;font-weight:600;font-size:1.05rem;color:var(--color-text-primary);margin:0.25rem 0;">${item.title}</a>
                  <div style="font-weight:700;font-size:1.1rem;color:var(--color-text-primary);">₹${Number(item.price).toLocaleString('en-IN')}</div>
                </div>
                <div style="display:flex;gap:0.75rem;align-items:center;">
                  <button class="btn btn-primary btn-sm" onclick="window.KNG_APP.quickAddToCart('${item._id}', event)">
                    ${getIcon('shoppingBag', 16)} Add to Bag
                  </button>
                  <button class="action-btn" onclick="window.KNG_APP.removeFromWishlist('${item._id}')" aria-label="Remove item">
                    ${getIcon('trash', 18)}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }

  function removeFromWishlist(id) {
    store.removeFromWishlist(id);
    showToast('Removed from wishlist');
    renderApp();
  }

  // 9. COMPARE PRODUCTS VIEW (Samsung-style)
  function renderCompareView() {
    const items = store.getCompare();
    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2.5rem;flex-wrap:wrap;gap:1rem;">
          <div>
            <h1 style="font-size:2.25rem;margin-bottom:0.25rem;">Compare Products</h1>
            <p style="color:var(--color-text-secondary);">Side-by-side comparison matrix (up to 4 items).</p>
          </div>
          ${items.length > 0 ? `
            <div style="display:flex;gap:0.75rem;">
              <a href="#shop" class="btn btn-outline btn-sm">+ Add More Products</a>
              <button class="btn btn-ghost btn-sm" onclick="window.KNG_STORE.clearCompare()">Clear All</button>
            </div>
          ` : ''}
        </div>

        ${items.length === 0 ? `
          <div class="card" style="text-align:center;padding:4rem 2rem;max-width:36rem;margin:0 auto;">
            <div style="font-size:3rem;color:var(--kind-taupe-300);margin-bottom:1rem;">${getIcon('scale', 54)}</div>
            <h3 style="font-size:1.35rem;margin-bottom:0.5rem;">No products to compare</h3>
            <p style="color:var(--color-text-secondary);margin-bottom:1.5rem;">Select 2 to 4 products in the shop to compare their ingredients, price, and specs.</p>
            <a href="#shop" class="btn btn-primary">Browse Shop</a>
          </div>
        ` : `
          <div class="card" style="overflow-x:auto;">
            <table class="compare-table">
              <tbody>
                <tr>
                  <th>Product</th>
                  ${items.map((i) => `
                    <td style="text-align:center;min-width:14rem;max-width:18rem;">
                      <button style="float:right;color:var(--color-accent);font-size:0.75rem;cursor:pointer;" onclick="window.KNG_STORE.removeFromCompare('${i._id}')">Remove</button>
                      <img src="${i.img}" alt="${i.title}" style="width:7rem;height:7rem;border-radius:var(--radius-brand);margin:0 auto 0.75rem;object-fit:cover;" onerror="this.src='https://picsum.photos/seed/kng-fallback/200/200'">
                      <a href="#product/${i._id}" style="display:block;font-weight:600;font-size:0.9375rem;color:var(--color-text-primary);margin-bottom:0.25rem;">${i.title}</a>
                      <span style="font-size:0.75rem;color:var(--color-primary);font-weight:600;">${i.category?.name || i.children || ''}</span>
                    </td>
                  `).join('')}
                </tr>
                <tr>
                  <th>Price</th>
                  ${items.map((i) => `<td style="text-align:center;font-weight:700;font-size:1.15rem;color:var(--color-text-primary);">₹${Number(i.price).toLocaleString('en-IN')}</td>`).join('')}
                </tr>
                <tr>
                  <th>Rating</th>
                  ${items.map((i) => `<td style="text-align:center;">${(i.rating || 4.8).toFixed(1)} ★ (${i.reviews?.length || 1})</td>`).join('')}
                </tr>
                <tr>
                  <th>Status</th>
                  ${items.map((i) => `<td style="text-align:center;"><span class="badge ${i.status === 'out-of-stock' ? 'badge-accent' : 'badge-primary'}">${i.status === 'out-of-stock' ? 'Out of stock' : 'In stock'}</span></td>`).join('')}
                </tr>
                <tr>
                  <th>Ingredients</th>
                  ${items.map((i) => `
                    <td>
                      <div style="display:flex;flex-wrap:wrap;gap:0.35rem;justify-content:center;">
                        ${(i.tags || ['Botanical Extract']).map((t) => `<span class="badge badge-primary" style="font-size:0.7rem;">${t}</span>`).join('')}
                      </div>
                    </td>
                  `).join('')}
                </tr>
                <tr>
                  <th>Description</th>
                  ${items.map((i) => `<td style="font-size:0.8125rem;color:var(--color-text-secondary);line-height:1.5;">${i.description || 'Gentle botanical formulation.'}</td>`).join('')}
                </tr>
                <tr>
                  <th>Action</th>
                  ${items.map((i) => `
                    <td style="text-align:center;">
                      <button class="btn btn-primary btn-sm" style="width:100%;margin-bottom:0.4rem;" onclick="window.KNG_APP.quickAddToCart('${i._id}', event)">Add to Bag</button>
                      <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="window.KNG_APP.addPdpToCart('${i._id}', true)">Buy Now</button>
                    </td>
                  `).join('')}
                </tr>
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;
  }

  // 10. COUPONS VIEW
  function renderCouponsView() {
    const coupons = store.getCoupons();
    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="text-align:center;max-width:38rem;margin:0 auto 3rem;">
          <p class="section-eyebrow">Exclusive Savings</p>
          <h1 style="font-size:2.5rem;margin-bottom:0.5rem;">Active Coupons &amp; Offers</h1>
          <p style="color:var(--color-text-secondary);">Apply these vouchers at checkout for instant order discounts.</p>
        </div>

        <div style="display:grid;grid-template-columns:1fr;gap:1.5rem;max-width:54rem;margin:0 auto;">
          ${coupons.map((c) => `
            <div class="card" style="padding:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;border-left:4px solid var(--color-primary);">
              <div>
                <span class="badge badge-secondary" style="margin-bottom:0.4rem;">${c.discountPercentage}% Instant Discount</span>
                <h3 style="font-size:1.25rem;margin-bottom:0.25rem;">${c.title}</h3>
                <p style="font-size:0.875rem;color:var(--color-text-secondary);">
                  Min spend: ₹${c.minimumAmount || 199} · Valid for ${c.productType || 'all products'}
                </p>
              </div>
              <div style="display:flex;align-items:center;gap:0.75rem;">
                <div style="font-family:monospace;font-size:1.15rem;font-weight:700;background:var(--kind-sage-100);padding:0.4rem 0.85rem;border-radius:var(--radius-sm);letter-spacing:0.05em;color:var(--color-primary);">
                  ${c.couponCode}
                </div>
                <button class="btn btn-outline btn-sm" onclick="window.KNG_APP.copyCoupon('${c.couponCode}')">
                  ${getIcon('copy', 16)} Copy
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function copyCoupon(code) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Copied coupon code ${code}! Apply at checkout.`);
    });
  }

  // 11. OUR STORY VIEW (Timeline 2019-2026)
  function renderStoryView() {
    const timeline = data.timeline || [];
    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="text-align:center;max-width:42rem;margin:0 auto 3.5rem;">
          <div style="width:4rem;height:4rem;border-radius:50%;background:rgba(93,130,93,0.12);color:var(--color-primary);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
            ${getIcon('heart', 28)}
          </div>
          <p class="section-eyebrow">Our Story</p>
          <h1 style="font-size:3rem;margin-bottom:0.75rem;">Kind n Glow</h1>
          <p style="font-size:1.25rem;color:var(--color-text-secondary);font-style:italic;">Care that feels good. Glow that feels natural.</p>
        </div>

        <div style="display:grid;grid-template-columns:1fr;gap:4rem;max-width:56rem;margin:0 auto;">
          <div>
            <h2 style="font-size:2rem;margin-bottom:2rem;">Our Journey</h2>
            <div class="timeline">
              ${timeline.map((item) => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <span style="font-weight:700;color:var(--color-primary);font-size:0.9375rem;">${item.year}</span>
                  <h3 style="font-size:1.25rem;margin:0.25rem 0 0.5rem;">${item.title}</h3>
                  <p style="color:var(--color-text-secondary);line-height:1.7;">${item.text}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h2 style="font-size:2rem;margin-bottom:1.5rem;">Our Philosophy</h2>
            <div class="card" style="padding:2rem;margin-bottom:2rem;">
              <div style="width:3rem;height:3rem;border-radius:var(--radius-brand);background:var(--kind-sage-100);color:var(--color-primary);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
                ${getIcon('sparkles', 24)}
              </div>
              <p style="font-size:1.0625rem;color:var(--color-text-secondary);line-height:1.8;margin-bottom:1.25rem;">
                At Kind n Glow, we believe beauty care should be simple, thoughtful, and accessible. Every product is formulated with carefully selected ingredients, practical packaging, and the experience gained through years of small-batch passion and refinement.
              </p>
              <div style="display:flex;align-items:center;gap:0.5rem;color:var(--color-primary);font-weight:600;">
                ${getIcon('leaf', 18)} Our journey is still growing — one product, one customer, and one honest ritual at a time.
              </div>
            </div>

            <!-- Reels & DMs Community Card -->
            <div class="card" style="padding:2rem;">
              <span class="badge badge-primary" style="margin-bottom:0.75rem;">${getIcon('sparkles', 14)} Reels &amp; DMs Welcome</span>
              <h3 style="font-size:1.35rem;margin-bottom:0.75rem;">See Exactly How It Works</h3>
              <p style="color:var(--color-text-secondary);line-height:1.7;margin-bottom:1.5rem;">
                We don’t do staged studio illusions — we post real reels showing texture, absorbency, and results so you know what you are buying. Have a question about your skin type? Message us on Instagram!
              </p>
              <a href="https://instagram.com/kind_n_glow" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;">
                Watch Reels — @kind_n_glow
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 12. CONTACT VIEW
  function renderContactView() {
    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="text-align:center;max-width:38rem;margin:0 auto 3.5rem;">
          <div style="width:4rem;height:4rem;border-radius:50%;background:rgba(93,130,93,0.12);color:var(--color-primary);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
            ${getIcon('mail', 28)}
          </div>
          <p class="section-eyebrow">Say Hello</p>
          <h1 style="font-size:3rem;margin-bottom:0.75rem;">Get in Touch</h1>
          <p style="color:var(--color-text-secondary);">Whether you have product questions, bulk gifting requests, or feedback, we are here for you.</p>
        </div>

        <div style="display:grid;grid-template-columns:1fr;gap:3rem;max-width:56rem;margin:0 auto;" class="checkout-grid">
          <div>
            <h2 style="font-size:1.75rem;margin-bottom:1.5rem;">Contact Information</h2>
            <div style="display:flex;flex-direction:column;gap:1.5rem;">
              <div style="display:flex;align-items:flex-start;gap:1rem;">
                <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(93,130,93,0.12);color:var(--color-primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  ${getIcon('mail', 18)}
                </div>
                <div>
                  <strong>Email Us</strong>
                  <p><a href="mailto:kindnglow9@gmail.com" style="color:var(--color-primary);">kindnglow9@gmail.com</a></p>
                </div>
              </div>

              <div style="display:flex;align-items:flex-start;gap:1rem;">
                <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(93,130,93,0.12);color:var(--color-primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  ${getIcon('phone', 18)}
                </div>
                <div>
                  <strong>Call / WhatsApp</strong>
                  <p><a href="tel:+918332948310" style="color:var(--color-primary);">+91 83329 48310</a></p>
                </div>
              </div>

              <div style="display:flex;align-items:flex-start;gap:1rem;">
                <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(93,130,93,0.12);color:var(--color-primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  ${getIcon('mapPin', 18)}
                </div>
                <div>
                  <strong>Studio Location</strong>
                  <p style="color:var(--color-text-secondary);">Poranki, Vijayawada, Andhra Pradesh - 521137, India.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card" style="padding:2rem;">
            <h2 style="font-size:1.5rem;margin-bottom:1.25rem;">Send Us a Message</h2>
            <form onsubmit="window.KNG_APP.submitContactForm(event)">
              <div class="input-group">
                <label class="input-label">Your Name *</label>
                <input type="text" id="contact-name" class="input-control" placeholder="Priya Sharma" required>
              </div>
              <div class="input-group">
                <label class="input-label">Email Address *</label>
                <input type="email" id="contact-email" class="input-control" placeholder="priya@example.com" required>
              </div>
              <div class="input-group">
                <label class="input-label">Subject *</label>
                <input type="text" id="contact-subject" class="input-control" placeholder="Question regarding skincare routine" required>
              </div>
              <div class="input-group">
                <label class="input-label">Message *</label>
                <textarea id="contact-msg" class="input-control" rows="4" placeholder="How can we help your skin glow gently?" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim();
    const message = document.getElementById('contact-msg')?.value.trim();
    if (!name || !email || !message) return;
    store.addMessage({ name, email, subject, message });
    showToast('Thank you! Message received. We will respond within 24 hours.');
    event.target.reset();
  }

  // 13. USER PROFILE / MY ACCOUNT
  function renderProfileView() {
    const user = store.getUser() || {};
    const orders = store.getOrders() || [];
    const addresses = user.addresses || [];

    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2.5rem;flex-wrap:wrap;gap:1rem;">
          <div>
            <h1 style="font-size:2.25rem;">My Account</h1>
            <p style="color:var(--color-text-secondary);">Manage your profile, saved addresses, and order history.</p>
          </div>
          <button class="btn btn-outline btn-sm" onclick="window.KNG_APP.logoutUser()">Sign Out</button>
        </div>

        <div style="display:grid;grid-template-columns:1fr;gap:2rem;" class="checkout-grid">
          <!-- Profile Info Card -->
          <div class="card" style="padding:1.5rem;">
            <h3 style="font-size:1.25rem;margin-bottom:1rem;">Personal Details</h3>
            <form onsubmit="window.KNG_APP.updateProfile(event)">
              <div class="input-group">
                <label class="input-label">Full Name</label>
                <input type="text" id="prof-name" class="input-control" value="${user.name || ''}" required>
              </div>
              <div class="input-group">
                <label class="input-label">Email</label>
                <input type="email" id="prof-email" class="input-control" value="${user.email || ''}" required>
              </div>
              <div class="input-group">
                <label class="input-label">Phone Number</label>
                <input type="tel" id="prof-phone" class="input-control" value="${user.phone || ''}">
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Save Changes</button>
            </form>
          </div>

          <!-- Saved Addresses -->
          <div class="card" style="padding:1.5rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
              <h3 style="font-size:1.25rem;">Address Book</h3>
              <button class="btn btn-outline btn-sm" onclick="window.KNG_APP.openAddAddressModal()">+ Add Address</button>
            </div>
            ${addresses.length === 0 ? '<p style="color:var(--color-text-muted);">No addresses saved yet.</p>' : addresses.map((a) => `
              <div style="padding:1rem;border:1px solid var(--color-border);border-radius:var(--radius-brand);margin-bottom:0.75rem;">
                <div style="display:flex;justify-content:space-between;">
                  <strong>${a.label || 'Address'} ${a.isDefault ? '<span class="badge badge-primary">Default</span>' : ''}</strong>
                  <button style="color:var(--color-accent);font-size:0.75rem;cursor:pointer;" onclick="window.KNG_STORE.deleteAddress('${a._id}');window.KNG_APP.renderApp();">Delete</button>
                </div>
                <p style="font-size:0.875rem;margin-top:0.25rem;">${a.line1}, ${a.line2 ? a.line2 + ', ' : ''}${a.city}, ${a.state} - ${a.zipCode}</p>
                <p style="font-size:0.75rem;color:var(--color-text-muted);">Phone: ${a.phone}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Orders Table -->
        <div class="card" style="padding:2rem;margin-top:2.5rem;overflow-x:auto;">
          <h3 style="font-size:1.35rem;margin-bottom:1.25rem;">My Orders (${orders.length})</h3>
          ${orders.length === 0 ? '<p style="color:var(--color-text-muted);">You have not placed any orders yet.</p>' : `
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${orders.map((o) => `
                  <tr>
                    <td><strong>${o._id}</strong></td>
                    <td>${new Date(o.createdAt).toLocaleDateString('en-IN')}</td>
                    <td>${o.cart?.length || 1} item(s)</td>
                    <td><strong>₹${Number(o.totalAmount).toLocaleString('en-IN')}</strong></td>
                    <td><span class="badge badge-primary">${o.status}</span></td>
                    <td><a href="#order/${o._id}" class="btn btn-outline btn-sm">View Bill</a></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `}
        </div>
      </div>
    `;
  }

  function updateProfile(e) {
    e.preventDefault();
    const name = document.getElementById('prof-name')?.value;
    const email = document.getElementById('prof-email')?.value;
    const phone = document.getElementById('prof-phone')?.value;
    store.updateUserProfile({ name, email, phone });
    showToast('Profile updated successfully!');
  }

  function logoutUser() {
    showToast('Signed out successfully.');
    window.location.hash = '#home';
  }

  function openAddAddressModal() {
    const label = prompt('Address Label (e.g. Home, Office):', 'Home');
    if (!label) return;
    const line1 = prompt('Street Address:', 'Main Road, Poranki');
    const city = prompt('City:', 'Vijayawada');
    const state = prompt('State:', 'Andhra Pradesh');
    const zipCode = prompt('PIN Code:', '521137');
    const phone = prompt('Phone:', '9876543210');
    store.saveAddress({ label, line1, city, state, zipCode, phone });
    showToast('New address saved!');
    renderApp();
  }

  // 14. ADMIN DASHBOARD VIEW (896admin896 feature parity)
  function renderAdminView() {
    const products = store.getProducts();
    const orders = store.getOrders();
    const messages = store.getMessages();
    const coupons = store.getCoupons();

    const totalSales = orders.reduce((sum, o) => sum + (Number(o.totalAmount) || 0), 0);

    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2.5rem;flex-wrap:wrap;gap:1rem;">
          <div>
            <span class="badge badge-primary">Administrator Control</span>
            <h1 style="font-size:2.25rem;margin-top:0.25rem;">Kind n Glow Store Manager</h1>
          </div>
          <button class="btn btn-primary btn-sm" onclick="window.KNG_APP.openAddProductModal()">+ Add New Product</button>
        </div>

        <!-- KPI Metrics -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1.25rem;margin-bottom:2.5rem;">
          <div class="card" style="padding:1.5rem;">
            <p style="font-size:0.8125rem;color:var(--color-text-muted);">Total Revenue</p>
            <h3 style="font-size:1.75rem;color:var(--color-primary);margin-top:0.25rem;">₹${totalSales.toLocaleString('en-IN')}</h3>
          </div>
          <div class="card" style="padding:1.5rem;">
            <p style="font-size:0.8125rem;color:var(--color-text-muted);">Total Orders</p>
            <h3 style="font-size:1.75rem;margin-top:0.25rem;">${orders.length}</h3>
          </div>
          <div class="card" style="padding:1.5rem;">
            <p style="font-size:0.8125rem;color:var(--color-text-muted);">Live Products</p>
            <h3 style="font-size:1.75rem;margin-top:0.25rem;">${products.length}</h3>
          </div>
          <div class="card" style="padding:1.5rem;">
            <p style="font-size:0.8125rem;color:var(--color-text-muted);">Inquiries Received</p>
            <h3 style="font-size:1.75rem;margin-top:0.25rem;">${messages.length}</h3>
          </div>
        </div>

        <!-- Products Management -->
        <div class="card" style="padding:2rem;margin-bottom:2.5rem;overflow-x:auto;">
          <h3 style="font-size:1.35rem;margin-bottom:1rem;">Catalog Products (${products.length})</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${products.slice(0, 15).map((p) => `
                <tr>
                  <td><img src="${p.img}" alt="${p.title}" style="width:2.5rem;height:2.5rem;border-radius:4px;object-fit:cover;" onerror="this.src='https://picsum.photos/seed/kng-fallback/60/60'"></td>
                  <td><strong>${p.title}</strong></td>
                  <td>${p.sku || 'N/A'}</td>
                  <td>₹${Number(p.price).toLocaleString('en-IN')}</td>
                  <td><span class="badge ${p.status === 'out-of-stock' ? 'badge-accent' : 'badge-primary'}">${p.quantity || 50} in stock</span></td>
                  <td>${p.category?.name || p.children || 'Skincare'}</td>
                  <td>
                    <button class="btn btn-outline btn-sm" onclick="window.KNG_APP.editProductModal('${p._id}')">Edit</button>
                    <button class="btn btn-ghost btn-sm" style="color:var(--color-accent);" onclick="window.KNG_STORE.deleteProduct('${p._id}');window.KNG_APP.renderApp();">Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          ${products.length > 15 ? `<p style="font-size:0.8125rem;color:var(--color-text-muted);margin-top:0.75rem;">Showing first 15 of ${products.length} products.</p>` : ''}
        </div>

        <!-- Orders Management -->
        <div class="card" style="padding:2rem;margin-bottom:2.5rem;overflow-x:auto;">
          <h3 style="font-size:1.35rem;margin-bottom:1rem;">Recent Orders (${orders.length})</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              ${orders.map((o) => `
                <tr>
                  <td><strong>${o._id}</strong></td>
                  <td>${o.name} <br><span style="font-size:0.75rem;color:var(--color-text-muted);">${o.contact}</span></td>
                  <td>₹${Number(o.totalAmount).toLocaleString('en-IN')}</td>
                  <td>${o.paymentMethod || 'Razorpay'}</td>
                  <td><span class="badge badge-primary">${o.status}</span></td>
                  <td>
                    <select onchange="window.KNG_STORE.updateOrderStatus('${o._id}', this.value);window.KNG_APP.renderApp();" style="padding:0.25rem;border-radius:4px;">
                      <option value="Confirmed" ${o.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                      <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
                      <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                      <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Customer Messages -->
        <div class="card" style="padding:2rem;overflow-x:auto;">
          <h3 style="font-size:1.35rem;margin-bottom:1rem;">Customer Inquiries (${messages.length})</h3>
          ${messages.map((m) => `
            <div style="padding:1rem;border-bottom:1px solid var(--color-border);">
              <div style="display:flex;justify-content:space-between;margin-bottom:0.25rem;">
                <strong>${m.name} (${m.email})</strong>
                <span style="font-size:0.75rem;color:var(--color-text-muted);">${new Date(m.createdAt).toLocaleDateString('en-IN')}</span>
              </div>
              <p style="font-weight:600;font-size:0.875rem;color:var(--color-primary);">${m.subject}</p>
              <p style="font-size:0.875rem;color:var(--color-text-secondary);margin-top:0.25rem;">${m.message}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function openAddProductModal() {
    const title = prompt('Product Title:', 'Natural Glow Hydration Serum');
    if (!title) return;
    const price = Number(prompt('Price in ₹:', '199')) || 199;
    const discount = Number(prompt('Discount % (0 for none):', '10')) || 0;
    const catName = prompt('Category (e.g. Facial Care, Discover Skincare):', 'Facial Care');
    const desc = prompt('Description:', 'Handmade pure botanical serum.');
    const newProd = {
      title,
      price,
      discount,
      quantity: 50,
      parent: catName,
      children: 'Powder',
      category: { name: catName, id: 'cat-custom' },
      status: 'in-stock',
      img: 'https://picsum.photos/seed/kng-' + Date.now() + '/600/600',
      description: desc,
      tags: ['Skincare', 'Serum', 'Botanical'],
      featured: true,
    };
    store.saveProduct(newProd);
    showToast('New product added to catalog!');
    renderApp();
  }

  function editProductModal(id) {
    const p = store.getProductById(id);
    if (!p) return;
    const newTitle = prompt('Edit Title:', p.title) || p.title;
    const newPrice = Number(prompt('Edit Price in ₹:', p.price)) || p.price;
    const newQty = Number(prompt('Edit Quantity in Stock:', p.quantity || 50)) || 50;
    store.saveProduct({ ...p, title: newTitle, price: newPrice, quantity: newQty });
    showToast('Product updated!');
    renderApp();
  }

  // 15. POLICIES (Privacy, Terms, Cookies)
  function renderPolicyView(type) {
    const titles = {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
    };
    return `
      <div class="container" style="padding-top:3rem;padding-bottom:5rem;max-width:48rem;">
        <h1 style="font-size:2.5rem;margin-bottom:1.5rem;">${titles[type] || 'Policy'}</h1>
        <div class="card" style="padding:2.5rem;line-height:1.8;color:var(--color-text-secondary);font-size:0.9375rem;">
          <p style="margin-bottom:1rem;"><strong>Effective Date:</strong> January 1, 2026 · Kind n Glow (Poranki, Vijayawada, India).</p>
          <h3 style="margin:1.5rem 0 0.5rem;color:var(--color-text-primary);">1. Our Commitment</h3>
          <p style="margin-bottom:1rem;">Kind n Glow is committed to maintaining the confidentiality, integrity, and security of any personal information of our users. We do not sell or rent your personal data to third parties.</p>
          <h3 style="margin:1.5rem 0 0.5rem;color:var(--color-text-primary);">2. Information Collection</h3>
          <p style="margin-bottom:1rem;">We collect details strictly necessary to process and ship your orders, including your name, delivery address, phone number, and email. Payment details are processed securely via Razorpay and never stored on our local servers.</p>
          <h3 style="margin:1.5rem 0 0.5rem;color:var(--color-text-primary);">3. Returns &amp; Exchange</h3>
          <p style="margin-bottom:1rem;">Due to the personal nature of skincare and small-batch craftsmanship, we maintain a 7-day easy returns policy for damaged or defective items during transit. Please contact <strong>kindnglow9@gmail.com</strong> with your order receipt.</p>
        </div>
      </div>
    `;
  }

  // --- SEARCH MODAL ---
  function openSearchModal() {
    let modal = document.getElementById('search-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'search-modal';
      modal.className = 'modal-backdrop';
      modal.innerHTML = `
        <div class="modal-dialog" style="max-width:38rem;padding:2rem;">
          <button class="modal-close-btn" onclick="document.getElementById('search-modal').classList.remove('open')">${getIcon('x', 20)}</button>
          <h3 style="font-size:1.25rem;margin-bottom:1rem;">Search Kind n Glow</h3>
          <div style="position:relative;">
            <input type="text" id="global-search-input" class="input-control" placeholder="Search products, serums, toners, ingredients..." style="padding-left:2.5rem;" oninput="window.KNG_APP.onGlobalSearch(this.value)">
            <span style="position:absolute;left:0.85rem;top:50%;transform:translateY(-50%);color:var(--color-text-muted);">${getIcon('search', 18)}</span>
          </div>
          <div id="search-results-box" style="margin-top:1.25rem;max-height:20rem;overflow-y:auto;"></div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('open'); };
    }
    const input = document.getElementById('global-search-input');
    if (input) { input.value = ''; setTimeout(() => input.focus(), 100); }
    const box = document.getElementById('search-results-box');
    if (box) box.innerHTML = '<p style="color:var(--color-text-muted);font-size:0.875rem;">Type 2 or more characters to see live suggestions...</p>';
    modal.classList.add('open');
  }

  function onGlobalSearch(query) {
    const box = document.getElementById('search-results-box');
    if (!box) return;
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      box.innerHTML = '<p style="color:var(--color-text-muted);font-size:0.875rem;">Type 2 or more characters to see live suggestions...</p>';
      return;
    }
    const products = store.getProducts();
    const matches = products.filter((p) => p.title.toLowerCase().includes(q) || p.tags?.some((t) => String(t).toLowerCase().includes(q)) || p.category?.name?.toLowerCase().includes(q)).slice(0, 6);

    if (matches.length === 0) {
      box.innerHTML = `<p style="color:var(--color-text-muted);font-size:0.875rem;">No results found for "<em>${query}</em>". Try searching for "Serum", "Rose", or "Oil".</p>`;
      return;
    }

    box.innerHTML = matches.map((m) => `
      <a href="#product/${m._id}" style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem;border-radius:var(--radius-brand);margin-bottom:0.4rem;transition:background 150ms;" onmouseover="this.style.background='var(--kind-sage-50)'" onmouseout="this.style.background='transparent'" onclick="document.getElementById('search-modal').classList.remove('open')">
        <img src="${m.img}" alt="${m.title}" style="width:3rem;height:3rem;border-radius:var(--radius-sm);object-fit:cover;" onerror="this.src='https://picsum.photos/seed/kng-fallback/80/80'">
        <div style="flex:1;">
          <div style="font-weight:600;font-size:0.9rem;color:var(--color-text-primary);">${m.title}</div>
          <div style="font-size:0.75rem;color:var(--color-primary);">₹${Number(m.price).toLocaleString('en-IN')} · ${m.category?.name || 'Skincare'}</div>
        </div>
        <span>${getIcon('arrowRight', 14)}</span>
      </a>
    `).join('');
  }

  // --- MAIN ROUTER ---
  function renderApp() {
    const main = document.getElementById('main-content');
    if (!main) return;

    const hash = window.location.hash || '#home';
    const [route, queryStr] = hash.split('?');
    const params = {};
    if (queryStr) {
      const sp = new URLSearchParams(queryStr);
      for (const [k, v] of sp.entries()) params[k] = v;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (route === '' || route === '#' || route === '#home') {
      main.innerHTML = renderHomeView();
    } else if (route === '#shop') {
      main.innerHTML = renderShopView(params);
    } else if (route.startsWith('#product/')) {
      const id = route.replace('#product/', '');
      main.innerHTML = renderProductDetailView(id);
    } else if (route === '#cart') {
      main.innerHTML = renderCartView();
    } else if (route === '#checkout') {
      main.innerHTML = renderCheckoutView();
    } else if (route.startsWith('#order/')) {
      const id = route.replace('#order/', '');
      main.innerHTML = renderOrderReceiptView(id);
    } else if (route === '#wishlist') {
      main.innerHTML = renderWishlistView();
    } else if (route === '#compare') {
      main.innerHTML = renderCompareView();
    } else if (route === '#coupons') {
      main.innerHTML = renderCouponsView();
    } else if (route === '#story') {
      main.innerHTML = renderStoryView();
    } else if (route === '#contact') {
      main.innerHTML = renderContactView();
    } else if (route === '#profile') {
      main.innerHTML = renderProfileView();
    } else if (route === '#admin') {
      main.innerHTML = renderAdminView();
    } else if (route === '#privacy') {
      main.innerHTML = renderPolicyView('privacy');
    } else if (route === '#terms') {
      main.innerHTML = renderPolicyView('terms');
    } else if (route === '#cookies') {
      main.innerHTML = renderPolicyView('cookies');
    } else {
      main.innerHTML = renderHomeView();
    }

    // Active nav indicator
    document.querySelectorAll('.nav-link, .mobile-nav-links a').forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === route);
    });

    updateHeaderState();
  }

  // --- INITIALIZATION ---
  function init() {
    // Announcements ticker
    const announcements = [
      '🚚 Free shipping on all orders over ₹999 — Glow Gently. Care Kindly.',
      '🌿 The Kind n Glow collection is handcrafted by us, in small batches.',
      '💚 Every order ships with love — skincare made gentle, effective, honest.',
    ];
    let announceIdx = 0;
    const announceEl = document.getElementById('announcement-text');
    if (announceEl) {
      setInterval(() => {
        announceIdx = (announceIdx + 1) % announcements.length;
        announceEl.style.opacity = '0';
        setTimeout(() => {
          announceEl.textContent = announcements[announceIdx];
          announceEl.style.opacity = '1';
        }, 200);
      }, 4000);
    }

    const announceClose = document.getElementById('announcement-close');
    if (announceClose) {
      announceClose.onclick = () => {
        const bar = document.getElementById('announcement-bar');
        if (bar) bar.style.display = 'none';
      };
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('site-header');
      if (header) header.classList.toggle('scrolled', window.scrollY > 20);
      const btt = document.getElementById('back-to-top');
      if (btt) btt.classList.toggle('show', window.scrollY > 300);
    });

    // Back to top button
    const btt = document.getElementById('back-to-top');
    if (btt) btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Mobile nav toggle
    const mobileToggle = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileToggle && mobileNav) {
      mobileToggle.onclick = () => mobileNav.classList.toggle('open');
      mobileNav.onclick = (e) => { if (e.target === mobileNav) mobileNav.classList.remove('open'); };
    }

    // Header actions
    const themeBtn = document.getElementById('header-theme-toggle');
    if (themeBtn) themeBtn.onclick = () => { store.toggleTheme(); updateHeaderState(); };

    const searchBtn = document.getElementById('header-search-btn');
    if (searchBtn) searchBtn.onclick = openSearchModal;

    const cartBtn = document.getElementById('header-cart-btn');
    if (cartBtn) cartBtn.onclick = openCartDrawer;

    const drawerBackdrop = document.getElementById('cart-drawer');
    if (drawerBackdrop) {
      drawerBackdrop.onclick = (e) => { if (e.target === drawerBackdrop) closeCartDrawer(); };
    }

    // Listen to route changes
    window.addEventListener('hashchange', renderApp);

    // Listen to store updates
    store.subscribe('*', () => {
      updateHeaderState();
      renderCartDrawer();
    });

    // First render
    renderApp();
  }

  // Export public methods to window.KNG_APP
  window.KNG_APP = {
    init,
    renderApp,
    quickAddToCart,
    toggleWishlistProduct,
    toggleCompareProduct,
    updateShopFilter,
    switchTestimonial,
    switchPdpImage,
    changePdpQty,
    addPdpToCart,
    submitProductReview,
    shareProduct,
    openImageZoom,
    openCartDrawer,
    closeCartDrawer,
    lookupPinCode,
    applyCheckoutCoupon,
    processCheckout,
    confirmRazorpayPayment,
    removeFromWishlist,
    copyCoupon,
    submitContactForm,
    updateProfile,
    logoutUser,
    openAddAddressModal,
    openAddProductModal,
    editProductModal,
    openSearchModal,
    onGlobalSearch,
  };

  // Launch on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
