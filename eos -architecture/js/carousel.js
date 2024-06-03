class Position {
    static carousel;
    position;
    constructor() {
        this.position = 0;
        this.carousel = document.querySelector('.flickity-slider');
        this.max = this.carousel.children.length;
        const left = this.position - 1 < 0 ? this.max - 1 : this.position - 1;
        const right = this.position + 1 > this.max - 1 ? 0 : this.position + 1;
        changeHighlight(null, this.carousel.children[this.position], this.carousel.children[left], this.carousel.children[right]);
    }
    increment() {
        const a = this.position;
        if (this.position < this.max - 1) {
            this.position++;
        } else {
            this.position = 0;
        }
        const left = this.position - 1 < 0 ? this.max - 1 : this.position - 1;
        const right = this.position + 1 > this.max - 1 ? 0 : this.position + 1;
        changeHighlight(this.carousel.children[a], this.carousel.children[this.position], this.carousel.children[left], this.carousel.children[right]);
    }
    decrement() {
        const a = this.position;
        if (this.position > 0) {
            this.position--;
        } else {
            this.position = this.max - 1;
        }
        const left = this.position - 1 < 0 ? this.max - 1 : this.position - 1;
        const right = this.position + 1 > this.max - 1 ? 0 : this.position + 1;
        changeHighlight(this.carousel.children[a], this.carousel.children[this.position], this.carousel.children[left], this.carousel.children[right]);
    }
}

function changeHighlight(a, b, c, d) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        if (a) {
            a.classList.remove("highlight-carousel");
        }
        
        b.classList.remove("gallery-cell-left");
        b.classList.remove("gallery-cell-right");
        c && c.classList.remove("gallery-cell-left");
        c && c.classList.remove("gallery-cell-right");
        d && d.classList.remove("gallery-cell-right");
        d && d.classList.remove("gallery-cell-left");
        
        b.classList.add("highlight-carousel");
        c && c.classList.add("gallery-cell-left");
        d && d.classList.add("gallery-cell-right");
    }
}

function executeCarouselPop() {
    const position = new Position();
    const nextBtn = document.querySelectorAll('.flickity-prev-next-button')[1];
    const prevBtn = document.querySelectorAll('.flickity-prev-next-button')[0];
    nextBtn.addEventListener('click', () => {
        position.increment();
    });
    prevBtn.addEventListener('click', () => {
        position.decrement();
    });
    nextBtn.addEventListener('touchend', () => {
        position.increment();
    });
    prevBtn.addEventListener('touchend', () => {
        position.decrement();
    });
}

setTimeout(() => {
    executeCarouselPop()
}, 1);