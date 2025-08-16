const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const logo = document.getElementById("logo");
const mainImg = document.getElementById("main-img");

let isDark = false;


function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}


toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  body.classList.toggle("dark-mode");

  // Change moon/sun icon
  toggleBtn.src = isDark ? "icons/Sun.png" : "icons/Moon.png";
  toggleBtn.alt = isDark ? "mode sombre" : "mode clair";

  // Switch logo + main image
  logo.src = isDark ? "Accueil mode sombre.png" : "Accueil mode clair.png";
  mainImg.src = isDark ? "image-sombre.png" : "image-claire.png";
});
