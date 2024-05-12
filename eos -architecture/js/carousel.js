class Position {
    static carousel;
    position;
    constructor() {
        this.position = 0;
        this.carousel = document.querySelector('.flickity-slider');
        this.max = this.carousel.children.length;
        chnageHighlight(null, this.carousel.children[0]);
    }
    increment() {
        const a = this.position;
        if (this.position < this.max - 1) {
            this.position++;
        } else {
            this.position = 0;
        }
        chnageHighlight(this.carousel.children[a], this.carousel.children[this.position]);
    }
    decrement() {
        const a = this.position;
        if (this.position > 0) {
            this.position--;
        } else {
            this.position = this.max - 1;
        }
        chnageHighlight(this.carousel.children[a], this.carousel.children[this.position]);
    }
    setPosition(value) {
        this.position = value;
        chnageHighlight(null, this.carousel.children[this.position]);
    }
}

function chnageHighlight(a, b) {
    const isMobile= /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(!isMobile){
        if (a) {
            a.classList.remove("highlight-carousel");
        }
        b.classList.add("highlight-carousel");
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