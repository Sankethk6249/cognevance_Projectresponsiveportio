/* ==========================================================
   Portfolio behaviour
   - mobile menu, active link highlight, scroll animations
   - contact form validation + POST to the backend API
   ========================================================== */

// ----- CONFIG: change the production URL after you deploy the backend on Render -----
const API_BASE = ["localhost", "127.0.0.1"].includes(window.location.hostname)
  ? "http://localhost:5000"
  : "https://YOUR-BACKEND-NAME.onrender.com";

document.documentElement.classList.add("js");

// ----- Footer year -----
document.getElementById("year").textContent = new Date().getFullYear();

// ----- Mobile menu -----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
