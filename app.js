// Product Catalog (11 curated items per category with exact, verified images and INR prices)
const products = [
  // ==========================================
  // 1. GROCERIES (11 items)
  // ==========================================
  {
    id: 1,
    name: 'Fresh Red Apples (1kg)',
    category: 'groceries',
    price: 180,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80'
  },
  {
    id: 2,
    name: 'Fresh Cavendish Bananas (1 Dozen)',
    category: 'groceries',
    price: 60,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80'
  },
  {
    id: 3,
    name: 'Organic Sliced Bread Loaf',
    category: 'groceries',
    price: 45,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80'
  },
  {
    id: 4,
    name: 'Whole Milk (1 Litre)',
    category: 'groceries',
    price: 68,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80'
  },
  {
    id: 5,
    name: 'Farm Fresh Brown Eggs (12pk)',
    category: 'groceries',
    price: 95,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&q=80'
  },
  {
    id: 6,
    name: 'Extra Virgin Olive Oil (500ml)',
    category: 'groceries',
    price: 650,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80'
  },
  {
    id: 7,
    name: 'Roasted Almonds (500g)',
    category: 'groceries',
    price: 480,
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&q=80'
  },
  {
    id: 8,
    name: 'Fresh Green Broccoli (500g)',
    category: 'groceries',
    price: 85,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&q=80'
  },
  {
    id: 9,
    name: 'Ripe Hass Avocados (Pack of 3)',
    category: 'groceries',
    price: 240,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&q=80'
  },
  {
    id: 10,
    name: 'Ground Arabica Coffee (250g)',
    category: 'groceries',
    price: 390,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80'
  },
  {
    id: 11,
    name: 'Organic Pure Honey Jar (350g)',
    category: 'groceries',
    price: 280,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80'
  },

  // ==========================================
  // 2. MOBILES & ACCESSORIES (11 items)
  // ==========================================
  {
    id: 12,
    name: 'Apple iPhone 15 Pro (128GB)',
    category: 'mobiles',
    price: 124999,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80'
  },
  {
    id: 13,
    name: 'Samsung Galaxy S24 Ultra 5G',
    category: 'mobiles',
    price: 129999,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80'
  },
  {
    id: 14,
    name: 'Google Pixel 8 Pro',
    category: 'mobiles',
    price: 84999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80'
  },
  {
    id: 15,
    name: 'Wireless AirPods Pro 2',
    category: 'mobiles',
    price: 24900,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80'
  },
  {
    id: 16,
    name: 'Fast MagSafe Wireless Charger',
    category: 'mobiles',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=80'
  },
  {
    id: 17,
    name: 'Clear Silicone Phone Case',
    category: 'mobiles',
    price: 499,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80'
  },
  {
    id: 18,
    name: '20,000mAh Fast Power Bank',
    category: 'mobiles',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80'
  },
  {
    id: 19,
    name: 'Braided 60W USB-C Cable (2m)',
    category: 'mobiles',
    price: 599,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80'
  },
  {
    id: 20,
    name: 'Adjustable Phone Desk Stand',
    category: 'mobiles',
    price: 799,
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&q=80'
  },
  {
    id: 21,
    name: 'Tempered Glass Screen Protector',
    category: 'mobiles',
    price: 299,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80'
  },
  {
    id: 22,
    name: 'Universal Car Vent Phone Mount',
    category: 'mobiles',
    price: 899,
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&q=80'
  },

  // ==========================================
  // 3. BOOKS (11 items)
  // ==========================================
  {
    id: 23,
    name: 'Atomic Habits by James Clear',
    category: 'books',
    price: 499,
    image: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg'
  },
  {
    id: 24,
    name: 'The Psychology of Money',
    category: 'books',
    price: 399,
    image: 'https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg'
  },
  {
    id: 25,
    name: 'Clean Code: Handbook of Craftsmanship',
    category: 'books',
    price: 899,
    image: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg'
  },
  {
    id: 26,
    name: 'Deep Work by Cal Newport',
    category: 'books',
    price: 450,
    image: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg'
  },
  {
    id: 27,
    name: 'Rich Dad Poor Dad by Robert Kiyosaki',
    category: 'books',
    price: 350,
    image: 'https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg'
  },
  {
    id: 28,
    name: 'Thinking, Fast and Slow by Daniel Kahneman',
    category: 'books',
    price: 520,
    image: 'https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg'
  },
  {
    id: 29,
    name: 'The Alchemist by Paulo Coelho',
    category: 'books',
    price: 299,
    image: 'https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg'
  },
  {
    id: 30,
    name: 'Sapiens: A Brief History of Humankind',
    category: 'books',
    price: 599,
    image: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg'
  },
  {
    id: 31,
    name: '1984 by George Orwell',
    category: 'books',
    price: 249,
    image: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg'
  },
  {
    id: 32,
    name: 'The Great Gatsby by F. Scott Fitzgerald',
    category: 'books',
    price: 199,
    image: 'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg'
  },
  {
    id: 33,
    name: 'Steve Jobs Biography by Walter Isaacson',
    category: 'books',
    price: 699,
    image: 'https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg'
  },

  // ==========================================
  // 4. MEN (11 items)
  // ==========================================
  {
    id: 34,
    name: "Men's Classic Slim Fit White Shirt",
    category: 'men',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80'
  },
  {
    id: 35,
    name: "Men's Casual Black Crewneck T-Shirt",
    category: 'men',
    price: 699,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80'
  },
  {
    id: 36,
    name: "Men's Classic Denim Blue Jeans",
    category: 'men',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80'
  },
  {
    id: 37,
    name: "Men's Warm Fleece Pullover Hoodie",
    category: 'men',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80'
  },
  {
    id: 38,
    name: "Men's Vintage Leather Biker Jacket",
    category: 'men',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80'
  },
  {
    id: 39,
    name: "Men's Tailored Navy Blue Suit Blazer",
    category: 'men',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80'
  },
  {
    id: 40,
    name: "Men's Khaki Stretch Chino Pants",
    category: 'men',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80'
  },
  {
    id: 41,
    name: "Men's Genuine Brown Leather Belt",
    category: 'men',
    price: 799,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80'
  },
  {
    id: 42,
    name: "Men's Classic White Leather Sneakers",
    category: 'men',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80'
  },
  {
    id: 43,
    name: "Men's Athletic Gym Workout Shorts",
    category: 'men',
    price: 649,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80'
  },
  {
    id: 44,
    name: "Men's Soft Wool Winter Scarf",
    category: 'men',
    price: 599,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&q=80'
  },

  // ==========================================
  // 5. WOMEN (11 items)
  // ==========================================
  {
    id: 45,
    name: "Women's Floral Summer Maxi Dress",
    category: 'women',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80'
  },
  {
    id: 46,
    name: "Women's Elegant Black Evening Dress",
    category: 'women',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80'
  },
  {
    id: 47,
    name: "Women's Oversized Knit Cream Sweater",
    category: 'women',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80'
  },
  {
    id: 48,
    name: "Women's High-Rise Blue Skinny Jeans",
    category: 'women',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80'
  },
  {
    id: 49,
    name: "Women's Classic Denim Jacket",
    category: 'women',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80'
  },
  {
    id: 50,
    name: "Women's Silk Satin Button Blouse",
    category: 'women',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=500&q=80'
  },
  {
    id: 51,
    name: "Women's High-Waist Pleated Midi Skirt",
    category: 'women',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80'
  },
  {
    id: 52,
    name: "Women's Leather Shoulder Tote Bag",
    category: 'women',
    price: 2899,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80'
  },
  {
    id: 53,
    name: "Women's Casual Canvas Slip-on Shoes",
    category: 'women',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80'
  },
  {
    id: 54,
    name: "Women's Wool Felt Fedora Hat",
    category: 'women',
    price: 899,
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=500&q=80'
  },
  {
    id: 55,
    name: "Women's High Waist Yoga Leggings",
    category: 'women',
    price: 999,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80'
  },

  // ==========================================
  // 6. KIDS (11 items)
  // ==========================================
  {
    id: 56,
    name: "Kids Dinosaur Graphic Cotton T-Shirt",
    category: 'kids',
    price: 449,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80'
  },
  {
    id: 57,
    name: "Girls Pink Tulle Party Dress",
    category: 'kids',
    price: 999,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80'
  },
  {
    id: 58,
    name: "Boys Denim Overalls Dungarees",
    category: 'kids',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500&q=80'
  },
  {
    id: 59,
    name: "Kids Lightweight Hooded Puffer Jacket",
    category: 'kids',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&q=80'
  },
  {
    id: 60,
    name: "Kids Colorful Velcro Sport Sneakers",
    category: 'kids',
    price: 1249,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&q=80'
  },
  {
    id: 61,
    name: "Soft Cotton Animal Print Baby Onesie",
    category: 'kids',
    price: 599,
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&q=80'
  },
  {
    id: 62,
    name: "Kids Plush Cartoon School Backpack",
    category: 'kids',
    price: 799,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'
  },
  {
    id: 63,
    name: "Kids Warm Knit Beanie & Mitten Set",
    category: 'kids',
    price: 499,
    image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=500&q=80'
  },
  {
    id: 64,
    name: "Kids Soft Cotton Pajama Set",
    category: 'kids',
    price: 699,
    image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500&q=80'
  },
  {
    id: 65,
    name: "Kids Waterproof Yellow Rain Jacket",
    category: 'kids',
    price: 899,
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=500&q=80'
  },
  {
    id: 66,
    name: "Kids Soft Fleece Jogger Pants",
    category: 'kids',
    price: 649,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80'
  },

  // ==========================================
  // 7. WATCHES (11 items)
  // ==========================================
  {
    id: 67,
    name: 'Classic Brown Leather Analog Watch',
    category: 'watches',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80'
  },
  {
    id: 68,
    name: 'Luxury Stainless Steel Chronograph Watch',
    category: 'watches',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80'
  },
  {
    id: 69,
    name: 'Matte Black Digital Sports Watch',
    category: 'watches',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80'
  },
  {
    id: 70,
    name: "Women's Rose Gold Minimalist Watch",
    category: 'watches',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500&q=80'
  },
  {
    id: 71,
    name: 'Smart Fitness Tracker Wristband',
    category: 'watches',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80'
  },
  {
    id: 72,
    name: 'Aviation Pilot Automatic Dial Watch',
    category: 'watches',
    price: 7499,
    image:"./images/aviator-watch.png"  },
  {
    id: 73,
    name: 'Minimalist Black Dial Mesh Watch',
    category: 'watches',
    price: 2699,
    image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?w=500&q=80'
  },
  {
    id: 74,
    name: 'Vintage Gold Tone Pocket Watch',
    category: 'watches',
    price: 1899,
    image: 'https://genuinegorgeous.com/cdn/shop/files/811.png?v=1789215866&width=1000'
  },
  {
    id: 75,
    name: 'Rugged Waterproof Outdoor Watch',
    category: 'watches',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&q=80'
  },
  {
    id: 76,
    name: 'Modern Silver Quartz Unisex Watch',
    category: 'watches',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=500&q=80'
  },
  {
    id: 77,
    name: 'Silicone Band Sports Chrono Watch',
    category: 'watches',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80'
  }
];

