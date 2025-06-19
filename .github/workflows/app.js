console.log("E-Commerce Website Loaded");
// scripts/app.js

// Select the hamburger and navigation menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});

// JavaScript to activate it on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});
