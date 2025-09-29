# 🚀 **Prodigital Lab** — Premium Digital Product Studio

<div align="center">

![Status](https://img.shields.io/badge/Status-Production-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

*Curated digital products for marketing and business acceleration*

[🌐 **Live Demo**](https://prodigital-lab.example.com) • [📱 **Mobile Preview**](#mobile-preview) • [⚡ **Quick Start**](#quick-start)

</div>

---

## ✨ **Features**

🎨 **Material You Design** — Glass morphism cards with vertical carousel  
📱 **Mobile-First** — Optimized touch interactions and responsive layout  
🌍 **Bilingual Support** — Seamless English/Indonesian language switching  
🎯 **Product Showcase** — Interactive vertical slider with purple glow effects  
⚙️ **Easy Configuration** — Simple checkout URL management  
🔍 **SEO Ready** — Complete meta tags and structured data  

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic markup | Latest |
| **CSS3** | Glass morphism, animations | Latest |
| **JavaScript** | Carousel, interactions | ES6+ |
| **Space Grotesk** | Typography | Google Fonts |
| **Lucide** | Icon system | Latest |

## 📁 **Project Structure**

```bash
PRODIG-LANDING/
├── 📄 index.html              # Main landing page
├── 🎨 styles/
│   └── main.css              # Glass morphism + carousel styles
├── ⚡ scripts/
│   ├── config.js             # Product checkout URLs
│   ├── main.js               # Language switcher + interactions
│   ├── carousel.js           # Vertical Material You carousel
│   └── lynkTelegramWebhook.js # Telegram integration
└── 📖 README.md              # This documentation
```

## ⚡ **Quick Start**

1. **Clone & Configure**
   ```bash
   git clone <repository-url>
   cd PRODIG-LANDING
   ```

2. **Update Product URLs** in `scripts/config.js`:
   ```javascript
   window.prodigitalConfig = {
     checkoutUrls: {
       "recap-yt": "RECAP-YT.html",
       "youtube-analyzer": "http://lynk.id/your-checkout-url",
       "atm-strategist": "http://lynk.id/your-checkout-url",
       "pay-generator": "http://lynk.id/your-checkout-url"
     }
   };
   ```

3. **Deploy** to any web server or hosting platform

## 🎨 **Customization Guide**

### **Colors & Theme**
```css
:root {
  --color-bg: #0a0a0a;           /* Background */
  --color-surface: rgba(255, 255, 255, 0.08); /* Glass cards */
  --color-accent: rgba(180, 118, 255, 0.65);  /* Purple glow */
}
```

### **Product Cards**
Add new products in `index.html`:
```html
<article class="product-card" data-product-key="new-product">
  <div class="product-icon">
    <i data-lucide="icon-name"></i>
  </div>
  <!-- Product details -->
</article>
```

## 📱 **Mobile Preview**

| Feature | Mobile | Desktop |
|---------|--------|---------|
| **Carousel** | Vertical swipe | Vertical scroll + dots |
| **Cards** | 1 visible | 1 visible (centered) |
| **Navigation** | Touch gestures | Mouse drag + autoplay |
| **Glow Effect** | Purple highlight | Purple highlight |

## 🌐 **Browser Support**

✅ **Chrome** 88+  
✅ **Firefox** 85+  
✅ **Safari** 14+  
✅ **Edge** 88+  

*Requires CSS Grid, Flexbox, and ES6+ support*

## 🚀 **Performance**

- 📦 **Bundle Size**: < 50KB total
- ⚡ **Load Time**: < 2s on 3G
- 🎯 **Lighthouse**: 95+ score
- 📱 **Mobile Optimized**: Touch-first interactions

## 🔧 **Advanced Features**

### **Vertical Carousel**
- Material You design language
- Purple glow for active cards
- Touch/mouse gesture support
- Auto-play with pause on interaction

### **Language Switching**
- Instant EN/ID toggle
- Persistent user preference
- SEO-friendly implementation

### **Product Integration**
- Direct checkout links
- Telegram webhook support
- Analytics tracking ready

---

<div align="center">

### 💎 **Powered by [e.bitzy.id](https://e.bitzy.id)**

*Premium digital solutions for modern businesses*

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://e.bitzy.id)

</div>
