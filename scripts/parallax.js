const parallaxElements = document.querySelectorAll(".parallax-bg");

window.addEventListener("scroll", function () {
  parallaxElements.forEach(function (element) {
    let scrollPosition = window.pageYOffset;
    element.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  });
});