let cart = [];
let currentCategory = 'all';

// Render Products
function renderProducts(items) {
  const grid = document.getElementById('productGrid');
  if (items.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#64748b; padding:40px 0;">No products found in this category.</p>';
    return;
  }
  grid.innerHTML = items.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80'">
      <h3>${p.name}</h3>
      <div class="price">₹${p.price.toLocaleString('en-IN')}</div>
      <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

// Filter by Category & Search
function filterProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = products.filter(p => {
    const matchesCat = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });
  renderProducts(filtered);
}

function setCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProducts();
}

// Cart Operations
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCart();
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

  const container = document.getElementById('cartItems');
  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#64748b; padding:20px 0;">Cart is empty.</p>';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>₹${item.price.toLocaleString('en-IN')} x ${item.qty}</span>
      </div>
      <div class="qty-controls">
        <button onclick="changeQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

function toggleCart() {
  document.getElementById('cartModal').classList.toggle('active');
}

function checkout() {
  if (cart.length === 0) return alert('Your cart is empty!');
  alert(`Thank you for your purchase from Sukuna Store!\nTotal: ₹${cart.reduce((s, i) => s + i.price * i.qty, 0).toLocaleString('en-IN')}`);
  cart = [];
  updateCart();
  toggleCart();
}

// Initial render
renderProducts(products);
