const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
    }
);

const toBeAnimated = document.querySelectorAll('.animate-on-scroll');
toBeAnimated.forEach((element) => {
    observer.observe(element);
});