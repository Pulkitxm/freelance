import "https://unpkg.com/lenis@1.1.3/dist/lenis.min.js"

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)