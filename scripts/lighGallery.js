import PhotoSwipeLightbox from "https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe-lightbox.esm.js";
const lightbox = new PhotoSwipeLightbox({
  gallery: "#my-gallery",
  children: "a",
  pswpModule: () =>
    import(
      "https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe.esm.js"
    ),
});
lightbox.init();
