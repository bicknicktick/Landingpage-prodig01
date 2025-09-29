document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const catalogButton = document.getElementById("catalog-button");
  const mainProductLink = document.querySelector('.product-card[data-product-key="youtube-analyzer"] .product-checkout');
  const checkoutButtons = document.querySelectorAll(".product-checkout");
  const config = window.prodigitalConfig || { checkoutUrls: {} };
  
  // Language switcher
  const langButtons = document.querySelectorAll(".lang-btn");
  
  if (catalogButton) {
    catalogButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (mainProductLink && mainProductLink.href && mainProductLink.href !== "#") {
        window.open(mainProductLink.href, "_blank", "noopener");
      } else {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  
  checkoutButtons.forEach((button) => {
    const key = button.getAttribute("data-checkout-key");
    const targetUrl = key ? config.checkoutUrls[key] : null;

    if (targetUrl) {
      button.setAttribute("href", targetUrl);
      button.setAttribute("target", "_blank");
    } else {
      button.classList.add("disabled");
      button.setAttribute("aria-disabled", "true");
      button.addEventListener("click", (event) => {
        event.preventDefault();
      });
    }
  });

  // Language switcher functionality
  const localizedElements = () => document.querySelectorAll('[lang]:not(html)');

  function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    
    // Hide all language elements first (skip <html>)
    localizedElements().forEach(el => {
      el.style.display = "none";
    });
    
    // Show elements for current language
    document.querySelectorAll(`[lang="${lang}"]:not(html)`).forEach(el => {
      el.style.display = "";
    });
    
    // Store preference
    localStorage.setItem("preferred-language", lang);
  }
  
  // Initialize language switcher
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      switchLanguage(btn.dataset.lang);
    });
  });
  
  // Load saved language preference or default to English
  const savedLang = localStorage.getItem("preferred-language") || "en";
  switchLanguage(savedLang);

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  } else {
    document.addEventListener("lucide-loaded", () => {
      window.lucide.createIcons();
    });
  }
});
