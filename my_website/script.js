// AOS initialization
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Typed.js initialization
const typed = new Typed("#typed-output", {
  strings: ["Nishen Madawa", "Cybersecurity Expert", "Ethical Hacker", "Security Consultant"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
  backDelay: 2000
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu if open
      document.getElementById('nav-menu').classList.remove('active');
    }
  });
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
mobileMenuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Show success message
  alert(`Thank you ${data.name}! I've received your message and will get back to you soon at ${data.email}.`);
  
  // Reset form
  e.target.reset();
});

// Theme toggle with persistence
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
body.className = `${savedTheme}-theme`;
updateThemeIcon(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-theme');
  const newTheme = isDark ? 'light' : 'dark';
  
  body.className = `${newTheme}-theme`;
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Add scroll animation to header
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});