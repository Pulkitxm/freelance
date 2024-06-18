import "./scroll.js";
import "./parallax.js";

// nav scroll action
const navLogo = document.querySelector("#logo");
navLogo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// section headers style
const sectionHeaders = document.querySelectorAll(".section-header");
sectionHeaders.forEach((header) => {
  header.style.fontFamily = "Pacifico, sans-serif";
});