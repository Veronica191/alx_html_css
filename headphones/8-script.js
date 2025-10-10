// 8-script.js
// JavaScript for Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});
