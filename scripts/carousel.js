document.addEventListener("DOMContentLoaded", () => {
  const carousel = {
    track: document.querySelector('.carousel-track'),
    dotsContainer: document.querySelector('.carousel-dots'),
    cards: document.querySelectorAll('.product-card'),
    currentIndex: 0,
    cardHeight: 0,
    visibleCards: 1,
    
    init() {
      if (!this.track || this.cards.length === 0) return;
      
      this.setupDimensions();
      this.createDots();
      this.bindEvents();
      this.updateCarousel();
      this.startAutoplay();
      
      // Handle resize
      window.addEventListener('resize', () => {
        this.setupDimensions();
        this.updateCarousel();
      });
    },
    
    setupDimensions() {
      this.visibleCards = 1; // vertical slider shows one card at a time
      const firstCard = this.cards[0];
      if (firstCard) {
        const styles = window.getComputedStyle(firstCard);
        const height = firstCard.offsetHeight;
        const marginBottom = parseFloat(styles.marginBottom) || 0;
        this.cardHeight = height + marginBottom;
      } else {
        this.cardHeight = 0;
      }

      this.cards.forEach(card => {
        card.style.minWidth = '';
        card.style.width = '100%';
      });
    },
    
    createDots() {
      if (!this.dotsContainer) return;
      
      const totalSlides = this.cards.length;
      this.dotsContainer.innerHTML = '';
      
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => this.goToSlide(i));
        this.dotsContainer.appendChild(dot);
      }
    },
    
    bindEvents() {
      // Touch/swipe support
      let startX = 0;
      let startY = 0;
      let isDragging = false;
      
      this.track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
        this.pauseAutoplay();
      });
      
      this.track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
      });
      
      this.track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diff = startX - endX;
        const verticalDiff = startY - endY;
        
        if (Math.abs(verticalDiff) > Math.abs(diff) && Math.abs(verticalDiff) > 40) {
          if (verticalDiff > 0) {
            this.nextSlide();
          } else {
            this.prevSlide();
          }
        }
        
        isDragging = false;
        this.startAutoplay();
      });
      
      // Mouse drag support
      let mouseStartX = 0;
      let mouseStartY = 0;
      let isMouseDragging = false;
      
      this.track.addEventListener('mousedown', (e) => {
        mouseStartX = e.clientX;
        mouseStartY = e.clientY;
        isMouseDragging = true;
        this.track.style.cursor = 'grabbing';
        this.pauseAutoplay();
        e.preventDefault();
      });
      
      document.addEventListener('mousemove', (e) => {
        if (!isMouseDragging) return;
        e.preventDefault();
      });
      
      document.addEventListener('mouseup', (e) => {
        if (!isMouseDragging) return;
        
        const endX = e.clientX;
        const endY = e.clientY;
        const diff = mouseStartX - endX;
        const verticalDiff = mouseStartY - endY;
        
        if (Math.abs(verticalDiff) > Math.abs(diff) && Math.abs(verticalDiff) > 40) {
          if (verticalDiff > 0) {
            this.nextSlide();
          } else {
            this.prevSlide();
          }
        }
        
        isMouseDragging = false;
        this.track.style.cursor = 'grab';
        this.startAutoplay();
      });
    },
    
    updateCarousel() {
      const maxIndex = this.cards.length - 1;
      this.currentIndex = Math.max(0, Math.min(this.currentIndex, maxIndex));
      
      const translateY = -(this.currentIndex * this.cardHeight);
      this.track.style.transform = `translateY(${translateY}px)`;
      
      // Update active card states
      this.cards.forEach((card, index) => {
        const isVisible = index === this.currentIndex;
        card.classList.toggle('active', isVisible);
      });
      
      // Update dots
      const dots = this.dotsContainer?.querySelectorAll('.carousel-dot');
      dots?.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentIndex);
      });
    },
    
    nextSlide() {
      const maxIndex = this.cards.length - 1;
      if (this.currentIndex < maxIndex) {
        this.currentIndex++;
        this.updateCarousel();
      }
    },
    
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateCarousel();
      }
    },
    
    goToSlide(index) {
      this.currentIndex = index;
      this.updateCarousel();
      this.pauseAutoplay();
      this.startAutoplay();
    },
    
    startAutoplay() {
      this.pauseAutoplay();
      this.autoplayTimer = setInterval(() => {
        const maxIndex = this.cards.length - 1;
        if (this.currentIndex >= maxIndex) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
        this.updateCarousel();
      }, 5000);
    },
    
    pauseAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    }
  };
  
  // Initialize carousel
  carousel.init();
  
  // Pause autoplay when user hovers over carousel
  const carouselContainer = document.querySelector('.product-carousel');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => carousel.pauseAutoplay());
    carouselContainer.addEventListener('mouseleave', () => carousel.startAutoplay());
  }
});
