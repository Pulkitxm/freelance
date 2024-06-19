// import "./scroll.js";
import "./parallax.js";
import "./lighGallery.js";
import desc from "../data/desc.js";

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

// show team member
const teamMembers = document.querySelectorAll(".team-member");
const teamMemberModal = document.getElementById("show-team-member");
teamMembers.forEach((member) => {
  member.addEventListener("click", () => {
    const name = member.getAttribute("data-name");
    teamMemberModal.classList.remove("hidden");
    teamMemberModal.querySelector("img").src = member.querySelector("img").src;
    teamMemberModal.querySelector("p").textContent = desc.find(
      (d) => d.name === name
    ).desc;
  });
});

const closeModalButton = document.getElementById("close-team-member-popup");
closeModalButton.addEventListener("click", () => {
  teamMemberModal.classList.add("hidden");
});