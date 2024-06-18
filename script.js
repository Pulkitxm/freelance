const navLogo = document.querySelector("#logo");
const parallaxElements = document.querySelectorAll(".parallax-bg");
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

window.addEventListener("scroll", function () {
  parallaxElements.forEach(function (element) {
    let scrollPosition = window.pageYOffset;
    element.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  });
});

navLogo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
