// 1. PRODUCT CATALOG DATA (Exact 8 Delihut Pottery pieces)
    const products = [
      {
        id: 1,
        name: "Terracotta Dinnerware Set",
        category: "Dinnerware",
        price: 145.00,
        originalPrice: 170.00,
        sale: true,
        image: "assets/image2.jpeg",
        dimensions: "12-Piece Set • 10.5\" Dinner & 8\" Salad Plates",
        glaze: "Raw Terracotta & Matte Linen Glaze",
        description: "Wheel-thrown from iron-rich river clay and finished with a satin food-safe mineral glaze. Designed to bring tactile warmth to everyday dining."
      },
      {
        id: 2,
        name: "Artisan Serving Platter",
        category: "Dinnerware",
        price: 45.00,
        originalPrice: null,
        sale: false,
        image: "assets/Image1.jpeg",
        dimensions: "14\" Diameter × 1.5\" Rim",
        glaze: "Charcoal Slate & Speckled Ash",
        description: "A generously proportioned centerpiece platter with organically raised edges, ideal for artisanal breads, roasted seasonal vegetables, or shared feasts."
      },
      {
        id: 3,
        name: "Crimson Clay Bud Vase",
        category: "Vases",
        price: 100.00,
        originalPrice: null,
        sale: false,
        image: "assets/image9.jpeg",
        dimensions: "8.5\" Height × 5.2\" Width",
        glaze: "Burnished Terracotta Crimson",
        description: "Hand-burnished red clay vessel fired at high temperatures for watertight durability. Holds dried botanicals or fresh single stems effortlessly."
      },
      {
        id: 4,
        name: "Canister with Wooden Lid",
        category: "Dinnerware",
        price: 45.00,
        originalPrice: 60.00,
        sale: true,
        image: "assets/image6.jpeg",
        dimensions: "6.5\" Height • 900ml Capacity",
        glaze: "Sage Celadon & Turned Teak Lid",
        description: "Airtight silicone-sealed sustainable teak lid paired with a ribbed sage ceramic jar—crafted to keep loose-leaf tea, coffee beans, or spices fresh."
      },
      {
        id: 5,
        name: "Nordic Stoneware Duo",
        category: "Mugs",
        price: 85.00,
        originalPrice: null,
        sale: false,
        image: "assets/image5.jpeg",
        dimensions: "Set of 2 Mugs • 12 oz each",
        glaze: "Oatmeal Speckle & Deep Teal Rim",
        description: "Ergonomically balanced morning coffee mugs featuring subtle thumb-rest handles and toasted clay bases that retain warmth longer."
      },
      {
        id: 6,
        name: "Sculpted Neck Vase",
        category: "Vases",
        price: 325.00,
        originalPrice: null,
        sale: false,
        image: "assets/image8.jpeg",
        dimensions: "15.5\" Height × 7.8\" Width",
        glaze: "Bespoke Two-Tone Obsidian & Ivory",
        description: "Our signature gallery statement piece. Hand-coiled and carved over four days to create sweeping architectural silhouettes."
      },
      {
        id: 7,
        name: "Ribbed Ripple Vase",
        category: "Vases",
        price: 245.00,
        originalPrice: 270.00,
        sale: true,
        image: "assets/image4.jpeg",
        dimensions: "13\" Height × 8\" Width",
        glaze: "Seafoam Mist & Raw Sand Base",
        description: "Inspired by tidal sandbars, this fluted stoneware vase catches natural daylight across its hand-carved vertical ridges."
      },
      {
        id: 8,
        name: "Minimalist Ceramic Plate",
        category: "Dinnerware",
        price: 55.00,
        originalPrice: null,
        sale: false,
        image: "assets/Image1.jpeg",
        dimensions: "9.5\" Coupe Plate",
        glaze: "Warm Chalk & Coastal Blue",
        description: "Low-profile coupe plate with a gentle upturned lip, stackable and chip-resistant for effortless everyday plating."
      }
    ];

    // 2. HERO SLIDER DATA
    const heroSlides = [
      {
        tag: "Artisan Clay Collection • 2026",
        titleLead: "Timeless Elegance In ",
        titleHighlight: "Every Space",
        subtitle: "Elevate every ritual with thoughtfully handcrafted terracotta and stoneware for everyday moments and special gatherings.",
        image: "assets/image3.jpeg",
        callout: "Handcrafted Terracotta Vase",
        caption: "Delihut Signature Collection",
        counter: "(01/03)"
      },
      {
        tag: "Small-Batch Tableware",
        titleLead: "Earthy Warmth For ",
        titleHighlight: "Modern Tables",
        subtitle: "Discover wheel-thrown dinnerware and mineral-glazed platters designed to turn daily meals into grounded rituals.",
        image: "assets/image2.jpeg",
        callout: "Terracotta Dinnerware Set",
        caption: "Artisan Dining Series",
        counter: "(02/03)"
      },
      {
        tag: "Gallery Sculptural Edition",
        titleLead: "Organic Forms Shaped ",
        titleHighlight: "By Hand",
        subtitle: "Each Delihut silhouette is slow-dried and kiln-fired in small batches, celebrating the raw beauty of natural clay.",
        image: "assets/image9.jpeg",
        callout: "Sculpted Neck Amphora",
        caption: "Master Potter Reserve",
        counter: "(03/03)"
      }
    ];

    // 3. TESTIMONIALS DATA
    const testimonials = [
      {
        id: 0,
        name: "Ananya Sharma",
        role: "Interior Architect",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        quote: "Delihut Pottery has completely transformed how I style residential dining spaces. Every terracotta amphora and stoneware plate carries subtle wheel-thrown character, rich mineral glaze depth, and arrived impeccably cushioned in zero-plastic packaging."
      },
      {
        id: 1,
        name: "Rafiqul Hasan",
        role: "Culinary Director",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        quote: "We use Delihut's stoneware platters and coupe plates for our tasting dinners. The heat retention is remarkable, and the matte mineral glazes frame vibrant seasonal dishes without ever distracting from the food."
      },
      {
        id: 2,
        name: "Meera Chowdhury",
        role: "Ceramic Collector",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        quote: "The Ribbed Ripple Vase sits on my sunlit console table and looks like a museum sculpture. You can genuinely feel the potter's thumbprints along the base—it brings soul into a minimalist apartment."
      },
      {
        id: 3,
        name: "Daniel Lindqvist",
        role: "Home Stylist",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        quote: "Ordered the Nordic Stoneware Duo and Wooden Lid Canister as housewarming gifts. Both pieces feel substantial, balanced in the hand, and timeless enough to pass down for decades."
      }
    ];

    // 4. STATE
    let currentSlide = 0;
    let activeCategory = "All";
    let searchQuery = "";
    let activeTestimonial = 0;
    let cart = [
      { id: 1, qty: 1 },
      { id: 2, qty: 1 }
    ];

    // 5. TOAST HELPER
    function showToast(message) {
      const container = document.getElementById("toast-container");
      const toast = document.createElement("div");
      toast.className = "pointer-events-auto flex items-center gap-2.5 bg-charcoal text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-white/10 animate-fade-up";
      toast.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-tealBrand"></span>
        <span>${message}</span>
      `;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(8px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
      }, 2800);
    }

    // 6. RENDER PRODUCTS
    function renderProducts() {
      const grid = document.getElementById("product-grid");
      const emptyMsg = document.getElementById("no-products-msg");

      const filtered = products.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.glaze.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = "";
        emptyMsg.classList.remove("hidden");
        return;
      }

      emptyMsg.classList.add("hidden");
      grid.innerHTML = filtered.map(product => `
        <article class="group flex flex-col animate-fade-up">
          <!-- Rounded Squircle Image Frame -->
          <div class="relative rounded-[22px] overflow-hidden bg-[#F4F7F6] aspect-square mb-4 shadow-card">
            ${product.sale ? `<div class="sale-ribbon">SALE</div>` : ""}

            <img
              src="${product.image}"
              onerror="this.src='https://placehold.co/600x600/EDF2F1/005A5B?text=${encodeURIComponent(product.name)}'"
              alt="${product.name}"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onclick="openQuickView(${product.id})"
            />

            <!-- Quick View Eye Button -->
            <button
              onclick="openQuickView(${product.id})"
              aria-label="Quick View ${product.name}"
              class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-charcoal hover:bg-tealBrand hover:text-white flex items-center justify-center shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>

            <!-- Hover Quick Add to Cart Bar -->
            <div class="absolute inset-x-3 bottom-3 opacity-100 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300">
              <button
                onclick="addToCart(${product.id})"
                class="w-full py-2.5 px-4 rounded-xl bg-white/95 hover:bg-tealBrand text-charcoal hover:text-white font-bold text-xs tracking-wide shadow-md backdrop-blur-xs transition-colors flex items-center justify-center gap-2"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>Quick Add to Cart</span>
              </button>
            </div>
          </div>

          <!-- Product Title & Pricing -->
          <div class="px-1">
            <h3
              onclick="openQuickView(${product.id})"
              class="text-[15px] font-bold text-charcoal hover:text-tealBrand cursor-pointer transition-colors"
            >
              ${product.name}
            </h3>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm font-bold text-tealBrand">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<span class="text-xs text-mutedGray line-through">$${product.originalPrice.toFixed(2)}</span>` : ""}
            </div>
          </div>
        </article>
      `).join("");
    }

    // 7. HERO SLIDER LOGIC
    function updateHeroSlide(index) {
      currentSlide = (index + heroSlides.length) % heroSlides.length;
      const slide = heroSlides[currentSlide];

      document.getElementById("hero-tag").textContent = slide.tag;
      document.getElementById("hero-title").innerHTML = `${slide.titleLead}<span class="text-tealBrand block sm:inline">${slide.titleHighlight}</span>`;
      document.getElementById("hero-subtitle").textContent = slide.subtitle;
      document.getElementById("hero-image").src = slide.image;
      document.getElementById("hero-callout").textContent = slide.callout;
      document.getElementById("hero-caption").textContent = slide.caption;
      document.getElementById("hero-counter").textContent = slide.counter;

      document.querySelectorAll(".hero-dot").forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.className = "hero-dot w-6 h-1.5 rounded-full bg-tealBrand transition-all";
        } else {
          dot.className = "hero-dot w-2 h-1.5 rounded-full bg-tealBrand/30 hover:bg-tealBrand/60 transition-all";
        }
      });
    }

    // 8. TESTIMONIALS LOGIC
    function renderTestimonials() {
      const container = document.getElementById("testimonial-avatars");
      const quoteEl = document.getElementById("testimonial-quote");
      const current = testimonials[activeTestimonial];

      quoteEl.style.opacity = "0";
      setTimeout(() => {
        quoteEl.textContent = `"${current.quote}"`;
        quoteEl.style.opacity = "1";
      }, 150);

      container.innerHTML = testimonials.map((item, index) => {
        const isActive = index === activeTestimonial;
        if (isActive) {
          return `
            <button
              onclick="selectTestimonial(${index})"
              class="flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-tealBrand text-white shadow-md transition-all duration-300"
            >
              <img src="${item.avatar}" onerror="this.src='https://placehold.co/80x80/005A5B/FFFFFF?text=${item.name[0]}'" alt="${item.name}" class="w-9 h-9 rounded-full object-cover border-2 border-white/80" />
              <div class="text-left">
                <p class="text-xs font-bold leading-tight">${item.name}</p>
                <p class="text-[10px] text-white/80 leading-tight">${item.role}</p>
              </div>
            </button>
          `;
        }
        return `
          <button
            onclick="selectTestimonial(${index})"
            aria-label="Read review by ${item.name}"
            class="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs opacity-75 hover:opacity-100 hover:scale-105 transition-all"
          >
            <img src="${item.avatar}" onerror="this.src='https://placehold.co/80x80/EDF2F1/005A5B?text=${item.name[0]}'" alt="${item.name}" class="w-full h-full object-cover" />
          </button>
        `;
      }).join("");
    }

    window.selectTestimonial = function(index) {
      activeTestimonial = index;
      renderTestimonials();
    };

    // 9. SHOPPING CART LOGIC
    function updateCartUI() {
      const badge = document.getElementById("cart-badge");
      const drawerCount = document.getElementById("cart-drawer-count");
      const itemsContainer = document.getElementById("cart-items-container");
      const subtotalEl = document.getElementById("cart-subtotal");

      const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
      badge.textContent = totalItems;
      drawerCount.textContent = `${totalItems} ${totalItems === 1 ? "item" : "items"}`;

      if (cart.length === 0) {
        itemsContainer.innerHTML = `
          <div class="py-16 text-center space-y-3">
            <p class="text-sm font-bold text-charcoal">Your Delihut bag is empty</p>
            <p class="text-xs text-mutedGray">Explore our handcrafted terracotta vases and stoneware sets.</p>
          </div>
        `;
        subtotalEl.textContent = "$0.00";
        return;
      }

      let subtotal = 0;
      itemsContainer.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return "";
        subtotal += product.price * item.qty;
        return `
          <div class="py-4 flex items-center gap-4">
            <img src="${product.image}" onerror="this.src='https://placehold.co/120x120/EDF2F1/005A5B?text=Pottery'" alt="${product.name}" class="w-16 h-16 rounded-xl object-cover bg-sageHero shrink-0" />
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-bold text-charcoal truncate">${product.name}</h4>
              <p class="text-xs text-tealBrand font-bold mt-0.5">$${product.price.toFixed(2)}</p>
              <div class="flex items-center gap-2 mt-2">
                <button onclick="changeCartQty(${product.id}, -1)" class="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold hover:border-tealBrand">-</button>
                <span class="text-xs font-bold w-5 text-center">${item.qty}</span>
                <button onclick="changeCartQty(${product.id}, 1)" class="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold hover:border-tealBrand">+</button>
              </div>
            </div>
            <button onclick="removeFromCart(${product.id})" aria-label="Remove item" class="text-xs text-mutedGray hover:text-saleRed p-1">
              Remove
            </button>
          </div>
        `;
      }).join("");

      subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }

    window.addToCart = function(productId) {
      const existing = cart.find(item => item.id === productId);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id: productId, qty: 1 });
      }
      const product = products.find(p => p.id === productId);
      updateCartUI();
      showToast(`Added "${product.name}" to your bag`);
    };

    window.changeCartQty = function(productId, delta) {
      const item = cart.find(i => i.id === productId);
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
      }
      updateCartUI();
    };

    window.removeFromCart = function(productId) {
      cart = cart.filter(i => i.id !== productId);
      updateCartUI();
    };

    // Cart Drawer Open / Close
    const cartOverlay = document.getElementById("cart-overlay");
    const cartDrawer = document.getElementById("cart-drawer");

    function openCart() {
      cartOverlay.classList.remove("hidden");
      requestAnimationFrame(() => {
        cartOverlay.classList.remove("opacity-0");
        cartDrawer.classList.remove("translate-x-full");
      });
    }

    function closeCart() {
      cartOverlay.classList.add("opacity-0");
      cartDrawer.classList.add("translate-x-full");
      setTimeout(() => cartOverlay.classList.add("hidden"), 300);
    }

    // 10. QUICK VIEW MODAL
    const quickViewModal = document.getElementById("quickview-modal");
    window.openQuickView = function(productId) {
      const p = products.find(item => item.id === productId);
      if (!p) return;

      document.getElementById("quickview-content").innerHTML = `
        <div class="relative bg-sageHero aspect-square md:aspect-auto">
          ${p.sale ? `<div class="sale-ribbon">SALE</div>` : ""}
          <img src="${p.image}" onerror="this.src='https://placehold.co/600x600/EDF2F1/005A5B?text=${encodeURIComponent(p.name)}'" alt="${p.name}" class="w-full h-full object-cover" />
        </div>
        <div class="p-6 sm:p-8 flex flex-col justify-between space-y-5">
          <div class="space-y-3">
            <span class="inline-block px-3 py-1 rounded-full bg-sageHero text-tealBrand text-[11px] font-bold uppercase tracking-wider">${p.category}</span>
            <h3 class="text-2xl font-extrabold text-charcoal leading-tight">${p.name}</h3>
            <div class="flex items-center gap-2.5">
              <span class="text-xl font-extrabold text-tealBrand">$${p.price.toFixed(2)}</span>
              ${p.originalPrice ? `<span class="text-sm text-mutedGray line-through">$${p.originalPrice.toFixed(2)}</span>` : ""}
            </div>
            <p class="text-xs sm:text-sm text-mutedGray leading-relaxed pt-1">${p.description}</p>
            <div class="pt-2 space-y-1.5 text-xs border-t border-gray-100">
              <p><span class="font-bold text-charcoal">Glaze Finish:</span> <span class="text-mutedGray">${p.glaze}</span></p>
              <p><span class="font-bold text-charcoal">Dimensions:</span> <span class="text-mutedGray">${p.dimensions}</span></p>
            </div>
          </div>

          <button
            onclick="addToCart(${p.id}); closeQuickView();"
            class="w-full py-3.5 rounded-full bg-tealBrand hover:bg-tealBrand-dark text-white font-bold text-xs tracking-widest uppercase shadow-md transition-colors"
          >
            Add to Bag — $${p.price.toFixed(2)}
          </button>
        </div>
      `;
      quickViewModal.classList.remove("hidden");
      quickViewModal.classList.add("flex");
    };

    function closeQuickView() {
      quickViewModal.classList.add("hidden");
      quickViewModal.classList.remove("flex");
    }

    // 11. INITIALIZE EVENT LISTENERS
    document.addEventListener("DOMContentLoaded", () => {
      renderProducts();
      renderTestimonials();
      updateCartUI();

      // Hero Slider Controls
      document.getElementById("hero-prev").addEventListener("click", () => updateHeroSlide(currentSlide - 1));
      document.getElementById("hero-next").addEventListener("click", () => updateHeroSlide(currentSlide + 1));
      document.querySelectorAll(".hero-dot").forEach(dot => {
        dot.addEventListener("click", () => updateHeroSlide(Number(dot.dataset.slide)));
      });

      // Category Filter Tabs
      document.querySelectorAll(".filter-tab").forEach(tab => {
        tab.addEventListener("click", () => {
          activeCategory = tab.dataset.filter;
          document.querySelectorAll(".filter-tab").forEach(t => {
            t.className = "filter-tab px-4 py-2 rounded-full text-xs font-bold bg-[#F4F7F6] text-charcoal hover:bg-tealBrand/10 hover:text-tealBrand transition-all";
          });
          tab.className = "filter-tab active px-4 py-2 rounded-full text-xs font-bold bg-tealBrand text-white transition-all";
          renderProducts();
        });
      });

      // Category Highlight Cards Jump & Filter
      document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
          const targetCat = card.dataset.categoryJump;
          activeCategory = targetCat;
          document.querySelectorAll(".filter-tab").forEach(t => {
            if (t.dataset.filter === targetCat) {
              t.className = "filter-tab active px-4 py-2 rounded-full text-xs font-bold bg-tealBrand text-white transition-all";
            } else {
              t.className = "filter-tab px-4 py-2 rounded-full text-xs font-bold bg-[#F4F7F6] text-charcoal hover:bg-tealBrand/10 hover:text-tealBrand transition-all";
            }
          });
          renderProducts();
          document.getElementById("products").scrollIntoView({ behavior: "smooth" });
        });
      });

      // View All Button & Reset Filters
      document.getElementById("view-all-btn").addEventListener("click", () => {
        activeCategory = "All";
        searchQuery = "";
        document.getElementById("global-search-input").value = "";
        document.querySelectorAll(".filter-tab").forEach(t => {
          t.className = t.dataset.filter === "All"
            ? "filter-tab active px-4 py-2 rounded-full text-xs font-bold bg-tealBrand text-white transition-all"
            : "filter-tab px-4 py-2 rounded-full text-xs font-bold bg-[#F4F7F6] text-charcoal hover:bg-tealBrand/10 hover:text-tealBrand transition-all";
        });
        renderProducts();
        showToast("Showing full Delihut Pottery catalog");
      });

      document.getElementById("reset-filters-btn").addEventListener("click", () => {
        document.getElementById("view-all-btn").click();
      });

      // Search Drawer Toggle & Live Filtering
      const searchDrawer = document.getElementById("search-bar-drawer");
      const searchInput = document.getElementById("global-search-input");

      document.getElementById("search-toggle-btn").addEventListener("click", () => {
        searchDrawer.classList.toggle("hidden");
        if (!searchDrawer.classList.contains("hidden")) {
          searchInput.focus();
        }
      });

      document.getElementById("search-close-btn").addEventListener("click", () => {
        searchDrawer.classList.add("hidden");
      });

      document.getElementById("search-clear-btn").addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        renderProducts();
      });

      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderProducts();
        if (searchQuery.trim().length > 1) {
          document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });

      // Cart Drawer Events
      document.getElementById("cart-open-btn").addEventListener("click", openCart);
      document.getElementById("cart-close-btn").addEventListener("click", closeCart);
      cartOverlay.addEventListener("click", closeCart);

      document.getElementById("checkout-btn").addEventListener("click", () => {
        if (cart.length === 0) {
          showToast("Your bag is empty — add a pottery piece first!");
          return;
        }
        closeCart();
        showToast("Order summary prepared! Thank you for choosing Delihut Pottery.");
      });

      // Quick View Modal Events
      document.getElementById("quickview-close").addEventListener("click", closeQuickView);
      quickViewModal.addEventListener("click", (e) => {
        if (e.target === quickViewModal) closeQuickView();
      });

      // Instagram Shop Tiles Quick View
      document.querySelectorAll(".insta-tile").forEach(tile => {
        tile.addEventListener("click", () => {
          const prodId = Number(tile.dataset.quickProduct);
          openQuickView(prodId);
        });
      });

      // Mobile Navigation Drawer
      const mobileOverlay = document.getElementById("mobile-nav-overlay");
      const mobileDrawer = document.getElementById("mobile-nav-drawer");

      function openMobileMenu() {
        mobileOverlay.classList.remove("hidden");
        requestAnimationFrame(() => {
          mobileOverlay.classList.remove("opacity-0");
          mobileDrawer.classList.remove("translate-x-full");
        });
      }

      function closeMobileMenu() {
        mobileOverlay.classList.add("opacity-0");
        mobileDrawer.classList.add("translate-x-full");
        setTimeout(() => mobileOverlay.classList.add("hidden"), 300);
      }

      document.getElementById("mobile-menu-btn").addEventListener("click", openMobileMenu);
      document.getElementById("mobile-menu-close").addEventListener("click", closeMobileMenu);
      mobileOverlay.addEventListener("click", closeMobileMenu);
      document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", closeMobileMenu);
      });

      // Account Modal Events
      const accountModal = document.getElementById("account-modal");
      document.getElementById("account-modal-btn").addEventListener("click", () => {
        accountModal.classList.remove("hidden");
        accountModal.classList.add("flex");
      });
      document.getElementById("account-close").addEventListener("click", () => {
        accountModal.classList.add("hidden");
        accountModal.classList.remove("flex");
      });
      accountModal.addEventListener("click", (e) => {
        if (e.target === accountModal) {
          accountModal.classList.add("hidden");
          accountModal.classList.remove("flex");
        }
      });
      document.getElementById("account-form").addEventListener("submit", (e) => {
        e.preventDefault();
        accountModal.classList.add("hidden");
        accountModal.classList.remove("flex");
        showToast("Signed in to Delihut Collector Club");
      });

      // Newsletter Subscription
      document.getElementById("newsletter-form").addEventListener("submit", (e) => {
        e.preventDefault();
        e.target.reset();
        showToast("Welcome to Delihut Kiln Notes! Check your inbox for 15% off.");
      });
    });
