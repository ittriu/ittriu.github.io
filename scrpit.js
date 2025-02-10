// Language toggle functionality
// Default is English, so English elements are visible and Russian are hidden.
// The toggle button initially reads "RU" (meaning “click to switch to Russian”).
document.getElementById('toggle-lang').addEventListener('click', function() {
  const toggleBtn = this;
  if (toggleBtn.textContent.trim() === 'RU') {
    // Switch to Russian
    toggleBtn.textContent = 'EN';
    document.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[data-lang="ru"]').forEach(el => el.style.display = '');
  } else {
    // Switch to English
    toggleBtn.textContent = 'RU';
    document.querySelectorAll('[data-lang="ru"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = '');
  }
});

// Down arrow click: scroll smoothly to the interests section
document.getElementById('down-arrow').addEventListener('click', function() {
  document.getElementById('interests').scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer: fade in interest cards on scroll
document.addEventListener('DOMContentLoaded', () => {
  const interestCards = document.querySelectorAll('.interest-card');
  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  interestCards.forEach(card => {
    observer.observe(card);
  });
});

// Initialize VANTA.GLOBE with custom colors and parameters
VANTA.GLOBE({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x20102e,  // Background color
  color: 0xff3f81,          // Primary accent color
  color2: 0xffffff          // Secondary color
});
