// import "./scroll.js";
import "./parallax.js";
import "./lighGallery.js";

// section headers style
const sectionHeaders = document.querySelectorAll(".section-header");
sectionHeaders.forEach((header) => {
  header.style.fontFamily = "Pacifico, sans-serif";
});

function onToggleMenu(button) {
  const navbarDropdown = document.getElementById("navbar-dropdown");
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", !isExpanded);

  if (isExpanded) {
    navbarDropdown.classList.add("hidden");
  } else {
    navbarDropdown.classList.remove("hidden");
  }
}
const navbarButton = document.getElementById("navbar-toggle");
navbarButton.addEventListener("click", () => onToggleMenu(navbarButton));
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => onToggleMenu(navbarButton));
});
