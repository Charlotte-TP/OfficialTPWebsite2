document.addEventListener('DOMContentLoaded', () => {

  /* ===== Mobile Nav ===== */
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const dropdownButtons = document.querySelectorAll('.dropdown-toggle');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.nextElementSibling;
      dropdown.style.display =
        dropdown.style.display === 'block' ? 'none' : 'block';
    });
  });

  /* ===== Scroll Animations ===== */
  const animatables = document.querySelectorAll('.animate');

  function handleScrollAnimations() {
    animatables.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        el.classList.add('show');
      } 
    });
  }

  window.addEventListener('scroll', handleScrollAnimations);
  window.addEventListener('resize', handleScrollAnimations);
  handleScrollAnimations(); // run once on load
});


// ================================
// Simple scroll reveal animation
// ================================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  ".feature-card, .step, .why-card, .outcome-card, .testimonial-card"
).forEach(el => observer.observe(el));

// ================================
// Reveal animation styles
// ================================
const style = document.createElement("style");
style.innerHTML = `
  .feature-card,
  .step,
  .why-card,
  .outcome-card,
  .testimonial-card {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }

  .reveal {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);



// ================================
// Hero text rotator (controlled loop)
// ================================
(function () {
  const messages = [
    "Track Calls. Optimize Marketing. Increase Revenue.",
//    "Built for performance marketers, agencies & data-driven businesses",
    "Built for Performance Marketers, Agencies & Data-driven Businesses",
//    "Know Exactly Which Ads Drive Phone Calls.",
//    "Turn Conversations Into Measurable ROI."
  ];

  const DISPLAY_TIME = 4500; // ms
  const TRANSITION_TIME = 350; // ms
  const MAX_LOOPS = 3;

  const container = document.querySelector(".hero-rotator");
  if (!container) return;

  let index = 0;
  let loops = 0;

  const span = container.querySelector(".hero-text");

  function swapText() {
    // Stop after max loops
    if (loops >= MAX_LOOPS) return;

    // Fade out
    span.classList.remove("is-visible");

    setTimeout(() => {
      index++;

      if (index >= messages.length) {
        index = 0;
        loops++;
      }

      // If we just completed final loop, freeze on last message
      if (loops >= MAX_LOOPS) {
        span.textContent = messages[messages.length - 1];
        span.classList.add("is-visible");
        return;
      }

      span.textContent = messages[index];
      span.classList.add("is-visible");
    }, TRANSITION_TIME);
  }

  // Initial paint
  span.classList.add("is-visible");

  // Start rotation
  const interval = setInterval(swapText, DISPLAY_TIME);
})();

// ================================
// About text typewritter effect
// ================================
// const words = ["Enterprise-Grade Call Intelligence for Data-driven Businesses. "]
// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// const typingSpeed = 100;
// const deletingSpeed = 60;
// const delayBetweenWords = 1500;

// const typingElement = document.querySelector(".about-hero-title");

// function typeEffect() {
//   const currentWord = words[wordIndex];

//   if (!isDeleting) {
//     typingElement.textContent = currentWord.substring(0, charIndex++);
//   } else {
//     typingElement.textContent = currentWord.substring(0, charIndex--);
//   }

//   let speed = isDeleting ? deletingSpeed : typingSpeed;

//   if (charIndex <= currentWord.length) {
//     setTimeout(typeEffect, speed);
//   }
// }

// typeEffect();

const typingElement = document.querySelector(".about-hero-title");

if (typingElement) {
  const words = [
    "Enterprise-Grade Call Intelligence for Data-driven Businesses. "
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;
  const deletingSpeed = 60;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (charIndex <= currentWord.length) {
    setTimeout(typeEffect, speed);
  }
  }

  typeEffect();
}

// =====================================
// INTEGRATION GUIDE PAGE LIGHTBOX FOR IMAGES
// =====================================

  const lightboxImg = document.getElementById('lightbox-img');
    const lightbox = document.getElementById('lightbox');
  document.querySelectorAll('.integration-guide-step-images img').forEach(img => {
  img.addEventListener('click', () => {
    
    // document.getElementById('lightbox-img').src = img.src;
    // document.getElementById('lightbox').style.display = 'flex';
    if (lightboxImg && lightbox) {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    }
  });
});
if (lightbox) {
// document.getElementById('lightbox').addEventListener('click', () => {
//   document.getElementById('lightbox').style.display = 'none';
// });
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
}); 
}