// ============================================
// TAX HOME KENYA - MAIN JAVASCRIPT
// ============================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards and elements
  document.querySelectorAll('.service-card, .why-card, .blog-card, .resource-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Active navigation link
  updateActiveNavLink();
  window.addEventListener('scroll', updateActiveNavLink);
});

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section, .hero');
  const navLinks = document.querySelectorAll('nav a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// WhatsApp Button - Opens WhatsApp chat with pre-filled message
function openWhatsApp() {
  const phoneNumber = '254725416982';
  const message = encodeURIComponent('Hello Tax Home Kenya, I would like to inquire about your services.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Call Button - Initiates phone call
function callUs() {
  window.location.href = 'tel:+254725416982';
}

// Download Resource - Downloads PDF files
function downloadResource(filename) {
  const link = document.createElement('a');
  link.href = `../resources/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Scroll to top button
window.addEventListener('scroll', function() {
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Ensure all links are properly functional
document.addEventListener('DOMContentLoaded', function() {
  // Make sure all navigation links work
  const navItems = document.querySelectorAll('nav a');
  navItems.forEach(item => {
    item.style.cursor = 'pointer';
  });

  // Ensure blog post links navigate correctly
  const blogPostLinks = document.querySelectorAll('.read-more');
  blogPostLinks.forEach(link => {
    if (link.href) {
      link.style.cursor = 'pointer';
    }
  });

  // Ensure download buttons work
  const downloadButtons = document.querySelectorAll('.download-btn');
  downloadButtons.forEach(button => {
    button.style.cursor = 'pointer';
    // Ensure href is set for downloads
    if (!button.href || button.href === '#') {
      // Extract filename from button text or data attribute if needed
      const filename = button.getAttribute('data-file') || button.href;
      if (filename && filename !== '#') {
        button.href = filename;
      }
    }
  });

  // Ensure contact links work
  const contactLinks = document.querySelectorAll('.contact-item a');
  contactLinks.forEach(link => {
    link.style.cursor = 'pointer';
  });

  // Ensure WhatsApp button works
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.style.cursor = 'pointer';
    whatsappBtn.addEventListener('click', function(e) {
      if (this.href === 'javascript:openWhatsApp()' || !this.href.includes('wa.me')) {
        e.preventDefault();
        openWhatsApp();
      }
    });
  }
});
